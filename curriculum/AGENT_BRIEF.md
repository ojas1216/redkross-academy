# Brief for a module-writing agent

(The coordinator fills in COURSE, MODULE and the course id, then gives this text to one
agent per module. Each agent owns exactly one folder.)

---

You are writing Module {MODULE} of RedKross Academy course {COURSE} ("{COURSE_TITLE}"),
course id `{COURSE_ID}`. Repository root:
`c:\Users\Mario\Desktop\Course_Content\redkross-academy-main\redkross-academy-main`.

1. Read `curriculum/AUTHORING_GUIDE.md` and `curriculum/DIAGRAM_SPECS.md` completely.
2. Read the module's structure in `curriculum/blueprint/{COURSE}.json` (module {MODULE}):
   the module title and its 8 lesson titles, in order, are fixed.
3. Study the presentation benchmark: one lesson of
   `src/services/db/course04/modules/module2.js` (read ~300 lines) for tone, depth,
   headings, callouts, code blocks and walkthrough style.
4. Gather source material for THIS module's topics (search, do not read everything):
   - `public/course-content/{COURSE_ID}/` (existing v1 lessons of this course),
   - `../../RedKross_Academy_Complete_Cybersecurity_Course_Library/LAB_ASSETS/{COURSE}/`
     (lab scripts and their real `*_output.txt` outputs),
   - `../../RedKross_Academy_Complete_Cybersecurity_Course_Library/COURSE_{NN}_*.txt`.
5. Write `curriculum/{COURSE}/m{MM}/`: `module.json`, `l01.md` ... `l08.md`,
   `figures.json`, `quiz.json` exactly as the guide specifies. Every lesson: 2,200-3,500
   words of prose, 1-2 diagrams (2 where the lesson has two distinct mechanisms), each
   followed by its `### Visual Walkthrough & Architectural Breakdown` (300-600 words).
6. Run `node scripts/curriculum/validate.mjs {COURSE} {MODULE}` and fix every ERROR;
   review every warn. Repeat until PASS.
7. Run `node scripts/curriculum/build.mjs {COURSE} --module {MODULE} --preview` to make
   sure every figure renders.

Rules: write ONLY inside `curriculum/{COURSE}/m{MM}/`. Do not edit any other file, do not
run the full course build, do not commit. Accuracy over volume: never invent tool
output, flags, CVEs or standard clauses; use the lab kit's real outputs. Defensive,
authorised-lab framing for every offensive technique.

Final reply (only this, under 15 lines): validator result line, total prose words,
figure count, and any facts you were unsure about and left out.
