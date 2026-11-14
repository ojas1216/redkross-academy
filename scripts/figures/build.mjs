/**
 * Renders designed SVG figures for library courses (C05-C22).
 *
 *   node scripts/figures/build.mjs [C05 C06 ...] [--out=<dir>] [--strict]
 *
 * Spec source per figure: scripts/figures/specs/CNN.mjs (hand-written) first, then
 * the automatic converter (autospec.mjs). --strict fails when a figure has neither.
 * Default output: public/assets/courses/cyber-NN/<code>.svg (same paths the lessons use).
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { parseCourse } from '../library/parseCourse.mjs';
import { renderFigure } from './render.mjs';
import { autoSpec } from './autospec.mjs';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const LIB = path.resolve(process.env.COURSE_LIBRARY || path.join(ROOT, '../../RedKross_Academy_Complete_Cybersecurity_Course_Library'));
const args = process.argv.slice(2);
const outArg = args.find((a) => a.startsWith('--out='));
const strict = args.includes('--strict');
let courses = args.filter((a) => /^C\d\d$/.test(a));
if (!courses.length) courses = Array.from({ length: 18 }, (_, i) => `C${String(i + 5).padStart(2, '0')}`);

const files = fs.readdirSync(LIB).filter((f) => /^COURSE_\d\d_.*\.txt$/.test(f));
let total = 0;
const missing = [];
for (const code of courses) {
  const file = files.find((f) => f.startsWith(`COURSE_${code.slice(1)}_`));
  if (!file) throw new Error(`no library file for ${code}`);
  const course = parseCourse(fs.readFileSync(path.join(LIB, file), 'utf8'));
  const specPath = path.join(ROOT, 'scripts', 'figures', 'specs', `${code}.mjs`);
  const manual = fs.existsSync(specPath) ? (await import(`file:///${specPath.replace(/\\/g, '/')}?t=${Date.now()}`)).default : {};
  const outDir = outArg ? path.join(outArg.slice(6), code) : path.join(ROOT, 'public', 'assets', 'courses', `cyber-${code.slice(1)}`);
  fs.mkdirSync(outDir, { recursive: true });
  let n = 0;
  for (const m of course.modules) {
    for (const fig of m.figures) {
      const spec = manual[fig.code] || autoSpec(fig);
      if (!spec) {
        missing.push(fig.code);
        continue;
      }
      fs.writeFileSync(path.join(outDir, `${fig.code}.svg`), await renderFigure(fig, spec));
      n++;
    }
  }
  total += n;
  console.log(`${code}: ${n} figures -> ${path.relative(ROOT, outDir)}`);
}
if (missing.length) {
  console.log(`no spec for ${missing.length}: ${missing.join(' ')}`);
  if (strict) process.exit(1);
}
console.log(`rendered ${total}`);
