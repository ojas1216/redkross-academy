## Revision

### Summary

A SOC detects, analyses, responds to, reports on and helps prevent incidents (MITRE's definition), within CSF Detect and Respond. Models are in-house, outsourced (MSSP/MDR) or hybrid; tiers cover triage, investigation and specialist work, supported by detection, intelligence and platform roles. Alerts move from generation through triage and investigation to dispositions (TP, BTP, FP, inconclusive), escalation, closure and feedback. Analysts follow shift routines with documentation and handovers. Metrics (MTTD, MTTA, MTTR, FP rate, coverage) need medians and quality checks; the demo showed mean MTTA 32.4 versus median 4.0 minutes. The Target case shows alerts need effective response; CERT-In's 6-hour reporting raises the stakes.

### Important concepts

tiers; dispositions; feedback loops; metric pitfalls.

### Key technical takeaways

course dataset and mini-SIEM; statistics.median.

### Glossary

| Term | Meaning |
|---|---|
| BTP | Benign true positive. |
| MDR | Managed detection and response. |
| MSSP | Managed security service provider. |
| MTTA/MTTD/MTTR | Mean time to acknowledge/detect/respond. |
| Playbook | Documented response steps for an alert type. |
| SIEM | Security information and event management. |
| SOAR | Security orchestration, automation and response. |
| SOC | Security operations centre. |

### Common mistakes

escalating by chat; closing without evidence; mean-only metrics.

### Revision questions

​1. Describe the alert lifecycle. 2. Compare MSSP and in-house SOCs. 3. Why use medians?
