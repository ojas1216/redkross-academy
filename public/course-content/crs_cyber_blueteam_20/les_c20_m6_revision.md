## Revision

### Summary

SOAR connects tools, automates routine steps and executes response actions through connectors, within an incident-response process (NIST SP 800-61 Rev. 3, April 2025). Use the automation ladder: fully automate reversible read-only work; gate containment behind risk-tiered approvals (two distinct people for tier-0 assets); keep destructive, mass and legal actions manual. Safety patterns: dry-run default, idempotency, rate limits, input validation (alert text is untrusted), scope limits, fail-safe errors, rollback and least privilege. Entity resolution merged Tamarind's alerts into one case with 88 alerts from 7 rules. The engine's seven gate checks pass, its re-run repeats nothing and its audit log records every decision. The 2017 S3 disruption shows why validation, slowness and floors matter even for authorised operators following a playbook.

### Important concepts

blast radius; two-person control; idempotency.

### Key technical takeaways

pure-function policy tests; append-only audit; per-hour caps.

### Glossary

```text
CMDB      Configuration management database.
Connector An integration that performs actions on another system.
Playbook  A defined, versioned response procedure.
SOAR      Security orchestration, automation and response.
```

### Common mistakes

auto-containment from noisy rules; shell strings built from alerts; approvals without identity.

### Revision questions

​1. Place five steps on the ladder. 2. List six safety patterns. 3. Explain time-aware entity resolution.
