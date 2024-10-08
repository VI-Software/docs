---
icon: right-from-bracket
---

# Exit codes

This document provides information about the exit codes used by the VI Software Launcher. These exit codes are helpful for understanding the outcome of the game execution.



{% hint style="warning" %}
This are general codes, in moded environments or different ecosystems, exit codes may vary depending on but not limited to the platform where the client is being executed, installed mods or ecosystem.
{% endhint %}



| Exit Code  | Description                                                                                                                                                                                                               |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| -805306369 | The game ran out of memory                                                                                                                                                                                                |
| -1         | There are one or more mods duplicated.                                                                                                                                                                                    |
| 0          | The game session was ended by the user with no errors.                                                                                                                                                                    |
| 1          | General purpose error code, usually caused by mods. Future investigation might be required by the mod pack developer.                                                                                                     |
| 2          | A file defined in the startup command was not found on the system. Usually a sight of a corrupt installation                                                                                                              |
| 100        | The modpack has VI Software Bridge functionality enabled, but it's not being correctly configured. Can be a sight of corrupted installation if the layer has been actually configured by the team administrator properly. |
| 126        | User launching the game lacks permissions to access one or required files by the launcher to boot the game.                                                                                                               |
| 130        | The game was forcefully terminated by a local computer administrator                                                                                                                                                      |
| 137        | The JVM ran out of memory.                                                                                                                                                                                                |

