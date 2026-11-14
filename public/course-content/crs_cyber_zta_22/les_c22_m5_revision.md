## Revision

### Summary

Secure services authenticate every request, authorise per object with consistent policy, expose minimal validated interfaces, use secure defaults and workload identity, and log security events. Tenancy models (silo, pool, bridge) trade cost for isolation; pooled designs need token-derived tenant IDs, row-level security and per-tenant keys. Classification drives handling, with restricted data requiring phishing-resistant MFA, CMKs with separated custody, masking in non-production and strict retention; minimise data first. Encryption layers address different threats; key custody separates key and data administration, scopes keys, manages their lifecycle and audits use. The tested checker found nine design findings across four services, including unseparated custody and sub-180-day log retention. The Storm-0558 case shows how a long-lived, mis-scoped signing key can undermine identity at global scale.

### Important concepts

per-request authz; classification-driven controls; custody separation.

### Key technical takeaways

tenant isolation patterns; FLE with envelope encryption; design guardrails as code.

### Glossary

| Term | Meaning |
|---|---|
| CMK | Customer-managed key. |
| Crypto-shredding | Destroying keys to make data unreadable. |
| FLE | Field-level encryption. |
| Row-level security | Database enforcement of row access per session. |
| Tenant isolation | Preventing cross-customer access. |

### Common mistakes

one key for all; client-supplied tenant IDs; production data in test.

### Revision questions

​1. Compare silo and pool tenancy. 2. Design custody for a restricted store. 3. What does storage encryption not protect?
