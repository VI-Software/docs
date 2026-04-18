---
title: Repository
---

[repository.visoftware.dev](https://repository.visoftware.dev/) is the central Maven repository where we publish all the tools and libraries that power the VI Software platform. Whether it’s agents, utilities, or integrations, you’ll find the packages here to include in your projects.

### Example: Using Artiferrium

Artiferrium is one of the main server agents we provide to help sync and manage server artifacts like builds, configs, and mods.

To add Artiferrium to your project, add the repository:

```xml
<repository>
  <id>visoftware-repository</id>
  <name>VI Software Repository</name>
  <url>https://repository.visoftware.dev/<repository></url>
</repository>

```

Then add the dependency:

```xml
<dependency>
  <groupId>dev.visoftware</groupId>
  <artifactId>artiferrium</artifactId>
  <version>1.0.1</version>
</dependency>
```

