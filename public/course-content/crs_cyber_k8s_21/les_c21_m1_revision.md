## Revision

### Summary

A container is a process with namespaces, cgroups, an image-based root filesystem and reduced privileges, all on one shared kernel. Images are content-addressed: digests are immutable, tags are movable pointers, and image configuration (including ENV) is readable by anyone who can pull. The runtime stack runs from dockerd or kubelet through containerd to runc, which creates containers from OCI bundles. Docker keeps 14 capabilities by default, applies a seccomp filter, and does not remap user IDs, so container root is kernel root. Hardening (--cap-drop ALL, non-root user, no-new-privileges, read-only root, pids and memory limits) was measured in the lab. Privileged mode, host namespaces, runtime sockets, writable host paths and added capabilities break isolation. NIST SP 800-190 provides the five risk areas for threat modelling; CVE-2024-21626 showed the boundary is software to be patched.

### Important concepts

shared kernel; digest versus tag; capabilities; no_new_privs; isolation-breaking options.

### Key technical takeaways

measure CapEff and uid_map; drop ALL; never mount docker.sock into workloads; set pids and memory limits.

### Glossary

| Term | Meaning |
|---|---|
| cgroup | Control group: kernel resource limiting and accounting. |
| Capability | A unit of root privilege (for example CAP_NET_RAW). |
| Digest | SHA-256 identifier of image content. |
| OCI | Open Container Initiative (image, runtime, distribution specifications). |
| runc | The reference OCI runtime. |
| seccomp | Kernel system-call filtering. |

### Common mistakes

trusting tags; "it is in a container, so root is fine"; privileged mode as a troubleshooting shortcut; no resource limits.

### Revision questions

​1. Name the eight namespaces. 2. Explain why --privileged defeats most other controls. 3. Give two reasons to deploy by digest.
