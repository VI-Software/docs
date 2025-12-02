# 📔 Security Policy

## **Security Policy - VI Software Backend Services & Web Infrastructure** <a href="#undefined" id="undefined"></a>

### **Our Commitment to Security** <a href="#undefined" id="undefined"></a>

VI Software takes the security of our backend services, APIs, authentication systems, and web infrastructure seriously. As the platform powering VIS Launcher and serving our modding community, we handle user authentication, API access, server configurations, and sensitive data that require robust protection.

### **Supported Services** <a href="#undefined" id="undefined"></a>

This policy covers security for the following VI Software components:

| Service                 | Security Support                    | Description                                                          |
| ----------------------- | ----------------------------------- | -------------------------------------------------------------------- |
| Production APIs         | 24/7 monitoring & immediate patches | All public-facing APIs                                               |
| Authentication Services | Critical security priority          | OAuth 2.0, Yggdrasil, session management                             |
| Web Infrastructure      | Regular security updates            | Main website, documentation, portals                                 |
| Database Systems        | Encrypted & monitored               | User data, configurations, logs                                      |
| Development/Staging     | Best-effort security                | Testing environments (reported issues prevent production deployment) |

### **Security Research Guidelines** <a href="#undefined" id="undefined"></a>

We welcome responsible security research to help keep VI Software secure. However, we require researchers to follow responsible disclosure practices and minimize impact on our services and users.

### **Important Legal Notice**

**⚠️ THIS SECURITY POLICY DOES NOT GRANT BLANKET AUTHORIZATION FOR PENETRATION TESTING OR DISRUPTIVE ACTIVITIES.**

**VI Software reserves the right to take appropriate legal action against individuals or entities who:**

* Conduct destructive or disruptive security testing
* Access, modify, or delete other users' data
* Gain unauthorized access to privileged accounts or administrative functions
* Attempt to disrupt, degrade, or interfere with service availability
* Exploit discovered vulnerabilities for personal gain or malicious purposes
* Exceed the scope of responsible, minimal-impact vulnerability validation

### **What We Expect: Minimal Proof-of-Concept**

**We understand that proving a vulnerability exists requires some testing.** However, we ask that you demonstrate the vulnerability with the **minimum actions necessary** to prove its existence:

### **✅ ACCEPTABLE: Minimal Proof-of-Concept**

* **SQL Injection**: Query a harmless value like `SELECT @@version` or `SELECT 1+1`. **DO NOT** dump user tables, modify data, or access sensitive information.
* **Authentication Bypass**: Demonstrate you can access a single test account or your own account with elevated privileges. **DO NOT** access other users' accounts or administrative panels.
* **XSS**: Show a simple `alert()` or console log in your own browser session. **DO NOT** steal session tokens or execute actions on behalf of other users.
* **IDOR**: Access only your own resources with modified IDs to prove the vulnerability. **DO NOT** access other users' private data.
* **Path Traversal**: Read a non-sensitive file like `/etc/hostname` or a public config file. **DO NOT** access sensitive files like private keys, credentials, or user data.
* **SSRF**: Make a request to a harmless external service you control (e.g., webhook.site). **DO NOT** scan internal networks or access internal services.
* **File Upload**: Upload a benign test file (e.g., .txt with safe content). **DO NOT** upload web shells, malware, or executable code.

### **❌ UNACCEPTABLE: Going Beyond Proof-of-Concept**

* Accessing, viewing, or exfiltrating other users' personal data or credentials
* Modifying database records, user accounts, or system configurations
* Gaining access to administrative functions or privileged sessions
* Executing commands on our servers beyond minimal validation
* Pivoting to other systems or escalating access
* Creating backdoors or persistent access mechanisms
* Testing exploits that could cause service degradation or downtime
* Automating vulnerability scanning without prior approval
* Social engineering attacks against staff or users

### **If You're Unsure**

**Contact us BEFORE testing if you:**

* Need to perform active testing that might affect services
* Are unsure whether your testing approach is acceptable
* Want to conduct comprehensive security assessments
* Require access to test accounts or staging environments

We're happy to work with legitimate security researchers and can provide guidance or test environments where appropriate.

### **Reporting a Security Vulnerability** <a href="#undefined" id="undefined"></a>

**Please do not report security vulnerabilities through public GitHub issues, Discord, or social media.**

If you discover a security vulnerability in VI Software backend services, please report it responsibly by emailing **security ( at ) visoftware ( dot ) dev** with:

### **Required Information**

* **Description**: Clear explanation of the vulnerability
* **Impact**: Potential consequences (data breach, unauthorized access, service disruption, etc.)
* **Affected Services**: Which backend services, APIs, or pages are vulnerable
* **Steps to Reproduce**: Detailed reproduction steps with HTTP requests, endpoints, or page URLs
* **Proof of Concept**: Screenshots, logs, cURL commands, or code snippets demonstrating minimal PoC
* **Discovery Date**: When you discovered the issue
* **Scope of Testing**: Briefly describe what actions you took to validate the vulnerability

### **Optional Information**

* Suggested mitigation or fix
* CVE number (if already assigned)
* Any automated tools used in discovery

### **What to Expect** <a href="#undefined" id="undefined"></a>

* **Initial Response**: Within 24-48 hours acknowledging receipt
* **Status Updates**: Progress updates every 3-5 business days
* **Resolution Timeline**:
  * **Critical vulnerabilities** (RCE, auth bypass, data breach): Hotfix within 24-48 hours
  * **High severity** (unauthorized access, injection flaws): Patch within 7 days
  * **Medium severity**: Patch within 14-30 days
  * **Low severity**: Included in next maintenance window
* **Credit**: Public acknowledgment in security advisories (with your permission)
* **Safe Harbor**: Researchers who follow these guidelines in good faith will not face legal action from VI Software

### **Scope** <a href="#undefined" id="undefined"></a>

### **In Scope**

Security issues in VI Software backend services that could lead to:

**Critical Severity:**

* Remote Code Execution (RCE) on backend servers
* SQL Injection, NoSQL Injection, or other database attacks
* Authentication bypass or privilege escalation
* Unauthorized access to user data or administrative functions
* Server-Side Request Forgery (SSRF) with internal network access
* Arbitrary file upload leading to code execution
* API key or OAuth token theft/manipulation
* Mass data exfiltration vulnerabilities

**High Severity:**

* Cross-Site Scripting (XSS) on authenticated pages
* Cross-Site Request Forgery (CSRF) on state-changing operations
* Insecure Direct Object References (IDOR) exposing user data
* API rate limiting bypass enabling DoS attacks
* Broken authentication/session management
* Sensitive data exposure (credentials, tokens, PII)
* Path traversal vulnerabilities
* Insecure deserialization

**Medium/Low Severity:**

* Information disclosure (stack traces, configuration details, version info)
* Missing security headers (CSP, HSTS, X-Frame-Options)
* Weak cryptographic implementations
* Open redirects on authenticated pages
* Clickjacking vulnerabilities
* Server misconfigurations with security implications

### **Out of Scope**

The following are **not** considered security vulnerabilities and **should not be reported**:

**Infrastructure & Configuration Issues:**

* Missing DNS CAA records or other DNS configuration issues
* Missing SPF, DKIM, or DMARC records
* SSL/TLS cipher suite preferences (unless critically weak)
* Server banner disclosure or version information
* Missing HTTP security headers without demonstrated exploit
* Email configuration issues (spoofing tests without actual exploit)
* Subdomain takeover possibilities without proof of exploitability
* Content security policy recommendations without bypass

**Client-Side & Third-Party Issues:**

* Issues in VIS Launcher client (report to launcher repository)
* Vulnerabilities in third-party services (Discord, GitHub, Cloudflare, etc.)
* Browser-specific rendering issues
* Issues in libraries we don't control

**Non-Exploitable Findings:**

* Rate limiting on public endpoints (by design)
* Denial of Service requiring excessive resources (>100k requests/minute)
* Theoretical vulnerabilities without proof of exploitability
* Missing best practices without demonstrated vulnerability
* CVSS scores without contextual proof of impact

**Social & Physical Security:**

* Social engineering or phishing attacks
* Physical security issues
* Issues requiring compromised credentials
* Self-XSS requiring user to paste malicious code
* Logout CSRF

**General Exclusions:**

* Already publicly known or patched issues
* Duplicate reports (we track all submissions)
* Issues discovered through policy violations or destructive testing

### **Bug Bounty Program** <a href="#undefined" id="undefined"></a>

**VI Software does not currently operate a monetary bug bounty program.** We are a small team managing open-source projects and community services, and we cannot offer financial rewards for vulnerability reports.

However, we deeply appreciate security research contributions and will:

* **Publicly acknowledge contributors** (with permission) in security advisories and release notes
* **Provide recognition in our Hall of Fame** where your contribution will be permanently honored
* **Offer public endorsement** of your security research capabilities that you can reference in your professional portfolio
* **Consider future collaboration opportunities** for security consulting or advisory roles
* **Provide detailed credit** in CVE disclosures where applicable

We value the security community's efforts to keep the internet safer and are grateful for responsible disclosure, even without monetary compensation.

### **Vulnerability Disclosure Process** <a href="#undefined" id="undefined"></a>

1. **Report Received**: Acknowledgment within 24-48 hours
2. **Triage**: Security team assesses severity and impact (1-3 days)
3. **Investigation**: Reproduce and validate the vulnerability (2-5 days)
4. **Development**: Create and test patch in isolated environment
5. **Internal Testing**: QA validation in staging environment
6. **Deployment**:
   * Critical: Emergency deployment to production
   * High: Scheduled deployment within 7 days
   * Medium/Low: Regular maintenance window
7. **Verification**: Confirm vulnerability is resolved
8. **Public Disclosure**: After 30-90 days or when fix is deployed (coordinated with reporter)
9. **Credit**: Reporter acknowledged in security advisories and Hall of Fame

### **Safe Harbor** <a href="#undefined" id="undefined"></a>

**VI Software commits to not pursuing legal action against security researchers who:**

* Act in good faith to identify and report vulnerabilities
* Follow the guidelines in this security policy
* Use minimal proof-of-concept testing as described above
* Do not access, modify, or delete user data beyond their own test accounts
* Make reasonable efforts to avoid service disruption
* Maintain confidentiality until public disclosure is coordinated

This safe harbor applies only to activities conducted in accordance with this policy.

### **Contact** <a href="#undefined" id="undefined"></a>

* **Security Issues**: security ( at ) visoftware ( dot ) dev
* **General Support**: [Documentation](https://docs.visoftware.dev/vi-software)
* **Bug Reports**: [GitHub Issues](https://github.com/VI-Software) (non-security issues only)

**Note**: This security policy applies to VI Software's backend services, APIs, authentication systems, and web infrastructure. For security issues in the VIS Launcher client application, please refer to the [VIS Launcher Security Policy](https://github.com/VI-Software/vis-launcher/blob/main/SECURITY.md).

**Last Updated**: December 2025

