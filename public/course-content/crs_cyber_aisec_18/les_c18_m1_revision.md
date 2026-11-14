## Revision

### Summary

AI applications combine classic software with a learned, probabilistic component that treats all text in its context as potential instruction. The lifecycle - plan, data, model, integrate, evaluate, deploy, operate, retire - carries security activities at each stage; NIST AI RMF (26 January 2023) structures them into Govern, Map, Measure and Manage, with the Generative AI Profile (26 July 2024). Assets include data, model, prompts, tools, outputs, platform and reputation. Trust boundaries include the context window itself, so strong controls sit outside the model: retrieval access control, tool policies in code, output handling. OWASP LLM Top 10 2025 and NIST AI 100-2 E2025 give the vocabulary. A defender's threat model ties every row to a control, detection, owner and probe. The March 2023 chatbot exposure came from a classic library bug.

### Important concepts

context as trust boundary; probabilistic behaviour; controls outside the model.

### Key technical takeaways

BanyanBot data flow; threat-model rows mapped to probes.

### Glossary

| Term | Meaning |
|---|---|
| Canary | A unique marker whose appearance proves a leak. |
| Context window | The tokens the model processes at once. |
| LLM | Large language model. |
| RAG | Retrieval-augmented generation. |
| System prompt | Developer instructions placed before user input. |

### Common mistakes

secrets in prompts; trusting the model to enforce policy; no evaluation plan.

### Revision questions

​1. List six assets of an LLM app. 2. Where are the trust boundaries? 3. Name the OWASP 2025 categories.
