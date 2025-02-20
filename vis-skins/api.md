---
description: Application Programming Interface de VIS Skins
---

# 💻 API

### URL Base

```url
https://skins.visoftware.dev
```



### Endpoints

Get 2D Rendering of Skin

<mark style="color:green;">`GET`</mark> `/2d/skins/:name/:type?scale=:scale`

Get the rendered 2D avatar of a user.

**Headers**

| Nombre       | Valor     |
| ------------ | --------- |
| Content-Type | image/png |

**URL & Query**

| Name    | Type   | Description                                                 |
| ------- | ------ | ----------------------------------------------------------- |
| `name`  | string | Username or User UUID                                       |
| `type`  | string | <p>fullbody - For full body<br>head - For the head only</p> |
| `scale` | number | Number from 1 to 50                                         |

**Respuesta**

{% tabs %}
{% tab title="200" %}
```
Image with the avatar
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

Example of use

*   Get the player skin head render:

    ```
    GET /2d/skin/Benson/head
    ```
*   Get the full body render of the player skin with scale 2:

    ```
    GET /2d/skin/Benson/fullbody?scale=2
    ```
