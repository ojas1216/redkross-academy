# Academy launch handoff

The owner wants all courses and all user roles reviewed for a possible launch on Saturday evening, 21 November 2026, Dublin time. This is the shared checkpoint for Codex and Claude. The repository and the local validation reports are the source of truth.

## 21 November, cross-role checks and 01:30 Claude assignment

The local production build passes. All 2,156 active catalog lesson records across 28 course definitions resolve to nonempty text. The catalog audit checked 932 local image references counted once per course, with no missing files or duplicate lesson IDs. Automated checks do not establish factual accuracy or diagram meaning. Only 93 lesson bodies contained an external URL of any kind.

The fresh PostgreSQL run passed all 127 checks (41 account, assessment and credential checks, 72 admin, cohort and access-code checks, and 14 proctoring checks). The production client bundle audit passed on 2,091 files. The C01?C04 figure regression passed on all 182 lessons. The files catalog-verification.json, production-build.log and browser reports are in the sibling Academy_Launch_Review_2026-11-20 folder.

Codex integrated Claude's six introductory psychology course definitions, verified sources covering CBT, psychological first aid, mindfulness, neuroscience, exam stress and forensic human factors, corrected the player?s Markdown reading and study-note export, and replaced the public course pages? invented clinical examinations and accreditation statements. Enrolment remains subject to the existing release settings. Each psychology course has written self-checks and no graded final. A clinical or safeguarding review for public release is outstanding.

The cyber syllabus now displays the configured quiz count, pass score and actual lesson duration. Signed-in provider sign-in, mail delivery, production release configuration, existing learner migration and the remaining course-by-course factual reviews remain open. C09 M01 is partial. The other 17 C05?C22 courses still serve the v1 curriculum.

Claude's one-time restart at 01:30 Dublin reads the current copy of this file and curriculum/PROGRESS.md. Its isolated directory is Academy_Launch_Review_2026-11-20/0130-dfir. Claude owns C09 M01 L05 chain of custody and L06 documentation in that folder. Read job.log, CLAUDE-STATUS.md and claude.log before taking over. Codex owns combining and testing the staged work. Updates outside these two lessons belong in this shared file.

### Classroom and admin browser verification

Codex exercised all 96 C08 lessons and the M12 exam preflight at 1280 and 390 pixels, then all eight psychology lessons and their downloadable Markdown notes at both widths. Public catalog and all six psychology course detail routes passed at both widths. The admin browser fixture used snapshots from a fresh PostgreSQL test database and covered 11 real admin sections. It exposed a 642-pixel overview card on a 390-pixel screen. The card now fits and all 22 admin route/width combinations passed. These browser fixtures use synthetic roles. The real provider sign-in is a separate owner-assisted check.

All 585 referenced SVG files were measured in Edge. None of the 10,042 visible SVG text labels extended past the canvas by more than the 3-pixel tolerance. This measurement does not check the meaning of a diagram or labels overlapping each other. See diagram-geometry.json, c08-browser.log, role-browser.log and public-browser.log.

Codex has started C09 M02. The imaging concepts lesson is 2,202 prose words plus a 338-word diagram walkthrough. The lesson distinguishes file exports from volume and device captures and explains the limits of digest verification. The specific lab transcript matches the original C09 kit. Leave M02 with Codex. The 01:30 Claude task owns M01 L05/L06 only.

## 20 November, current work

| Area | Owner | State and evidence |
| --- | --- | --- |
| C08 content | Codex and Claude | All 12 modules integrated locally. The full validator passed for 96 lessons, 163 figures and 2,400 questions. Claude wrote the eight Threat Hunting lessons, diagrams and banks. Codex checked the original Banyan data, revised the learner text and integrated the course. |
| C08 independent review | Claude | Done. REVIEW.md (C08_Claude_Staging_2026-11-20/independent-review) found 9 issues in M10 l03/l08; all were re-checked against the shipped banyan_events.jsonl and applied by Claude on 20 Nov: full-path Office filter (lower(basename(...))), url-not-domain note, WS-104 Windows rows 4720/4732/1102 added, Case 3 burst 06:42:00-06:42:49Z with gopal at 06:42:42Z, gopal 13:33Z row listed, Case 4 reason corrected, minute-resolution gap wording, definite same-day baseline and 298-302 s beacon interval, expected-outcomes sentence, pseudocode join order, and one quiz explanation. M10 validates; C08 rebuilt. |
| Student, admin and developer QA | Codex | Production build, library integrity, live local PostgreSQL handler tests and headless browser checks are running against the integration. Use the logs before reporting their results. |
| Wider catalog | Codex | The application catalog contains 22 cyber courses and six psychology courses. The six psychology entries have eight lesson records between them. Their content format, public claims, assessments and existing release state need separate checks. C08 is the only completed v2 library rebuild. |
| Wider editorial and diagram QA | Claude | Take a separate pass over the supplied catalog and diagram inventory in the review workspace. Report verified findings, coverage, remaining work, and the evidence needed for launch. |
| Production | Owner and developer | Historical launch checklist in docs/LAUNCH_READINESS.md. Live sign-in, delivery, account configuration, data migration, existing learner credit and production publishing require environment-specific evidence. |

## Work locations and continuity

The Academy root is redkross-academy-main/redkross-academy-main inside the Course_Content workspace. C08_Academy_Validation_2026-11-20 beside the repository contains test drivers, output and the clean GitHub reference at ae58ba1. C08_Claude_Staging_2026-11-20 contains Claude's M10 authoring status and independent-review/REVIEW.md. Academy_Launch_Review_2026-11-20 contains the broader review and its shared checkpoint.

After each milestone, record the files changed, the command or source that verifies the result, any failure and the next owner's concrete action. A running process or a written draft is not a passing test. Keep private server banks and credentials outside public assets. Use the private GitHub main as the base for distribution. Local historical Git objects predate credential scrubbing.

## Handoff if a session stops

Read this file, curriculum/PROGRESS.md, the current Claude STATUS and REVIEW files, and the most recent validation logs. Inspect git status before editing. Resume the first unfinished check. Keep review work local and record a checkpoint before stopping. A rate-limit reset alone does not start an agent.

## 20 November, Claude update after Codex hand-off

- C08 integrated and pushed to the private GitHub main (CI green): all 12 modules pass
  `validate.mjs C08`; `npm test`, `npm run build`, `npm run audit:bundle` pass; API tests on
  a fresh PostgreSQL DB pass 127/127 with C08 v2 exams (20 per module, 50 final); all 96
  lessons rendered through the app's markdown parser (163 images, 0 broken).
- M10 independent-review corrections applied (see table above) and C08 rebuilt.
- Still open for Codex: test the drop-in psychologyCourses.js (Academy_Launch_Review_2026-11-20,
  CLAUDE-CHECKPOINT.md milestones 3-4); the wider editorial and diagram QA pass; a signed-in
  browser pass of the real lesson player and one real exam; production items in LAUNCH_READINESS.md.
- Agent capacity: the account hit its monthly spend limit at about 20:30 Dublin on 20 Nov, so
  Claude sub-agents cannot run until it is raised or resets.

## 20 November, Claude: course quality assessment and diagram work

Owner instruction (20 Nov): change content only where a course is genuinely weak; otherwise
leave content alone and concentrate on diagrams.

Measured with a read-only audit (lesson words, images, broken paths, ASCII/raw markup):

| Course | Avg words/lesson | Lessons without a figure | Verdict |
| --- | --- | --- | --- |
| C01 | ~2,745 | 0 | Strong - content unchanged |
| C02 | ~790 | 0 (was 8) | Fine - content unchanged; diagrams upgraded (below) |
| C03 | ~1,160 | 0 | Strong - unchanged |
| C04 | ~1,040 | 0 | Strong - unchanged |
| C08 | ~4,090 (v2) | 0 | Rebuilt v2 - done |
| C05-C07, C09-C22 (library v1) | ~160-250 | 102 of 110 each | **Weak**: lessons are short summaries; diagrams exist only in each module's "Visual guide" lesson. These are the courses that need the v2 rebuild (curriculum/AUTHORING_GUIDE.md, AGENT_BRIEF.md, PROGRESS.md workflow). |

Diagram work done (no lesson text changed):
- C01 (1) and C02 (12) Mermaid diagrams replaced by designed SVGs rendered with
  scripts/figures/render.mjs (specs: scripts/figures/specs/legacy.mjs, converter:
  scripts/figures/convert_legacy_mermaid.mjs, output public/assets/courses/cyber-0N/designed/).
  Each shows exactly what the Mermaid source showed; captions and walkthroughs unchanged.
  No ```mermaid block remains in src/services/db. tests/test_figure_rendering_audit.mjs:
  182/182 lessons with figures (was 174).
- render.mjs: `flow` loop.to now works in left-to-right flows too.

Next for whoever continues: rebuild the weak library courses one at a time (defence-led
order in PROGRESS.md). Claude sub-agents are blocked by the account's monthly spend limit
(20 Nov ~20:30 Dublin) until it is raised or resets.

Local review instance: API `node server/productionServer.js` (port 3000, local Postgres
container rk-academy-pg) + Vite on http://localhost:5173.

## 21 November, Claude: C09 M01 L05/L06 checked after the 01:30 job

The 01:30 job wrote both lessons, four figure specs, two 25-question banks and module entries in
Academy_Launch_Review_2026-11-20/0130-dfir, but it ran without a shell and validated nothing.
Claude then checked them with the repo validator's own `analyseLesson`, the figure renderer and the
per-question rules. L05 has 3,501 prose words and L06 has 2,905. All four walkthroughs have 447-504 words.
Both lessons have no lesson problems and no quiz format errors. The answer positions are 6/6/7/6 and
6/6/6/7. The correct option is uniquely the longest in 1/25 (L05) and 10/25 (L06) questions. All four SVGs were viewed in headless Edge.
The full table and integration steps are in that folder's CLAUDE-STATUS.md.

Renderer fix: in a multi-row `tree`, later rows looked like children of row 1. The trunk now
runs unbroken from the root through the centre gap when the row above has an even count
(scripts/figures/render.mjs layoutTree). No published figure changes. `npm test` passes and
`validate.mjs C08 1` passes.

Next (Codex): copy the six files into curriculum/C09/m01, merge module-entries.json as lessons
5-6, and validate M01 once L01-L04, L07 and L08 exist. Claude has not touched curriculum/C09/m02.

## 21 November, Claude: cross-course relevance audit (all 28 courses, read-only)

Method (scripts in the Claude scratchpad, read-only): every lesson of C01-C22 and P01-P06 (2,113)
and every module question (17,700) extracted; TF-IDF relevance of each lesson to its own title
and course; near-duplicate and boilerplate detection; each question scored against the lessons
of its own module (calibrated on C08, whose banks were written from its lessons); real exam
draws simulated through api/_lib/courseRegistry.js generateQuestions. Flagged items were read by hand.

Findings, worst first:
1. **C03 exams repeat the same question.** C03 module banks hold 4-12 distinct questions padded
   to 200 (M3-M8: 4 each). A simulated module exam serves 2-3 distinct questions in 20 (one
   question appeared 5 times in a row); the final serves ~17 distinct in 50. C01 is similar:
   5-20 distinct per module, 5-8 distinct per 20-question exam, ~33 in the final. C02 M5-M8
   serve 10-14 distinct in 20. C04 and all library banks are fully distinct. The server's
   `unique()` only removes identical stems; templated stems differ by an inserted phrase.
2. **C01 Module 3 L3-L7 and Module 4 L3-L6: lesson titles do not match the lesson content**,
   and the M3/M4 banks test the titles. E.g. "3.3 Ransomware" teaches social engineering, "3.4
   Social Engineering" teaches DDoS, "3.5 Insider Threats" teaches CTI/OSINT and the Pyramid of
   Pain, "3.6 APTs" teaches MITRE ATT&CK, "3.7 Supply Chain" teaches threat reports; "4.3 STRIDE
   & PASTA" has no STRIDE or PASTA (STRIDE appears once in the whole course although it is an
   advertised skill), "4.4 Zero-Day" teaches risk calibration. The content itself is coherent
   (its own bridges name the real sequence). 35% of C01 questions are weakly supported by their
   module (C08 benchmark 5%); M1 is 76%, because its bank is written at an advanced level.
3. C03: the same two-paragraph OS introduction is pasted at the top of all 48 lessons.
4. C05-C22 v1 (except C08): lessons are short but on-topic and accurate where spot-checked;
   101 topic lessons have under 80 prose words and 96 keep their teaching prose in ```text
   blocks (monospace, does not wrap); module banks have 10 questions, so the 200-per-module /
   20-per-exam spec is met only by C01-C04 (by padding) and C08. Questions are well supported
   by their lessons (0-5% weak). Cross-course overlap (e.g. C07 M6 Wi-Fi vs C16) is normal
   overlap, not misplacement. The C09 "Course glossary" lists terms only and points to module
   glossaries.
5. P02-P06 are single ~500-word lessons; P01 has three.

Not changed by this audit. Recommended order: (a) C03 and C01 banks rewritten to distinct
questions drawn from their lessons, and until then a server guard that never serves two
questions with the same correct answer in one attempt; (b) C01 M3/M4 retitled to match the
content (titles, lesson summaries, "Visual Model" captions) and either STRIDE/ransomware/insider
/supply-chain lessons added or removed from the course's advertised skills; (c) C03 shared intro
trimmed; (d) the v1 rebuild queue as already planned.

## 21 November (afternoon), Claude: fixes after the audit, C09 progress, push

- **Exam guard (api/_lib/courseRegistry.js):** a legacy-course attempt never serves the same
  question twice (distinct by stem and by correct answer; redraws up to 12 times). C01 and C03
  module exams are therefore SHORT (C03: 3-10 questions; C01: 5-20) until their banks are
  rewritten with distinct questions. That rewrite (C03 all 8 modules, C01 all 6, C02 M1/M5-M8)
  is the next content task. C02/C04 exams are full (20/20).
- **C03:** the two-paragraph OS introduction pasted into all 48 lessons now appears only in
  lesson 1.1 (scripts/curriculum/dedupe_c03_intro.mjs, idempotent). No other text changed.
- **C01 M3/M4 retitle: NOT done yet.** Proposed titles (content unchanged): 3.3 Social Engineering
  & Phishing; 3.4 Denial of Service & DDoS; 3.5 Threat Intelligence & OSINT; 3.6 The MITRE ATT&CK
  Framework; 3.7 Reading and Writing Threat Reports; 4.3 Risk Registers & Risk Frameworks; 4.4
  Calibrating Likelihood & Impact; 4.5 Qualitative vs Quantitative Risk Analysis; 4.6 Risk
  Treatment & Continuous Risk Management. Titles live only in src/services/db/curriculum/module3.js
  and module4.js (lesson title + image titles). The M3/M4 banks must be rewritten to match.
  Also: C01 4.4 likelihood scale row "4 Likely, 1-12 (Monthly to Weekly)" - 1-12/year is yearly to monthly.
- **Renderer (scripts/figures/render.mjs):** dark `segments` sub-labels now readable (fixes
  C08-M02-L04-F1, rebuilt with --no-import; only that SVG changed); flow `loop.from` (documented
  in DIAGRAM_SPECS.md); a short LR loop puts its label under the line. Known gap: `table` header
  widths ignore header text, so long headers can collide - keep headers short.
- **C09 M01 complete:** Claude finished L01 (forensic principles, 3,130 words), L03 (order of
  volatility, 3,024) and wrote L04 (legal handling in India, 2,559: BSA s.57/61/63 + Schedule
  certificate, BNSS s.94/105/176(3), IT Act s.70B/79A, CERT-In 2022 directions, DPDP; no legal
  conclusions). Each has 2 figures viewed in Edge and 25 questions. `validate.mjs C09 1` PASS.
  Legal text should get a counsel/second-reader check before public release.
- **C09 M02 L04/L05** (from dfir-continuation) validated, figures viewed, hashes checked
  verbatim against the original transcript, integrated with metadata. L04-F2 restructured
  (single comparison node) and its walkthrough updated. L04 prose is 4,508 words.
- Verified on this state: npm test PASS; npm run build PASS; audit:bundle PASS; API tests on a
  fresh rk_test with scripts/schema.sql + ALL scripts/migrations/*.sql: 41 + 88 + 14 = 143 PASS.

## 21 November (evening), Claude: C01 and C03 question banks rebuilt (free courses)

- Banks are now genuinely distinct: 30 questions per module (C03 8 x 30, C01 6 x 30), at least
  10 medium and 10 difficult each, no repeated stem or correct answer, answer positions balanced
  8/8/7/7, correct option uniquely longest in at most 12/30 (40%). Written from each module's
  lessons; C03 keeps the 4-12 distinct old questions per module; C01 M1-M5 old questions were
  dropped (spliced templates testing topics the lessons do not teach); C01 M6 keeps its 20.
- Source of truth: curriculum/legacy_banks/<C01|C03>/mNN.json; build with
  `node scripts/curriculum/build_legacy_banks.mjs C01|C03` (`--check` dry-run, `--longest` lists
  length-biased items; `patch` maps even out option lengths). It overwrites the moduleNQuestionBank.js
  files. Do NOT run the old scripts/build_course03_quizzes.mjs, build_moduleN_bank.mjs or
  build_course03*.mjs: they regenerate the padded 200-question banks.
- Exam simulation through api/_lib/courseRegistry.js: every C01-C04 module exam serves 20/20
  distinct questions; finals 50/50 (C01-C03) and 60/60 (C04).
- C01 retitled (content unchanged): 3.3 Social Engineering & Phishing, 3.4 Denial of Service & DDoS,
  3.5 Threat Intelligence & OSINT, 3.6 The MITRE ATT&CK Framework, 3.7 Reading and Writing Threat
  Reports, 4.3 Risk Registers & Risk Frameworks, 4.4 Calibrating Likelihood & Impact, 4.5 Qualitative
  vs Quantitative Risk Analysis, 4.6 Risk Treatment & Continuous Risk Management. Module 3/4
  descriptions, the course skills/overview and the public course card no longer claim STRIDE.
  4.4 likelihood scale fixed: 1-12 events/year is "Yearly to Monthly".
- tests/unit_test_question_banks.mjs now requires >= 20 distinct questions per bank (>= 10 per
  difficulty, no repeated stems/answers) instead of exactly 200: 53/53 pass.
- Verified: npm test PASS; build PASS; audit:bundle PASS; API 41 + 88 + 14 = 143 PASS on a fresh
  rk_test (schema + all migrations). Pre-existing, unrelated: tests/challenger_m2_stress_test.mjs
  reads a hard-coded path from another machine.
- Optional later: C02 M1/M5-M8 banks are partly templated (still serve 20 distinct per exam).

## 21 November, Claude: ANTIGRAVITY.md onboarding file

A new developer, working with the Antigravity editor, joins the project. The root file `ANTIGRAVITY.md` is their single starting point: stack, run and test commands, repository map, rules, done and remaining work with file pointers and acceptance checks. Keep it current when priorities change.

## 21 November, Claude: developer repository compared (Atharv-design/redkross-academy)

Its `main` (c81dd28, 14 November) is already contained in ours. The five 14 November fixes were replayed here (feb78cf, d780538, 6ed813b, 5c269c3 adapted, dcc1488), and `atharv-backup` is older. There is no shared git history. Of the 1,160 differing files, ours is the newer version in every case checked. The 110 old C08 lesson files that exist only there were deleted on purpose.

**Security:** that repository is PUBLIC and its history contains a Neon password, Firebase keys and an apparent Resend key. The owner must rotate them and make it private or archive it. Our repository is also public; its history is scrubbed, and only the public Firebase web key remains.

ANTIGRAVITY.md section 0 now explains how to combine: clone this repository, bring over later work with format-patch and `git am -3`, keep our version for the listed files, never use `--allow-unrelated-histories`, and open a pull request.
