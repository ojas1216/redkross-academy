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
| C08 | 5/12 PASS (M01-M05); M06 lessons done, bank 110/200; M07 5 partial lessons | M01-M05 | - | M01 (partial preview) | Pilot course for the v2 pipeline. |
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

## Handover state (2026-11-20)

Work stopped at the account's weekly usage limit. Everything below is committed.

**Complete (validate PASS, committed):** C08 M01 SOC operations, M02 Telemetry,
M03 SIEM fundamentals, M04 Log analysis, M05 Alert triage - each 8 lessons
(~26,000 words), 16 figures with walkthroughs, 200-question bank.

**In progress (not integrated; the app still serves C08 v1 until all 12 modules pass):**
- C08 M06 Threat intelligence: all 8 lessons + figures PASS their checks; question bank
  110/200. l01-l03 and l05-l06 quiz files may be partial (agents stopped mid-write):
  re-run QUIZ agents for lessons 1-8 as needed until `validate.mjs C08 6` PASSes
  (l04, l07, l08 have no quiz file yet).
- C08 M07 Detection engineering: l01, l03, l04, l05, l07 drafts exist, some likely cut
  off mid-write; l02, l06, l08 missing; most figure specs missing. Check each file's
  ending, then re-run LESSON agents (AGENT_BRIEF.md) for any lesson not passing.
  Brief notes for M07: do not repeat the kit tag attack.t1685.005 as fact (unverified;
  clearing Windows event logs is T1070.001); review findings to teach: triage.py gives
  R1 severity 3 while rk_office_spawns_shell.yml says level high.
- C08 M08-M12: not started (`node scripts/curriculum/scaffold.mjs C08 8`, then agents).
- C05: 14 lessons drafted in M01-M04; paused (safety-system interruptions on
  attack-procedure content; owner chose defence-first depth and defence-led courses first).

**Per-module workflow:** scaffold.mjs -> 4 LESSON agents (2 lessons each, own scratch
subfolder) -> 4 QUIZ agents (25 questions per lesson) -> `validate.mjs CNN M` PASS ->
fix anything agents flag -> commit. When all 12 modules of a course PASS:
`build.mjs CNN` (renders figures, writes curriculum/build/CNN.json, re-runs the importer),
`npm test`, `npm run build`, API tests, lesson-player check (desktop + mobile), commit.
`build.mjs CNN --partial` previews finished modules locally - never commit its output.

**Open owner decisions (course library LAB_ASSETS, unchanged so far):**
- C08/C20 `rk_security_log_cleared.yml` tag attack.t1685.005 (unverified) -> T1070.001?
- C08 `triage.py` never checks suppression expiry (C08 M05 l05 teaches this as a finding;
  fixing the kit means updating that lesson).
- C08 `minisiem.py load` drops the table before a malformed line aborts the load
  (C08 M02 l08 teaches this as a finding).
- C08 M06 l08 student scripts intel_grade.py / scrub_check.py could be added to the kit.

## Next steps

1. C08 M02: lessons (in progress) -> 4 quiz agents (25 questions per lesson) -> validate.
2. C08 M03-M12 the same way (scaffold.mjs, LESSON agents x4, QUIZ agents x4 per module).
3. When all 12 C08 modules PASS: `build.mjs C08`, full tests, lesson-player check, commit.
4. Then the other defence-led courses: C09, C11, C12, C14, C15, C17, C20, C21, C22,
   then C06, C07, C10, C13, C16, C18; C05 and C19 last (safety-system limits).
