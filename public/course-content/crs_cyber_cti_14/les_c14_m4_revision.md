## Revision

### Summary

Threat actors, intrusion sets, campaigns and activity clusters are different things; vendor names do not align perfectly, so keep your own cluster identifiers and map them with confidence. The Diamond Model (Caltagirone, Pendergast, Betz 2013) describes events by adversary, capability, infrastructure and victim plus meta-features, and threads events together. Behaviour profiles support detection and clustering but are weak identity evidence. Campaign analysis builds events, clusters, timelines and competing hypotheses. Attribution has levels from technical clustering to sponsor responsibility; most organisations work at the first. In the lab six ATT&CK 20.1 groups shared all eight parent techniques of the campaign, showing that overlap is not attribution. Olympic Destroyer's copied Rich header showed deliberate false flags. Communicate the level claimed, likelihood and confidence separately, and alternatives.

### Important concepts

intrusion set versus actor; Diamond Model; attribution levels; false flags.

### Key technical takeaways

keep the adversary vertex unknown until evidence fills it; prefer distinctive behaviours; check internal consistency.

### Glossary

| Term | Meaning |
|---|---|
| Activity cluster | Working grouping of related activity. |
| Campaign | Grouped adversarial behaviour over time against targets. |
| False flag | Evidence planted to mislead attribution. |
| Rich header | Build metadata in Windows executables. |

### Common mistakes

naming actors from weak sources; overlap as attribution; adopting vendor names as fact.

### Revision questions

​1. Name the four core features. 2. Describe the four attribution levels. 3. Explain the Olympic Destroyer finding.
