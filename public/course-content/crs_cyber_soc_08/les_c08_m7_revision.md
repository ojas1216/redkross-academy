## Revision

### Summary

NIST SP 800-61 Rev. 3 (April 2025) frames incident response within CSF 2.0 risk management, while the older lifecycle vocabulary remains useful. SOC analysts declare incidents against criteria and escalate with a fixed structure: what, so what, evidence, confidence, done, need. Communication uses need-to-know, out-of-band channels and a single incident log. In India, CERT-In requires specified incidents to be reported within 6 hours, and DPDP Rule 7 (72-hour detailed report) applies once its tranche commences. Containment options (isolate, block, reset and revoke, remove persistence) are weighed against evidence and business impact, and powering off is rarely the first choice. Evidence is preserved in order of volatility, hashed (SHA-256), recorded in custody logs and verified. In the lab, the export was reproducible, and a one-figure change was detected as FAILED. Colonial Pipeline shows the business weight of containment decisions and the value of early notification to law enforcement.

### Important concepts

structured escalation; proportionate containment; evidence integrity.

### Key technical takeaways

SHA-256 manifests; reproducible exports; CRLF pitfalls.

### Glossary

| Term | Meaning |
|---|---|
| Chain of custody | Record of evidence handling. |
| Containment | Actions limiting incident spread or harm. |
| CSIRT | Computer security incident response team. |
| Incident lead | Person coordinating response decisions. |
| Order of volatility | Priority for collecting evidence that disappears. |
| Out-of-band | Communication outside potentially compromised systems. |

### Common mistakes

wiping first; unstructured escalations; missing the "noticed" time.

### Revision questions

​1. Write the six escalation parts. 2. Compare isolation and power-off. 3. List four fields of a custody record.
