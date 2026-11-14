## Revision

### Summary

IOCs are atomic, computed or behavioural; the Pyramid of Pain (Bianco, 2013) ranks hashes, addresses, domains, artefacts, tools and TTPs by the cost to the adversary of changing them. The lifecycle is ingest, normalise, validate and allowlist, merge, enrich, score and age, deploy, observe, review and retire. Feeds contain public services, known-bad data (the empty-file MD5), shared hosting, stale entries and context that merges can hide. Score with type-specific half-lives and corroboration, activate above a threshold, and expire automatically. Match the right fields and count events once. In the lab, naive matching produced 81 events (73 false); the managed pipeline produced 8, all real, all from one workstation. GRIZZLY STEPPE warned that listed addresses could carry legitimate traffic.

### Important concepts

Pyramid of Pain; lifecycle; allowlist; half-life; sightings.

### Key technical takeaways

never connect a feed straight to a block list; log every drop with a reason; test matchers.

### Glossary

| Term | Meaning |
|---|---|
| Allowlist | Values that must never be treated as malicious. |
| Half-life | Time for an indicator's score to halve without new evidence. |
| Refang | Restore a defanged value (hxxp, [.]) to its real form. |
| Sighting | A recorded observation of an indicator. |

### Common mistakes

blocking feeds blindly; no expiry; merging away context; counting field matches as events.

### Revision questions

​1. List the lifecycle stages. 2. Compute the score of a 60-confidence domain last seen 30 days ago. 3. Explain why the URL was missed.
