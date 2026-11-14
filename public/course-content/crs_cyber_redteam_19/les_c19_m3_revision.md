## Revision

### Summary

Inside the authorised scope, an engagement MAPS assets and identities, VALIDATES findings in a controlled way, and MANAGES evidence rigorously. ASSET AND IDENTITY MAPPING inventories in-scope hosts, services, accounts and their relationships - only within scope. SCOPE ENFORCEMENT is fail-safe: a target is acted on only if provably in scope, and anything else is refused; it is applied before every action. CONTROLLED VALIDATION confirms a finding with the minimum necessary, non-destructive, reversible proof - proving the risk without becoming the incident. EVIDENCE MANAGEMENT records, for each action, what was done, against which in-scope asset, by which operator, when, and the proof, in a TAMPER-EVIDENT log; CHAIN OF CUSTODY is the unbroken, integrity-protected history, enforced by hashing each entry to the previous so any alteration is detected. The lab's scopecheck.py refuses an out-of-scope target (8.8.8.8) while passing in-scope range hosts, and evidence.py keeps a hash-chained log that verifies intact and detects a one-character tamper as BROKEN. Together these keep the assessment in bounds and its findings trustworthy - the professional backbone that the technique-focused modules operate inside. Both tools are offline and touch no system.

### Important concepts

asset/identity mapping; fail-safe scope enforcement; controlled validation; evidence management; chain of custody; integrity.

### Key technical takeaways

map only in scope; enforce scope before every action; validate minimally and non-destructively; record attributed, integrity-protected evidence; keep the chain of custody intact.

### Glossary

| Term | Meaning |
|---|---|
| asset/identity mapping | inventorying in-scope hosts, services and accounts. |
| scope enforcement | acting only on provably in-scope targets (fail-safe). |
| controlled validation | minimal, non-destructive, reversible proof of a finding. |
| evidence management | recording attributed, integrity-protected proof. |
| chain of custody | the unbroken, documented, integrity-protected evidence history. |

### Common mistakes

acting out of scope; destructive "proof"; unrecorded or unattributed findings; no integrity protection; checking scope only once.

### Revision questions

​1. State the fail-safe scope rule. 2. What does controlled validation require? 3. How does a hash chain make evidence tamper-evident?
