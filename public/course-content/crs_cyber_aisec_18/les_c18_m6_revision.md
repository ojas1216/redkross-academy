## Revision

### Summary

The AI supply chain spans base models, adapters, model files and loaders, inference servers, packages, datasets, knowledge-base content, hosted APIs and prompts; an AI-BOM records them. Provenance review covers publisher, model card, licence, formats and exact revision. Some formats execute code on load, so prefer safe formats such as safetensors or runtime formats like GGUF, scan files and sandbox loading - JFrog's 2024 report found about 100 malicious models on a public hub. Dependencies and inference servers need pinning, patching and private, authenticated exposure. Poisoning is countered with provenance, review, manifests, ingestion audits and regression evaluation; integrity checks prove "unchanged", not "safe". The lab check approved only the pinned model digest, flagged three unapproved models and detected an unreviewed knowledge-base edit.

### Important concepts

AI-BOM; safe loading; integrity versus safety.

### Key technical takeaways

supply_check.py; digests; release gate.

### Glossary

| Term | Meaning |
|---|---|
| AI-BOM | AI bill of materials. |
| GGUF | Model file format used by llama.cpp-based runtimes. |
| Model card | Documentation of a model's purpose and limits. |
| Pickle | Python serialisation that can execute code on load. |
| Poisoning | Manipulating data to change model behaviour. |
| safetensors | Tensor-only model storage format. |

### Common mistakes

deploying "latest"; loading unknown models on privileged hosts; trusting hashes as safety.

### Revision questions

​1. List eight supply-chain components. 2. Why is integrity not safety? 3. Design a release gate.
