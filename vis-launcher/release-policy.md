# Release Policy

## Release Channels

> **Note:** Our release strategy includes three channels: Canary, Nightly/Pre-release, and Annual Stability Release (ASR).

### 🟢 Annual Stability Release (ASR)

* **Release Month:** June
* **Coverage:** June → May of the following year
* **Updates Included:** Security patches and critical bug fixes only
* **Restrictions:** No new features or breaking changes
* **Versioning:** `X.Y.0-asr`
  * Patch updates: `X.Y.1-asr`, `X.Y.2-asr`

### 🔵 Nightly / Pre-release

* All releases outside ASR
* Include new features, improvements, and potential breaking changes
* Versioning conventions:
  * Nightly: `X.Y.Z-nightly` (continuous development builds)
  * Pre-release / Beta: `X.Y.Z-pre` (stable candidate for upcoming ASR or major release)

### 🟡 Canary

* **First stop for all builds** directly from CI/CD
* **Purpose:** Testing, validation, early detection of issues
* **Stability:** Unstable; may contain critical bugs
* **Versioning:** `X.Y.Z-canary`

***

## Branching Strategy

* **Main / Development Branch:** Features, improvements, breaking changes
* **ASR Branch:** Only security & critical bug fixes cherry-picked from main
* **Canary Branch:** Direct builds from CI/CD pipeline
* **Tags:**
  * `-asr` for ASR releases
  * `-nightly` / `-pre` for development builds
  * `-canary` for immediate build releases

***

## Workflow

1. **Continuous:** All builds should go first to Canary (`X.Y.Z-canary`)
2. **Testing / Stabilization:** Canary builds feed into Nightly / Pre-release if stable
3. **May:** Freeze code for upcoming ASR
4. **June:** Release ASR (`X.Y.0-asr`)
5. **June → Next May:** ASR branch only receives security/critical patches
6. **June → Next May:** Main branch continues Nightly/Pre-release builds with features and improvements
7. **Next June:** Release next ASR, replacing the previous ASR

***

## Release Timeline (Yearly Overview)

```
Months:      J   F   M   A   M   J   J   A   S   O   N   D
             |---|---|---|---|---|---|---|---|---|---|---|---

ASR:                     [==================== ASR ====================]
                         June → Next May
                         Security patches & critical bug fixes only

Nightly / Pre-release:   [ Nightly / Pre-release Continuous Development ]
                         Features, improvements, breaking changes

Canary:                  [ Canary Builds - Immediate from CI/CD ]
                         Fastest channel, unstable, all changes first

Patch Flow:
- Critical fixes & security patches → cherry-picked to ASR
- Nightly / Pre-release builds promoted from Canary
```
