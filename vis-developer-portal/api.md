---
description: Application Programming Interface de VIS Developer Portal
---

# 💻 API



### Fetch application details

{% swagger method="get" path="" baseUrl="https://dev-vis.galnod.com/api" summary="Fetch application details" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-response status="200: OK" description="Gets application details" %}
```
- Status
- appName
- appOwner
- appDeveloper
- Runtime-Mode
- Specific-Version
```
{% endswagger-response %}

{% swagger-response status="404: Not Found" description="The API route has been moved" %}

{% endswagger-response %}

{% swagger-response status="500: Internal Server Error" description="The application is not operating" %}

{% endswagger-response %}
{% endswagger %}

### Validate a key / get project info

{% swagger method="get" path="" baseUrl="https://dev-vis.galnod.com/api/key" summary="Validate a key / get project info" %}
{% swagger-description %}
If the request is successful, it will return the project data that is associated with the API Key
{% endswagger-description %}

{% swagger-parameter in="query" name="key" type="string" required="true" %}

{% endswagger-parameter %}

{% swagger-response status="200: OK" description="Key is valid" %}
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
{% endswagger-response %}

{% swagger-response status="401: Unauthorized" description="The required authorization heads were not present in the request" %}

{% endswagger-response %}

{% swagger-response status="404: Not Found" description=" The key was not found on the database" %}

{% endswagger-response %}
{% endswagger %}
