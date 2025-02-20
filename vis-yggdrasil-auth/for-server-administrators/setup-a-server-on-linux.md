# 💻 Setup a server on Linux

### 1. Download `authlib-injector`

Download the latest version from the official github repo:\
👉 [https://github.com/yushijinhun/authlib-injector/releases](https://github.com/yushijinhun/authlib-injector/releases)

### 2. Place the JAR File

Move the downloaded `authlib-injector` JAR file to a dedicated directory.\
For example, store it in `/opt/authlib-injector/`:

```bash
mkdir -p /opt/authlib-injector
mv authlib-injector.jar /opt/authlib-injector/
```

### 3. Modify the Server Startup Command

To use `authlib-injector`, modify the startup command for your **Minecraft server**.

#### Example Command for Paper/Spigot/Purpur:

```bash
java -Xmx4G -Xms2G -javaagent:/opt/authlib-injector/authlib-injector.jar=https://authserver.visoftware.dev/authlib-injector -jar paper.jar nogui
```

#### Example Command for Forge/Fabric:

```bash
java -Xmx4G -Xms2G -javaagent:/opt/authlib-injector/authlib-injector.jar=https://authserver.visoftware.dev/authlib-injector -jar fabric-server-launch.jar nogui
```

#### Explanation:

* `-Xmx4G`: Sets the maximum memory allocation (adjust as needed).
* `-Xms2G`: Sets the minimum memory allocation (adjust as needed).
* `-javaagent:/opt/authlib-injector/authlib-injector.jar=https://authserver.visoftware.dev/authlib-injector`: Loads the `authlib-injector` as a Java agent and redirects authentication requests.
* `-jar paper.jar`: Starts the Minecraft server (replace with your actual server JAR file).
* `nogui`: Runs the server without the graphical user interface.

***

### 4. Automate the Startup (Optional)

To automate the startup process, you can create a **startup script**:

1.  Create a new script file:

    ```bash
    nano start-minecraft.sh
    ```
2.  Add the following content:

    ```bash
    #!/bin/bash
    java -Xmx4G -Xms2G -javaagent:/opt/authlib-injector/authlib-injector.jar=https://authserver.visoftware.dev/authlib-injector -jar paper.jar nogui
    ```
3. Save the file (`CTRL + X`, then `Y`, then `Enter`).
4.  Give it execute permissions:

    ```bash
    chmod +x start-minecraft.sh
    ```
5.  Start your server using:

    ```bash
    ./start-minecraft.sh
    ```

***

### 5. Verify the Server is Using `authlib-injector`

Check the server logs (authlib-injector.log or console output) for messages related to authlib-injector. If it's working correctly, you should see output confirming that the authentication system is redirected.

***

#### ✅ Done! Your Minecraft server is now using `authlib-injector` to authenticate via VI Software's Auth Server
