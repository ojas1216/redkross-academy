## Revision

### Summary

Authenticate people through an identity provider, pipelines with short-lived federated credentials, and pods with bound service account tokens; keep certificate admin access for break-glass because certificates cannot be revoked, and keep people out of system:masters. RBAC is additive: Roles and ClusterRoles define rules; RoleBindings scope them to one namespace and ClusterRoleBindings to all. High-risk permissions include secrets get/list/watch, workload creation, pods/exec, bind, escalate, impersonate, token creation and nodes/proxy; review them with a tool and an accepted-risk register. Bound tokens are audience-scoped, time-limited and invalid once their pod is gone (lab: 200 then 401); mounted tokens may carry a one-year exp when --service-account-extend-token-expiration is true (the default). Disable token automounting when not needed. Secrets need RBAC, KMS encryption, volume delivery, an external source of truth and rotation. ValidatingAdmissionPolicy (stable since v1.30) enforces rules RBAC cannot express; roll out with Warn and Audit before Deny.

### Important concepts

additive RBAC; implicit escalation; bound tokens; admission scope and actions.

### Key technical takeaways

kubectl auth can-i --list --as; rbac_review exit codes; automountServiceAccountToken: false; match Pods and workload controllers in policies.

### Glossary

| Term | Meaning |
|---|---|
| CEL | Common Expression Language, used in admission policies. |
| Bound token | A service account token tied to an object's existence. |
| Break-glass | Emergency access, tightly controlled and audited. |
| TokenRequest | API that issues bound service account tokens. |

### Common mistakes

wildcards; binding the default service account; static shared CI tokens; enforcing policies without a warn phase.

### Revision questions

​1. Name five escalation permissions. 2. Explain warnafter. 3. Contrast ValidatingAdmissionPolicy and webhooks.
