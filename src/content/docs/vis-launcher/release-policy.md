---
title: Release Policy
icon: book
---

We maintain four release channels to balance the introduction of new features with the necessity of production stability: Canary, Nightly, Stable, and LTS.

### 1. Long-Term Support (LTS)
The Production Standard. This version is released every June and remains supported through May of the following year.

* Priority: Maximum reliability and uptime.
* Updates: Restricted to security patches and critical bug fixes.
* Restrictions: No new features or breaking changes are introduced during the lifecycle.
* Version Tag: `X.Y.Z`

### 2. Stable
The Interim Track. This channel provides a middle ground for users who need new features sooner than the annual LTS cycle allows.

* Priority: Feature availability with validated stability.
* Lifecycle: Short-lived; support ends immediately when a newer Stable or LTS version is released.
* Updates: Receives security fixes and general bug fixes.
* Version Tag: `X.Y.Z`

### 3. Nightly / Pre-release
The Development Track. This is the staging ground for features and improvements before they are promoted to a Stable or LTS release.

* Nightly: Continuous builds generated from the active development branch.
* Pre-release: Beta candidates intended to finalize the next major release.
* Note: These builds are subject to breaking changes and are not recommended for production.

### 4. Canary
The Bleeding Edge. Every build from our CI/CD pipeline lands here first for immediate validation.

* Purpose: Early bug detection and rapid testing.
* Stability: Highly unstable; used for developer testing only.
* Version Tag: `X.Y.Z-canary`

---

## Development Workflow & Branching

* Main Branch: Active development. This is where all new features and breaking changes originate.
* LTS Branch: A restricted, hardened branch. Only security fixes and critical patches are cherry-picked from Main.
* Stable Branch: A snapshots of Main that has passed Nightly validation but is not yet part of the annual LTS cycle.
* Canary: Automated builds triggered directly by the CI/CD pipeline.

### The Yearly Cycle
1.  Continuous: All changes land in Canary first.
2.  Stabilization: Validated Canary builds move to Nightly/Pre-release.
3.  Intermediate: Selected Nightly builds are promoted to the Stable channel between LTS releases.
4.  May: Code freeze. Final stabilization begins for the upcoming annual LTS.
5.  June: New LTS launch. The previous LTS reaches End-of-Life (EOL).

---

## Current Status

Current Stable Release

* Version: v2.2 (Quantum Falcon)
* Target: June 2026 (LTS Promotion)
* Status: Stable. This is the current feature-complete version. It is the designated candidate for the upcoming annual LTS cycle and will become the recommended production version next month.

Current Production Release (LTS)
* Version: v2.1 (Astral Ocelot)
* Support: June 2025 – May 2026
* Status: Maintenance. This version is approaching End-of-Life (EOL). It remains supported for existing production environments until June 2026, when it will be officially replaced by Quantum Falcon.