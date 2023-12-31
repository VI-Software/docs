---
description: >-
  Sistema de autentificación legacy de VI Software, discontinuado desde el
  30.12.2023.
---

# VIS Legacy Token Authentication

{% hint style="danger" %}
Es imperativo destacar que el uso y mantenimiento de VIS Token Authentication ha sido descontinuado. Esta decisión se tomó debido a las preocupaciones relacionadas con la seguridad de los administradores de los servidores. En particular, la práctica de almacenar una contraseña en un archivo sin cifrar representa un riesgo significativo para la integridad y privacidad de dichas contraseñas. La descontinuación de esta funcionalidad se ha llevado a cabo con el objetivo de salvaguardar la seguridad de los servidores y proteger la información confidencial de los usuarios.
{% endhint %}

El sistema de autenticación con VIS Token emplea el módulo [Simple Login](https://www.curseforge.com/minecraft/mc-mods/simple-login) para la generación y almacenamiento de un archivo denominado "sl\_password.txt". Este archivo se guarda en la carpeta específica de la instancia del juego. En su interior, se guarda un token único con el siguiente formato: ''00000000-0A00-A0A0-AA00-00-AA0AAAAA0". Este token se transmite al servidor durante el proceso de autenticación.

