## Revision

### Summary

Zero trust removes location-based implicit trust: every access is authenticated, authorised and evaluated by dynamic policy per session, with continuous monitoring (the seven tenets of SP 800-207, restated in CISA ZTMM v2.0). Logical components: policy engine (decides), policy administrator (sets up/tears down paths), policy enforcement point (enables, monitors, terminates). Approaches combine identity governance, micro-segmentation and software-defined perimeters in agent/gateway, enclave, portal or sandbox deployments; SP 1800-35 (June 2025) documents 19 example builds. CISA ZTMM: five pillars, three cross-cutting capabilities, four stages. Policies are default-deny, entitlement-plus-conditions, risk-adaptive, logged and continuously re-evaluated. The tested model stepped up medium-risk access, denied unentitled and unknown requests, and denied high-risk sessions. Midnight Blizzard's 2023-24 intrusion exploited implicit trust in a legacy test tenant and an over-privileged OAuth app.

### Important concepts

no implicit trust; PDP/PEP; maturity journey.

### Key technical takeaways

policy-as-code; signal freshness; fail modes.

### Glossary

| Term | Meaning |
|---|---|
| PDP | Policy decision point (PE + PA). |
| PE | Policy engine. |
| PA | Policy administrator. |
| PEP | Policy enforcement point. |
| ZTMM | CISA Zero Trust Maturity Model. |
| ZTNA | Zero trust network access. |

### Common mistakes

product equals zero trust; ignoring test environments; undefined failure modes.

### Revision questions

​1. Recite the seven tenets. 2. Explain PE/PA/PEP. 3. Name ZTMM pillars and stages.
