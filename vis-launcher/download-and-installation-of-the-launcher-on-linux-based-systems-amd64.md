# 🎮 Download and Installation of the Launcher on Linux-Based Systems (amd64)



{% hint style="warning" %}
This guide has been written based on Kubuntu 23.10. It may change over time or differ slightly for other Linux-based systems.
{% endhint %}

1. Go to [<mark style="color:blue;">https://github.com/VI-Software/vis-launcher/releases</mark>](https://github.com/VI-Software/vis-launcher/releases)
2. Look for the latest stable version (By default, they are sorted from newest to oldest).

<figure><img src="../.gitbook/assets/image (10).png" alt=""><figcaption><p>In this example, the newest version is 1.8.1.</p></figcaption></figure>

3. Download the version compatible with your operating system. In this tutorial, we are covering Linux-based systems, so we will download `VI-Software-Launcher-setup-(version).AppImage`.
4. Open the folder where the file has been downloaded using your file explorer. In this case, we are using Dolphin. Open a terminal in the folder that contains the file as shown in the following image.

<figure><img src="../.gitbook/assets/image (7).png" alt=""><figcaption></figcaption></figure>

5. Now we'll give the file execution permissions so that it can be opened without issues. Run the following command



```sh
chmod +x VI-Software-Launcher-setup-*.*.*.AppImage
```

<figure><img src="../.gitbook/assets/image (8).png" alt=""><figcaption><p>There should be no additional output in the terminal if the command was executed successfully.</p></figcaption></figure>

6. Once these steps are completed, you can close the terminal and run the file from the file explorer. If you prefer, an optional method for running it from the terminal is provided below.

Given that you have a terminal open in the directory where the file is located.

```bash
./VI-Software-Launcher-setup-*.*.*.AppImage
```



{% hint style="danger" %}
This method can be problematic if there are multiple executable files for the launcher in the directory. Please remove any old versions to avoid conflicts.
{% endhint %}

That's it! You've completed the installation on Linux! 🎉🎉🥳🥳
