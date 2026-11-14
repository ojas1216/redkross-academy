## Revision

### Summary

Model output is untrusted input to every sink - UI, queries, code, e-mail, URLs, tools and other models - and needs sink-specific encoding, validation and filtering. Rendered links and images can leak data; in the lab P6 failed 3/5 naive and 2/5 prompt_only but 0/5 with output filtering. Excessive agency is reduced by limiting functionality, permissions and autonomy; in naive runs the model refunded another customer's order at Rs 4999 because a planted page asked. Tool policies must be deterministic code using the session identity, ownership, business rules, thresholds, budgets and audit; seven unit tests prove BanyanBot's policy, complementing probes that test behaviour. Misinformation is managed with grounding, structured answers, limits and accuracy tests; the Air Canada case shows that organisations own their chatbot's statements.

### Important concepts

output as input; agency reduction; behaviour versus control evidence.

### Key technical takeaways

check_tool; filter_output; tool_policy_test.py.

### Glossary

| Term | Meaning |
|---|---|
| Excessive agency | More functionality, permission or autonomy than needed. |
| Output handling | Treatment of model output before use. |
| Sink | Destination of output (UI, SQL, shell, tool). |
| Utility | Whether the system still does its job. |

### Common mistakes

rendering model HTML; tools with admin keys; trusting model-supplied identities; only probing, never unit-testing.

### Revision questions

​1. List five output sinks and controls. 2. Explain the naive P5 result. 3. Why test the policy directly?
