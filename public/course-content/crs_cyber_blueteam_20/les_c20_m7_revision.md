## Revision

### Summary

Purple teaming joins emulation and detection in short fix cycles. Validation ranges from telemetry replay (safe, logic only) through benign simulation (sensors) to authorised adversary emulation. ATT&CK provides the test plan, but versions drift. In 20.1, Defense Evasion became Stealth and Defense Impairment, and T1070.001 became T1685.005, so tags are migrated with revoked-by data and linted. Variants come from documentation (pwsh's -e and -ec aliases; case-insensitive parameters), alternative binaries and parents. Tamarind's pack detected 5/8 cases; two tuned rules reached 8/8, with all unit tests passing and no change in reference-day hit counts. The new " -e " match brings a documented false-positive risk. AA24-326A shows the real-world cost of untested, single-sensor detection.

### Important concepts

replay versus emulation; version pinning; regression testing.

### Key technical takeaways

generate variants from documentation; lock gains with tests; root-cause each miss.

### Glossary

| Term | Meaning |
|---|---|
| Adversary emulation | Reproducing a threat's behaviour under authorisation. |
| Purple team | Collaborative red and blue validation. |
| Regression test | A check that a change broke nothing that worked. |
| Revoked-by | STIX relationship pointing to a replacement object. |
| Telemetry replay | Feeding recorded or synthetic events to detections. |

### Common mistakes

testing only the author's example; ignoring ATT&CK changes; tuning without a regression set.

### Revision questions

​1. Compare the three validation methods. 2. Explain PT-06's miss. 3. Describe the five-step tuning routine.
