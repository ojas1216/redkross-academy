/**
 * Validates one module (or a whole course) of v2 curriculum content.
 *
 *   node scripts/curriculum/validate.mjs C05 3        one module
 *   node scripts/curriculum/validate.mjs C05          every module folder present
 *   node scripts/curriculum/validate.mjs C05 --json   machine-readable summary
 *
 * Checks the mechanical parts of curriculum/AUTHORING_GUIDE.md: blueprint titles,
 * lesson length, figures placed with a walkthrough, every figure spec renders, no
 * ASCII/box diagrams or mermaid, quiz format. Exit code 1 when any error is found.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { renderFigure } from '../figures/render.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '../../curriculum');

export const MIN_PROSE_WORDS = 2000;
export const MIN_WALKTHROUGH_WORDS = 250;
export const QUIZ_SIZE = 200; // questions per module bank (exam draws 20 per attempt)
export const FIG_RE = /^\{\{figure ([A-Z]\d\d-M\d\d-L\d\d-F\d)\}\}\s*$/;
const WALK = '### Visual Walkthrough & Architectural Breakdown';

const norm = (s) => String(s || '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
const words = (s) => (s.match(/[A-Za-z0-9][A-Za-z0-9'’.-]*/g) || []).length;
const pad2 = (n) => String(n).padStart(2, '0');

/** Splits markdown into prose / code / walkthrough word counts and finds problems. */
export function analyseLesson(md) {
  const lines = md.replace(/\r/g, '').split('\n');
  const out = { prose: 0, code: 0, figures: [], walkthroughs: [], problems: [], warnings: [] };
  let inCode = false;
  let codeLang = '';
  let codeBuf = [];
  let inWalk = null;
  for (let i = 0; i < lines.length; i++) {
    const l = lines[i];
    const fence = l.match(/^\s*(```+|~~~+)\s*([A-Za-z0-9_+-]*)/);
    if (fence) {
      if (!inCode) {
        inCode = true;
        codeLang = fence[2].toLowerCase();
        codeBuf = [];
        if (codeLang === 'mermaid') out.problems.push(`line ${i + 1}: mermaid code block (use a figure)`);
      } else {
        inCode = false;
        checkCode(codeBuf, codeLang, i, out);
      }
      continue;
    }
    if (inCode) {
      codeBuf.push(l);
      out.code += words(l);
      continue;
    }
    if (/^# /.test(l)) out.problems.push(`line ${i + 1}: level-1 heading (start at ##)`);
    if (/[─-╿▀-▟]/.test(l)) out.problems.push(`line ${i + 1}: box-drawing characters in text`);
    if (/(-{2,}>|<-{2,}|={2,}>).*(-{2,}>|<-{2,}|={2,}>)/.test(l) && !/`[^`]*-{2,}>[^`]*`/.test(l))
      out.warnings.push(`line ${i + 1}: arrow chain in prose (ASCII diagram?)`);
    if (/\b(TODO|TBD|lorem ipsum|\[insert)/i.test(l)) out.problems.push(`line ${i + 1}: placeholder text "${l.trim().slice(0, 40)}"`);
    if (/<\/?(div|span|img|svg|table|script|iframe)\b/i.test(l)) out.problems.push(`line ${i + 1}: raw HTML`);
    if (/!\[[^\]]*\]\(/.test(l)) out.problems.push(`line ${i + 1}: markdown image (use {{figure CODE}})`);

    const fig = l.match(FIG_RE);
    if (fig) {
      out.figures.push({ code: fig[1], line: i + 1 });
      const next = lines.slice(i + 1, i + 6).filter((x) => x.trim());
      if (!next.length || next[0].trim() !== WALK) out.problems.push(`line ${i + 1}: ${fig[1]} is not followed by "${WALK}"`);
      continue;
    }
    if (/\{\{figure/.test(l)) out.problems.push(`line ${i + 1}: malformed figure placeholder "${l.trim()}"`);
    if (l.trim() === WALK) {
      inWalk = { line: i + 1, words: 0 };
      out.walkthroughs.push(inWalk);
      continue;
    }
    if (inWalk && /^#{2,3} /.test(l)) inWalk = null;
    if (/^\s*\|/.test(l)) continue; // tables: not prose
    if (inWalk) inWalk.words += words(l);
    else out.prose += words(l.replace(/^#+\s*/, ''));
  }
  if (inCode) out.problems.push('unclosed code block');
  for (const w of out.walkthroughs) if (w.words < MIN_WALKTHROUGH_WORDS) out.problems.push(`walkthrough at line ${w.line} has ${w.words} words (min ${MIN_WALKTHROUGH_WORDS})`);
  if (out.walkthroughs.length !== out.figures.length)
    out.problems.push(`${out.figures.length} figure(s) but ${out.walkthroughs.length} walkthrough heading(s)`);
  return out;
}

function checkCode(buf, lang, endLine, out) {
  const text = buf.join('\n');
  if (/[─-╿▀-▟]/.test(text)) out.problems.push(`code block ending line ${endLine + 1}: box-drawing characters (ASCII/Unicode diagram)`);
  const arrows = (text.match(/-{2,}>|<-{2,}|={2,}>|\bv\s*$|^\s*\^\s*$/gm) || []).length;
  const boxes = (text.match(/^\s*\+[-=+]{3,}\+?\s*$/gm) || []).length;
  const pipes = (text.match(/^\s*\|[^|]{2,}\|\s*$/gm) || []).length;
  if (arrows >= 3 && (boxes || pipes)) out.problems.push(`code block ending line ${endLine + 1}: looks like an ASCII diagram (boxes + arrows)`);
  else if (arrows >= 4) out.warnings.push(`code block ending line ${endLine + 1}: many arrows - is this an ASCII diagram?`);
}

function loadJson(file, errors) {
  if (!fs.existsSync(file)) {
    errors.push(`missing ${path.basename(file)}`);
    return null;
  }
  try {
    return JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch (e) {
    errors.push(`${path.basename(file)}: invalid JSON (${e.message})`);
    return null;
  }
}

/** quiz.json and/or per-lesson lNN.quiz.json files, concatenated in file order. */
export function loadQuiz(dir, errors = []) {
  const files = fs.existsSync(dir) ? fs.readdirSync(dir).filter((f) => /^(quiz|l\d\d\.quiz)\.json$/.test(f)).sort() : [];
  if (!files.length) {
    errors.push('missing quiz.json (or lNN.quiz.json files)');
    return null;
  }
  const all = [];
  for (const f of files) {
    const part = loadJson(path.join(dir, f), errors);
    if (Array.isArray(part)) all.push(...part.map((q) => ({ ...q, _file: f })));
    else if (part) errors.push(`${f}: must be a JSON array`);
  }
  return all;
}

/** figures.json and/or per-lesson lNN.figures.json files, merged (duplicate codes are an error). */
export function loadFigures(dir, errors = []) {
  const merged = {};
  const files = fs.existsSync(dir) ? fs.readdirSync(dir).filter((f) => /^(figures|l\d\d\.figures)\.json$/.test(f)).sort() : [];
  if (!files.length) errors.push('missing figures.json (or lNN.figures.json files)');
  for (const f of files) {
    const part = loadJson(path.join(dir, f), errors) || {};
    for (const [k, v] of Object.entries(part)) {
      if (merged[k]) errors.push(`${f}: figure ${k} defined twice`);
      merged[k] = v;
    }
  }
  return merged;
}

export async function validateModule(code, m, { render = true } = {}) {
  const errors = [];
  const warnings = [];
  const dir = path.join(ROOT, code, `m${pad2(m)}`);
  const bp = JSON.parse(fs.readFileSync(path.join(ROOT, 'blueprint', `${code}.json`), 'utf8'));
  const bpm = bp.modules.find((x) => x.n === m);
  if (!bpm) return { errors: [`module ${m} not in blueprint ${code}`], warnings, stats: {} };
  if (!fs.existsSync(dir)) return { errors: [`missing folder ${path.relative(process.cwd(), dir)}`], warnings, stats: {} };

  const meta = loadJson(path.join(dir, 'module.json'), errors);
  const figs = loadFigures(dir, errors);
  const quiz = loadQuiz(dir, errors);
  const stats = { lessons: 0, prose: 0, figures: 0, walkthroughs: 0, quiz: Array.isArray(quiz) ? quiz.length : 0 };

  if (meta) {
    if (norm(meta.title) !== norm(bpm.title)) errors.push(`module.json title "${meta.title}" != blueprint "${bpm.title}"`);
    if (!meta.description || words(meta.description) < 15) errors.push('module.json description missing or too short');
    if (!Array.isArray(meta.lessons) || meta.lessons.length !== bpm.lessons.length)
      errors.push(`module.json lists ${meta.lessons?.length ?? 0} lessons; blueprint has ${bpm.lessons.length}`);
    (meta.lessons || []).forEach((l, i) => {
      const want = bpm.lessons[i];
      const t = norm(l.title);
      if (want && t !== norm(want) && !t.startsWith(`${norm(want)} `)) errors.push(`lesson ${i + 1} title "${l.title}" != blueprint "${want}"`);
      if (!l.summary) errors.push(`lesson ${i + 1}: summary missing`);
      if (!Array.isArray(l.objectives) || l.objectives.length < 3) errors.push(`lesson ${i + 1}: needs 3-5 objectives`);
      if (!(l.minutes >= 20 && l.minutes <= 120)) errors.push(`lesson ${i + 1}: minutes ${l.minutes} out of range`);
    });
  }

  const used = new Map();
  for (let n = 1; n <= bpm.lessons.length; n++) {
    const f = path.join(dir, `l${pad2(n)}.md`);
    if (!fs.existsSync(f)) {
      errors.push(`missing l${pad2(n)}.md`);
      continue;
    }
    stats.lessons++;
    const a = analyseLesson(fs.readFileSync(f, 'utf8'));
    stats.prose += a.prose;
    stats.figures += a.figures.length;
    stats.walkthroughs += a.walkthroughs.length;
    const tag = `l${pad2(n)}`;
    if (a.prose < MIN_PROSE_WORDS) errors.push(`${tag}: ${a.prose} words of prose (min ${MIN_PROSE_WORDS})`);
    if (a.figures.length < 1 || a.figures.length > 3) errors.push(`${tag}: ${a.figures.length} figures (need 1-3)`);
    for (const p of a.problems) errors.push(`${tag}: ${p}`);
    for (const w of a.warnings) warnings.push(`${tag}: ${w}`);
    for (const fg of a.figures) {
      const want = `${code}-M${pad2(m)}-L${pad2(n)}-`;
      if (!fg.code.startsWith(want)) errors.push(`${tag}: figure ${fg.code} should start with ${want}`);
      if (used.has(fg.code)) errors.push(`${tag}: figure ${fg.code} used twice`);
      used.set(fg.code, tag);
      if (!figs[fg.code]) errors.push(`${tag}: figure ${fg.code} has no spec in figures.json`);
    }
  }

  for (const [fc, spec] of Object.entries(figs)) {
    if (!used.has(fc)) errors.push(`figures.json: ${fc} is never placed in a lesson`);
    for (const k of ['title', 'caption', 'alt', 'type']) if (!spec[k]) errors.push(`figures.json: ${fc} missing "${k}"`);
    const labels = JSON.stringify(spec).match(/"label":"[^"]{60,}"/g);
    if (labels) warnings.push(`figures.json: ${fc} has long labels (${labels.length}); move detail into "sub"`);
    if (render) {
      try {
        const svg = await renderFigure({ code: fc, title: spec.title, alt: spec.alt }, spec);
        const h = Number((svg.match(/height="(\d+(?:\.\d+)?)"/) || [])[1]);
        if (!h || h > 2600) warnings.push(`figures.json: ${fc} renders ${h}px tall - consider splitting`);
      } catch (e) {
        errors.push(`figures.json: ${fc} does not render: ${e.message}`);
      }
    }
  }

  if (Array.isArray(quiz)) {
    if (quiz.length !== QUIZ_SIZE) errors.push(`quiz.json has ${quiz.length} questions (need ${QUIZ_SIZE})`);
    const positions = new Set();
    const seen = new Set();
    const counts = [0, 0, 0, 0];
    const lessonsCovered = new Set();
    quiz.forEach((q, i) => {
      const t = `${q._file} #${i + 1}`;
      if (Number.isInteger(q.correct) && q.correct >= 0 && q.correct <= 3) counts[q.correct]++;
      lessonsCovered.add(q.lesson);
      if (!q.q || words(q.q) < 6) errors.push(`${t}: question too short`);
      if (!Array.isArray(q.options) || q.options.length !== 4 || q.options.some((o) => !String(o).trim())) errors.push(`${t}: needs 4 non-empty options`);
      else if (new Set(q.options.map(norm)).size !== 4) errors.push(`${t}: duplicate options`);
      if (!Number.isInteger(q.correct) || q.correct < 0 || q.correct > 3) errors.push(`${t}: correct must be 0-3`);
      positions.add(q.correct);
      if (!q.explanation || words(q.explanation) < 8) errors.push(`${t}: explanation missing/short`);
      if (!['medium', 'hard'].includes(q.difficulty)) errors.push(`${t}: difficulty must be medium|hard`);
      if (!(q.lesson >= 1 && q.lesson <= bpm.lessons.length)) errors.push(`${t}: lesson must be 1-${bpm.lessons.length}`);
      const fileLesson = (q._file.match(/^l(\d\d)\./) || [])[1];
      if (fileLesson && Number(fileLesson) !== q.lesson) errors.push(`${t}: lesson ${q.lesson} in ${q._file}`);
      if ((q.options || []).some((o) => /all of the above|none of the above/i.test(o))) errors.push(`${t}: no "all/none of the above"`);
      if (seen.has(norm(q.q))) errors.push(`${t}: duplicate question`);
      seen.add(norm(q.q));
    });
    if (quiz.length >= 40) {
      const share = counts.map((c) => c / quiz.length);
      if (share.some((x) => x < 0.15 || x > 0.35)) errors.push(`quiz: correct-answer positions are unbalanced (${counts.join('/')}); each of A-D should be 15-35%`);
    } else if (quiz.length && positions.size < 4) errors.push(`quiz: correct answers use only positions ${[...positions].join(',')}`);
    for (let n = 1; n <= bpm.lessons.length; n++) if (!lessonsCovered.has(n)) errors.push(`quiz: no questions for lesson ${n}`);
  }
  return { errors, warnings, stats };
}

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  const [code, mArg, ...rest] = process.argv.slice(2);
  const asJson = [mArg, ...rest].includes('--json');
  if (!/^C\d\d$/.test(code || '')) {
    console.error('usage: node scripts/curriculum/validate.mjs C05 [module] [--json]');
    process.exit(2);
  }
  const mods = mArg && /^\d+$/.test(mArg)
    ? [Number(mArg)]
    : fs.existsSync(path.join(ROOT, code))
      ? fs.readdirSync(path.join(ROOT, code)).filter((d) => /^m\d\d$/.test(d)).map((d) => Number(d.slice(1)))
      : [];
  let bad = 0;
  const summary = [];
  for (const m of mods) {
    const r = await validateModule(code, m);
    summary.push({ module: m, ...r.stats, errors: r.errors.length, warnings: r.warnings.length });
    if (asJson) continue;
    console.log(`${code} M${pad2(m)}: ${r.errors.length ? 'FAIL' : 'PASS'}  lessons ${r.stats.lessons ?? 0}, prose ${r.stats.prose ?? 0} words, figures ${r.stats.figures ?? 0}, walkthroughs ${r.stats.walkthroughs ?? 0}, quiz ${r.stats.quiz ?? 0}`);
    for (const e of r.errors) console.log(`  ERROR ${e}`);
    for (const w of r.warnings) console.log(`  warn  ${w}`);
    if (r.errors.length) bad++;
  }
  if (asJson) console.log(JSON.stringify(summary));
  if (!mods.length) console.log(`${code}: no module folders yet`);
  process.exit(bad ? 1 : 0);
}
