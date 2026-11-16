# Briefs for content agents

Work is split into small units so that no agent has to produce a whole module in one
run: a LESSON agent writes 2 lessons (or 1), a QUIZ agent writes the module quiz after
all lessons exist. The coordinator writes `module.json` (or a lesson agent fills in the
lesson entries it owns) and runs the final validation.

Repository root: `c:\Users\Mario\Desktop\Course_Content\redkross-academy-main\redkross-academy-main`

---

## LESSON agent

You are writing lesson(s) {LESSONS} of Module {MODULE} of RedKross Academy course
{COURSE} ("{COURSE_TITLE}", course id `{COURSE_ID}`).

1. Read `curriculum/AUTHORING_GUIDE.md` and `curriculum/DIAGRAM_SPECS.md` completely.
2. Read `curriculum/blueprint/{COURSE}.json` (module {MODULE}) and, if it exists,
   `curriculum/{COURSE}/m{MM}/module.json` and the module's other finished lessons, so
   your lessons fit the module and do not repeat what neighbouring lessons cover.
3. Study the presentation benchmark: `curriculum/C05/m01/l01.md` (the approved pilot
   lesson) for tone, depth, structure and walkthrough style.
4. Gather source material for YOUR lesson topics (search, do not read everything):
   `public/course-content/{COURSE_ID}/` (existing v1 lessons),
   `../../RedKross_Academy_Complete_Cybersecurity_Course_Library/LAB_ASSETS/{COURSE}/`
   (lab scripts and their real `*_output.txt` outputs) and
   `../../RedKross_Academy_Complete_Cybersecurity_Course_Library/COURSE_{NN}_*.txt`.
5. For each lesson NN you own, write:
   - `curriculum/{COURSE}/m{MM}/lNN.md` - 2,200-3,500 words of prose, 1-2 diagrams
     (2 where the lesson has two distinct mechanisms), each placeholder followed by
     `### Visual Walkthrough & Architectural Breakdown` (300-600 words).
   - `curriculum/{COURSE}/m{MM}/lNN.figures.json` - the specs for that lesson's figures
     only (codes `{COURSE}-M{MM}-LNN-F1`, ...). Labels must match what the walkthrough says.
   Write the lesson file in two or three chunks (create it, then append sections) rather
   than one huge write.
6. If `module.json` exists, update ONLY your lessons' entries in its `lessons` array
   (summary, objectives, minutes); do not touch other entries.
7. Check your lessons: `node scripts/curriculum/validate.mjs {COURSE} {MODULE}` and fix
   every ERROR and warn that mentions YOUR lessons or figure files (errors about other
   lessons or quiz.json are not yours). Then
   `node scripts/curriculum/build.mjs {COURSE} --module {MODULE} --preview` must succeed.

Write ONLY your own `lNN.md` / `lNN.figures.json` files (and your entries in
`module.json`). Never run or modify anything inside the course library or LAB_ASSETS
folder: copy the kit to your own temporary directory first and run scripts there. Other
agents share the scratch area, so always work in a subfolder named after your course,
module and lessons (e.g. `c08_m04_l07-08/`), never directly in the shared folder. Do not commit. Accuracy over volume: never invent tool output, flags,
CVEs or standard clauses; use the lab kit's real outputs. Defensive, authorised-lab
framing for every offensive technique.

Final reply (under 10 lines): per lesson, prose words and figure count; facts you were
unsure about and left out.

---

## QUIZ agent

You write the question-bank share for lesson(s) {LESSONS} of Module {MODULE} of course
{COURSE}: {COUNT} questions per lesson. Read `curriculum/AUTHORING_GUIDE.md` section 7 and
the "Defence-first depth" rules, then each lesson you own in `curriculum/{COURSE}/m{MM}/`.
Write `curriculum/{COURSE}/m{MM}/lNN.quiz.json` for each of your lessons (write in batches
of about 10 questions, appending, not one huge write). Then run
`node scripts/curriculum/validate.mjs {COURSE} {MODULE}` and fix every error that names your
files (errors about other lessons' files are not yours). Write only your lNN.quiz.json files.
Final reply: questions written per lesson, hard/medium split, the validator line.
