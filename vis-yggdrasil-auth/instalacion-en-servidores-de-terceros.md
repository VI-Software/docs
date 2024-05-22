# 💾 Instalación en servidores de terceros



{% hint style="warning" %}
Es importante destacar que el sistema VIS' Yggdrasil Auth se encuentra actualmente en desarrollo y solo cuenta con sus funciones mínimas. La documentación asociada puede estar incompleta, y es posible que algunos métodos sufran cambios antes de la publicación oficial. Se recomienda estar al tanto de las actualizaciones del proyecto, ya que la implementación aún está en una fase temprana y sujeta a ajustes.
{% endhint %}



## Para servidores superiores en las versiones 1.16.5 y en adelante.

#### Añada los siguientes parámetros a su script de startup:

```batch
-Dminecraft.api.env=custom
-Dminecraft.api.auth.host=https://authserver.visoftware.tech/
-Dminecraft.api.account.host=https://authserver.visoftware.tech/
-Dminecraft.api.session.host=https://authserver.visoftware.tech/
-Dminecraft.api.services.host=https://authserver.visoftware.tech/
```

#### Un ejemplo de script de startup sería:

```batch
java -Xmx1024M -Xms2048M \
    -Dminecraft.api.env=custom \
    -Dminecraft.api.auth.host=https://authserver.visoftware.tech/ \
    -Dminecraft.api.account.host=https://authserver.visoftware.tech/ \
    -Dminecraft.api.session.host=https://authserver.visoftware.tech/ \
    -Dminecraft.api.services.host=https://authserver.visoftware.tech/ \
    -jar server.jar nogui
```

## Para versiones 1.15.2 y inferiores

VI Software desea comunicar a los usuarios que no respaldamos ni brindamos soporte oficial para la implementación de sistemas de autenticación parcheados en versiones anteriores a la 1.15 de Minecraft. Aunque entendemos que algunos usuarios pueden tener necesidades específicas, es esencial destacar que el uso de soluciones no oficiales puede conllevar riesgos y desafíos adicionales.

Para aquellos que buscan explorar opciones no respaldadas oficialmente en versiones anteriores a la 1.15, se sugiere considerar el uso de [authlib-injecto.](https://github.com/yushijinhun/authlib-injector/blob/develop/README.en.md#deploy) No obstante, se advierte que esta elección puede acarrear posibles problemas de compatibilidad y seguridad.

VI Software recomienda enfáticamente utilizar métodos de autenticación respaldados oficialmente y seguir las mejores prácticas recomendadas para garantizar la estabilidad y la seguridad del entorno del servidor. La implementación de soluciones no oficiales en versiones antiguas puede aumentar la complejidad y el riesgo de problemas técnicos, por lo que se insta a los usuarios a ejercer precaución y comprender los posibles inconvenientes antes de proceder con tales configuraciones.

En este sentido, se aconseja utilizar como mínimo la versión 1.16 de Minecraft, ya que en este rango se cuenta con el respaldo oficial y el mantenimiento adecuado para la integración de VIS' Yggdrasil Auth, garantizando así una experiencia de juego más sólida y segura.

