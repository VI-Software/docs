---
title: Download and Installation Guide (Linux & Windows)
---

## Step 1: Download the Launcher

1. Open your web browser and go to [visoftware.dev/launcher](https://visoftware.dev/launcher).
2. The website will automatically attempt to detect your operating system:
* Click the primary download button (e.g., Download for Windows or Download for Linux) at the top of the page.

## Step 2: Operating System Installation & Setup

### Option A: Installation on Windows

1.By downloading, you acknowledge and agree to the Terms of Service, Privacy Policy, and Platform License Agreement.
2. Locate the downloaded installer (`VI-Software-Launcher-setup-(version).exe`) in your Downloads folder and double-click to open it.
> Note: If Windows SmartScreen displays a warning indicating the file is not signed, click More info and then select Run anyway.


3. Setup Wizard:
* Review the license agreement (if prompted) and click I Agree.
* Choose Only for me and click Next.
* Leave the installation path as default (recommended) and click Install.
* Click Finish once the process completes to close the installer and launch the application.

---

### Option B: Setup on Linux

Before running the `.AppImage` file, you must make it executable. Choose one of the following methods depending on your desktop environment:

#### Method 1: Using the Terminal

1. Open your terminal and navigate to your download directory:
```bash
cd ~/Downloads

```

2. Make the AppImage executable:
```bash
chmod +x VI-Software-Launcher-setup-*.AppImage

```

#### Method 2: Using GNOME File Manager (Nautilus)

1. Open Files and locate your downloaded `.AppImage`.
2. Right-click the file and select Properties.
3. Navigate to the Permissions tab.
4. Enable / check the box for "Allow executing file as program" (or "Executable as Program").
5. Close the window.

#### Method 3: Using KDE File Manager (Dolphin)

1. Open Dolphin and locate your downloaded `.AppImage`.
2. Right-click the file and select Properties (or press `Alt + Enter`).
3. Switch to the Permissions tab.
4. Check the "Is executable" box.
5. Click OK.

#### Running the Launcher on Linux

* Graphical Launcher: Double-click the `.AppImage` file inside your file manager.
* Terminal Launcher: Run the file from the command line:
```bash
./VI-Software-Launcher-setup-*.AppImage

```

> Warning: If launching via terminal, ensure you remove older `.AppImage` versions in the directory to avoid wildcard name conflicts.

---

That’s it! You have successfully installed the VI Software Launcher! 🎉🎉🥳🥳