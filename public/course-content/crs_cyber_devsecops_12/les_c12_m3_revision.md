## Revision

### Summary

Validate inputs at trust boundaries with allowlists, precise patterns (fullmatch), canonicalisation and schemas. Keep data separate from code with parameterised SQL, argument-list subprocess calls with "--", auto-escaping templates and no untrusted deserialisation. Encode output for its context (html.escape for HTML). Store passwords with slow salted hashes (scrypt in the lab), compare in constant time, manage sessions securely, throttle logins and prefer an identity provider. Authorise every object server-side, deny by default, and give identical responses for missing and forbidden. Handle errors, logging and defaults securely. The 8 execution-tested security unit tests enforce these requirements in the pipeline. MOVEit (AA23-158A) shows the impact of one injection flaw at scale.

### Important concepts

allowlists; separation of data and code; per-object authorisation.

### Key technical takeaways

re.fullmatch; ? placeholders; html.escape; hashlib.scrypt; hmac.compare_digest; secrets.

### Glossary

| Term | Meaning |
|---|---|
| Canonicalisation | Converting input to a standard form before checks. |
| Constant-time comparison | Comparison whose duration does not reveal content. |
| IDOR | Insecure direct object reference. |
| Output encoding | Converting data so it is displayed, not interpreted. |
| Parameterised query | Query with data passed separately from SQL text. |
| Salt | Random value making each password hash unique. |

### Common mistakes

denylists; client-side authorisation; fast password hashes.

### Revision questions

​1. Rewrite an f-string query safely. 2. Explain the "same error" rule. 3. List four session security settings.
