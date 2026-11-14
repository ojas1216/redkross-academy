## Revision

### Summary

Wi-Fi protection lives in the protocol. WPA2 (802.11i) uses AES-CCMP (replacing broken WEP and weak WPA-TKIP) but is vulnerable to offline password guessing in Personal mode; WPA3 (mandatory for new certified devices) uses SAE in Personal mode to resist offline guessing, strengthens Enterprise, and REQUIRES Protected Management Frames. Authentication modes: PERSONAL (PSK/SAE) shares one secret - simple, for home/small/guest with a strong passphrase; ENTERPRISE (802.1X with RADIUS/EAP) authenticates each identity, enabling revocation and accountability - the corporate choice. PMF (802.11w) protects management frames (notably deauth) from forging and is required by WPA3; its absence is a high-severity finding. Secure deployment also means disabling WPS (brute-forceable PIN), hardening AP admin credentials, patching firmware, segmenting and isolating guest networks, and not relying on MAC filtering or SSID hiding (spoofable hygiene). A Personal passphrase must be long, high-entropy and unique. A configuration review measures a WLAN against all of this and produces a prioritised PASS/FAIL, re-runnable to confirm hardening. The lab's wifireview.py shows the weak config failing every control (10 findings, 6 HIGH, FAIL) and the hardened config passing (0 findings, PASS) - the modern baseline: AES, WPA3/SAE, PMF required, WPS off, strong passphrase, segmentation.

### Important concepts

WPA2/WPA3; Personal vs Enterprise; SAE; PMF; secure deployment; passphrase strength; configuration review.

### Key technical takeaways

require AES and PMF; prefer WPA3/SAE; Enterprise for corporate; disable WPS; harden admin/firmware; segment guests; strong passphrase; review and re-review to prove hardening.

### Glossary

```text
WPA2/WPA3  Wi-Fi Protected Access generations (AES; WPA3 adds SAE + required PMF).
SAE  Simultaneous Authentication of Equals (WPA3-Personal; resists offline
     guessing).
802.1X  per-identity Enterprise authentication via RADIUS/EAP.
PMF  Protected Management Frames (802.11w), required by WPA3.
WPS  Wi-Fi Protected Setup (brute-forceable PIN; disable it).
```

### Common mistakes

TKIP/WEP; PMF off; WPS on; weak/shared passphrase; default admin creds; stale firmware; guests on the corporate VLAN; relying on MAC filtering/SSID hiding.

### Revision questions

​1. How does WPA3-Personal improve on WPA2-Personal? 2. When use Enterprise vs Personal? 3. Why is PMF required and what does it protect?
