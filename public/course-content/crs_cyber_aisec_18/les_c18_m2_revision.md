## Revision

### Summary

Models process tokens inside a context window that holds system prompt, history, retrieved documents, tool results and the answer; all of it can influence behaviour, and roles are a convention rather than enforcement. Sampling makes outputs vary, so tests need multiple seeds and recorded settings. RAG ingests, retrieves and inserts documents; authorisation must happen at retrieval, before ranking, and untrusted sources need ingestion audits - the lab trace showed ACLs removing another customer's record from the context, and the planted page reaching an ordinary refund question. Structured output and tool calling leave execution to the application, which must validate, check policy, use the user's authority and log. Agents loop over plans and tools, adding untrusted tool results and unbounded cost, and need least-privilege tools, limits and approvals. Greshake et al. (2023) described indirect prompt injection against such architectures.

### Important concepts

one token stream; authorise at retrieval; the application executes tools.

### Key technical takeaways

retrieval_trace.py; prompt_eval_count; JSON schema output.

### Glossary

| Term | Meaning |
|---|---|
| Agent | LLM application that plans and acts in loops. |
| Chunk | Piece of a document indexed for retrieval. |
| Embedding | Vector representation of text. |
| Temperature | Sampling setting controlling randomness. |
| Token | Unit of text processed by the model. |
| Top-k | Number of retrieved chunks. |

### Common mistakes

service-account indexing; trusting roles; one agent with all tools.

### Revision questions

​1. Trace one request through BanyanBot. 2. Why filter before ranking? 3. List agent controls.
