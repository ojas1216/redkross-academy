# RedKross Academy: status and future plan

Last updated: 21 November 2026 (evening: free-offer, credits, bundles and donation sections added). Written by Claude for the owner and the developers who continue the work (Codex included).

This plan brings together four sources:
- what the owner discussed with Codex
- management's token and pilot decision
- Claude's independent product review (`Academy_Launch_Review_2026-11-20/commerce-review/`: `CLAUDE-PRODUCT-REVIEW.md` and `DECISION-REPLY.md`)
- the engineering state of this repository

For the detailed day-to-day log, see `docs/ACADEMY_HANDOFF.md` and `curriculum/PROGRESS.md`.

What this plan does not claim: no NPTEL endorsement or contact, no regulatory, tax or payments clearance, no activated payment provider, no learner-outcome data and no customers. The passing tests show that the software works. They do not show that anyone learns from it.

---

## 0. The offer on the website (owner decision, 21 November)

| | What learners are told | Where it lives |
| --- | --- | --- |
| **All 22 cybersecurity courses are free** | Every lesson, quiz and final is free. Most courses are currently *foundational editions* covering the essentials, and fuller editions are being written course by course. Free courses stay free. | Home page and Cybersecurity Academy page (`src/components/common/AcademyOfferSection.jsx`). Course data: every course's `access` is now "Free access (foundational edition)", fixed at its source in `scripts/import_library_courses.mjs`. Before this fix, 18 courses were labelled "PAID". |
| **Collect Academy credits for future use** | Passing assessments earns credits that are kept in the wallet. They will be usable on upcoming course bundles and resources such as playbooks, templates and lab packs. No cash value, not transferable, no withdrawal. | Same section. Course pages and the dashboard now say "Academy credits" instead of "Tokens" or "Bounty". |
| **Paid course bundles: coming soon** | Advanced bundles with guided practicals, assessed case work, incident playbooks and ready-to-use templates are in preparation. Nothing is on sale yet. | Same section |
| **Donations** | "Support free cybersecurity education": what donations fund, a contact link, and a note that donations do not buy access, credits or certificates. No tax-benefit claim. | Home page, `#donate` (`src/components/common/DonationSection.jsx`). The donate button appears only when `VITE_DONATION_URL` (an https page owned by the organisation) is set. Otherwise the section says "opening soon" and offers a mailto link to `VITE_DONATION_EMAIL` (default contact@redkross.org.in). Documented in `.env.example`. |

**What credits will buy.** These are the planned uses, consistent with section 2:

| Item | Paid with |
| --- | --- |
| Playbooks, templates, extra practice sets, workbooks, lab packs (digital, nothing extra to supply) | Earned or purchased credits |
| Course bundles that include human-marked practicals or a viva | INR or purchased credits only, because they cost real marking time; earned credits may give a capped discount (see 5.3) |

---

## 1. Where things stand

### Done

**Courses and content**

| Item | State |
| --- | --- |
| C01 Introduction to Cybersecurity | Strong lesson text. Nine lessons in Modules 3–4 were renamed to match their content, and the course no longer advertises STRIDE, which it never taught. Lesson 4.4's likelihood scale was corrected. New bank: 6 modules × 30 distinct questions. |
| C02 Networking | Fine. Its 12 Mermaid diagrams were replaced with designed SVGs. Exams serve 20 distinct questions. |
| C03 System Administration | Strong. A repeated introduction was removed from 47 lessons. New bank: 8 modules × 30 distinct questions. |
| C04 Python | Strong. The bank was already fully distinct. |
| C08 SOC Analyst (v2) | Complete: 12 modules, 96 lessons, 163 figures, a 2,400-question bank with 20 questions drawn per module exam and 50 for the final, and an original dataset. The M10 independent review was applied. |
| C09 DFIR (v2 rebuild) | Module 1 is complete and validated (8 lessons, 16 figures, 200 questions). Module 2 has lessons 1–5. Lessons 6–8 are being drafted in Codex's queue. |
| C05–C07, C10–C22 | Still v1. The lessons are short but on topic and accurate where spot-checked, and the quizzes match the lessons. |
| Psychology P01–P06 | Integrated by Codex, with sources checked. Not yet clinically reviewed. |
| Diagrams | Every lesson in C01–C04 has a figure (182 of 182). All 585 SVGs were measured with no text overflow. Renderer fixes: tree trunks, dark labels, flow loops. |

**Exams and question banks**

- A server guard means one attempt never serves the same question twice.
- Every C01–C04 module exam now serves 20 distinct questions, and the finals serve 50 (60 for C04). Before this, C03 served 2–3 distinct questions per exam.
- Answer keys are held only on the server, and the client bundle audit passes.
- Tokens for an assessment are paid on the first pass only, keyed per user, course and quiz.

**Engineering**

- Production build: passes.
- Bundle audit: passes.
- Unit tests: pass.
- API tests: 143 of 143 pass on a fresh PostgreSQL database (41 account and assessment, 88 admin, cohort and access-code, 14 proctoring).
- Browser checks: passed at 1280 px and 390 px for C08, psychology, the public pages and the admin pages.
- Everything is pushed to the private GitHub main, with secret-scrubbed history, and CI is green.

---

## 2. Tokens, credits and money: what was decided

### 2.1 Principles (agreed by Codex, management and the Claude review)

1. **The core is free.** Every lesson, quiz, retake, final and completion record is free. Lesson text is never sold, and nobody pays to retake or to raise a score.
2. **Tokens reward learning, not activity.** Nothing is paid for logins, page views, time on page, streaks, sharing or enrolment.
3. **There are two ledgers.**
   - *Purchased credits* are bought with INR. They can be refunded under the published rule, and they do not expire.
   - *Earned or promotional tokens* come from learning and from the welcome grant. They can buy only items that cost nothing extra to supply, never anything that needs human marking.
4. **Human-marked work is paid in INR** (practicum seats), never with earned tokens.
5. **Existing balances are never reduced retroactively.** They are tagged "legacy promotional" and reconciled before anything can be spent (see 2.4).
6. **Learners see the name "Academy credits"**, with the wording "no cash value, not transferable, no cash-out". The word "token" next to UPI reads as cryptocurrency. The system is closed-loop.

### 2.2 Earning rules

| Event | Current code (old rules) | Decided rule (to build) |
| --- | --- | --- |
| Welcome on registration | 150 | 10 (the Claude review suggested 50 at signup plus 100 after 3 first passes; to be revisited if multi-account farming appears) |
| Enrolment in a course | 50 per course | 0 |
| First pass of a module assessment | 100 (150 per module in C04) | 5 |
| First pass of a final | 300 | 10 |
| Course completion, once | none | 25 |
| Delayed retrieval pass: a fresh draw at least 7 days after the first pass | none | 3, once per module (optional, recommended) |
| Monthly cap | none | 300 (from the review) |

The table above implies these totals:
- **Per course:** C01 = 65, the 8-module courses = 75, C08 = 95, each plus up to 3 per module for delayed checks.
- **Maximum per learner, whole catalog:** 1,670, or 1,736 with delayed checks. Under the old rules it was 26,050, so the new maximum is about 93% lower.

The rules apply to all 22 graded cyber courses. Psychology courses never pay tokens.

### 2.3 Purchased credits and what they buy

**Price.** One SKU: **100 credits for INR 99**, sold in quantities of 1–10 packs at the same unit price, with no bulk discount.

**Exclusive items** (planned prices):
- extra case datasets with expert walkthroughs: 30–60 credits
- offline or print workbooks: 30 credits
- additional practice sets beyond the free bank: 40 credits
- management's working price points for extras: 25, 75 or 150 credits

**Leftover credits.** Packs come in hundreds, so a learner buying a 25-credit item keeps 75 credits. The refund rule has to cover unspent purchased credits: refunded to the original payment method within 7 days on request.

**Credits stay off sale** until all of these exist:
- evidence that the payment provider is activated (UPI and the other supported methods)
- terms, refund and tax wording approved by advisers, including GST, the supplying entity and OIDAR
- at least 5 reviewed exclusive items
- an 18+ or guardian confirmation at checkout

### 2.4 Legacy balances (before any spending opens)

Legacy balances can be up to about 15 times what the new rules pay. One old C04 completion was worth 1,550 tokens. The steps before spending opens:

1. Recompute every legacy balance from the account's actual first passes under the old rules: welcome + enrolments + modules + finals.
2. Freeze any balance above that recomputed figure until it has been reviewed. Treat 26,050 as the hard ceiling per learner.
3. Legacy earned tokens can buy only zero-cost digital extras, never anything that needs human marking.
4. The migration must keep the total balance identical before and after, per source tag. Each payment ID is credited at most once, the ledger is append-only, and the balance equals the sum of the ledger.

### 2.5 Paid practicum pilot

| | Decision |
| --- | --- |
| First practicum | **C08 SOC investigation**, sold as an INR seat. The DFIR practicum comes second, once C09 v2 Modules 1–5 exist. (Codex first proposed DFIR first. The review disagreed, and the decision followed the review.) |
| Seats and price | 20 seats, of which 4 are waived on need. INR 2,499 per seat. |
| Assessment | Two marked artefacts (an investigation timeline and an incident report), one resubmission, and a 10-minute recorded viva as the control against AI-written reports. 20% of submissions are double-marked, with a target of at least 80% agreement within one rubric band. |
| Scenario | A new, unpublished scenario for each cohort, with a variant per learner. It is not based on the public M10 cases. |
| Who marks | A named, qualified person signs off every grade. AI may pre-screen only. |
| Economics, cohort 1 | Revenue INR 39,984 gross, or 33,885 if 18% GST is included. Costs INR 41,000: marking 28.3 h and preparation 40 h, each at INR 600/h (assumptions). Result **−INR 1,016 to −7,115**, accepted in advance as the cost of measuring marking time. |
| Economics, cohort 2 | Reusing the scenario: about +INR 16,900 to +22,900. |
| Rule | If marking takes more than 120 minutes per learner, raise the price or cut the artefacts. Do not quietly lower the marking standard. Run only one cohort at a time until cohort 1's marking time is known. |

### 2.6 Institutions and NPTEL

- **Institutions now:** a free cohort through access codes and the admin dashboard, offering C01–C04 and C08 only. Bulk practicum seats can be invoiced later. Publish a page showing who authored and who reviewed each course, including disclosure of AI-assisted authorship.
- **NPTEL:** do not approach it yet, and make no claim of approval. The likely route is a faculty course coordinator, with RedKross supplying free labs or datasets. Readiness criteria before any approach, earliest Q2 2027:
  1. An independent human expert has reviewed all 12 modules of C08.
  2. There is learning evidence from at least 30 learners, plus the pilot's rubric agreement.
  3. Rights are confirmed for all text, images and datasets.
  4. An accessibility statement and an authorship and review page are published.
  5. The site contains no accreditation or equivalence wording.

### 2.7 Evidence of learning: the one change

Build **delayed retrieval**. At least 7 days after a learner first passes a module, offer a fresh 10-question draw that pays 3 tokens once and shows "retained" on the progress page. This produces the first real metric: the 7-day retention rate per module. Then add:
- a 10-item pre-test and post-test for each full course
- item analysis after 100 attempts
- a completion funnel per module

Make no public claim about learning outcomes before a course has data from 30 learners. If learners who collect tokens retain no better than those who don't, reduce the rewards.

---

## 3. What remains

### 3.1 Before a public launch (owner and developer)

- [ ] **Rotate the keys that leaked in local git history.** The pushed history is scrubbed, but the keys themselves are compromised.
- [ ] Production deployment: environment, database migrations, domain. See `docs/LAUNCH_READINESS.md`.
- [ ] A real sign-in test with the identity provider. Only synthetic roles have been tested.
- [ ] Mail delivery verified (mailcow SMTP) for sign-up and resets.
- [ ] Existing learner migration and the legacy-balance reconciliation (2.4).
- [ ] Label C05–C07 and C10–C22 as **"Summary edition (about 2 hours)"**. Mark C09 as "being rebuilt".
- [ ] Keep the six psychology courses **hidden** until a qualified clinician completes a clinical and safeguarding review.
- [ ] Show no purchase screens or prices yet.
- [ ] C08 lab-kit fixes, waiting for an owner decision:
  - the expiry check in `triage.py`
  - the table drop in `minisiem` loading
  - the manifest overwrite in `evidence_export`

### 3.2 Tokens and commerce (2–6 weeks, before credits go on sale)

- [ ] **First:** switch to the decided earning rules before the site is promoted, or show the line "rates may change, earned credits are kept" (see 5.1).
- [ ] Build 5 playbook and template packs from existing course material, and a simple store page to spend credits on them (see 5.3).
- [ ] Donations: confirm FCRA status (Indian donors only until registered) and 12A/80G before any tax wording. Set up a foundation-owned donation page and set `VITE_DONATION_URL`. Arrange receipts and separate accounts (see 5.2).

- [ ] Change the code to the decided earning rules (2.2):
  - `api/auth.js`: welcome grant
  - `api/enrol.js` and `api/_redeem.js`: remove the enrolment bonus
  - `api/_lib/courseRegistry.js` and the library specs: module 5, final 10
  - a new one-time completion award of 25
  - the monthly cap
- [ ] Split the ledger into purchased credits and earned tokens, with a source tag on every `reward_ledger` entry.
- [ ] Delayed retrieval quiz and progress display (2.7).
- [ ] Legacy-balance recomputation, freeze and review tooling for admins.
- [ ] Payment integration (UPI and others): idempotent webhooks, credit once per payment ID, refund flow.
- [ ] A store for exclusive items: at least 5 reviewed items, with the price points in 2.3.
- [ ] Adviser sign-off on terms, refunds, GST, the supplying entity and the payments classification.

### 3.3 Content

- [ ] **C09:** M02 lessons 6–8 (Codex queue), then Modules 3–12, then build and import.
- [ ] **The remaining 16 v1 courses**, rebuilt one at a time in the defensive order in `curriculum/PROGRESS.md`. Recommended size: about 40–50 lessons of 1,500–2,500 words per course, not C08's 4,400.
- [ ] **C02:** Modules 1 and 5–8 have partly templated banks. Optional, because exams already serve 20 distinct questions.
- [ ] **C05–C22 banks** hold only 10 questions per module. Each rebuild adds 200 per module.
- [ ] **Independent factual review:**
  - C08 modules other than M10
  - C01–C04, course by course
  - C09 M01 L04 (Indian law), by counsel or a second reader
- [ ] **Learning-quality review:** item analysis on C08's 2,400 agent-written questions once there are attempts.

### 3.4 Accessibility

- [ ] Text alternatives checked for all 932 images.
- [ ] Keyboard-only and screen-reader pass through a lesson, a quiz and a proctored exam.
- [ ] An extended-time option and a route that doesn't need a webcam, for proctored exams.
- [ ] A WCAG 2.1 AA self-assessment published as a statement that lists known gaps. No claim of conformance.
- [ ] Later: Hindi and regional-language versions, starting with C01.

### 3.5 Practicum and institutions (Q1–Q2 2027)

- [ ] Write the C08 practicum scenario, its variants and the rubric. Name the assessor. Run cohort 1 and measure marking time and rubric agreement.
- [ ] DFIR practicum, after C09 v2 Modules 1–5 exist.
- [ ] Institution pilots on C01–C04 and C08.
- [ ] Review the NPTEL readiness criteria (2.6).

---

## 4. Timeline

| When | What |
| --- | --- |
| **Now (launch)** | Free library, with C01–C04 and C08 as full courses, the v1 courses labelled as summaries and C09 shown as being rebuilt. Psychology hidden. No prices. Existing balances unchanged, with first-pass-only crediting kept. Launch only after the keys are rotated and sign-in, mail and deployment have been verified. |
| **2–6 weeks** | New earning rules, the ledger split, delayed retrieval, legacy reconciliation, payments and refunds, adviser sign-off and 5 exclusive items, then credits go on sale. C09 M02 is completed. |
| **Q1 2027** | The C08 practicum pilot, cohort 1. C09 M03–M05. Next v1 rebuilds. Accessibility statement. |
| **Q2 2027 and later** | DFIR practicum, institution pilots, a possible change to the new-account welcome grant, the NPTEL readiness review, the remaining v1 rebuilds and regional languages. |

---

## 5. Claude's recommendations: what matters most

These are in priority order.

### 5.1 Keep the promise about credits consistent with the rules

**Course pages show the old reward figure, under the new name.** The page reads "+1,100 to +2,000 Academy credits" per course, which is what the code pays today. The decided rules (2.2) pay about 65–95 per course.
- If the rate drops after learners have seen the bigger number, it will feel like a broken promise.
- **Either** switch the earning rules to the decided values before the site is promoted, **or** add the line "earning rates may change; credits you have already earned are always kept".
- My recommendation: switch first, then promote. It is a small code change (listed in 3.2).

**Credits earned now must stay valid.** Never expire or reduce credits that were already earned. The legacy reconciliation (2.4) only catches double-crediting and errors. It does not cut honest balances.

**Credits need a date to spend them.** "Collect for future use" works only if a first thing to spend them on arrives within about 2–3 months. Otherwise credits feel worthless.

### 5.2 Donations: legal points to settle before taking money

- **Foreign donations.** A Section 8 company may not accept foreign contributions without **FCRA registration**. Until it has one, the donation page must accept Indian donors only, and say so.
- **Tax deductions.** Do not mention any tax deduction until the foundation holds valid **12A/80G registration** and can issue compliant receipts.
- **Receipts and accounting.** Every donation needs a receipt and separate accounting. The donation provider and page must belong to the foundation itself.
- **No benefit in return.** Keep donations separate from credits and access. The page already says donations buy nothing. Never give credits for donating.

### 5.3 Make playbooks and templates the first things to sell

They cost nothing extra to supply, and much of the material already exists in the courses:
- C08: triage playbooks, hunt hypotheses, the incident report structure
- C09 Module 1: evidence receipt, custody log, case-note and hand-over templates, and the legal-handling checklist
- C17: GRC policy and BIA templates

Turning **5 of these into polished downloadable packs** meets the "at least 5 items" condition for opening sales (2.3), and gives credits a use quickly. Suggested prices: 30–60 credits each.

**Bundle design, once the content exists:**
- **SOC Analyst bundle:** C08, plus the practicum seat, plus the SOC playbook and template pack.
- **DFIR bundle:** C09 v2, plus the DFIR practicum, plus the evidence-handling template pack (after C09 is finished).
- Earned credits may cover a capped share of a bundle's digital parts (for example up to 20%). The human-marked part is paid in INR or purchased credits, so farmed credits never pay for marking time.

### 5.4 Be honest about how basic the courses are

- Keep the "foundational edition" wording until each course is rebuilt, and label the full editions as they land.
- **Rebuild first** the courses learners are most likely to choose: C09 (in progress), C06 Web Application Security, C11 Cloud Security and C05 Ethical Hacking (defence-led). Merge short lessons into 1,500–2,500-word lessons rather than aiming for C08's size.
- Add a "report an error" link on every lesson and keep a public corrections log. It builds trust faster than claims do.

### 5.5 Trust and protection items before promotion

- Rotate the leaked keys.
- Test real sign-in and mail.
- Publish an authorship and AI-assistance page, saying who wrote and who reviewed each course.
- Keep the psychology courses hidden until the clinical review is done.
- Fix the site header at phone width. At 390 px the "Student Portal" button is cut off. This predates the 21 November changes.

---

## 6. Open questions for the owner

| Question | Answer so far |
| --- | --- |
| Which assessments pay tokens today, and only on the first pass? | **Answered from the code.** Every module quiz and final pays on the first pass only. The idempotency key is user + course + quiz, so a pass is never paid twice. Amounts: 100 per module (150 in C04) and 300 per final. On top of that, 50 per enrolment and 150 welcome. |
| Are answer keys kept on the server only? | **Yes.** Banks load only in `api/_lib/courseRegistry.js`, and the client bundle audit passes. |
| How big are the v1 banks? | **10 questions per module** for C05–C07 and C10–C22. Delayed retrieval should not pay tokens for those modules until the rebuild provides at least 3× the quiz length. |
| Which entity supplies the credits, and how are GST and refunds handled? | Open: for the owner's tax adviser. |
| Who is the named human assessor and factual reviewer for C08? | Open: for the owner. |
| Is any exclusive material already written that is not in the free courses? | Open: none is known in the repository. Playbooks and templates can be drawn from C08, C09 and C17 (5.3). |
| Which donation provider, and do FCRA and 12A/80G registrations exist? | Open: for the owner and the foundation's adviser. Until both are confirmed, the page shows "opening soon" with a contact link. |
