## Revision

### Summary

Detection engineering follows a lifecycle from requirement to retirement. Logic types include signature, behavioural, threshold, correlation and anomaly; prefer behaviour and anticipate attacker-controlled values. Sigma expresses detections in portable YAML; the course rules passed sigma check and converted to Splunk, but conversion without a pipeline omitted the log source (EventID=1102). Unit tests with positive, negative and boundary cases (7 passing) protect logic during tuning. ATT&CK v20.1 maps detections to 15 tactics; the 2026 split created Stealth and Defense Impairment, and log clearing is now T1685.005 - mappings must be versioned. The Banyan storyline maps from T1566.001 through T1685.005. Each detection needs documentation, an owner and review.

### Important concepts

behaviour over values; test before deploy; version your mappings.

### Key technical takeaways

Sigma selections and conditions; pipelines; unittest for detections.

### Glossary

| Term | Meaning |
|---|---|
| ATT&CK | MITRE knowledge base of adversary tactics and techniques. |
| Backend | pySigma component rendering a target query language. |
| Detection as code | Managing detections with version control and tests. |
| Pipeline | pySigma field and logsource mapping. |
| Sigma | Generic detection rule format. |
| Tactic | Adversary goal in ATT&CK. |

### Common mistakes

mapping every possible technique; untested rules; converting without pipelines.

### Revision questions

​1. Write a Sigma rule skeleton from memory. 2. Map four storyline events. 3. Why do boundary tests matter?
