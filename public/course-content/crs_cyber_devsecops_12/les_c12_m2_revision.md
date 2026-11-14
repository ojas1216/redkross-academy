## Revision

### Summary

Threat modelling answers four questions: what are we working on, what can go wrong, what will we do about it, and did we do a good job. DFDs show external entities, processes, stores, flows and trust boundaries, including build-time boundaries such as package sources. Assets have required properties, and personal data carries DPDP obligations. STRIDE (spoofing, tampering, repudiation, information disclosure, denial of service, elevation of privilege) generates specific threats per element. Abuse cases turn misuse into expected behaviour, mitigations and tests. Prioritise with risk = likelihood x impact, plus an explicit decision for impact-5 threats. In the tested register, the pipeline threat scored 10 despite impact 5. Track decisions with owners and expiries. The PyTorch nightly incident shows the cost of an undrawn supply-chain boundary.

### Important concepts

trust boundaries; specific threats; traceability to tests.

### Key technical takeaways

DFD notation; STRIDE heuristic; register as code.

### Glossary

| Term | Meaning |
|---|---|
| Abuse case | Misuse scenario with required system behaviour. |
| Asset | Something of value to protect. |
| DFD | Data-flow diagram. |
| LINDDUN | Privacy threat-modelling method. |
| STRIDE | Spoofing, Tampering, Repudiation, Information disclosure, Denial of service, Elevation of privilege. |
| Trust boundary | Point where trust level changes. |

### Common mistakes

vague threats; omitting the build pipeline; models never revisited.

### Revision questions

​1. State the four questions. 2. Draw a DFD for a login flow. 3. Write one abuse case with a test.
