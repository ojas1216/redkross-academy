## Revision

### Summary

ATT&CK Enterprise 20.1 has 15 tactics and, in the lab copy, 706 detection strategies, 1,773 analytics and 106 data components; detection strategies "detect" techniques and their analytics reference data components. Versions change (Defense Evasion retired; T1070.001 revoked by T1685.005); record the version and resolve revoked identifiers. Map behaviour, not indicators, at the level the evidence supports, with sources, and review mappings (CISA guidance v2.0, January 2023). Gap analysis against Nilgiri's six collected data components gave 1 COVERED, 6 PARTIAL and 2 BLIND (resource development, which only external intelligence can see). Gaps become use cases: collection (Network Traffic Content, Module Load, scheduled job events), detection, hunts, mitigations and external monitoring. Navigator layers communicate results; always state what a score means. AA24-038A showed behaviour-based defence against living off the land.

### Important concepts

detection strategies; data components; mapping discipline; visibility versus detection.

### Key technical takeaways

keep evidence per mapping; compare against the real inventory; define layer scores.

### Glossary

| Term | Meaning |
|---|---|
| Data component | ATT&CK unit of observable data (for example Process Creation). |
| Detection strategy | ATT&CK object describing how to detect a technique. |
| Layer | A Navigator JSON file of scored techniques. |
| Sub-technique | A more specific form of a technique. |

### Common mistakes

mapping IOCs; over-specific mapping; heat maps from marketing; ignoring versions.

### Revision questions

​1. Describe the detection model chain. 2. Explain COVERED versus tested. 3. List three use-case types.
