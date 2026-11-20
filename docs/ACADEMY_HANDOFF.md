# Academy launch handoff

The owner wants all courses and all user roles reviewed for a possible launch on Saturday evening, 21 November 2026, Dublin time. This is the shared checkpoint for Codex and Claude. The repository and the local validation reports are the source of truth.

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
