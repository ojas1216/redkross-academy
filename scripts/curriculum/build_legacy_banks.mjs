/**
 * Rebuilds the module question banks of the legacy courses (C01, C03) as banks of genuinely
 * distinct questions. The old banks padded a handful of questions to 200 by splicing phrases
 * into the stem, so exams repeated the same question.
 *
 *   node scripts/curriculum/build_legacy_banks.mjs C03        rebuild every module with a source file
 *   node scripts/curriculum/build_legacy_banks.mjs C03 --check  report only, write nothing
 *
 * Source: curriculum/legacy_banks/<CODE>/mNN.json
 *   { "keep": [stem prefixes of existing questions to keep], "dropAll": bool,
 *     "add": [[difficulty "m"|"d", topic, question, correct, wrong1, wrong2, wrong3, explanation], ...] }
 * Existing questions are de-duplicated by correct answer and only those matched by "keep" (or all
 * of them when "keep" is omitted and dropAll is false) are carried over. New questions get
 * balanced answer positions. The build fails on duplicate stems or answers, or fewer than 10
 * questions of either difficulty (an exam draws 10 medium + 10 difficult).
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const REPO = path.join(path.dirname(fileURLToPath(import.meta.url)), '../..');
const COURSES = {
  C01: { dir: 'src/services/db/questionBanks', idp: 'q_m', modules: 6, title: 'Course 01: Introduction to Cybersecurity' },
  C03: { dir: 'src/services/db/course03/quizzes', idp: 'q_c3_m', modules: 8, title: 'Course 03: Linux and Windows System Administration' },
};
const [code, ...flags] = process.argv.slice(2);
const cfg = COURSES[code];
if (!cfg) { console.error(`usage: build_legacy_banks.mjs ${Object.keys(COURSES).join('|')} [--check]`); process.exit(2); }
const check = flags.includes('--check');
const norm = (s) => String(s || '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
const pad = (n, w) => String(n).padStart(w, '0');
let failed = false;

for (let m = 1; m <= cfg.modules; m++) {
  const src = path.join(REPO, 'curriculum/legacy_banks', code, `m${pad(m, 2)}.json`);
  if (!fs.existsSync(src)) continue;
  const spec = JSON.parse(fs.readFileSync(src, 'utf8'));
  const file = path.join(REPO, cfg.dir, `module${m}QuestionBank.js`);
  const old = Object.values(await import(pathToFileURL(file) + `?t=${Date.now()}`)).find(Array.isArray) || [];

  const kept = [];
  const seenAns = new Set();
  if (!spec.dropAll) {
    for (const q of old) {
      const a = norm(q.options[q.correct]);
      if (seenAns.has(a)) continue;
      seenAns.add(a);
      if (spec.keep && !spec.keep.some((k) => norm(q.q).startsWith(norm(k)))) continue;
      const right = q.options[q.correct];
      kept.push({ topic: q.topic, difficulty: q.difficulty === 'difficult' ? 'difficult' : 'medium', q: q.q, right, wrong: q.options.filter((_, i) => i !== q.correct), explanation: q.explanation });
    }
  }
  const added = spec.add.map(([d, topic, q, right, ...rest]) => {
    const explanation = rest.pop();
    if (rest.length !== 3) throw new Error(`${code} M${m}: "${q.slice(0, 50)}" needs 3 wrong options`);
    return { topic, difficulty: d === 'd' ? 'difficult' : 'medium', q, right, wrong: rest, explanation };
  });
  // optional "patch": { exact wrong-option text: replacement } (used to even out option lengths)
  const patch = spec.patch || {};
  for (const q of [...kept, ...added]) q.wrong = q.wrong.map((w) => patch[w] ?? w);
  // every answer is placed so that positions A-D stay balanced (round robin)
  const counts = [0, 0, 0, 0];
  const all = [...kept, ...added].map(({ right, wrong, ...q }, i) => {
    const pos = i % 4;
    counts[pos]++;
    const options = [...wrong];
    options.splice(pos, 0, right);
    return { id: `${cfg.idp}${m}_${pad(i + 1, 3)}`, ...q, options, correct: pos };
  });

  const errs = [];
  const stems = new Set();
  const answers = new Set();
  for (const q of all) {
    if (stems.has(norm(q.q))) errs.push(`duplicate stem: ${q.q.slice(0, 60)}`);
    if (answers.has(norm(q.options[q.correct]))) errs.push(`duplicate answer: ${q.options[q.correct].slice(0, 60)}`);
    stems.add(norm(q.q));
    answers.add(norm(q.options[q.correct]));
    if (new Set(q.options.map((o) => o.trim().toLowerCase())).size !== 4) errs.push(`duplicate options: ${q.q.slice(0, 60)}`);
  }
  const med = all.filter((q) => q.difficulty === 'medium').length;
  const dif = all.length - med;
  if (med < 10 || dif < 10) errs.push(`needs >= 10 medium and >= 10 difficult (has ${med}/${dif})`);
  const longestQs = all.filter((q) => {
    const L = q.options.map((o) => o.length);
    const mx = Math.max(...L);
    return L[q.correct] === mx && L.filter((x) => x === mx).length === 1;
  });
  const longest = longestQs.length;
  if (flags.includes('--longest')) longestQs.forEach((q) => console.log(`   L ${q.q.slice(0, 70)} | ${q.options.map((o) => o.length).join('/')} correct=${q.correct}`));
  console.log(`${code} M${m}: ${all.length} questions (${kept.length} kept, ${added.length} new), ${med} medium / ${dif} difficult, positions ${counts.join('/')}, correct-longest ${longest}${errs.length ? ' FAIL' : ''}`);
  errs.forEach((e) => console.log('   ' + e));
  if (errs.length) { failed = true; continue; }
  if (check) continue;
  const header = `/**\n * RedKross Academy - ${cfg.title}\n * Module ${m} Question Bank: ${all.length} distinct questions (${med} medium, ${dif} difficult).\n * GENERATED by scripts/curriculum/build_legacy_banks.mjs from curriculum/legacy_banks/${code}/m${pad(m, 2)}.json\n */\n\n`;
  fs.writeFileSync(file, `${header}export const module${m}QuestionBank = ${JSON.stringify(all, null, 2)};\n`);
}
process.exit(failed ? 1 : 0);
