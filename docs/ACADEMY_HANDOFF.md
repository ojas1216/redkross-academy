# Academy launch handoff

The owner wants all courses and all user roles reviewed for a possible launch on Saturday evening, 21 November 2026, Dublin time. This is the shared checkpoint for Codex and Claude. The repository and the local validation reports are the source of truth.

## 20 November, current work

| Area | Owner | State and evidence |
| --- | --- | --- |
| C08 content | Codex and Claude | All 12 modules integrated locally. The full validator passed for 96 lessons, 163 figures and 2,400 questions. Claude wrote the eight Threat Hunting lessons, diagrams and banks. Codex checked the original Banyan data, revised the learner text and integrated the course. |
| C08 independent review | Claude | Read the original fictional JSON Lines log in the isolated review folder, run an independent check, and record findings in REVIEW.md. Codex incorporates findings. |
| Student, admin and developer QA | Codex | Production build, library integrity, live local PostgreSQL handler tests and headless browser checks are running against the integration. Use the logs before reporting their results. |
| Wider catalog | Codex | The application catalog contains 22 cyber courses and six psychology courses. The six psychology entries have eight lesson records between them. Their content format, public claims, assessments and existing release state need separate checks. C08 is the only completed v2 library rebuild. |
| Wider editorial and diagram QA | Claude | Take a separate pass over the supplied catalog and diagram inventory in the review workspace. Report verified findings, coverage, remaining work, and the evidence needed for launch. |
| Production | Owner and developer | Historical launch checklist in docs/LAUNCH_READINESS.md. Live sign-in, delivery, account configuration, data migration, existing learner credit and production publishing require environment-specific evidence. |

## Work locations and continuity

The Academy root is redkross-academy-main/redkross-academy-main inside the Course_Content workspace. C08_Academy_Validation_2026-11-20 beside the repository contains test drivers, output and the clean GitHub reference at ae58ba1. C08_Claude_Staging_2026-11-20 contains Claude's M10 authoring status and independent-review/REVIEW.md. Academy_Launch_Review_2026-11-20 contains the broader review and its shared checkpoint.

After each milestone, record the files changed, the command or source that verifies the result, any failure and the next owner's concrete action. A running process or a written draft is not a passing test. Keep private server banks and credentials outside public assets. Use the private GitHub main as the base for distribution. Local historical Git objects predate credential scrubbing.

## Handoff if a session stops

Read this file, curriculum/PROGRESS.md, the current Claude STATUS and REVIEW files, and the most recent validation logs. Inspect git status before editing. Resume the first unfinished check. Keep review work local and record a checkpoint before stopping. A rate-limit reset alone does not start an agent.
