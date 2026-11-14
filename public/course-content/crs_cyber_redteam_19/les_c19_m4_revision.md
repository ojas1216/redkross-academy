## Revision

### Summary

Endpoints and identities are where intrusions turn a foothold into real access, so this module assesses PRIVILEGE BOUNDARIES (user->admin escalation paths, tiering per the Enterprise Access Model, least privilege) and CREDENTIAL EXPOSURE (secrets at rest, cached, in transit, or reused) - and, centrally, maps each tested behaviour to DEFENSIVE TELEMETRY. The identity-relevant ATT&CK techniques (verified current 2026-11-08) - T1078 Valid Accounts, T1087 Account Discovery, T1550 Use Alternate Authentication Material - are "living off the land": they abuse legitimate mechanisms, so detection must be BEHAVIOURAL (anomalous logons, bulk enumeration, orphan non-interactive auth) over authentication and directory/process telemetry, not signature-based. Each technique is paired with CONTAINMENT (MFA, tiered admin, logon restrictions, least privilege, Protected Users/credential hygiene). The lab's attackmap.py turns the plan's identity steps into a table of data source, detection and containment, and the engagement's job is to confirm whether each detection actually exists (tested in Module 7). Testing stays authorised, in scope, non-destructive (no lockouts), isolated and simulation-only, using lab accounts and synthetic data - never harvesting real users' credentials. The goal is to improve identity and endpoint defence, not to amass access.

### Important concepts

privilege boundaries; credential exposure; identity ATT&CK techniques; defensive telemetry; behavioural detection; containment; safe testing.

### Key technical takeaways

assess escalation/tiering/least-privilege and credential exposure; detect identity abuse behaviourally over authentication telemetry; pair detection with containment; test with lab accounts, non-destructively.

### Glossary

```text
privilege boundary  a separation between access levels (user/admin, tiers).
credential exposure  any way a secret becomes available to an attacker.
Valid Accounts (T1078)  abusing legitimate credentials across tactics.
defensive telemetry  the data (authentication, directory, endpoint) that reveals
    abuse.
behavioural detection  detecting by anomalous behaviour rather than signatures.
```

### Common mistakes

chasing access instead of detection; signature-only detection; harvesting real credentials; causing lockouts; detection without containment.

### Revision questions

​1. Why is Valid Accounts hard to detect by signature? 2. Name the primary identity telemetry and three behavioural detections. 3. Pair a detection with a containment for T1078.
