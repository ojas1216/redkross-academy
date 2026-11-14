## Revision

### Summary

Threat intelligence is analysed adversary information at strategic, operational and tactical levels, produced through a requirements-driven cycle. IOCs range from hashes (trivial to change) to TTPs (hard), per Bianco's Pyramid of Pain - so behaviour-based detections last longer. Every indicator needs source reliability, confidence, context and validity. TLP 2.0 (RED, AMBER, AMBER+STRICT, GREEN, CLEAR) governs sharing; STIX 2.1 (OASIS Standard, 10 June 2021) structures it, and TAXII transports it. In the tested lab, current high-confidence domains corroborated the WS-104 case, the spraying IP strengthened R2, an expired low-confidence IP matched an innocent session, and a hash "no match" reflected missing telemetry. Intelligence is perishable, shared infrastructure causes collateral matches, and absence of matches proves little. FireEye's 2020 countermeasure release shows sharing detections with explicit confidence labels.

### Important concepts

climb the pyramid; context and expiry; TLP discipline; "no data" is not "clean".

### Key technical takeaways

parameterised, anchored matching; reproducible as-of dates; STIX indicator properties.

### Glossary

| Term | Meaning |
|---|---|
| IOC | Indicator of compromise. |
| ISAC | Information Sharing and Analysis Center. |
| PIR | Priority intelligence requirement. |
| STIX | Structured Threat Information Expression. |
| TAXII | Trusted Automated Exchange of Intelligence Information. |
| TIP | Threat intelligence platform. |
| TLP | Traffic Light Protocol. |

### Common mistakes

auto-blocking raw feeds; ignoring expiry; leaking TLP material into public tools.

### Revision questions

​1. Order the Pyramid of Pain. 2. Define the four TLP 2.0 colours. 3. List five indicator limitations.
