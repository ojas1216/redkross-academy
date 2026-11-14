## Revision

### Summary

Command and control (C2, ATT&CK tactic TA0011) is the adversary's channel to direct compromised systems and stage exfiltration - their LIFELINE. Conceptually, a compromised host (implant/beacon) reaches OUT to an adversary server, usually over common application-layer protocols (T1071) so it blends in, with beaconing on an interval, possible redirection, and resilient fallbacks. Its weakness is that it must cross the NETWORK BOUNDARY repeatedly - exactly where defenders can see and cut it.

**C2 produces NETWORK INDICATORS:** periodicity (beaconing - often the strongest signal), unusual/rare/new destinations, and protocol anomalies, read from flow, proxy and DNS logs. Because C2 uses normal protocols, DETECTION is behavioural (interval analysis, destination reputation, anomaly), not protocol blocking - the same beacon logic as Course 07's flow analysis. CONTAINMENT cuts the channel: egress deny-by-default, proxy inspection, blocking known indicators, DNS control and segmentation; detection and containment pair, and cutting C2 can neutralise an intrusion by stripping the adversary's control. The lab's attackmap.py (C2 filter) maps T1071 to its telemetry, beacon detection and egress/proxy containment. The module is CONCEPTUAL and defensive and contains no C2 tooling: the lab emulates only the INDICATOR (a benign periodic beacon) to a LAB SINK inside the isolated range, with no real egress, so detection can be tested harmlessly.

### Important concepts

C2; beaconing; C2 architecture theory; network indicators; T1071; behavioural detection; egress/proxy containment; lab-sink emulation.

### Key technical takeaways

C2 crosses the boundary - detect it there; detect beacons behaviourally; contain with egress deny-by-default and proxy inspection; emulate only the indicator to a lab sink.

### Glossary

| Term | Meaning |
|---|---|
| command and control (C2) | the adversary's channel to direct compromised systems. |
| beacon | a regular, machine-like check-in from an implant to a C2 server. |
| network indicator | an observable (periodicity, destination, anomaly) of C2. |
| egress filtering | denying arbitrary outbound traffic (allow only where needed). |
| lab sink | a destination inside the isolated range used to emulate a beacon safely. |

### Common mistakes

trying to block C2 by protocol; ignoring beaconing; permissive egress; standing up real C2 to "test"; detection without egress containment.

### Revision questions

​1. Why is the network boundary the place to detect C2? 2. Name three C2 network indicators. 3. How is C2 emulated safely in the lab?
