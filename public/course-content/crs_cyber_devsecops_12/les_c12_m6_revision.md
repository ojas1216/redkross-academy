## Revision

### Summary

Secrets include passwords, tokens, keys and certificates, and should be inventoried with owners and lifetimes. Store them in secrets managers or KMS, deliver them at runtime by reference with least privilege per environment, and keep them out of code, images, logs and CI output. Better still, remove them with workload identity and OIDC federation. Secret scanning uses patterns and entropy in pre-commit hooks, CI gates and history scans. In the lab, gitleaks found nothing in the working tree but found the secret in history (commit 6e1981d). Scanners have gaps, so layer them. Leak response is revoke, investigate, fix, then optionally clean history, and record. Configuration hardening uses secure defaults, validated startup configuration (the lab checker failed five rules with exit 1 and passed the hardened file), IaC scanning and drift detection. Uber's 2016 breach started with an access key on a code-sharing site.

### Important concepts

no static secrets where avoidable; history persists; revoke first.

### Key technical takeaways

gitleaks detect (--no-git vs history, --redact); secretref pattern; startup checks with exit codes.

### Glossary

| Term | Meaning |
|---|---|
| Entropy | Measure of randomness used to spot secrets. |
| OIDC federation | Exchanging CI identity tokens for short-lived cloud credentials. |
| Pre-commit hook | Check run before a commit is created. |
| Push protection | Server-side blocking of pushes containing secrets. |
| Secrets manager | Service storing, auditing and rotating secrets. |
| Workload identity | Platform-issued identity for services. |

### Common mistakes

deleting the secret but not revoking it; secrets in images; blanket allowlists.

### Revision questions

​1. Order the leak-response steps. 2. Why do history scans matter? 3. Name three configuration settings to enforce in production.
