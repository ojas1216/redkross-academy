## Revision

### Summary

AWS principals include the root user, IAM users and roles; Entra has users, service principals and managed identities. People should use SSO with phishing-resistant MFA; workloads should use roles or managed identities.

**AWS evaluation:** explicit Deny wins, then Allow (within SCPs and boundaries), otherwise implicit deny - the lab reproduced this, including the trap that a Bool MFA deny does not apply to long-term access keys while BoolIfExists does. Azure RBAC assigns roles at scopes with inheritance; Owner and User Access Administrator are privileged; Entra directory roles are separate. Guardrails - SCPs, permission boundaries, Azure Policy, PIM, Conditional Access - bound privilege, and sensitive permissions such as PassRole need tight control. The lab review flagged a legacy full-access user with a key and no MFA, an unrestricted PassRole and a role trusting any principal. Midnight Blizzard's entry through a legacy test account without MFA shows why every identity must be governed.

### Important concepts

least privilege; temporary credentials; guardrails.

### Key technical takeaways

BoolIfExists for MFA denies; ExternalId for third parties; restrict PassRole.

### Glossary

```text
Confused deputy    A trusted service misused to act for another party.
ExternalId         Condition value required to assume a third-party role.
Managed identity   Azure-managed workload identity.
Permission boundary Maximum permissions for an IAM principal.
PIM                Privileged Identity Management.
Trust policy       Who may assume an IAM role.
```

### Common mistakes

IAM users for people; `"*"` actions; Bool MFA conditions; permanent Owner assignments.

### Revision questions

​1. Walk through evaluation of a request with Allow and Deny. 2. Why can access keys bypass a Bool MFA deny? 3. Design vendor access.
