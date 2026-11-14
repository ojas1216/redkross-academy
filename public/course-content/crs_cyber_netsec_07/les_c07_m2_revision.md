## Revision

### Summary

A firewall enforces architecture as an ordered policy of allow/deny rules matched on source, destination, protocol and port, usually with first-match semantics - so order matters and a broad early rule overrides narrower later ones. A well-formed policy lists least-privilege allows for required flows and ends with an explicit default-deny. Stateful inspection tracks connections and automatically permits return traffic, simplifying policy and dropping packets that belong to no known connection. Evaluating a flow (walking the rules to the first match) verifies intent and finds surprises - in the lab, user->db is wrongly allowed by an over-broad "user->any" rule. Linting catches recurring weaknesses: no default-deny (HIGH), allow-any-any, over-broad port ranges, shadowed (dead) rules, and missing egress filtering; the lab's pre-hardening policy has four such findings and the hardened policy none. Egress filtering limits what a compromised host can do and deserves the same default-deny as ingress. Change control (request, review, test, approve, document, log, rollback) and automated validation (a lint gate, policy as code) keep policies correct as they evolve - misconfiguration, not product flaws, is the dominant firewall risk.

### Important concepts

ordered rules and first-match; stateful inspection; flow evaluation; policy linting; egress filtering; change control.

### Key technical takeaways

end with default-deny; write least-privilege rules; remove shadowed/over-broad rules; filter egress; validate every change automatically.

### Glossary

```text
rule  a match (src, dst, proto, port) plus an action (allow/deny).
first-match  the first matching rule decides the flow.
stateful inspection  tracking connections to allow return traffic
        automatically.
shadowed rule  a rule that can never fire due to an earlier broader rule.
egress filtering  controlling outbound traffic with least privilege.
```

### Common mistakes

no default-deny; over-broad/any-any rules; leaving temporary broad rules in place; shadowed rules; filtering only inbound; uncontrolled changes.

### Revision questions

​1. Why does rule order matter under first-match? 2. Name three weaknesses a policy linter detects. 3. Why filter egress?
