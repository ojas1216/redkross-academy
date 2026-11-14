## Revision

### Summary

The capstone integrates the whole course: the RADIO EDGE (Wi-Fi hardening and rogue/evil-twin detection, Bluetooth/BLE) and the MOBILE SYSTEM (the app - platform model, static review, insecure data handling - and the API - authentication, transport, backend hardening). The unifying principles are: assume the network and radio are HOSTILE and encrypt; treat the CLIENT as UNTRUSTED and enforce server-side; VERIFY controls with enforcing FAIL-to-PASS evidence; and work only within an AUTHORISED, OFFLINE, DO-NO-HARM scope. The lab's review.py runs the whole assessment in one pass: it enforces the three configuration control domains (Wi-Fi, Bluetooth, API) from FAIL to PASS (3/3), proving the controls work, and it reports the detective findings - 16 mobile-app weaknesses (9 HIGH, mostly insecure data handling) and 2 evil-twin APs - to remediate. The results become a SECURE BASELINE whose acceptance tests are the passing reviews. The capstone DELIVERABLE presents scope and authorisation, method and tools, findings by area with severity, the enforcing evidence, remediation mapped to the baseline with verification, and a clear summary for decision-makers plus the detail for engineers. Producing it demonstrates the course goal: to assess wireless and mobile systems, verify the controls, and present the evidence - safely, reproducibly and within scope. All lab work is offline against the lab's own configurations, demo app and data: no radio activity against others, no third-party API called, nothing exploited.

### Important concepts

integrated wireless-and-mobile assessment; enforcing evidence; detective findings; secure baseline; clear presentation; authorised, offline, do-no-harm scope.

### Key technical takeaways

assess across Wi-Fi, Bluetooth, app and API; enforce controls FAIL->PASS; remediate detective findings; build a baseline from the passing reviews; present clearly; stay in scope.

### Glossary

```text
enforcing evidence  a control review moving from FAIL to PASS, proving the fix.
detective finding  a weakness the assessment detects, to remediate.
secure baseline  the target configuration whose acceptance tests are passing
                 reviews.
evil twin  a rogue AP impersonating a legitimate SSID.
do no harm  avoiding disruption of networks, devices or services during testing.
```

### Common mistakes

assessing only one layer; no enforcing evidence; not building a baseline; poor presentation; working out of scope.

### Revision questions

​1. What areas does a complete wireless-and-mobile assessment cover? 2. What is the difference between enforcing evidence and a detective finding? 3. What scope rules govern the capstone?
