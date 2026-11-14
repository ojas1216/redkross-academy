## Revision

### Summary

Wireless extends the network into the air, where anyone in range can receive the signal, so it is a boundary needing its own defence. Wi-Fi security modes have a lifecycle: WEP is completely broken and WPA is weak (never use either); WPA2 (AES-CCMP) is acceptable but its personal PSK handshake can be captured for offline guessing and had the 2017 KRACK weakness; WPA3 (2018) strengthens the handshake with SAE, resisting offline dictionary attacks - so prefer WPA3, with WPA2-AES as the minimum. Authentication is personal (one shared passphrase - small/guest networks) or enterprise (802.1X per-user credentials/certificates via RADIUS - the right choice for corporate wireless). Rogue access points (unauthorised APs, even well-intentioned ones) bypass controls and segmentation; evil twins impersonate a legitimate SSID to lure users. Defend with rogue-AP detection against an authoritative approved-AP inventory (flag anything not listed, or an approved SSID from an unexpected BSSID), wired-side 802.1X/port security, and user education. Secure configuration (NIST SP 800-153): WPA3/WPA2- AES, Enterprise auth, segment wireless (guest isolated to internet only; corporate least-privilege), protected management frames, WPS disabled, defaults changed, firmware patched, and monitoring. Wireless then becomes just another controlled, monitored boundary - not a bypass of the architecture.

### Important concepts

Wi-Fi mode lifecycle; WPA2/WPA3 and SAE; personal vs enterprise auth; rogue and evil-twin APs; rogue-AP detection; secure WLAN configuration and segmentation.

### Key technical takeaways

WPA3 preferred, WPA2-AES minimum, never WEP/WPA; Enterprise 802.1X for corporate; segment wireless and isolate guest; detect rogue APs against an inventory; disable WPS, change defaults, patch firmware.

### Glossary

| Term | Meaning |
|---|---|
| WPA3 | current Wi-Fi security generation; SAE handshake. |
| WPA2 | AES-CCMP; acceptable minimum; PSK handshake weaknesses. |
| 802.1X | enterprise per-user Wi-Fi authentication via RADIUS/EAP. |
| rogue AP | an unauthorised access point on the network. |
| evil twin | a malicious AP impersonating a legitimate SSID. |

### Common mistakes

running WEP/WPA; shared passphrases for corporate Wi-Fi; flat internal access for wireless users; no guest isolation; WPS enabled; default credentials; no rogue-AP detection.

### Revision questions

​1. Why prefer WPA3 over WPA2-Personal? 2. Why use Enterprise 802.1X for corporate Wi-Fi? 3. How is a rogue AP detected?
