/**
 * v2 question banks and randomised exams (Courses 05-22 and future courses).
 *   node --test tests/test_question_bank_v2.test.mjs
 *
 * 1. The selection engine on a synthetic N-module x 200 bank (no database needed).
 * 2. Integrity of every built v2 course bank (curriculum/build/CNN.json) and of the
 *    generated server specs for those courses.
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { selectFromBank, fromLibrary, publicQuestions } from '../api/_lib/courseRegistry.js';
import { LIBRARY_SPECS, LIBRARY_BANK_LOADERS } from '../api/_data/library/index.js';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const PER_MODULE = 200;

function syntheticBank(modules) {
  const bank = { modules: {}, course: [] };
  for (let m = 1; m <= modules; m++) {
    bank.modules[m] = Array.from({ length: PER_MODULE }, (_, i) => ({
      id: `q_m${m}_${i}`,
      q: `Module ${m} question ${i}: which option is correct?`,
      options: [`right ${m}.${i}`, `wrong a ${m}.${i}`, `wrong b ${m}.${i}`, `wrong c ${m}.${i}`].sort(() => 0.5 - Math.random()),
      correct: 0,
      explanation: 'because',
    }));
    for (const q of bank.modules[m]) q.correct = q.options.findIndex((o) => o.startsWith('right'));
  }
  return bank;
}

for (const n of [6, 8, 10, 12]) {
  test(`module exam: 20 unique questions from its own module only (${n} modules)`, () => {
    const bank = syntheticBank(n);
    for (let m = 1; m <= n; m++) {
      const picked = selectFromBank(bank, { kind: 'module', number: m, count: 20 });
      assert.equal(picked.length, 20);
      assert.equal(new Set(picked.map((q) => q.id)).size, 20);
      assert.ok(picked.every((q) => q.id.startsWith(`q_m${m}_`)), 'no question from another module');
    }
  });

  test(`final exam: 50 unique questions from the combined ${n} x 200 pool`, () => {
    const bank = syntheticBank(n);
    const seenModules = new Set();
    for (let attempt = 0; attempt < 40; attempt++) {
      const picked = selectFromBank(bank, { kind: 'final', selection: 'combined', count: 50 });
      assert.equal(picked.length, 50);
      assert.equal(new Set(picked.map((q) => q.id)).size, 50);
      for (const q of picked) seenModules.add(q.id.split('_')[1]);
    }
    assert.equal(seenModules.size, n, 'across attempts the final draws from every module');
  });
}

test('each attempt gets a fresh selection and order', () => {
  const bank = syntheticBank(12);
  const a = selectFromBank(bank, { kind: 'module', number: 3, count: 20 }).map((q) => q.id);
  const b = selectFromBank(bank, { kind: 'module', number: 3, count: 20 }).map((q) => q.id);
  assert.notDeepEqual(a, b);
  const f1 = selectFromBank(bank, { kind: 'final', selection: 'combined', count: 50 }).map((q) => q.id);
  const f2 = selectFromBank(bank, { kind: 'final', selection: 'combined', count: 50 }).map((q) => q.id);
  assert.notDeepEqual(f1, f2);
});

test('option shuffling keeps the correct answer and the public view has no answers', () => {
  const bank = syntheticBank(2);
  const orders = new Set();
  for (const q of bank.modules[1].slice(0, 60)) {
    const s = fromLibrary(q);
    const correct = s.options.find((o) => o.id === s.correctOptionId);
    assert.ok(correct.text.startsWith('right'), 'correct option id still points at the right text');
    orders.add(s.options.findIndex((o) => o.id === s.correctOptionId));
    const pub = publicQuestions([s])[0];
    assert.deepEqual(Object.keys(pub).sort(), ['id', 'options', 'text', 'topic']);
    for (const o of pub.options) assert.deepEqual(Object.keys(o).sort(), ['id', 'text'], 'options carry no correctness flag');
    assert.ok(!JSON.stringify(pub).includes(s.explanation), 'no explanation in the client payload');
  }
  assert.equal(orders.size, 4, 'the correct option appears in every position across questions');
});

test('duplicates in a bank are never served twice', () => {
  const bank = syntheticBank(1);
  bank.modules[1].push({ ...bank.modules[1][0] }, { ...bank.modules[1][1], id: 'dup_text' });
  for (let i = 0; i < 30; i++) {
    const picked = selectFromBank(bank, { kind: 'module', number: 1, count: 200 });
    assert.equal(new Set(picked.map((q) => q.id)).size, picked.length);
    assert.equal(new Set(picked.map((q) => q.q)).size, picked.length);
  }
});

test('legacy library finals keep their behaviour (selectFromBank defers)', () => {
  assert.equal(selectFromBank(syntheticBank(2), { kind: 'final', count: 40, fromModules: 20 }), null);
});

// ------------------------------------------------------------ built v2 courses
const buildDir = path.join(ROOT, 'curriculum', 'build');
const built = fs.existsSync(buildDir) ? fs.readdirSync(buildDir).filter((f) => /^C\d\d\.json$/.test(f)) : [];

for (const file of built) {
  const v2 = JSON.parse(fs.readFileSync(path.join(buildDir, file), 'utf8'));
  const code = v2.code;
  const blueprint = JSON.parse(fs.readFileSync(path.join(ROOT, 'curriculum', 'blueprint', `${code}.json`), 'utf8'));

  test(`${code}: every module bank has exactly 200 valid, unique questions`, () => {
    assert.equal(v2.modules.length, blueprint.modules.length);
    const ids = new Set();
    const texts = new Set();
    let total = 0;
    for (const m of blueprint.modules) {
      const qs = v2.bank[m.n];
      assert.ok(Array.isArray(qs), `module ${m.n} has a bank`);
      assert.equal(qs.length, PER_MODULE, `module ${m.n} has ${qs.length} questions`);
      for (const q of qs) {
        assert.ok(!ids.has(q.id), `duplicate id ${q.id}`);
        ids.add(q.id);
        const t = q.q.toLowerCase().replace(/\s+/g, ' ').trim();
        assert.ok(!texts.has(t), `duplicate question text in ${code}: ${q.q.slice(0, 60)}`);
        texts.add(t);
        assert.equal(q.options.length, 4);
        assert.equal(new Set(q.options).size, 4);
        assert.ok(Number.isInteger(q.correct) && q.correct >= 0 && q.correct <= 3);
        assert.ok(q.explanation && q.explanation.trim().length > 0);
        assert.ok(q.topic.startsWith(`${code}-M${String(m.n).padStart(2, '0')}`), `${q.id} maps to its module`);
      }
      total += qs.length;
    }
    assert.equal(total, PER_MODULE * blueprint.modules.length);
  });

  test(`${code}: server spec serves 20 per module exam and 50 from the combined pool`, async () => {
    const spec = LIBRARY_SPECS.find((s) => s.code === code);
    assert.ok(spec, `${code} is registered`);
    assert.equal(spec.modules.length, blueprint.modules.length);
    for (const m of spec.modules) assert.equal(m.count, 20);
    assert.equal(spec.final.selection, 'combined');
    assert.equal(spec.final.count, 50);
    const bank = (await LIBRARY_BANK_LOADERS[spec.id]()).default;
    const final = selectFromBank(bank, { kind: 'final', ...spec.final });
    assert.equal(final.length, 50);
  });
}
