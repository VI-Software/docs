# 💻 Platform Infrastructure

### **Platform Infrastructure Overview**

Our platform runs entirely on our own hardware. Everything is managed using a Proxmox server with LXC containers, and each app runs in a lightweight Docker container based on Alpine Linux. The host system uses Ubuntu.

Most core services run in a centralized LXC container, including:

* A custom authentication service (a modified fork of _drasl_) that integrates with PostgreSQL for better performance. Users authenticate via Xbox accounts through a secure, dedicated verification service.
* A REST API that enables connected servers and services—like Discord bots—to interact with the platform.
* The main website, user dashboard, and a CDN for distributing files.

The platform uses MariaDB and Redis for storage and caching, running locally within the same environment for simplicity and performance.

Network security is handled through a dedicated firewall, with outbound traffic routed through a VPN and managed using `iptables`. We monitor infrastructure health using Grafana.

Deployments and updates (including the launcher) are handled via GitHub Actions. We regularly back up databases to an S3-compatible server, and all source code is mirrored on GitHub and GitLab.

While we don’t have automated failover in place yet, we prioritize data safety and privacy. Sensitive user data is encrypted, and we follow GDPR-compliant practices—including tools for users to delete their accounts if they choose.

<figure><img src="../.gitbook/assets/infra (1).png" alt=""><figcaption></figcaption></figure>

