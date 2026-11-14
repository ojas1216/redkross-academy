// Prints a course's source diagrams that have no auto spec and no hand spec yet.
//   node scripts/figures/show.mjs <figures.json> C05 [--all]
import fs from 'fs';
import { autoSpec, cleanDiagram } from './autospec.mjs';

const [file, course, flag] = process.argv.slice(2);
const figs = JSON.parse(fs.readFileSync(file, 'utf8')).filter((f) => f.code.startsWith(course));
let manual = {};
const specFile = new URL(`./specs/${course}.mjs`, import.meta.url);
if (fs.existsSync(specFile)) manual = (await import(specFile.href)).default;
for (const f of figs) {
  if (manual[f.code]) continue;
  if (flag !== '--all' && autoSpec(f)) continue;
  console.log(`### ${f.code} | ${f.title}\n${cleanDiagram(f.diagram).join('\n')}\n`);
}
