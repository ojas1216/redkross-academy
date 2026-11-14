## Revision

### Summary

Pods are non-isolated by default; NetworkPolicy, implemented only by supporting network plugins, isolates them additively by label, namespace and port. A baseline is default-deny for ingress and egress plus DNS egress and paired allows, proved with a reachability matrix that counts any HTTP answer as reachable. Pod Security Standards (Privileged, Baseline, Restricted) are enforced by namespace labels (enforce, audit, warn, version), assessed safely with server-side dry runs and backed by a cluster-wide default. Go beyond Restricted with read-only roots, limits, no token automount, custom profiles and user namespaces. Audit policies are first-match; log secrets at Metadata; detections must match exec by subresource (recorded as get/101 with WebSockets) and de-duplicate by auditID. Node sensors see inside containers. Hildegard combined an anonymous kubelet, internal scanning and process hiding.

### Important concepts

default deny; additive policy; PSA modes; first-match audit rules; actor resolution.

### Key technical takeaways

always allow DNS explicitly; test from client pods; dry-run PSA labels; dedupe by auditID.

### Glossary

| Term | Meaning |
|---|---|
| CNI | Container Network Interface (network plugins). |
| PSA | Pod Security Admission. |
| PSS | Pod Security Standards. |
| auditID | Identifier shared by all stages of one audited request. |

### Common mistakes

policies without an enforcing plugin; forgetting DNS; trusting "kubectl get networkpolicy" as evidence; verb-only exec rules.

### Revision questions

​1. Write a default-deny policy from memory. 2. List the Restricted controls. 3. Explain why rule order matters.
