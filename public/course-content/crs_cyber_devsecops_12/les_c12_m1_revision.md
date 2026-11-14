## Revision

### Summary

A secure SDLC places security in every stage. DevSecOps automates it and gives developers fast feedback and secure paved roads. NIST SSDF v1.1 (SP 800-218, February 2022) organises practices into PO, PS, PW and RV. Security requirements must be specific, testable, traceable and risk-prioritised. OWASP ASVS 5.0.0 (May 2025) supplies verifiable requirements by level. Activities run from requirements and threat modelling through coding, build scanning, testing, signed releases and operations. Gates have clear thresholds, block new findings first, use expiring waivers and must be proven to fail; the lab showed Semgrep exiting 0 without --error. Programmes are measured by remediation times, coverage and escape rates. The CrowdStrike Channel File 291 incident shows that content updates need validation, negative tests and staged rollout.

### Important concepts

shift left; testable requirements; gates that fail.

### Key technical takeaways

gate policy as code; exit codes; waiver data.

### Glossary

| Term | Meaning |
|---|---|
| ASVS | Application Security Verification Standard (OWASP). |
| DevSecOps | Integrating security into DevOps practices. |
| Gate | Checkpoint blocking progress on defined criteria. |
| Paved road | Secure default path provided to developers. |
| SSDF | Secure Software Development Framework (NIST SP 800-218). |
| Waiver | Time-limited, approved exception to a gate. |

### Common mistakes

vague requirements; gates that never fail; blocking on legacy backlog.

### Revision questions

​1. Name the four SSDF groups. 2. Write two testable requirements. 3. How do you prove a gate works?
