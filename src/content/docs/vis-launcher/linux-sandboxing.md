---
title: Linux Sandboxing
---

We are currently experimenting with sandboxing on Linux using `bubblewrap`

To keep the app portable and secure, we do not ship a bundled version of `bubblewrap`. Shipping a private binary often fails due to how different Linux kernels handle setuid permissions. Instead, the app expects to find `bwrap` already installed on your system.

If the game won't start:

You have two options to fix this:

### Option A: Disable Secure Launch

If you don't want to install extra packages, you can turn this off in the launcher: `Settings` —> `Game` —> Toggle Secure Launch to off.

### Option B: Install Bubblewrap&#x20;

If you want the extra layer of security, install the package for your distro:

* Ubuntu/Debian: `sudo apt install bubblewrap`
* Fedora: `sudo dnf install bubblewrap`
* Arch: `sudo pacman -S bubblewrap`

**Known Issues**

Since this is an experimental feature, some hardened kernels may block the sandbox. If you have `bwrap` installed but the app still won't start, check if unprivileged user namespaces are enabled:

```bash
sysctl kernel.unprivileged_userns_clone
```

