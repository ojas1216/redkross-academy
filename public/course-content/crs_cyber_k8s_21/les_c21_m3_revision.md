## Revision

### Summary

The control plane (API server, etcd, scheduler, controller manager) holds and reconciles desired state; nodes run kubelets, a container runtime and the network data plane. Every request passes TLS, authentication (401 if refused; system:anonymous if anonymous authentication is enabled, which is the upstream default), authorisation (403), admission (mutating then validating), validation and persistence. etcd holds everything; secrets are base64 in the API and stored in plain text unless encryption at rest is configured, and pre-existing secrets must be rewritten after enablement. Workload objects form ownership chains and are reconciled continuously, so changes belong in templates and Git. The kubelet API is powerful and must require authentication and webhook authorisation. Managed services move control-plane operation, not workload security, to the provider. The lab confirmed 401 for anonymous requests, reconciliation, and plaintext versus aescbc storage. CVE-2018-1002105 showed an API server flaw invisible to audit logs.

### Important concepts

request path; datastore sensitivity; encryption at rest; reconciliation; kubelet API.

### Key technical takeaways

test anonymous access; test encryption with a canary value; protect etcd backups; patch the control plane.

### Glossary

```text
Admission      Plug-ins that mutate or validate requests after
               authorisation.
etcd           The cluster's key-value datastore.
KMS provider   Encryption at rest with keys held in an external KMS.
Reconciliation Controllers driving observed state towards desired state.
```

### Common mistakes

treating base64 as encryption; enabling encryption without rewriting; exposing the API or kubelet broadly; hand-editing pods.

### Revision questions

​1. Walk a "create pod" request through the path. 2. Explain 401 versus 403. 3. List four kubelet protections.
