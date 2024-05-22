---
description: Application Programming Interface de VIS Skins
---

# 💻 API

### URL Base

```url
https://skins.visoftware.tech
```



### Endpoints

####

#### Obtener Renderizado 2D de Skin

<mark style="color:green;">`GET`</mark> `/2d/skins/:name/:type?scale=:scale`

Obtén el avatar 2D renderizado de un usuario.

**Headers**

| Nombre       | Valor     |
| ------------ | --------- |
| Content-Type | image/png |

**URL & Query**

| Name    | Type   | Description                                                               |
| ------- | ------ | ------------------------------------------------------------------------- |
| `name`  | string | Nombre del usuario o UUID del usuario                                     |
| `type`  | string | <p>fullbody - Para cuerpo completo<br>head - Para solamente la cabeza</p> |
| `scale` | number | Número del 1 al 50                                                        |

**Respuesta**

{% tabs %}
{% tab title="200" %}
```
Imagen con el avatar
```
{% endtab %}

{% tab title="404" %}
```json
{
    "code": "404",
    "error": "Player not found"
}
```
{% endtab %}

{% tab title="403" %}
```json
{ 
    "code": "403",
    "error": "Action forbidden"
}
```
{% endtab %}

{% tab title="500" %}
```json
{
    "code": "500",
    "error": "Internal Server Error"
}
```
{% endtab %}
{% endtabs %}

**Ejemplo de uso**

*   Obtener el renderizado de la cabeza de la skin del jugador:

    ```
    GET /2d/skin/Benson/head
    ```
*   Obtener el renderizado del cuerpo completo de la skin del jugador con escala 2:

    ```
    GET /2d/skin/Benson/fullbody?scale=2
    ```
