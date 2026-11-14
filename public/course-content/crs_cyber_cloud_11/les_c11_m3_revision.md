## Revision

### Summary

VPCs and VNets divide private address space into subnets; routing decides exposure (AWS public subnets route to an internet gateway; Azure uses system routes and UDRs). Security groups are stateful allow-lists that can reference other groups; NSGs are stateful with priorities and deny rules; NACLs add stateless subnet filtering. Admin and database ports must never face the internet; use Session Manager or Bastion. Private connectivity (gateway and interface endpoints, Azure Private Endpoints) plus endpoint-restricted resource policies keeps data off the internet. Egress control, cloud firewalls, DNS control and flow logs limit and reveal misuse. IMDSv2 protects instance-role credentials with PUT-issued session tokens, 401 for token-less requests, X-Forwarded-For rejection and a hop limit of 1. The lab classified subnets by route, found SSH open to the internet and remediated it. The Capital One case shows how edge misconfiguration and workload credentials combine.

### Important concepts

routing defines exposure; group-referenced rules; private endpoints; IMDSv2.

### Key technical takeaways

describe_route_tables and describe_security_groups audits; aws:SourceVpce; HttpTokens=required.

### Glossary

| Term | Meaning |
|---|---|
| IMDS | Instance metadata service. |
| Interface endpoint | PrivateLink private IP for a service. |
| NACL | Stateless subnet network ACL. |
| NSG | Azure network security group. |
| Private Endpoint | Azure private IP for a PaaS resource. |
| UDR | Azure user-defined route. |

### Common mistakes

"temporary" open admin rules; allow-all egress; IMDSv1 left enabled; public IPs on servers.

### Revision questions

​1. Why classify subnets by route? 2. Explain IMDSv2's three protections. 3. Design private access to a key vault.
