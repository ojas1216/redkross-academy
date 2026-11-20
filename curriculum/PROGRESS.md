# v2 curriculum progress

Started 2026-11-15. Work order: C05 -> C22, one course at a time; a course is marked
complete only after `validate.mjs` passes for all 12 modules, `build.mjs` integrates it,
the production build and tests pass, and lessons from every module were inspected in
the lesson player (desktop + mobile).

## Status

| Course | Modules written | Validated | Integrated | Browser-verified | Notes |
| --- | --- | --- | --- | --- | --- |
| C05 | 0/12 (14 lessons written) | - | - | - | Attack-oriented: 5 lessons stopped by the safety system (M01 l03-l05, M02 l03, M03 l02, M04 l05); paused, defence-led courses first (owner decision 2026-11-15). |
| C06 | 0/12 | - | - | - | |
| C07 | 0/12 | - | - | - | |
| C08 | 12/12 | 12/12 PASS | Yes (curriculum/build/C08.json) | 96/96 lessons render; API exam checks pass | First v2 course. M09-M12 lessons are shorter (16-19k words/module, 1 figure per lesson) than M01-M08 (~26k, 2 figures). |
| C09 | 0/12 | - | - | - | |
| C10 | 0/12 | - | - | - | |
| C11 | 0/12 | - | - | - | |
| C12 | 0/12 | - | - | - | |
| C13 | 0/12 | - | - | - | |
| C14 | 0/12 | - | - | - | |
| C15 | 0/12 | - | - | - | |
| C16 | 0/12 | - | - | - | |
| C17 | 0/12 | - | - | - | |
| C18 | 0/12 | - | - | - | |
| C19 | 0/12 | - | - | - | |
| C20 | 0/12 | - | - | - | |
| C21 | 0/12 | - | - | - | |
| C22 | 0/12 | - | - | - | |

## Completion records

(one section per completed course: module/lesson/figure/walkthrough counts, asset
inventory check, rendering checks, screenshots, build + test results)

### Module checks so far

- **C08 M01 SOC operations** (2026-11-15): validate PASS - 8 lessons, 26,149 words of
  prose, 16 figures, 16 walkthroughs, 200-question bank (25 per lesson, ~45% hard,
  answer positions balanced). Partial preview build (`build.mjs C08 --partial`, not
  committed): all 8 lessons rendered with the app's markdown parser and the lesson-player
  container - 2 images each, figure numbers and captions present, no raw placeholders /
  fences / headings / callout markers, notes background rgb(5,5,5); desktop 1280px and
  emulated 390px mobile checked (no page overflow; tables scroll inside their container).
  Exam engine on the real bank: 20 questions per module attempt from the 200, fresh per
  attempt, no answer data in the client payload.

## Handover state (2026-11-20, updated by Claude after Codex + staging job)

**C08 SOC Analyst is complete and integrated** (the app serves the v2 course).
- All 12 modules pass `validate.mjs C08` (8 lessons, figures with walkthroughs and a
  200-question bank each; correct-option-longest rate under 40% everywhere).
- Authors: Claude agents M01-M08 (+ Codex question-bank revisions M02-M05), Codex M09,
  M11, M12, staging Claude job M10 (copied in and validated by Codex).
- `build.mjs C08` output is current (curriculum/build/C08.json newer than all sources).
- Verification run 2026-11-20: `npm test` (incl. node:test v2 bank tests: 12x200,
  20/50 exam draws) PASS; `npm run build` PASS; `npm run audit:bundle` PASS;
  API tests on a fresh PostgreSQL DB 127/127 PASS with C08 v2 (12 module quizzes of
  20, final of 50, credential, wallet); all 96 lessons rendered through the app's
  markdown parser + lesson-player container: 163 images, 0 broken, every figure
  followed by its walkthrough, no raw placeholders / fences / callout markers.
- M10 independent review (9 findings) re-checked against the shipped dataset and applied;
  C08 rebuilt afterwards.
- Still worth doing: a signed-in pass through the real lesson player and a real exam in the browser.

**Next course:** pick from the defence-led list below; the per-module workflow is unchanged.
C05 (14 drafted lessons in M01-M04) stays paused.

**Per-module workflow:** scaffold.mjs -> 4 LESSON agents (2 lessons each, own scratch
subfolder) -> 4 QUIZ agents (25 questions per lesson) -> `validate.mjs CNN M` PASS ->
fix anything agents flag -> commit. When all 12 modules of a course PASS:
`build.mjs CNN` (renders figures, writes curriculum/build/CNN.json, re-runs the importer),
`npm test`, `npm run build`, API tests, lesson-player check (desktop + mobile), commit.
`build.mjs CNN --partial` previews finished modules locally - never commit its output.

**Open owner decisions (course library LAB_ASSETS, unchanged so far):**
- RESOLVED: the C08/C20 kit tag attack.t1685.005 is correct for the current ATT&CK release (pySigma 2.1.0 accepts it and rejects t1070.001; the course library text documents the restructure). C08 lessons are being aligned to T1685.005 (formerly T1070.001). No kit change needed.
- C08 `triage.py` never checks suppression expiry (C08 M05 l05 teaches this as a finding;
  fixing the kit means updating that lesson).
- C08 `minisiem.py load` drops the table before a malformed line aborts the load
  (C08 M02 l08 teaches this as a finding).
- C08 M06 l08 student scripts intel_grade.py / scrub_check.py could be added to the kit.

## Validation during the handoff

- C08 M01-M09 and M11-M12 pass the full structural and diagram validator.
- Platform unit tests and TypeScript check pass.
- Fresh local PostgreSQL 16 migration and 127 API checks pass: 41 core API,
  72 admin/cohort/access-code and 14 proctoring checks. Test identities were
  generated locally and Firebase token checks used the suite's stub.
- Re-run the checks after integrating all 12 modules. Full C08 v2 lesson-player
  and authenticated exam checks remain pending.

Claude's staging folder is `../../C08_Claude_Staging_2026-11-20` from the repo
root. Check `job-status.log`, then `claude-output.log` and `output/STATUS.md`.
The job writes staged M10 files only. Copy only reviewed curriculum files into
`curriculum/C08/m10/` and validate them. Keep the current draft files intact
if the job is interrupted or reports a quota error.

## Next steps

1. Finish M10 using the approved defensive lab environment. Review Claude's staged files before importing them.
   Run `node scripts/curriculum/validate.mjs C08` to verify all twelve modules.
2. Integrate the course with `node scripts/curriculum/build.mjs C08`. Run platform
   tests, API tests, production build and bundle audit. Check lessons and exams in
   the desktop and mobile player before distributing the updated course.

## Resume checkpoint, 20 November 2026

- Codex completed M09, M11 and M12. Each has 8 authored lessons, rendered diagrams,
  and 200 assessment questions. M09's fixture script and M11's simulator were run
  and the displayed outputs verified. Both M12 detection fixtures were also run.
  M01-M09 and M11-M12 pass the curriculum validator, with 2,200 unique stems.
- M10 remains assigned to Claude. A local job is queued for 20:30:20 Dublin time
  in the sibling `C08_Claude_Staging_2026-11-20` folder. Keep Codex work outside
  that stage so it can run independently. Check `job-status.log`, then inspect
  Claude's staged files and `output/STATUS.md` before copying anything to the repo.
- Codex completed M12. The capstone uses a second
  fictional company, Harbourline Finance, with three cases: FIN-21 unusual
  workstation activity, STAFF-382 suspicious VPN authentication, and OPS-03
  approved log maintenance. Use only the supplied paper records or local mocks.
- Current build still serves C08 v1. Current production bundle build, answer/secret
  audit, desktop and mobile catalog/C08 route smoke tests, and all 127 real-Postgres
  API checks have passed. All 88 lesson previews for M01-M09 and M11-M12 passed at 1280 and 390
  pixels, including figure loading, overflow and runtime checks. Actual v2
  selector checks covered 2,200 private answer mappings and public payloads.
  Repeat integrated checks once M10 passes.
- The API integration test accepts the correct expectations for both catalog
  versions. C08 v1 serves eight modules, ten questions for its first module and
  forty for its final. A C08 v2 build must serve twelve modules, twenty questions
  for its first module and fifty for its final.
- Full integration keeps existing quiz identifiers. The new lesson identities
  reflect a reorganised course. A production cutover decision should account
  for how existing learner progress is presented across the two curricula.
- Stage state is local. Historical local Git commits predate credential scrubbing;
  use the private remote's clean history if an authorised push is requested.
  Do not distribute the local .git folder or the historical bundle.
