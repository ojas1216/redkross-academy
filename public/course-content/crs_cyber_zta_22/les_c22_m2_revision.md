## Revision

### Summary

Identity is the control plane: a central IdP with federation, automated joiner-mover-leaver, managed entitlements and logs; identity infrastructure is tier 0. Authentication strength varies; prefer phishing-resistant FIDO2/passkeys and require MFA on every internet-facing path. Device posture conditions access by sensitivity. Workloads use short-lived, attribute-bound identities instead of static secrets. Privileged access uses separate identities, tiering, PAWs, JIT elevation, session controls and alerted break-glass accounts. The tested policy model stepped up an OTP login to a restricted portal, denied payroll from an unmanaged device and allowed intranet from one. Change Healthcare's 2024 breach began at a remote-access portal without MFA.

### Important concepts

phishing resistance; device-conditioned access; zero standing privilege.

### Key technical takeaways

conditional-access signals; JIT design; workload federation.

### Glossary

| Term | Meaning |
|---|---|
| CIAM | Customer identity and access management. |
| Conditional access | Policy using identity, device and risk signals. |
| JIT | Just-in-time elevation. |
| PAW | Privileged access workstation. |
| SCIM | System for Cross-domain Identity Management (provisioning). |
| Tier 0 | Assets controlling identity and infrastructure roots. |

### Common mistakes

MFA gaps on legacy portals; standing admin; shared service credentials.

### Revision questions

​1. Rank MFA methods. 2. Design device trust rules. 3. List break-glass controls.
