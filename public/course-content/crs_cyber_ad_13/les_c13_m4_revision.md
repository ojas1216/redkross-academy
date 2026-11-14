## Revision

### Summary

Enterprise identity security is about containment. Credentials used on a system can be exposed if that system is compromised, so a high-privilege account used on a low-trust machine is the fatal pattern behind lateral movement. The tier model (Tier 0 directory control, Tier 1 servers, Tier 2 workstations) forbids downward exposure of higher-tier credentials and flows administration downward only; the Enterprise Access Model keeps this discipline and extends it to cloud assets via control, management, data/workload, user-access and app-access planes. Privileged-access workstations and the clean-source principle give admins a trusted place to work from. Protected Users (AES-only, no NTLM/DES/RC4, four-hour TGT, no delegation - not for service accounts), LAPS (unique per-host local admin passwords) and account hardening enforce the model. Baselines (CIS, Microsoft, STIG) define testable targets that must be measured continuously. The lab's tiered OUs and accounts implement the skeleton; a single container cannot physically separate tiers, which the deep dive names explicitly.

### Important concepts

credential exposure; Tier 0/1/2; Enterprise Access Model planes; PAW and clean source; Protected Users; LAPS; baselines.

### Key technical takeaways

separate accounts by tier; manage only from clean sources; apply Protected Users to admins (not services); use LAPS; measure against baselines.

### Glossary

| Term | Meaning |
|---|---|
| LAPS | Local Administrator Password Solution (unique rotated local admin passwords). |
| PAW | Privileged-access workstation. |
| Protected Users | built-in group enforcing strong credential protections. |
| Tier 0 | identities and systems that control the directory. |
| clean source | the rule that a controller must be at least as trusted as what it controls. |

### Common mistakes

one account for all tiers; administering Tier 0 from ordinary machines; adding service accounts to Protected Users; shared local admin passwords; adopting a baseline but never measuring it.

### Revision questions

​1. State the tier model rule in one sentence. 2. Name three protections Protected Users enforces. 3. Why can you not manage Tier 0 from a Tier 2 machine?
