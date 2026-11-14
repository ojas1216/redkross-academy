## Revision

### Summary

Severity measures potential harm and confidence measures rule reliability. Priority multiplies these by context such as asset criticality. A repeatable workflow reads, scopes, enriches, validates, groups, decides and documents within a time box. Enrichment draws on asset, identity, network, history and vulnerability data. Validation seeks corroboration across sources. In the dataset, the docm download, Word spawning PowerShell and the regular 220-byte beacon confirm one another. Beware filters that drop NULL fields: 31 versus 40 rows in the tested query. Dispositions are TP, BTP, FP or undetermined. Related alerts become one case, and unproven links stay hypotheses. False positives are fixed by narrow, reviewed tuning and expiring suppressions. In FireEye's 2020 detection, following up a common MFA-registration alert uncovered a major intrusion.

### Important concepts

context-based priority; corroboration; disposition discipline; tuning governance.

### Key technical takeaways

sqlite3.Row; NULL-safe filters; suppression records with expiry.

### Glossary

| Term | Meaning |
|---|---|
| Alert fatigue | Desensitisation from excessive alerts. |
| BTP | Benign true positive. |
| Disposition | Recorded outcome of triage. |
| Enrichment | Context added to alerts. |
| Suppression | Rule exception with scope and expiry. |
| Time box | Maximum time before escalation or handover. |

### Common mistakes

closing low alerts unread; wildcard exclusions; trusting "no results".

### Revision questions

​1. Write the priority formula and explain each term. 2. Give three validation checks for an Office-spawns-shell alert. 3. Why do suppressions need expiry dates?
