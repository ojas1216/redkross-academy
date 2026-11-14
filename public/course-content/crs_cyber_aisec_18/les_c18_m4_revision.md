## Revision

### Summary

AI systems expose data through retrieval over-reach, prompt leakage, memorisation, output channels, logs, vendors and classic bugs. Training data lacks per-user access control and is hard to delete, so customer facts belong in access-controlled retrieval; training data needs minimisation, lawful basis and memorisation testing. Retrieval indexes are new data stores needing ACLs, ingestion audits, deletion sync and output redaction; on BanyanBot only ACL retrieval plus redaction stopped cross-customer disclosure (5/5 to 0/5), while prompt wording did nothing. Conversation logs and vendor flows need classification, retention and contracts. Governance covers inventory, lineage, provenance, access, retention and integrity; privacy law (DPDP Act, GDPR, EU AI Act where in scope) applies. Italy's Garante action in 2023 shows regulators applying existing privacy law to AI services.

### Important concepts

control what the model is given; index as data store; data lineage.

### Key technical takeaways

kb_audit.py gate; ACL retrieval; output redaction.

### Glossary

| Term | Meaning |
|---|---|
| Data lineage | Record of where data came from and where it went. |
| Memorisation | Model reproduction of training data. |
| PIA | Privacy impact assessment. |
| Redaction | Removing sensitive values from output. |

### Common mistakes

fine-tuning on personal data for facts; indexing with service accounts; unlimited log retention.

### Revision questions

​1. Compare training and retrieval data risks. 2. Why did prompt_only fail P4? 3. List vendor questions.
