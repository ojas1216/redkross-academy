# Authoring guide: one module of a v2 course

You are writing ONE module (8 lessons) of a RedKross Academy cybersecurity course.
The output is textbook-grade study material that a student can learn the subject
from without looking up basics elsewhere. Read this whole guide before writing.

## 1. What you produce

Write only inside your module folder `curriculum/CNN/mMM/` (for example
`curriculum/C05/m03/`). Never edit any other file.

| File | Content |
| --- | --- |
| `module.json` | Module metadata and lesson metadata (format in section 6). |
| `l01.md` … `l08.md` | One Markdown file per lesson, in blueprint order. |
| `figures.json` | Every diagram used by the 8 lessons, as render specs (section 4). |
| `quiz.json` | 12 multiple-choice questions for the module quiz (section 7). |

When finished, run `node scripts/curriculum/validate.mjs CNN MM` from the repository
root, fix every error it prints, and repeat until it reports PASS. Then run
`node scripts/curriculum/build.mjs CNN --module MM --preview` and open the PNG/SVG
previews it lists if you can, to check that each diagram reads well.

## 2. Structure is fixed by the blueprint

`curriculum/blueprint/CNN.json` is the source of truth for the module name and the
eight lesson names and their order. Use those names exactly as lesson titles (you may
add a short subtitle after a colon only if the blueprint name is a single word,
e.g. "Scope: defining what may be tested"). Never add, drop, merge or reorder lessons.

## 3. Source material and accuracy

Before writing, read what the academy already has for this course and topic, and reuse
its verified facts, lab commands and outputs:

- Existing course lessons: `public/course-content/<courseId>/` (the library-imported
  v1 lessons, e.g. `crs_cyber_pentest_05/`). Find the relevant files with grep.
- The course lab kit (execution-tested scripts and their real outputs):
  `../../RedKross_Academy_Complete_Cybersecurity_Course_Library/LAB_ASSETS/CNN/`
  (relative to the repository root). When a lesson uses a lab, cite the script by its
  path inside the kit (`LAB_ASSETS/C05/enumerate.py`) and show its real output from
  the `*_output.txt` file next to it. Never invent tool output.
- Course library text: `../../RedKross_Academy_Complete_Cybersecurity_Course_Library/COURSE_NN_*.txt`.

Rules:
- Do not fabricate facts, standards clauses, CVE numbers, command flags, tool
  behaviour or outputs. If you are not certain of a detail, explain the concept
  without the uncertain specific. Prefer stable, well-known facts (RFCs, NIST SP,
  OWASP, MITRE ATT&CK IDs you are sure of).
- Use only documentation addresses and names in examples: IPs from 192.0.2.0/24,
  198.51.100.0/24, 203.0.113.0/24 or private lab ranges; domains under
  `example.com`, `example.org` or `*.example`; fictional organisations (the course's
  existing fictional companies are fine).
- Security content is defensive and lab-bound: every offensive technique is framed
  inside written authorisation and an isolated lab the student owns, and is followed
  by detection and mitigation. Never encourage testing systems without authorisation.
  Indian legal context (IT Act 2000, DPDP Act 2023, CERT-In directions) where relevant.

## 4. Diagrams (mandatory)

Every lesson contains at least ONE diagram, and TWO when the lesson has two genuinely
distinct mechanisms, architectures or workflows. No decorative diagrams.

Diagrams are rendered by the academy's SVG renderer from JSON specs in
`figures.json`; you never draw them by hand. See `curriculum/DIAGRAM_SPECS.md` for the
16 diagram types and a worked example of each. Choose the type that explains the idea:
`sequence` for protocol exchanges, `graph` for architectures and decision logic,
`flow` for procedures, `layers` for stacks and defence in depth, `compare` for
before/after or good/bad, `table` for structured comparisons, `tree` for hierarchies,
`cycle` for lifecycles, `code` for vulnerable-vs-fixed code, `bars`/`scale`/`ticks`
for quantities, `segments` for on-disk or packet layouts, `grid` for control sets.

Figure codes: `CNN-MMM-LLL-FK`, e.g. `C05-M03-L02-F1` (course, module, lesson,
figure number within the lesson). In `figures.json`:

```json
{
  "C05-M03-L02-F1": {
    "title": "TCP SYN scan: open, closed and filtered ports",
    "caption": "How a SYN scan classifies a port from the target's reply, and what each answer reveals.",
    "alt": "Sequence diagram: scanner sends SYN; open port answers SYN/ACK and the scanner resets; closed port answers RST; filtered port gives no reply.",
    "type": "sequence",
    "actors": [ ... ],
    "messages": [ ... ],
    "note": "..."
  }
}
```

- `title` (max ~70 chars), `caption` (one sentence), `alt` (a full text description
  for screen readers) are required on every figure.
- Labels must be short (aim under 40 characters, use `sub` for detail). Accurate
  arrows: the direction must match the real flow of data or control.
- Absolutely NO ASCII or Unicode-box diagrams anywhere in the lesson text or in code
  blocks (no `+----+`, `|  box  |`, `-->` chains, `┌─┐`, tree-drawing characters).
  Never use ```` ```mermaid ````. If you need a picture, make a figure.

### Placing a figure

Explain the concept first, then put the placeholder on its own line, then immediately
the walkthrough:

```markdown
...prose that introduces what the figure shows...

{{figure C05-M03-L02-F1}}

### Visual Walkthrough & Architectural Breakdown

...the walkthrough...
```

The build replaces the placeholder with the rendered image, figure number and caption.

### The walkthrough (required after EVERY figure, 300-600 words)

Heading exactly `### Visual Walkthrough & Architectural Breakdown`. Explain THIS
diagram, element by element, using its actual labels. Cover, as bold-led paragraphs or
a numbered list:

1. **Purpose** - what the diagram represents and why it matters.
2. **Components** - every box, actor, lane or boundary, named as labelled.
3. **Relationships and arrows** - what each important arrow and its direction means.
4. **Execution flow** - the order in which things happen.
5. **Decision logic** - the branches/conditions and their outcomes (if any).
6. **Technical interpretation** - what is happening internally.
7. **Practical example** - a realistic lab scenario mapped onto the diagram.
8. **Security implications** - risks, controls, detection.
9. **Key learning** - one or two sentences the student must retain.

## 5. Lesson notes (the main work)

Length: 2,200-3,500 words of prose per lesson (code, tables and walkthroughs are in
addition). Write for intermediate-to-advanced learners: explain what a thing is, why
it exists, how it works internally, how it relates to neighbouring concepts, and how a
practitioner uses and defends it. Build examples progressively.

Benchmark: Courses 01-04 (e.g. `src/services/db/course04/modules/module2.js`,
`src/services/db/course02/modules/module3.js`). Match their academic tone, heading
hierarchy, worked examples, tables and callouts, and go deeper where useful.

Template (adapt; omit sections that do not fit the subject - never pad):

```markdown
## Introduction and conceptual foundation
## Key terminology
(definition list or table of precise definitions)
## How it works  (several ## / ### sections: mechanisms, architecture, components)
{{figure ...}}  +  ### Visual Walkthrough & Architectural Breakdown
## Step-by-step workflow / worked example
(commands with every option explained, and their real expected output, then how to interpret it)
## Common mistakes and misconceptions
## Security implications, detection and defence
## Best practices
## Practical applications / lab exercise (authorised lab only)
## Key takeaways
```

Markdown that renders in the lesson player:
- Headings: start at `##` (never `#`). Use `###`/`####` below.
- Callouts: `> [!NOTE]`, `> [!TIP]`, `> [!IMPORTANT]`, `> [!WARNING]`, `> [!CAUTION]`
  followed by `> text` lines. Use them for safety rules, legal boundaries, gotchas.
- Code: fenced blocks with a language: `bash`, `powershell`, `python`, `json`, `yaml`,
  `http`, `sql`, `ini`, `text`. Use ```` ```terminal ```` for a captured terminal
  session (prompt line `$ command` then output). Explain every flag after the block.
- Tables: GitHub-flavoured tables with a header row.
- Maths: KaTeX `$...$` inline, `$$...$$` display (only when it helps).
- No raw HTML, no images other than `{{figure ...}}` placeholders, no external links
  to download tools (naming official projects is fine).
- British or Indian English spelling consistently within the module.

Lab lessons (titles ending in "lab", and capstone lessons): give the lab objective,
scope and authorisation statement, environment setup from the course lab kit, numbered
steps with exact commands, the expected output (from the kit's saved outputs), how to
interpret it, troubleshooting, cleanup, and a reflection/checklist.

## 6. module.json

```json
{
  "course": "C05",
  "module": 3,
  "title": "Scanning and enumeration",
  "description": "Two or three sentences on what the module covers and why it matters.",
  "lessons": [
    {
      "n": 1,
      "title": "Host discovery",
      "summary": "One sentence describing the lesson.",
      "objectives": ["Explain ...", "Run ...", "Interpret ..."],
      "minutes": 50
    }
  ]
}
```

`title` values must match the blueprint exactly (see section 2). 3-5 objectives per
lesson, each starting with a verb. `minutes` is a realistic study time (35-90).

## 7. quiz.json

Exactly 12 questions testing understanding (not trivia), spread across the 8 lessons:

```json
[
  {
    "q": "A SYN scan sends a SYN to port 443 and receives a RST/ACK. What does this indicate?",
    "options": ["The port is closed", "The port is open", "The port is filtered", "The host is down"],
    "correct": 0,
    "explanation": "A RST in reply to a SYN means the host is reachable but nothing listens on that port.",
    "lesson": 2,
    "difficulty": "medium"
  }
]
```

- 4 options, exactly one correct; `correct` is the 0-based index. Vary the position of
  the correct answer (all four positions must be used across the 12 questions).
- Plausible distractors of similar length; no "all of the above"/"none of the above".
- `difficulty`: `easy` | `medium` | `hard` (mix them). `lesson`: 1-8.
- Questions must not be copied verbatim from the lesson text.

## 8. Quality bar (the validator enforces the mechanical parts)

- 8 lesson files, titles as in the blueprint, each 2,200+ words of prose.
- Every lesson has 1-3 figures, each placed in context, each followed by its walkthrough.
- Every figure in `figures.json` is used exactly once; every placeholder has a spec.
- No ASCII/box diagrams, no mermaid, no `#` headings, no TODO/placeholder text.
- Facts, commands and outputs are accurate; examples use documentation addresses.
