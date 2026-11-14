## Revision

### Summary

NIST SP 800-145 defines cloud computing by five characteristics, three service models and four deployment models, each with security consequences. AWS and Azure organise resources into organisations/tenants, accounts/subscriptions and regions/zones; landing zones separate environments and centralise identity, logging and guardrails. Shared responsibility divides security "of" and "in" the cloud: customers always own identity and access, data and logging configuration. Every control-plane action is an authenticated API call, which makes identity the main perimeter and control-plane logs essential. A defender's threat model maps assets and trust boundaries to preventive and detective controls, log sources, responses and owners. Provider-side issues such as ChaosDB (August 2021) require customer action - key rotation, log review and stronger authentication choices.

### Important concepts

shared responsibility; control versus data plane; landing zones.

### Key technical takeaways

responsibility matrices; threat-model tables with log sources; organisation guardrails.

### Glossary

| Term | Meaning |
|---|---|
| Availability zone | Separate data centre(s) within a region. |
| Control plane | APIs that manage resources and permissions. |
| Data plane | Operations on data and workloads. |
| Landing zone | Pre-planned multi-account/subscription structure. |
| SCP | AWS service control policy. |
| Shared responsibility | Division of security duties. |

### Common mistakes

assuming provider certificates cover customer layers; one account for everything; spreadsheet asset inventories.

### Revision questions

​1. Map the five NIST characteristics to security consequences. 2. What remains with the customer in SaaS? 3. Write three threat-model rows for a database.
