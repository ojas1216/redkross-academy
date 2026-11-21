# ANTIGRAVITY.md: start here

This file is for the developer joining RedKross Academy, and for the AI agent working in their editor (Antigravity). It is meant to be enough to start work without reading the whole repository. Last updated: 21 November 2026.

Longer references, only when needed:
- `docs/FUTURE_PLAN.md`: product plan, token and credit decisions, recommendations
- `docs/ACADEMY_HANDOFF.md`: dated work log shared by Claude and Codex
- `curriculum/PROGRESS.md`: course rebuild tracker
- `curriculum/AUTHORING_GUIDE.md`: rules for writing lessons
- `curriculum/DIAGRAM_SPECS.md`: rules for diagrams

---

## 1. What this project is

RedKross Academy is the learning site of RedKross Research Foundation, a Section 8 non-profit. It has two divisions:

- **Cybersecurity:** 22 courses, C01–C22, all free. They are graded: module quizzes, a final exam, proctoring and a signed credential.
- **Psychology:** 6 short introductory courses, P01–P06, without grading. They are hidden from public promotion until a clinical review is done.

Learners collect **Academy credits** (stored internally as tokens in `reward_ledger`) for passing assessments. Paid course bundles, and a store selling playbooks and templates for credits, are announced as **coming soon**. Nothing is on sale yet.

### Stack

| Layer | Technology | Where |
| --- | --- | --- |
| Frontend | React and Vite, Tailwind, framer-motion | `src/` (pages in `src/pages`, shared UI in `src/components`) |
| API | Node and Express-style handlers | `api/*.js`, shared code in `api/_lib/`, server entry `server/productionServer.js` |
| Auth | Firebase Auth (email and providers) | `api/_auth.js`, `src/services/auth/` |
| Database | PostgreSQL (Neon in production) | Schema in `scripts/schema.sql` and `scripts/migrations/*.sql` |
| Mail | SMTP (mailcow) or Resend | `api/_mail.js` |
| CI | GitHub Actions on Node 20 with Postgres 16: env check, migrations, `npm test`, `npm run test:api`, `npm run build`, `npm run audit:bundle` | `.github/workflows/ci.yml` |

---

## 2. Run it locally

```bash
npm ci
cp .env.example .env          # fill in values; never commit .env
npm run dev                   # API on :3000 and Vite on :5173 (scripts/dev.mjs)
```

You need a local PostgreSQL database. For example, with Docker:

```bash
docker run -d --name rk-pg -e POSTGRES_PASSWORD=devpass -p 55432:5432 postgres:16-alpine
# DATABASE_URL=postgresql://postgres:devpass@127.0.0.1:55432/postgres
npm run db:migrate            # applies scripts/schema.sql (+ migrations)
```

### Checks to run before every push (CI runs the same ones)

```bash
npm test                       # unit tests + library import integrity
TEST_DATABASE_URL=postgresql://... npm run test:api   # 143 API tests; use a FRESH, empty database
npm run build
npm run audit:bundle           # fails if answer keys or secrets reach the client bundle
```

**API tests need a fresh database.** Create an empty database and run `DATABASE_URL=<that db> npm run db:migrate`. That applies `scripts/schema.sql` and then every file in `scripts/migrations/` in order. If you apply the SQL files by hand and leave one out (for example `14c`), the proctoring tests fail.

---

## 3. Map of the repository (only the parts you will touch)

```
api/
  _lib/courseRegistry.js     Exam engine (server only): loads question banks, picks questions,
                             serves no repeats within an attempt. Answer keys never leave here.
  _lib/learning.js           awardTokens() is idempotent (one grant per idempotency key); tokenBalance()
  auth.js                    Registration: 150 welcome tokens (OLD rule, to change; see 6.1)
  enrol.js, _redeem.js       Enrolment: 50 tokens (OLD rule, to remove)
  assessment.js              Quiz/final submit; first pass awards quiz.tokenBounty
  wallet.js                  The learner's credit ledger
  _data/library/             GENERATED server-only specs and banks for C05-C22 (do not hand-edit)
src/services/db/
  cyberCourses.js            Catalog of the 22 cyber courses (C01-C04 inline, C05-C22 from library)
  curriculum/module1-6.js    C01 lesson content
  course02|03|04/            C02-C04 lessons and quizzes
  questionBanks/             C01 question banks (GENERATED from curriculum/legacy_banks/C01)
  course03/quizzes/          C03 question banks (GENERATED from curriculum/legacy_banks/C03)
  library/libraryCourses.generated.js  GENERATED catalog for C05-C22
  psychologyCourses.js       The 6 psychology courses
src/components/common/
  AcademyOfferSection.jsx    "All 22 free / collect credits / bundles coming soon"
  DonationSection.jsx        Donation call-to-action (uses VITE_DONATION_URL)
curriculum/
  blueprint/CNN.json         v2 syllabus per course (12 modules x 8 lessons)
  CNN/mMM/                   v2 source: module.json, lNN.md, lNN.figures.json, lNN.quiz.json
  legacy_banks/C01|C03/      Source of the C01/C03 question banks
  build/                     GENERATED v2 build output
scripts/
  curriculum/validate.mjs    Validates a v2 module
  curriculum/build.mjs       Builds a v2 course and swaps it into the catalog
  curriculum/build_legacy_banks.mjs  Builds the C01/C03 banks
  figures/render.mjs         SVG diagram renderer used by all figure specs
  import_library_courses.mjs Regenerates the C05-C22 catalog, lesson files and banks
public/assets/courses/       Lesson images and SVGs (generated by the builds)
docs/                        Plans and logs (see top of this file)
```

---

## 4. Rules: read before changing anything

1. **Secrets**
   - Never commit `.env`, keys, tokens or service-account JSON.
   - The public repository history was scrubbed of secrets. Do not reintroduce them.
   - Keys that leaked into older local history are being rotated by the owner.
2. **Answer keys stay on the server.** Question banks are loaded only in `api/_lib/courseRegistry.js`. `npm run audit:bundle` must pass.
3. **Do not hand-edit generated files.** Change the source, then rebuild.
   - Library catalog, `api/_data/library`: run `npm run import:library`
   - v2 courses: run `scripts/curriculum/build.mjs CNN`
   - C01/C03 banks: run `build_legacy_banks.mjs`
4. **Never commit partial v2 build output.** A course switches to v2 only when every module in its blueprint validates.
5. **Do NOT run the old bank scripts:**
   - `scripts/build_course03_quizzes.mjs`
   - `scripts/build_course03*.mjs`
   - `scripts/build_module1-5_bank.mjs`
   - `scripts/generate_c03_engine_and_index.mjs`

   They regenerate the old padded 200-question banks, which repeated the same question inside one exam.
6. **Course content is defensive.**
   - Teach detection, response and hardening. No step-by-step attack instructions.
   - Lab work uses fictional organisations and offline or local data only.
   - Never modify or run scripts inside the course library's `LAB_ASSETS`. Use a scratch copy.
7. **No claims the project cannot back.** No accreditation, no NPTEL endorsement, no tax-deduction (80G) wording, no claims about learning outcomes, no "certified" equivalence. The courses are described as **foundational editions**.
8. **Credits**
   - Credits already earned are never reduced or expired.
   - Credits cannot be cashed out or transferred.
   - Donations never give credits or access.
9. **Diagrams are designed SVG figures**, specified in JSON and rendered by `scripts/figures/render.mjs`. No ASCII art and no Mermaid in lessons. Each figure is followed by a `### Visual Walkthrough & Architectural Breakdown` of at least 250 words.
10. **Coordination**
    - Claude and Codex also work in this repository.
    - After each piece of work, add a short dated entry to `docs/ACADEMY_HANDOFF.md`: what changed, how it was verified, what is next.
    - Run `git pull` before starting, and keep commits focused.

---

## 5. What is done

### Courses

| Course | State |
| --- | --- |
| C01 Introduction to Cybersecurity | Full course. Nine lessons in Modules 3–4 were renamed to match their content. The bank has 6 modules × 30 distinct questions. |
| C02 Networking | Full course. All diagrams are designed SVGs. Exams serve 20 distinct questions. |
| C03 Linux and Windows Administration | Full course. A repeated introduction was removed from 47 lessons. The bank has 8 × 30 distinct questions. |
| C04 Python for Cybersecurity | Full course with a fully distinct bank. |
| C08 SOC Analyst | **Complete v2 rebuild:** 12 modules, 96 lessons, 163 figures, 2,400 questions, original dataset. |
| C09 Digital Forensics and Incident Response | v2 rebuild in progress. **Module 1 is complete and validates.** Module 2 has lessons 1–5. |
| C05–C07, C10–C22 | v1 "foundational editions": about 200 words per lesson, on topic, 10 quiz questions per module. |
| P01–P06 Psychology | Integrated with checked sources. Waiting for clinical review. Hidden from promotion. |

### Platform

- Exams never serve the same question twice in one attempt. Every C01–C04 module exam serves 20 distinct questions. The finals serve 50, or 60 for C04.
- Assessment tokens are paid on the first pass only, with idempotency key `pass:user:course:quiz`.
- The website shows all 22 courses as free (foundational editions), "collect Academy credits", "paid bundles coming soon" and a donation section.
- Proctoring, cohorts, access codes, the admin console, email sign-up and verifiable credentials all work in local tests.
- Status: 143 of 143 API tests, unit tests, build and bundle audit all pass, and CI is green.

---

## 6. What needs to be done (priority order)

Each task lists its files and the check that shows it is done.

### 6.1 Switch tokens to the agreed earning rules (highest priority)

The course pages now promise "+1,100 to +2,000 Academy credits" per course, which is what the old rules pay. The agreed rules pay about 65–95 per course. Switch the rules **before** the site is promoted.

| Event | Now | Target |
| --- | --- | --- |
| Welcome (`api/auth.js`) | 150 | 10 |
| Enrolment (`api/enrol.js`, `api/_redeem.js`) | 50 | 0 (remove) |
| Module first pass (`tokenBounty` in `api/_lib/courseRegistry.js`, and the library specs written by `scripts/import_library_courses.mjs`) | 100 (150 in C04) | 5 |
| Final first pass | 300 | 10 |
| Course completion, once | none | 25 (new award when the final is passed, key `complete:user:course`) |
| Delayed-retrieval pass (optional) | none | 3 (see 6.4) |
| Monthly cap | none | 300 |

**Also update the displayed figures:**
- `total_tokens_reward` in the course data, which is shown in `CyberCourseDetailPage.jsx`, `CourseDetailPage.jsx` and `StudentDashboard.jsx`.
- The admin fallback in `api/_admin.js`, which uses 150.
- The display should be computed from the rules, for example C01 = 6×5 + 10 + 25 = 65.

**Do not change existing ledger rows.**

**Done when:**
- New API tests cover each amount, the completion award and the cap.
- The existing tests are updated (`tests/api_security_and_assessment.test.mjs` currently expects the 150 welcome).
- `npm run test:api` passes.

### 6.2 Split the credit ledger and reconcile legacy balances

- Add a source tag to `reward_ledger` with a new migration in `scripts/migrations/`. The tags are `earned`, `purchased`, `promotional` and `legacy`.
- Admin tool: recompute each legacy balance from the account's real first passes under the old rules. Flag any balance above that figure, or above the 26,050 ceiling per learner, for review.
- **Done when:** the total balance before the migration equals the total after, per tag; the admin view lists flagged accounts; and there are tests.

### 6.3 Store for playbooks and templates (first things to spend credits on)

- Build 5 downloadable packs from existing course material, priced at 30–60 credits:
  - SOC playbooks from C08
  - evidence receipt, custody-log and case-note templates from C09 Module 1
  - GRC policy and BIA templates from C17
- Build a simple store page and a spend endpoint:
  - spending is an append-only negative ledger row with an idempotency key
  - downloads are authorised on the server
- Only earned and purchased credits can be spent, and only on digital items. Anything marked by a human (practicals, viva) is paid in INR or purchased credits only.
- **Done when:** a learner can spend credits once per item, the balance updates, a double click does not charge twice, and tests cover all of it.

### 6.4 Delayed retrieval: the main learning improvement

- At least 7 days after a learner first passes a module, offer a fresh 10-question draw. It pays 3 credits once, and the progress page shows the module as "retained".
- Use banks with at least 3× the quiz length: C01–C04 and C08. The v1 courses have only 10 questions per module, so they are excluded until rebuilt.
- **Done when:** the eligibility window is enforced on the server and the retention rate per module appears in the admin view.

### 6.5 Payments (credits for INR) — only after the owner confirms the provider and adviser sign-off

- One product: **100 credits for INR 99**, buying 1–10 packs. UPI and the provider's other methods.
- Webhooks are idempotent, each payment ID is credited once, and the refund flow covers unspent purchased credits.
- An 18+ or guardian confirmation at checkout.
- **Do not show prices or a checkout until the owner says so.**

### 6.6 Donations

- The section already exists. The owner provides the foundation-owned donation page URL, which goes into `VITE_DONATION_URL`.
- Accept Indian donors only until FCRA registration is confirmed.
- Add no tax-deduction wording until 12A/80G is confirmed.

### 6.7 Launch blockers (owner and developer)

- Rotate the leaked keys.
- Deploy to production: `docs/LAUNCH_READINESS.md` and `docs/PRODUCTION_DEPLOYMENT_CLOUDFLARE_POSTGRES_GUIDE.md`.
- Run a real identity-provider sign-in test. So far only synthetic roles have been tested.
- Verify mail delivery.
- Migrate existing learners.
- Fix the site header at phone width: at 390 px the "Student Portal" button is cut off.
- C08 lab-kit fixes, waiting for an owner decision: the `triage.py` expiry check, the `minisiem` table drop and the `evidence_export` manifest overwrite.

### 6.8 Content (ongoing, usually done by Claude or Codex agents)

- **C09:** Module 2 lessons 6–8 (drafts arrive in `Academy_Launch_Review_2026-11-20/dfir-continuation/`, outside the repository), then Modules 3–12.
- **Rebuild the other v1 courses one at a time.** Suggested order: C06, C11, C05, then the order in `curriculum/PROGRESS.md`. Target about 40–50 lessons of 1,500–2,500 words per course.

How to add a v2 lesson:
1. Write `curriculum/CNN/mMM/lNN.md`, `lNN.figures.json` and `lNN.quiz.json` (25 questions per lesson).
2. Run `node scripts/curriculum/validate.mjs CNN M`.
3. When **all** modules pass, run `node scripts/curriculum/build.mjs CNN`.

Validator rules for each lesson:
- at least 2,000 words of prose
- 1–3 figures, each with a walkthrough of at least 250 words
- quiz questions medium or hard only
- answer positions balanced
- correct option not obviously the longest

To preview one module's figures: `build.mjs CNN --module M --preview`.

- **Optional:** C02 Modules 1 and 5–8 banks are partly templated. Rebuild them the same way as C01/C03 (`curriculum/legacy_banks/`).
- **Accessibility:** check alt text on all images, do a keyboard and screen-reader pass, add an extended-time option for proctored exams, and publish a WCAG statement (no conformance claim).

---

## 7. Quick reference

| I want to… | Do this |
| --- | --- |
| Change a C01/C03 quiz question | Edit `curriculum/legacy_banks/C0X/mNN.json`, then run `node scripts/curriculum/build_legacy_banks.mjs C0X` (try `--check` first) |
| Change a C05–C22 catalog field | Edit `scripts/import_library_courses.mjs`, then run `npm run import:library` |
| Add or fix a diagram type | `scripts/figures/render.mjs`, then re-render with the course build; check SVGs in a browser at 1280 and 390 px |
| See what an exam actually serves | `generateQuestions(spec, quiz)` in `api/_lib/courseRegistry.js` (server only) |
| Check a learner's credits | `GET /api/wallet` (admins: `?userId=`) |
| Find why a page says something | grep `src/pages` and `src/components`; course text lives in `src/services/db` or `public/` (library lesson markdown) |

When unsure, keep it free, keep it honest, keep answer keys on the server, and write a dated line in `docs/ACADEMY_HANDOFF.md`.
