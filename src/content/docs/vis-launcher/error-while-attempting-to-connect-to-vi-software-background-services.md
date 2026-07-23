---
title: Connection Error Troubleshooting
---

If you're seeing the **"Failed to connect to VI Software Background Services"** error, the VIS Launcher is having trouble communicating with our backend to load dynamic content. This is almost always caused by a local network drop, DNS resolution failure, or security software blocking the app.

Here is a quick checklist to narrow down the issue and get back online:

### 1. Test Network & DNS Resolution

Before tweaking settings, check if your system can resolve and reach our endpoints:

* Verify that your general internet connection is active.
* Test if your system can resolve the service address by opening a terminal or command prompt and running:
```bash
nslookup api.visoftware.dev

```


*(Or run `ping api.visoftware.dev` to test direct connectivity).*

### 2. Check Firewalls, Antivirus, and VPNs

Overzealous security software or ad-blockers are the most common culprits:

* Make sure the VIS Launcher isn't being blocked from making outbound HTTPS connections.
* If you use a VPN or network-level DNS blocker (like Pi-hole, NextDNS, or AdGuard), temporarily pause them to see if they're filtering the request.

### 3. Keep the Launcher Updated

Older launcher builds may attempt to connect to retired or relocated API endpoints:

* Grab the latest installer or AppImage from **[visoftware.dev/launcher](https://visoftware.dev/launcher)** and restart the app to ensure you have the current configuration.

> **Still stuck?** If your local connection and firewall look fine, check our community channels or repository issues to see if there is an active server-side maintenance or outage.