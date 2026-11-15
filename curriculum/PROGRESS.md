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
| C08 | 1/12 (M01 PASS), M02 lessons in progress | M01 | - | M01 (partial preview) | Pilot course for the v2 pipeline. |
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

## Next steps

1. C08 M02: lessons (in progress) -> 4 quiz agents (25 questions per lesson) -> validate.
2. C08 M03-M12 the same way (scaffold.mjs, LESSON agents x4, QUIZ agents x4 per module).
3. When all 12 C08 modules PASS: `build.mjs C08`, full tests, lesson-player check, commit.
4. Then the other defence-led courses: C09, C11, C12, C14, C15, C17, C20, C21, C22,
   then C06, C07, C10, C13, C16, C18; C05 and C19 last (safety-system limits).
