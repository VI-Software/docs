---
description: Sistema de autentificación predeterminado para las experiencias de VI Software
---

# VIS' Yggdrasil Auth

{% hint style="warning" %}
Este sistema se encuentra en un proceso de transición con una coexistencia con el sistema de autentificación actual de Microsoft. En el futuro, el soporte con Microsoft será discontinuado. Todos los usuarios de servidores afectados han sido contactados por nuestro bot en Discord, proporcionando más detalles respecto a esta transición.
{% endhint %}

{% hint style="warning" %}
Es importante destacar que el sistema VIS' Yggdrasil Auth se encuentra actualmente en desarrollo y solo cuenta con sus funciones mínimas. La documentación asociada puede estar incompleta, y es posible que algunos métodos sufran cambios antes de la publicación oficial. Se recomienda estar al tanto de las actualizaciones del proyecto, ya que la implementación aún está en una fase temprana y sujeta a ajustes.
{% endhint %}

VIS' Yggdrasil Auth se fundamenta en el proyecto [Drasl](https://github.com/unmojang/drasl). Este proyecto, a su vez, se inspira en el sistema de autenticación de Mojang. La adopción de esta estructura no solo se traduce en una mayor robustez, sino que también otorga a VIS una autonomía significativa respecto a Mojang y Microsoft.

La elección de basarse en el proyecto Drasl permite establecer un sistema de autenticación independiente, proporcionando así un nivel elevado de seguridad. La independencia de Mojang y Microsoft confiere una capa adicional de resiliencia y estabilidad a los servicios de autenticación de VIS. Esta autonomía también facilita la administración y gestión de las cuentas de usuario, ofreciendo una mayor flexibilidad y control sobre los procesos asociados con la autenticación de usuarios.

Al adoptar esta arquitectura, VIS no solo se beneficia de la experiencia y solidez inherentes al sistema de autenticación de Mojang, sino que también logra establecer un marco propio que se ajusta a las necesidades específicas del entorno VIS. Esta adaptabilidad se traduce en una mejora significativa en la seguridad, estabilidad y eficiencia de los servicios de autenticación, asegurando una experiencia óptima para los usuarios y facilitando la gestión de las cuentas por parte de los administradores.
