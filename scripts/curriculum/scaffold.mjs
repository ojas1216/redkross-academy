/**
 * Creates curriculum/CNN/mMM/module.json skeletons from the blueprint (existing files
 * are left alone). Lesson agents then fill in summary / objectives / minutes for the
 * lessons they own, and the coordinator writes the module description.
 *
 *   node scripts/curriculum/scaffold.mjs C08            all modules
 *   node scripts/curriculum/scaffold.mjs C08 1 2 3      selected modules
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CUR = path.join(__dirname, '../../curriculum');
const [code, ...mods] = process.argv.slice(2);
const bp = JSON.parse(fs.readFileSync(path.join(CUR, 'blueprint', `${code}.json`), 'utf8'));
const pad2 = (n) => String(n).padStart(2, '0');
for (const m of bp.modules) {
  if (mods.length && !mods.map(Number).includes(m.n)) continue;
  const dir = path.join(CUR, code, `m${pad2(m.n)}`);
  const file = path.join(dir, 'module.json');
  if (fs.existsSync(file)) {
    console.log(`kept ${path.relative(CUR, file)}`);
    continue;
  }
  fs.mkdirSync(dir, { recursive: true });
  const meta = {
    course: code,
    module: m.n,
    title: m.title,
    description: '',
    lessons: m.lessons.map((t, i) => ({ n: i + 1, title: t, summary: '', objectives: [], minutes: 0 })),
  };
  fs.writeFileSync(file, `${JSON.stringify(meta, null, 2)}\n`);
  console.log(`wrote ${path.relative(CUR, file)}`);
}
