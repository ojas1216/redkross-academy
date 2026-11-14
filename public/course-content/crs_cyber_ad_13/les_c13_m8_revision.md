## Revision

### Summary

The capstone assembles the course into a hardened contained lab and an evidence-backed audit report. Scope and authorise the work (your own lab); capture the BEFORE state; apply the hardening checklist across authentication (AES), administration and accounts (remove SPNs, gMSAs/PSOs, disable dormant accounts, small privileged groups), the enterprise model (Protected Users for admins, PAW/LAPS as targets) and monitoring (auditing, detections, forwarding); evidence each change (action, before, after, timestamp); capture the AFTER state; and write a six-part report (scope, method, before, actions, after, residual/forward plan) for both a technical reviewer and leadership. The lab arc closes the single HIGH Kerberoastable finding and flips the exit code, proving improvement. Residual items - physical PAW separation, a second DC, full Windows controls - are stated honestly as the forward plan, and hardening is paired with a tested recovery plan (krbtgt double-rotation, DC rebuild). This is the artefact that gets identity security funded.

### Important concepts

contained lab; hardening checklist; evidence; before/after assessment; the six-part report; residual risk; recovery.

### Key technical takeaways

tie every change to a control and a risk; prove closure with before/after tool output and the exit code; state residual risk and a forward plan; pair hardening with recovery.

### Glossary

| Term | Meaning |
|---|---|
| audit report | the evidence-backed account of findings, actions and closure. |
| before/after | paired assessment runs proving improvement. |
| forward plan | the production work the lab cannot complete, by control. |
| recovery plan | the tested procedure to rebuild trust after compromise. |
| residual risk | the risk that remains and is accepted or deferred. |

### Common mistakes

connecting the lab to production; asserting fixes without evidence; hiding residual risk; a report of tool output; hardening with no recovery plan.

### Revision questions

​1. Name the six report sections. 2. What evidence proves a finding is closed? 3. Why state residual risk, and give two lab residual items.
