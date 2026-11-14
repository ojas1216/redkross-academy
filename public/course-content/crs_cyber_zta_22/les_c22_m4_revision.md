## Revision

### Summary

Network architecture contains and enforces: macro-segmentation separates environments and the management plane; micro-segmentation restricts workload flows, ideally by identity labels; default-deny flow matrices are verified by automated tests. In the tested Docker lab, intended flows worked, web could not reach the database by name or IP, and the internal-only data network had no route to the internet. Gateways (reverse proxy, API gateway, identity-aware proxy/ZTNA, bastion, enclave gateway) provide controlled entry; ZTNA grants per-application, per-session access. Encrypt everything (TLS/mTLS, private links) with automated certificates. Control egress and DNS. Treat edge appliances as targets: minimise exposure, patch fast, log centrally and segment what they reach - the lesson of the 2024 Ivanti advisory.

### Important concepts

verified segmentation; per-app access; egress control.

### Key technical takeaways

flow matrix; --internal networks; name-and-IP probes.

### Glossary

| Term | Meaning |
|---|---|
| East-west traffic | Traffic between internal systems. |
| Egress control | Restricting outbound connections. |
| Enclave gateway | Gateway protecting a group of legacy resources. |
| Flow matrix | Documented allowed network flows. |
| Micro-segmentation | Fine-grained workload isolation. |

### Common mistakes

trusting the VPN subnet; untested rules; open egress.

### Revision questions

​1. Write a flow matrix for three tiers. 2. Why did the lab test IPs? 3. Compare VPN and ZTNA.
