## Revision

### Summary

STIX 2.1 (Errata 01, OASIS Standard, 2 April 2025) models intelligence as 18 domain object types, two relationship objects (Relationship, Sighting), cyber observables, markings and bundles. The lab modelled MONSOON LANTERN as an unattributed Campaign with 10 Indicators (patterns, validity, confidence), 7 Attack Patterns, 17 Relationships, a Sighting and a Report - 38 objects, all validated and strictly parsed. TAXII 2.1 (OASIS Standard, 10 June 2021) exchanges STIX through discovery, API roots, collections, objects, manifests and status resources; the lab server published 38 objects, filtered by type and added_after, paged results and refused unauthorised access (401, 403). TLP 2.0 (from August 2022) has four labels - RED, AMBER (with AMBER+STRICT), GREEN, CLEAR. Sharing needs agreements, minimisation, licence checks, quality and feedback. AA23-144A showed both the reach of structured indicators and the need to keep their caveats.

### Important concepts

SDO/SRO/SCO; patterns and validity; TAXII resources; TLP 2.0; sharing governance.

### Key technical takeaways

validate patterns and parse strictly; mark sightings carefully; check server-side access control, not only client behaviour.

### Glossary

| Term | Meaning |
|---|---|
| Bundle | A container of STIX objects. |
| SDO/SRO/SCO | Domain, relationship and cyber-observable objects. |
| TAXII | Trusted Automated Exchange of Intelligence Information. |
| TLP | Traffic Light Protocol. |

### Common mistakes

modelling unattributed activity as a Threat Actor; indicators without valid_until; trusting client-side checks; sharing sightings broadly.

### Revision questions

​1. List eight SDO types. 2. Name the TAXII resources. 3. Explain AMBER+STRICT.
