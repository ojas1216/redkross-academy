/**
 * Parses the course / module / lesson structure of Courses 05-22 out of
 * "RedKross Academy - Master Curriculum, Notes Pipeline & Tool Repo Blueprint v2"
 * into curriculum/blueprint/CNN.json.
 *
 *   pdftotext "<blueprint v2>.pdf" blueprint_v2_plain.txt      (reading order, NOT -layout)
 *   node scripts/curriculum/parse_blueprint.mjs blueprint_v2_plain.txt [--write]
 *
 * Only structure is taken from the blueprint: course title, level, module names
 * and the lesson names of each module, in order. In reading-order text each table
 * lists the module names first and then one line per module holding its lessons
 * separated by ';'. A capstone module written as "X: stage, stage, ..." becomes one
 * lesson per stage. Modules that do not come out with 8 lessons are reported; the
 * JSON files are committed and any hand corrections are recorded in "notes".
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, '../../curriculum/blueprint');
const [src, ...flags] = process.argv.slice(2);
const write = flags.includes('--write');

const lines = fs
  .readFileSync(src, 'utf8')
  .replace(/\r/g, '')
  .replace(/\f/g, '\n')
  .split('\n')
  .map((l) => l.replace(/�/g, '-').trim())
  .filter((l) => l && !/^RedKross Academy -- Master Curriculum/.test(l) && !/^Page \d+ of \d+$/.test(l));

const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);
const clean = (s) => s.replace(/\s+/g, ' ').trim();

const starts = [];
lines.forEach((l, i) => {
  const m = l.match(/^Course (\d+): (.+)$/);
  if (m) starts.push({ n: Number(m[1]), i, title: m[2].trim() });
});

let problems = 0;
for (let k = 0; k < starts.length; k++) {
  const { n, i, title } = starts[k];
  if (n < 5 || n > 22) continue;
  const end = k + 1 < starts.length ? starts[k + 1].i : lines.length;
  const sec = lines.slice(i + 1, end);
  const levelLine = sec.find((l) => /^Level:/.test(l)) || '';

  // Two queues: module names (a number line, then the name) and lesson lines (everything
  // else inside the table). A lesson line opens a new module's group when it starts with
  // a capital letter and the previous lesson line did not end mid-list (';' or ',').
  const names = [];
  const lessonLines = [];
  let inTable = false;
  let lastWasName = false;
  const splitNameAndLessons = (s) => {
    // "Credential and service testing Password policy review; hashing ..." -> [name, lessons]
    const semi = s.indexOf(';');
    const words = s.slice(0, semi < 0 ? s.length : semi).split(' ');
    let cut = -1;
    for (let w = words.length - 1; w > 0; w--) if (/^[A-Z]/.test(words[w])) { cut = w; break; }
    if (cut <= 0) return [s, ''];
    return [words.slice(0, cut).join(' '), [words.slice(cut).join(' '), s.slice(semi < 0 ? s.length : semi)].join('')];
  };
  const addLesson = (l) => {
    const prev = lessonLines[lessonLines.length - 1];
    if (prev !== undefined && (/[;,]$/.test(prev) || /^[a-z]/.test(l))) lessonLines[lessonLines.length - 1] = `${prev} ${l}`;
    else lessonLines.push(l);
  };
  for (let j = 0; j < sec.length; j++) {
    const l = sec[j];
    if (/^(Notes repos|Tool repos|Lab targets|Projects?:|Repos?:)/i.test(l)) break;
    if (l === '#' || l === 'Module' || /^\d+ lessons$/.test(l)) {
      inTable = true;
      continue;
    }
    if (!inTable) continue;
    const num = l.match(/^(\d{1,2})$/);
    const both = l.match(/^(\d{1,2}) (.+)$/);
    if (num && Number(num[1]) === names.length + 1) {
      const next = sec[j + 1] || '';
      j++;
      if (next.includes(';')) {
        const [nm, rest] = splitNameAndLessons(next);
        names.push(nm);
        if (rest) lessonLines.push(rest.trim());
      } else names.push(next);
      lastWasName = true;
      continue;
    }
    if (both && Number(both[1]) === names.length + 1 && !both[2].includes(';')) {
      names.push(both[2]);
      lastWasName = true;
      continue;
    }
    // a wrapped module name ("Business logic and modern" / "apps") has no ';' and is short
    if (lastWasName && !l.includes(';') && /^[a-z]/.test(l) && l.split(' ').length <= 3 && lessonLines.length < names.length - 1) {
      names[names.length - 1] += ` ${l}`;
      continue;
    }
    lastWasName = false;
    addLesson(l);
  }

  const modules = names.map((name, m) => {
    let text = clean(lessonLines[m] || '').replace(/\.$/, '');
    let lessons = text.split(/\s*;\s*/).filter(Boolean);
    if (lessons.length === 1) {
      const colon = text.match(/^(.*?):\s*(.+)$/);
      const parts = (colon ? colon[2] : text).split(/\s*,\s*/).filter(Boolean);
      if (parts.length >= 4) lessons = parts;
    }
    return { n: m + 1, title: cap(clean(name)), lessons: lessons.map((s) => cap(clean(s))) };
  });

  const out = {
    course: n,
    code: `C${String(n).padStart(2, '0')}`,
    title: clean(title),
    level: clean(levelLine.replace(/^Level:\s*/, '')),
    source: 'RedKross Academy - Master Curriculum, Notes Pipeline & Tool Repo Blueprint v2',
    modules,
  };
  const bad = modules.filter((m) => m.lessons.length !== 8);
  if (bad.length || modules.length !== 12) problems++;
  console.log(
    `${out.code} ${out.title.slice(0, 46).padEnd(46)} ${modules.length} modules, ${modules.reduce((a, m) => a + m.lessons.length, 0)} lessons` +
      (bad.length ? ` | CHECK ${bad.map((m) => `M${m.n} "${m.title}" (${m.lessons.length})`).join('; ')}` : '')
  );
  if (write) {
    fs.mkdirSync(OUT, { recursive: true });
    const file = path.join(OUT, `${out.code}.json`);
    // keep hand corrections: an existing file with "notes" is not overwritten
    if (fs.existsSync(file) && JSON.parse(fs.readFileSync(file, 'utf8')).notes) continue;
    fs.writeFileSync(file, `${JSON.stringify(out, null, 2)}\n`);
  }
}
console.log(problems ? `${problems} course(s) need a manual check` : 'every course parsed into 12 x 8');
