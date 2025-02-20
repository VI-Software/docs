# 💻 Setup a server on Linux (Pterodactyl)



1\. Download `authlib-injector`

Since Pterodactyl runs in a containerized environment, you need to **download `authlib-injector.jar` inside the server container**.

1. Start your server in Pterodactyl.
2. Open the **"File Manager"** tab in Pterodactyl.
3. Upload the `authlib-injector.jar` file.
4. Ensure the file is in the **root directory** of your Minecraft server (same folder as `server.jar`).

***

### 2. Modify the Startup Command

Pterodactyl **does not allow direct modification** of the startup command from the panel unless you have admin permissions. If you don't have administrative privileges on the instance, you'll need to contact your hosting provider to request the startup command. **BUT GIVE IT A TRY!** Some hosting providers may be willing to assist with this.



#### Example Startup Commands:

**For Paper/Spigot/Purpur/Old Forge:**

```bash
java -Xmx{{SERVER_MEMORY}}M -Xms512M -javaagent:authlib-injector.jar=https://authserver.visoftware.dev/authlib-injector -jar server.jar nogui
```

**For Fabric:**

```bash
java -Xmx{{SERVER_MEMORY}}M -Xms512M -javaagent:authlib-injector.jar=https://authserver.visoftware.dev/authlib-injector -jar fabric-server-launch.jar nogui
```

**For Modern Forge:**

```bash
java -Xms128M -XX:MaxRAMPercentage=95.0 -Dterminal.jline=false -Dterminal.ansi=true -javaagent:/home/container/authlibinjector.jar=https://authserver.visoftware.dev/authlib-injector @user_jvm_args.txt @libraries/net/minecraftforge/forge/<version>/unix_args.txt "$@"
```

### TI&#x50;**:**

* For modern Forge, you can copy the `run.sh` file, modify it with the necessary `authlib` parameters (like the one in the example), and then place the modified script in the startup command field.
