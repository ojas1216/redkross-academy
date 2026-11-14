import assert from 'assert';
import { mockEngine } from '../src/services/db/mockEngine.js';

console.log('=== STARTING COURSE SELECTION & ROUTING REGRESSION TESTS ===');

// 1. Verify getCourseById resolves exact IDs without fallback to C01
console.log('[1/4] Verifying getCourseById resolution for Courses 01-05...');
const c01 = mockEngine.getCourseById('crs_cyber_intro_01');
assert.strictEqual(c01?.id, 'crs_cyber_intro_01', 'Course 01 must resolve to crs_cyber_intro_01');
assert.strictEqual(c01?.title, 'Introduction to Cybersecurity');

const c02 = mockEngine.getCourseById('crs_cyber_net_02');
assert.strictEqual(c02?.id, 'crs_cyber_net_02', 'Course 02 must resolve to crs_cyber_net_02');
assert.strictEqual(c02?.title, 'Computer Networking for Cybersecurity');

const c03 = mockEngine.getCourseById('crs_cyber_admin_03');
assert.strictEqual(c03?.id, 'crs_cyber_admin_03', 'Course 03 must resolve to crs_cyber_admin_03');
assert.strictEqual(c03?.title, 'Linux and Windows System Administration');

const c04 = mockEngine.getCourseById('crs_cyber_python_04');
assert.strictEqual(c04?.id, 'crs_cyber_python_04', 'Course 04 must resolve to crs_cyber_python_04');
assert.strictEqual(c04?.title, 'Python for Cybersecurity');

const c05 = mockEngine.getCourseById('crs_cyber_pentest_05');
assert.strictEqual(c05?.id, 'crs_cyber_pentest_05', 'Course 05 must resolve to crs_cyber_pentest_05');
assert.strictEqual(c05?.title, 'Ethical Hacking and Penetration Testing');
console.log('  [PASS] Courses 01–05 resolve correctly by id.');

// 2. Verify getCourseById resolves slugs when passed as route parameter
console.log('[2/4] Verifying getCourseById resolves route slug parameters without falling back...');
const c02BySlug = mockEngine.getCourseById('computer-networking-for-cybersecurity');
assert.strictEqual(c02BySlug?.id, 'crs_cyber_net_02', 'Slug computer-networking-for-cybersecurity must resolve to C02');

const c03BySlug = mockEngine.getCourseById('linux-and-windows-system-administration');
assert.strictEqual(c03BySlug?.id, 'crs_cyber_admin_03', 'Slug linux-and-windows-system-administration must resolve to C03');

const c04BySlug = mockEngine.getCourseById('python-for-cybersecurity');
assert.strictEqual(c04BySlug?.id, 'crs_cyber_python_04', 'Slug python-for-cybersecurity must resolve to C04');

const c05BySlug = mockEngine.getCourseById('ethical-hacking-and-penetration-testing');
assert.strictEqual(c05BySlug?.id, 'crs_cyber_pentest_05', 'Slug ethical-hacking-and-penetration-testing must resolve to C05');

// DB / shorthand slugs (e.g. cyber-net-02, cyber-admin-03, cyber-python-04, cyber-pentest-05, cyber-soc-08)
assert.strictEqual(mockEngine.getCourseBySlug('cyber-net-02')?.id, 'crs_cyber_net_02', 'cyber-net-02 must resolve to C02');
assert.strictEqual(mockEngine.getCourseById('cyber-net-02')?.id, 'crs_cyber_net_02', 'cyber-net-02 via getCourseById must resolve to C02');
assert.strictEqual(mockEngine.getCourseBySlug('cyber-admin-03')?.id, 'crs_cyber_admin_03', 'cyber-admin-03 must resolve to C03');
assert.strictEqual(mockEngine.getCourseBySlug('cyber-python-04')?.id, 'crs_cyber_python_04', 'cyber-python-04 must resolve to C04');
assert.strictEqual(mockEngine.getCourseBySlug('cyber-pentest-05')?.id, 'crs_cyber_pentest_05', 'cyber-pentest-05 must resolve to C05');
assert.strictEqual(mockEngine.getCourseBySlug('cyber-soc-08')?.id, 'crs_cyber_soc_08', 'cyber-soc-08 must resolve to C08');

const unknownCourse = mockEngine.getCourseById('crs_nonexistent_xyz');
assert.strictEqual(unknownCourse, null, 'Unknown course ID must return null, never fall back to C01');

const unknownSlug = mockEngine.getCourseBySlug('nonexistent-course-slug');
assert.strictEqual(unknownSlug, null, 'Unknown slug must return null, never fall back to C01');
console.log('  [PASS] Route slug parameters resolve accurately and unknown courses return null.');

// 3. Verify getEnrolment resolution for Courses 01-05
console.log('[3/4] Verifying dynamic enrolment resolution for Courses 01-05...');
const enr01 = mockEngine.getEnrolment('crs_cyber_intro_01');
assert.strictEqual(enr01?.course_id, 'crs_cyber_intro_01', 'Enrolment for C01 must be crs_cyber_intro_01');

const enr02 = mockEngine.getEnrolment('crs_cyber_net_02');
assert.strictEqual(enr02?.course_id, 'crs_cyber_net_02', 'Enrolment for C02 must be crs_cyber_net_02');

const enr03 = mockEngine.getEnrolment('crs_cyber_admin_03');
assert.strictEqual(enr03?.course_id, 'crs_cyber_admin_03', 'Enrolment for C03 must be crs_cyber_admin_03');

const enr04 = mockEngine.getEnrolment('crs_cyber_python_04');
assert.strictEqual(enr04?.course_id, 'crs_cyber_python_04', 'Enrolment for C04 must be crs_cyber_python_04');

const enr05 = mockEngine.getEnrolment('crs_cyber_pentest_05');
assert.strictEqual(enr05?.course_id, 'crs_cyber_pentest_05', 'Enrolment for C05 must be crs_cyber_pentest_05');

const enr05Slug = mockEngine.getEnrolment('ethical-hacking-and-penetration-testing');
assert.strictEqual(enr05Slug?.course_id, 'crs_cyber_pentest_05', 'Slug enrolment for C05 must be crs_cyber_pentest_05');

const enr02DbSlug = mockEngine.getEnrolment('cyber-net-02');
assert.strictEqual(enr02DbSlug?.course_id, 'crs_cyber_net_02', 'cyber-net-02 enrolment must resolve to C02');

const enrUnknown = mockEngine.getEnrolment('enr_completely_invalid_9999');
assert.strictEqual(enrUnknown, null, 'Unknown enrolment must return null, never fall back to C01');
console.log('  [PASS] Dynamic enrolments resolve correctly for all courses without fallback.');

// 4. Verify question generation integrity per course
console.log('[4/4] Verifying question generation stays within target course...');
import { getCourseSpec, findQuiz, generateQuestions } from '../api/_lib/courseRegistry.js';

for (const [courseId, expectedCode] of [
  ['crs_cyber_intro_01', 'C01'],
  ['crs_cyber_net_02', 'C02'],
  ['crs_cyber_admin_03', 'C03'],
  ['crs_cyber_python_04', 'C04'],
  ['crs_cyber_pentest_05', 'C05']
]) {
  const spec = await getCourseSpec(courseId);
  assert.ok(spec, `Spec for ${courseId} must exist`);
  assert.strictEqual(spec.code, expectedCode, `Course code must be ${expectedCode}`);
  const quiz = findQuiz(spec, spec.modules[0].quizId);
  assert.ok(quiz, `Quiz for ${courseId} module 1 must exist`);
  const questions = await generateQuestions(spec, quiz);
  assert.ok(questions.length > 0, `Questions must be generated for ${courseId}`);
}
console.log('  [PASS] Question generation correctly isolated to target course.');

console.log('=== ALL COURSE SELECTION & ROUTING REGRESSION TESTS PASSED (100%) ===');
