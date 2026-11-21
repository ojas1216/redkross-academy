/**
 * One-off clean-up: Course 03 had the same two-paragraph operating-system introduction pasted
 * into all 48 lessons. Keep it in lesson 1.1 (OS architecture), remove it everywhere else.
 * Idempotent.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
const REPO = path.join(path.dirname(fileURLToPath(import.meta.url)), '../..');
const START = 'Operating systems constitute the foundational execution fabric';
const END = 'establishing hardened baselines across enterprise Linux and Windows environments.';
let removed = 0;
for (let n = 1; n <= 8; n++) {
  const file = path.join(REPO, `src/services/db/course03/modules/module${n}.js`);
  const mod = Object.values(await import(pathToFileURL(file)))[0];
  let text = fs.readFileSync(file, 'utf8');
  mod.lessons.forEach((l, i) => {
    if (n === 1 && i === 0) return;
    const c = String(l.content || '');
    const a = c.indexOf(START);
    const b = c.indexOf(END, a);
    if (a < 0 || b < 0) return;
    const block = c.slice(a, b + END.length);
    const enc = JSON.stringify(block).slice(1, -1);
    for (const [form, sep] of [[enc, '\n\n'], [block, '\n\n']]) {
      if (text.includes(form + sep)) { text = text.replace(form + sep, ''); removed++; return; }
      if (text.includes(form)) { text = text.replace(form, ''); removed++; return; }
    }
    console.error(`not found in source: C03 M${n} lesson ${i + 1}`);
  });
  fs.writeFileSync(file, text);
}
console.log(`removed the shared introduction from ${removed} lessons`);
