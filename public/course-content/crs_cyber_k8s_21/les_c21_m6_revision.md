## Revision

### Summary

IaC makes configuration reviewable and testable; its artefacts include configuration, plan JSON, sensitive state and third-party providers and modules. Typical high-risk Terraform defects are public storage, open management ports, public control-plane endpoints, missing encryption and logging, and wildcard IAM. Scanners help but have blind spots: Trivy 0.76.2 reported 20 failures on the weak lab Terraform yet nothing for Action `"*"` on Resource `"*",` which a custom check found. Policy as code needs tests, including edge cases such as registry ports, digest pins, container overrides and nested templates. Drift (CHANGED, MISSING, UNMANAGED) is detected by comparing declared fields with live objects, then reconciled, adopted or removed, with the cause fixed. Place checks at pre-commit, pull request, pre-apply, admission and runtime. The OCC's action against Capital One framed configuration control as governance.

### Important concepts

plan versus configuration; scanner blind spots; tested policy; drift classes.

### Key technical takeaways

protect state; evaluate plan JSON; test custom checks; compare declared fields only.

### Glossary

| Term | Meaning |
|---|---|
| Drift | Difference between declared and actual configuration. |
| GitOps | Operating model where a controller applies Git continuously. |
| Plan | Terraform's proposed set of changes. |
| State | Terraform's record of managed resources. |

### Common mistakes

trusting a clean scan; committing state; suppressing by severity; fixing drift without fixing its cause.

### Revision questions

​1. Name four IaC artefacts. 2. Write three test cases for a new rule. 3. Explain reconcile versus adopt.
