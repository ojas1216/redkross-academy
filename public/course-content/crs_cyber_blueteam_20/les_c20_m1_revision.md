## Revision

### Summary

Defensive engineering builds the prevent-observe-detect-respond system and the feedback loops that improve it. Priorities come from a threat model, not from the full ATT&CK matrix (227 techniques and 479 sub-techniques in Enterprise ATT&CK 20.1). Every telemetry source needs a specification: what, where (as a fleet share), how, how long, when and trust. ATT&CK 20.1 adds detection strategies, analytics and data components. It has also replaced Defense Evasion with Stealth and Defense Impairment, so mappings must be versioned. A coverage matrix joins telemetry, priorities and rules, scored 0-3 honestly, with partial fleet coverage marked. Tamarind's 79% hides a quarter-fleet security log, a blind registry gap and two visible gaps. AA23-193A shows a single well-chosen audit log, with a baseline, exposing a sophisticated intrusion.

### Important concepts

blind versus visible versus detected versus tested; denominators; telemetry as an attack surface.

### Key technical takeaways

tag rules with technique IDs; compute coverage from inventories; alert on silent sources.

### Glossary

| Term | Meaning |
|---|---|
| Analytic | A platform-specific description of detection logic (ATT&CK object). |
| Coverage matrix | A table scoring priority techniques against telemetry and detections. |
| Data component | The observable a detection needs (ATT&CK object). |
| Detection strategy | ATT&CK's description of how to detect a technique. |
| Telemetry | Machine-generated records of activity used for detection. |

### Common mistakes

counting rules instead of reporting hosts; heat maps without definitions; retention shorter than the time to discovery.

### Revision questions

​1. Define the four coverage scores. 2. List the six telemetry questions. 3. Explain why T1070.001 no longer appears in ATT&CK 20.1.
