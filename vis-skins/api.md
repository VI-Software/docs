---
description: Application Programming Interface de VIS Skins
---

# 💻 API

### URL Base

```
https://skins-vis.galnod.com
```

Endpoints

#### Obtener Renderizado de Skin

**URL**

```
GET /2d/skin/:name/:type
```

* `:name`: Nombre del jugador de Minecraft.
* `:type`: Tipo de renderizado. Puede ser `head` (cabeza) o `fullbody` (cuerpo completo).

**Parámetros de consulta**

* `scale`: (Opcional) Escala de la imagen renderizada. El valor predeterminado es 25.

**Ejemplo de uso**

*   Obtener el renderizado de la cabeza de la skin del jugador:

    ```
    GET /2d/skin/Benson/head
    ```
*   Obtener el renderizado del cuerpo completo de la skin del jugador con escala 2:

    ```
    GET /2d/skin/Benson/fullbody?scale=2
    ```

### Respuesta

La API responde con la imagen renderizada de la skin del jugador en formato PNG.

### Manejo de errores

Si ocurre un error durante el procesamiento de la solicitud, la API responde con un código de estado HTTP apropiado junto con un mensaje de error.
