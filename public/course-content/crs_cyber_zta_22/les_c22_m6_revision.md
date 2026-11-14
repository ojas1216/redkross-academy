## Revision

### Summary

Central logging is a pipeline - generate, collect, transport, store, use - designed with an approved policy, redundant collectors, encryption, immutable storage, adequate retention (at least 180 days under CERT-In), time synchronisation and pipeline-health alerts. Zero trust adds a telemetry set (IdP, PDP, PEP, EDR, DNS, cloud control plane, KMS) and continuous verification: sessions re-evaluated when inputs change, with monitoring signals for silent sources, fail-safe decisions, untracked policy changes, deny bursts and posture loss without revocation. Every component needs a chosen failure mode; restricted resources fail closed with break-glass. Single points of failure in logging, identity, PDPs, backups and update channels are removed by redundancy, independence and staged rollout. Incident-ready designs keep responders, backups and communications independent of production identity. The lab reviews found 16 design findings and five monitoring signals. CrowdStrike's July 2024 incident showed how a trusted component's failure mode and update path can decide the impact.

### Important concepts

pipeline integrity; continuous verification; failure modes; independence of recovery.

### Key technical takeaways

PDP decision logs are evidence; test every monitoring signal; staged rollout for security tooling.

### Glossary

| Term | Meaning |
|---|---|
| Break-glass | Controlled emergency access path. |
| Canary | First small ring in a staged rollout. |
| Fail closed | Deny when a decision cannot be made. |
| Fail open | Allow when a decision cannot be made. |
| RTO | Recovery time objective. |
| Heartbeat | Periodic signal proving a source is alive. |

### Common mistakes

logs kept only on the source; fail-open defaults nobody chose; backups administered from the production directory.

### Revision questions

​1. Design the failure mode for a restricted resource. 2. Name five zero trust telemetry sources. 3. Why monitor the logging pipeline itself?
