/**
 * Builds v2 curriculum content (curriculum/CNN/mMM/*) into the academy.
 *
 *   node scripts/curriculum/build.mjs C05 --module 3 --preview
 *        render module 3's figures to curriculum/C05/m03/_preview/ (+ gallery.html); no integration
 *   node scripts/curriculum/build.mjs C05
 *        validate all modules, render every figure to public/assets/courses/cyber-05/v2/,
 *        write curriculum/build/C05.json, then re-run the library importer so the course's
 *        catalog entry, lesson files and quiz banks come from the v2 content
 *   node scripts/curriculum/build.mjs C05 --no-import    (skip the importer run)
 *
 * The course switches to v2 only when every blueprint module validates.
 */
import fs from 'fs';
import path from 'path';
import { execFileSync } from 'child_process';
import { fileURLToPath } from 'url';
import { renderFigure } from '../figures/render.mjs';
import { validateModule, FIG_RE } from './validate.mjs';
import { LIBRARY_COURSE_MAP } from '../library/courseMap.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO = path.join(__dirname, '../..');
const CUR = path.join(REPO, 'curriculum');
const pad2 = (n) => String(n).padStart(2, '0');

const args = process.argv.slice(2);
const code = args[0];
const flag = (name) => args.includes(name);
const opt = (name) => {
  const i = args.indexOf(name);
  return i >= 0 ? args[i + 1] : undefined;
};
if (!/^C\d\d$/.test(code || '')) {
  console.error('usage: node scripts/curriculum/build.mjs C05 [--module N --preview] [--no-import]');
  process.exit(2);
}
const num = Number(code.slice(1));
const lc = code.toLowerCase();
const bp = JSON.parse(fs.readFileSync(path.join(CUR, 'blueprint', `${code}.json`), 'utf8'));
const readJson = (f) => JSON.parse(fs.readFileSync(f, 'utf8'));

async function renderModuleFigures(m, outDir) {
  const figs = readJson(path.join(CUR, code, `m${pad2(m)}`, 'figures.json'));
  fs.mkdirSync(outDir, { recursive: true });
  const written = [];
  for (const [fc, spec] of Object.entries(figs)) {
    const svg = await renderFigure({ code: fc, title: spec.title, alt: spec.alt }, spec);
    fs.writeFileSync(path.join(outDir, `${fc}.svg`), svg);
    written.push(fc);
  }
  return { figs, written };
}

if (flag('--preview')) {
  const m = Number(opt('--module'));
  if (!m) throw new Error('--preview needs --module N');
  const out = path.join(CUR, code, `m${pad2(m)}`, '_preview');
  const { figs, written } = await renderModuleFigures(m, out);
  const html = `<!doctype html><meta charset="utf-8"><title>${code} M${pad2(m)} figures</title>
<body style="background:#e5e7eb;font-family:sans-serif;margin:24px">
${written.map((fc) => `<h3>${fc} - ${figs[fc].title}</h3><img src="${fc}.svg" style="max-width:100%;background:#fff"><p>${figs[fc].caption}</p>`).join('\n')}
</body>`;
  fs.writeFileSync(path.join(out, 'gallery.html'), html);
  console.log(`rendered ${written.length} figures -> ${path.relative(REPO, out)}`);
  process.exit(0);
}

// ---------------------------------------------------------------- full course build
const failures = [];
for (const bm of bp.modules) {
  const r = await validateModule(code, bm.n, { render: false });
  if (r.errors.length) failures.push(`M${pad2(bm.n)}: ${r.errors.length} error(s) - ${r.errors[0]}`);
}
if (failures.length) {
  console.error(`${code} is not complete; the course stays on its current content:\n  ${failures.join('\n  ')}`);
  process.exit(1);
}

const libMeta = LIBRARY_COURSE_MAP[num];
const courseId = libMeta.id;
const assetDir = `/assets/courses/cyber-${pad2(num)}/v2`;
const assetOut = path.join(REPO, 'public', assetDir);
fs.rmSync(assetOut, { recursive: true, force: true });

const labKitUrl = `/downloads/labs/RedKross_${code}_Lab_Kit.zip`;
const labCallout = `> [!NOTE] Lab kit\n> This lesson uses the course lab kit: [RedKross_${code}_Lab_Kit.zip](${labKitUrl}). Extract it anywhere; paths written as \`LAB_ASSETS/${code}/...\` refer to the extracted \`${code}\` folder. Work only inside your own isolated lab.`;

const modules = [];
const lessonFiles = [];
const bank = {};
let figureCount = 0;
for (const bm of bp.modules) {
  const m = bm.n;
  const dir = path.join(CUR, code, `m${pad2(m)}`);
  const meta = readJson(path.join(dir, 'module.json'));
  const { figs } = await renderModuleFigures(m, assetOut);
  let figNo = 0;
  const lessons = [];
  meta.lessons.forEach((lm, i) => {
    const n = i + 1;
    const id = `les_${lc}_m${pad2(m)}_l${pad2(n)}`;
    let md = fs.readFileSync(path.join(dir, `l${pad2(n)}.md`), 'utf8').replace(/\r/g, '');
    md = md
      .split('\n')
      .map((line) => {
        const f = line.match(FIG_RE);
        if (!f) return line;
        const spec = figs[f[1]];
        figNo++;
        figureCount++;
        const label = `Figure ${m}.${figNo}: ${spec.title}`;
        return `![${label.replace(/[[\]]/g, '')}](${assetDir}/${f[1]}.svg)\n\n*${label.replace(/\*/g, '')}. ${spec.caption.replace(/\*/g, '')}*`;
      })
      .join('\n');
    if (/\blab\b|capstone/i.test(lm.title) && !md.includes('[!NOTE] Lab kit')) md = `${labCallout}\n\n${md}`;
    lessonFiles.push({ id, content: `${md.trim()}\n` });
    lessons.push({
      id,
      title: `${m}.${n} ${lm.title}`,
      duration: `${lm.minutes} mins`,
      is_mandatory: true,
      summary: lm.summary,
      learning_objectives: lm.objectives,
      content_url: `/course-content/${courseId}/${id}.md`,
    });
  });
  const quiz = readJson(path.join(dir, 'quiz.json'));
  bank[m] = quiz.map((q, i) => ({
    id: `q_${lc}_m${pad2(m)}_${pad2(i + 1)}`,
    q: q.q,
    options: q.options,
    correct: q.correct,
    explanation: q.explanation,
    topic: `${code}-M${pad2(m)}: ${meta.title} (lesson ${q.lesson})`,
    difficulty: q.difficulty,
  }));
  modules.push({ n: m, title: meta.title, description: meta.description, lessons });
}

fs.mkdirSync(path.join(CUR, 'build'), { recursive: true });
const outFile = path.join(CUR, 'build', `${code}.json`);
fs.writeFileSync(outFile, JSON.stringify({ code, courseId, version: 2, modules, lessonFiles, bank }, null, 1));
console.log(`${code}: ${modules.length} modules, ${lessonFiles.length} lessons, ${figureCount} figures -> ${path.relative(REPO, outFile)}`);

if (!flag('--no-import')) {
  execFileSync(process.execPath, [path.join(REPO, 'scripts/import_library_courses.mjs'), '--no-labs'], { stdio: 'inherit' });
}
