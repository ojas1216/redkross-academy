/**
 * Replaces the Mermaid diagrams in Courses 01-02 with designed SVG figures rendered by
 * render.mjs (specs: scripts/figures/specs/legacy.mjs). Only the ```mermaid block is
 * swapped for an image; the lesson's caption, walkthrough and text are left as they are.
 *
 *   node scripts/figures/convert_legacy_mermaid.mjs          render + replace (idempotent)
 *   node scripts/figures/convert_legacy_mermaid.mjs --render render SVGs only
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { renderFigure } from './render.mjs';
import SPECS from './specs/legacy.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO = path.join(__dirname, '../..');
const pad2 = (n) => String(n).padStart(2, '0');
const renderOnly = process.argv.includes('--render');

const SOURCES = [
  // Course 01 lessons live in src/services/db/curriculum/moduleN.js (imported by cyberCourses.js)
  ...[1, 2, 3, 4, 5, 6].map((n) => ({ course: 1, file: `src/services/db/curriculum/module${n}.js` })),
  ...[1, 2, 3, 4, 5, 6, 7, 8].map((n) => ({ course: 2, file: `src/services/db/course02/modules/module${n}.js` })),
];

// 1. render
const urls = {};
for (const [key, spec] of Object.entries(SPECS)) {
  const dir = path.join(REPO, 'public', 'assets', 'courses', `cyber-${pad2(spec.course)}`, 'designed');
  fs.mkdirSync(dir, { recursive: true });
  const svg = await renderFigure({ code: spec.code, title: spec.title, alt: spec.title }, spec);
  fs.writeFileSync(path.join(dir, `${spec.code}.svg`), svg);
  urls[key] = `/assets/courses/cyber-${pad2(spec.course)}/designed/${spec.code}.svg`;
}
console.log(`rendered ${Object.keys(urls).length} figures`);
if (renderOnly) process.exit(0);

// 2. replace the mermaid blocks, located through the loaded lesson objects
const lessonsByFile = new Map();
for (const src of SOURCES) {
  const mod = await import(pathToFileURL(path.join(REPO, src.file)));
  const lessons = [];
  if (src.courseId) {
    const list = Object.values(mod).find((v) => Array.isArray(v));
    for (const m of list.find((c) => c.id === src.courseId).modules) lessons.push(...(m.lessons || []));
  } else {
    for (const m of Object.values(mod)) if (m && m.lessons) lessons.push(...m.lessons);
  }
  lessonsByFile.set(src.file, lessons);
}

let replaced = 0;
const missing = [];
for (const [file, lessons] of lessonsByFile) {
  let text = fs.readFileSync(path.join(REPO, file), 'utf8');
  let changed = false;
  for (const lesson of lessons) {
    const blocks = [...String(lesson.content || '').matchAll(/```mermaid\n[\s\S]*?```/g)].map((m) => m[0]);
    blocks.forEach((block, i) => {
      const key = `${lesson.id}#${i + 1}`;
      const spec = SPECS[key];
      if (!spec) return missing.push(key);
      const img = `![${spec.title.replace(/[[\]]/g, '')}](${urls[key]})`;
      // the block can appear in the source as a JSON-escaped string or as raw template text
      const forms = [JSON.stringify(block).slice(1, -1), block];
      const repl = [JSON.stringify(img).slice(1, -1), img];
      for (let f = 0; f < forms.length; f++) {
        if (text.includes(forms[f])) {
          text = text.replace(forms[f], repl[f]);
          changed = true;
          replaced++;
          return;
        }
      }
      missing.push(`${key} (block text not found in ${file})`);
    });
  }
  if (changed) fs.writeFileSync(path.join(REPO, file), text);
}
console.log(`replaced ${replaced} mermaid block(s)`);
if (missing.length) {
  console.error(`not converted: ${missing.join(', ')}`);
  process.exit(1);
}
