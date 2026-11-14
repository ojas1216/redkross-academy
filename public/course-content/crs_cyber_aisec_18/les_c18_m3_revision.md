## Revision

### Summary

Prompt injection is text that changes model behaviour without being intended as instruction, arriving directly from users or indirectly through retrieved content, e-mails, web pages and tool results - often during benign users' requests. Because the model sees one token stream, prompt-level defences are probabilistic. Defenders control untrusted content (labels, ingestion audit, sanitising, retrieval scope) and build layers: input filtering, retrieval ACLs, delimiting, deterministic tool policies, output filtering, privilege separation and monitoring. Measured on BanyanBot over five runs per cell, prompt-only defences did not reliably reduce direct or indirect failures, while the hardened configuration reached 0/5 on P2-P6 and no canary leakage in 30 answers; naive answers carried the planted canary 6 times out of 30, including in benign questions. Utility must be measured too. The Slack AI report shows how content features become injection channels.

### Important concepts

direct versus indirect; probabilistic prompt defences; deterministic layers.

### Key technical takeaways

canary probes; multiple seeds; sanitising imported content; tool policy in code.

### Glossary

| Term | Meaning |
|---|---|
| Delimiting | Marking untrusted text with tags in the prompt. |
| Indirect prompt injection | Instructions delivered via retrieved content. |
| Sanitising | Removing risky content at ingestion or retrieval. |
| Utility test | Probe that checks the intended function still works. |

### Common mistakes

trusting a system prompt; testing once; ignoring utility; indexing imported content without review.

### Revision questions

​1. Explain the P3 results. 2. Which layers are deterministic? 3. Design detection for injection.
