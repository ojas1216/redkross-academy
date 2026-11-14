/**
 * On-device exam proctoring with Google MediaPipe (runs in the browser; video never
 * leaves the device). Loaded lazily, only on the exam screen.
 *
 *  - FaceLandmarker: number of faces, head direction (yaw / pitch)
 *  - ObjectDetector (EfficientDet-Lite0, COCO): "cell phone" in view
 *
 * Runtime and models are self-hosted under /vendor/mediapipe (see
 * scripts/prepare_proctor_assets.mjs).
 */
const BASE = '/vendor/mediapipe';

let loading = null;

export function loadVisionProctor() {
  if (!loading) {
    loading = (async () => {
      const vision = await import('@mediapipe/tasks-vision');
      const { FilesetResolver, FaceLandmarker, ObjectDetector } = vision;
      const fileset = await FilesetResolver.forVisionTasks(`${BASE}/wasm`);
      const make = async (factory, options) => {
        // GPU when available (fast, low CPU); fall back to CPU.
        try {
          return await factory.createFromOptions(fileset, { ...options, baseOptions: { ...options.baseOptions, delegate: 'GPU' } });
        } catch {
          return factory.createFromOptions(fileset, { ...options, baseOptions: { ...options.baseOptions, delegate: 'CPU' } });
        }
      };
      const face = await make(FaceLandmarker, {
        baseOptions: { modelAssetPath: `${BASE}/face_landmarker.task` },
        runningMode: 'VIDEO',
        numFaces: 3,
        outputFacialTransformationMatrixes: true,
        minFaceDetectionConfidence: 0.5,
        minFacePresenceConfidence: 0.5,
      });
      // The int8 object detector returns no detections on the GPU delegate (verified
      // in Chrome), so it always runs on the CPU.
      const objects = await ObjectDetector.createFromOptions(fileset, {
        baseOptions: { modelAssetPath: `${BASE}/efficientdet_lite0.tflite`, delegate: 'CPU' },
        runningMode: 'VIDEO',
        scoreThreshold: 0.35,
        maxResults: 5,
        categoryAllowlist: ['cell phone'],
      });
      return { face, objects };
    })().catch((err) => {
      loading = null; // allow a retry later
      throw err;
    });
  }
  return loading;
}

const DEG = 180 / Math.PI;

/** Head direction from the face transformation matrix (column-major 4x4). 0/0 = facing the camera. */
export function headPose(matrix) {
  const m = matrix?.data;
  if (!m || m.length < 11) return null;
  const fx = m[8];
  const fy = m[9];
  const fz = m[10];
  return {
    yaw: Math.atan2(fx, fz) * DEG,
    pitch: Math.atan2(-fy, Math.hypot(fx, fz)) * DEG,
  };
}

/** Runs the face model on the current frame. */
export function detectFaces(models, video, ts) {
  const r = models.face.detectForVideo(video, ts);
  const count = r?.faceLandmarks?.length || 0;
  const pose = count ? headPose(r.facialTransformationMatrixes?.[0]) : null;
  return { count, pose };
}

/** Runs the object model; returns the best "cell phone" score (0 when none). */
export function detectPhone(models, video, ts) {
  const r = models.objects.detectForVideo(video, ts);
  let best = 0;
  for (const d of r?.detections || []) {
    for (const c of d.categories || []) {
      if (c.categoryName === 'cell phone' && c.score > best) best = c.score;
    }
  }
  return best;
}
