# 🎮 Descarga e instalación del launcher en sistemas basados en Linux (amd64)



{% hint style="warning" %}
Esta, guía ha sido escrita basándose en Kubuntu 23.10, puede que con el tiempo cambie o no sea exactamente igual para todos los sistemas basados en Linux.
{% endhint %}

1. Dirígete a [<mark style="color:blue;">https://github.com/VI-Software/vis-launcher/releases</mark>](https://github.com/VI-Software/vis-launcher/releases)
2. Busca la versión estable más reciente (De forma predeterminada están ordenadas por más nueva a más antigua)

<figure><img src="../.gitbook/assets/image (10).png" alt=""><figcaption><p>En este ejemplo, la versión más nueva es 1.8.1</p></figcaption></figure>

3. Descarga la versión compatible con tu sistema operativo, En este tutorial estamos cubriendo sistemas basados en Linux, así es que descargaremos **VI-Software-Launcher-setup-(versión).AppImage**
4. Abre la carpeta en la que se ha descargado el archivo con tu explorador de archivos, en este caso estamos utilizando Dolphin. Abre una terminal en la carpeta que contiene ese archivo tal y como muestran las imagen siguiente.

<figure><img src="../.gitbook/assets/image (7).png" alt=""><figcaption></figcaption></figure>

5. Ahora le daremos permisos de ejecución al archivo para poder abrirlo sin que cause problemas algunos. Ejecutaremos el siguiente comando:



```sh
chmod +x VI-Software-Launcher-setup-*.*.*.AppImage
```

<figure><img src="../.gitbook/assets/image (8).png" alt=""><figcaption><p>No debería de aparecer nada más en la terminal si se ha ejecutado el comando exitosamente.</p></figcaption></figure>

6. Una vez estos pasos hechos, puede cerrar la terminal y ejecutar el archivo desde el explorador de archivos. Si lo prefiere, le dejamos un método opcional debajo para ejecutarlo desde la terminal.

**Teniendo en cuenta que está con una terminal en el directorio donde se encuentra su archivo.**

```bash
./VI-Software-Launcher-setup-*.*.*.AppImage
```



{% hint style="danger" %}
Este método puede resultar conflictivo si hay más de un archivo de ejecución del launcher presente en el directorio. Por favor, elimine las versiones antiguas para evitar conflictos.
{% endhint %}

**Eso es todo, ¡has completado la instalación en Linux! 🎉🎉🥳🥳**
