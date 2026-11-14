## Revision

### Summary

Assurance turns architectural claims into evidence through argument and tests. Architecture threat modelling applies STRIDE to data flows and trust boundaries, links threats to controls and requirements, and maps relevant threats to ATT&CK v20.1 for detection planning. Design reviews have entry criteria, defined reviewers and criteria, recorded decisions with conditions and expiring exceptions, and ADRs; automation handles the repeatable checks. Controls are validated by effect in authorised environments, with benign inputs and recorded results. A traceability matrix links requirements to controls, tests and hashed evidence; the lab matrix showed 7/9 validated, one failed and one without evidence. Continuous assurance repeats validation on change and on a cadence, with evidence-age metrics. Equifax's 2017 breach, as GAO reported, shows the cost of an inspection control silently disabled by an expired certificate and a scan that missed a vulnerable server.

### Important concepts

claim-argument-evidence; validation by effect; evidence age.

### Key technical takeaways

matrix as code; hash evidence; reconcile coverage with inventory.

### Glossary

| Term | Meaning |
|---|---|
| ADR | Architecture decision record. |
| Assurance | Justified confidence that requirements are met. |
| STRIDE | Spoofing, Tampering, Repudiation, Information disclosure, Denial of service, Elevation of privilege. |
| Traceability matrix | Requirement-control-test-evidence mapping. |
| Validation by effect | Testing the outcome a control promises. |

### Common mistakes

treating configuration as proof; one-off validation; threat models that never link to tests.

### Revision questions

​1. Rank five kinds of evidence. 2. Apply STRIDE to one trust boundary. 3. What triggers re-validation?
