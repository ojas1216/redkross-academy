## Revision

### Summary

Cloud misconfigurations recur in exposure, identity, encryption, logging, resilience, secrets and defaults. CSPM tools (AWS Config and Security Hub, Azure Policy and Defender for Cloud, scripts) assess live configuration continuously; IaC scanning catches problems before deployment. The lab scan of weak Terraform found 21 passed and 32 failed checks; triage puts internet exposure first; a literal password went unflagged, showing scanner blind spots. Preventive guardrails (SCPs, Azure Policy deny, account defaults, CI gates, drift detection) close exposure windows, and exceptions need owners and expiry. Remediation is verified by re-scan (12 selected checks: 0/12 to 12/12) and by effect. The Power Apps case shows that insecure defaults, and fixes that apply only to new resources, require posture checks.

### Important concepts

prevent-detect-verify; triage; scanner limits.

### Key technical takeaways

checkov -d; exceptions as code; verify by effect.

### Glossary

| Term | Meaning |
|---|---|
| CSPM | Cloud security posture management. |
| Drift | Live configuration differing from declared code. |
| Guardrail | Preventive control that blocks bad configuration. |
| IaC | Infrastructure as code. |
| Suppression | Recorded exception to a scanner check. |

### Common mistakes

endless finding lists without prevention; permanent "temporary" exceptions; trusting a single scanner.

### Revision questions

​1. Name six misconfiguration patterns. 2. Why verify by effect? 3. Design an exception process.
