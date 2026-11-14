## Revision

### Summary

The capstone runs the whole engagement END TO END in a FULLY ISOLATED range and delivers the reports. It INTEGRATES every stage: the RoE gate passes (authorised, scoped, safety-bounded); the threat-informed, ATT&CK-mapped emulation plan is validated and in scope; techniques are emulated under simulation boundaries with evidence recorded under chain of custody; each technique is mapped to telemetry and containment; purple-team gap analysis yields coverage, gaps and a retest list; and the EXECUTIVE and TECHNICAL reports are assembled. The EXECUTIVE report (for decision-makers) is short and honest: scope, authorisation, detection coverage (e.g. 4/7 = 57%), what it means for risk, and the top recommendations (the highest-value gaps). The TECHNICAL report (for engineers) gives each technique's ATT&CK mapping, safety boundary and DETECTED/GAP status, the containment, and the retest list. EVERY STATEMENT TRACES to evidence (plan, telemetry, chain-of-custody log); coverage and limitations are reported as measured, never overstated. Delivery keeps the course's rules - isolation, scope, data care and honesty - and the report documents them. The lab's report.py assembles both reports from the engagement artifacts. Producing the capstone deliverable demonstrates the entire course: engineer, plan, run (safely, in isolation), measure and report a red team engagement that leaves the organisation measurably better at detecting real adversaries.

### Important concepts

engagement integration; executive report; technical report; traceability; isolation/scope/ethics in delivery; the capstone deliverable.

### Key technical takeaways

run the whole pipeline in isolation; write two reports for two audiences; trace every statement to evidence; report coverage honestly with a retest path; keep delivery scoped and isolated.

### Glossary

```text
executive report  the short, honest summary for decision-makers (coverage, risk,
    recommendations).
technical report  the detailed per-technique report for engineers (with retest list).
traceability  every statement supported by engagement evidence.
detection coverage  detected / emulated techniques, reported honestly.
retest list  the prioritised gaps to engineer and re-emulate.
```

### Common mistakes

one report for all audiences; unevidenced claims; overstating success; hiding gaps; omitting the retest path; not recording isolation/scope.

### Revision questions

​1. What does each report contain and for whom? 2. What does traceability require? 3. How is partial coverage reported honestly?
