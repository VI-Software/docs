---
description: Application Programming Interface de VIS Developer Portal
---

# 💻 API



### Fetch application details

## Fetch application details

<mark style="color:blue;">`GET`</mark> `https://dev-vis.galnod.com/api`

{% tabs %}
{% tab title="200: OK Gets application details" %}
```
- Status
- appName
- appOwner
- appDeveloper
- Runtime-Mode
- Specific-Version
```
{% endtab %}

{% tab title="500: Internal Server Error The application is not operating" %}

{% endtab %}

{% tab title="404: Not Found The API route has been moved" %}

{% endtab %}
{% endtabs %}

### Validate a key / get project info

## Validate a key / get project info

<mark style="color:blue;">`GET`</mark> `https://dev-vis.galnod.com/api/key`

If the request is successful, it will return the project data that is associated with the API Key

#### Query Parameters

| Name                                  | Type   | Description |
| ------------------------------------- | ------ | ----------- |
| key<mark style="color:red;">\*</mark> | string |             |

{% tabs %}
{% tab title="200: OK Key is valid" %}
<pre><code><strong>code: 200
</strong><strong>projectDetails:
</strong>- id
- ownerId
- name
- logo
- contactEmail
- description
- termsOfService
- privacyPolicy
</code></pre>
{% endtab %}

{% tab title="401: Unauthorized The required authorization heads were not present in the request" %}

{% endtab %}

{% tab title="404: Not Found  The key was not found on the database" %}

{% endtab %}
{% endtabs %}
