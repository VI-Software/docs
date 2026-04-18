---
title: Platform Infrastructure Overview
---

## Overview

VI-Software is a Minecraft modding platform with its own launcher and APIs for managing modded servers. The platform serves as a centralized hub for authentication, server management, launcher distribution, and user dashboards.

Hosting Model: Traditional KVM virtual machines on undisclosed third-party hosting infrastructure. Network access to the platform is provided through Cloudflare Tunnels, providing DDoS protection and obfuscating the origin server location.

## Architecture Diagram

```
┌────────────────────────────────────────────────────────────────────┐
│                        CLOUDFLARE TUNNELS                          │
│              (DDoS Protection + Origin Obfuscation)                │
└────────────────────────────────────────────────────────────────────┘
                              ▲
                              │ HTTPS
                              ▼
┌────────────────────────────────────────────────────────────────────┐
│           AlmaLinux KVM Virtual Machine (Single Host)              │
│                   Undisclosed Third-Party Hosting                  │
│                                                                    │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │                      DOCKER ENGINE                           │  │
│  │                                                              │  │
│  │  ┌─────────────────┐  ┌─────────────────┐  ┌────────────┐    │  │
│  │  │ Authentication  │  │   API Server    │  │  Launcher  │    │  │
│  │  │  Service        │  │                 │  │Distribution│    │  │
│  │  │ (Yggdrasil)     │  │                 │  │            │    │  │
│  │  │ Container       │  │ Container       │  │ Container  │    │  │
│  │  └────────┬────────┘  └────────┬────────┘  └────┬───────┘    │  │
│  │           │                    │                 │           │  │
│  │  ┌─────────────────┐           │                 │           │  │
│  │  │ Otto (File/     │           │                 │           │  │
│  │  │ Image Server)   │           │                 │           │  │
│  │  │ Container       │           │                 │           │  │
│  │  └────────┬────────┘           │                 │           │  │
│  │           │                    │                 │           │  │
│  │  ┌────────┴────────┬──────────┬┴─────────────────┴──────┐    │  │
│  │  │  DOCKER NETWORK BRIDGE (Container-to-Container)      │    │  │
│  │  └────────┬────────┬──────────┬──────────────┬──────────┘    │  │
│  │           │        │          │              │               │  │
│  │  ┌────────▼─┐  ┌───▼──────┐  ┌─▼──────────┐  │               │  │
│  │  │MariaDB   │  │PostgreSQL│  │   Redis    │  │               │  │
│  │  │Container │  │Container │  │ Container  │  │               │  │
│  │  └──────────┘  └──────────┘  └────────────┘  │               │  │
│  │                                              │               │  │
│  │         (All shared storage on host)         │               │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                                                                    │
│  ┌──────────────────────────────────────────────────────────┐      │
│  │  Cronjob: Automated Backups (MariaDB, PostgreSQL, etc.)  │      │
│  └──────────────────────────────────────────────────────────┘      │
└────────────────────────────────────────────────────────────────────┘
                              ▲
                              │ SSH/rsync pull
                              │
┌────────────────────────────────────────────────────────────────────┐
│              Secondary Backup Server (Remote)                      │
│  * Pulls backups from primary VM periodically                      │
│  * Geographic/Infrastructure redundancy                            │
│  * Data recovery capability if primary fails                       │
└────────────────────────────────────────────────────────────────────┘
```

## Key Infrastructure Characteristics

- All services depend on one KVM VM
- Services isolated at application level, not infrastructure level
- All Docker containers share the AlmaLinux host kernel
- All database files on the same disk attached to the KVM VM
- No failover instances or load balancing
- Recovery requires manual intervention and VM restart



## Core Components

### Authentication System

The platform uses VIS Yggdrasil Auth, a custom authentication service built on the Drasl project (which is itself based on Mojang's Yggdrasil authentication framework). This provides:

- Independent authentication separate from Mojang/Microsoft infrastructure
- Compatibility with Authlib Injector for launcher support
- Custom API endpoints for account management
- Integration with various Minecraft launchers that support authlib-injector
- Dashboard authentication (VIS Auth 3.0)

The authentication server is accessible at `https://authserver.visoftware.dev/authlib-injector` and handles the verification of player credentials across the platform.

### Client Distribution

The platform maintains multiple distribution channels:

- VIS Launcher – A custom Minecraft launcher (cross-platform, Windows/Linux) that handles launcher updates, mod installation, and server connectivity
- Launcher Distribution Manager – Manages version releases and updates
- CDN for static assets – Referenced through Cloudflare integration for efficient file serving

The launcher handles:
- Multi-account management
- Mod pre-configuration per server
- Direct credential transmission to VI Software servers
- Automatic updates via GitHub Actions

### API Infrastructure

A REST API layer enables:

- External service integration (Discord bots, server management tools)
- Server administrator controls
- Launcher communication
- Platform status monitoring

### Backend Services

Based on the architectural patterns evident from the project, core services likely include:

- User Authentication Service – Handles Yggdrasil protocol
- Account Management – User profiles, account data
- Server Management API – For modded server operators
- Status Service – Platform health monitoring (referenced as "VI Software Status")
- Skin/Cape Service – Compatible with Yggdrasil for player cosmetics

### Code Repository & CI/CD

- Source Control: GitHub (primary) with GitLab mirroring
- Deployment: GitHub Actions automate launcher releases and updates
- Open Source: Most tools are (A)GPL-licensed

## Technology Stack

Operating System: AlmaLinux (specific version undisclosed)

Data Storage:
- MariaDB – Core relational database for authentication, accounts, and platform services
- Redis – In-memory data store for caching and session management on core components
- PostgreSQL – Dedicated database for Otto (the image/file server component)

Application Runtime: Java (Minecraft ecosystem)

Networking: Cloudflare Tunnels for ingress and DDoS protection

Authentication Protocol: Yggdrasil-compatible API (HTTP-based)

Distribution: Static asset hosting + versioned releases via GitHub Actions

## Network & Security

Ingress: Cloudflare Tunnels provide:
- DDoS protection and rate limiting
- Origin server location obfuscation (undisclosed hosting provider)
- HTTPS encryption for all connections
- Automatic certificate management

Authentication Flow:
- Credentials transmitted directly to VI Software servers
- Credentials NOT stored in launcher
- Yggdrasil protocol for session validation

API Endpoints:
- Accessible through Cloudflare Tunnel infrastructure
- Recent updates have changed API endpoints (launcher detects and handles changes)

## Infrastructure & Hosting

Compute: Single traditional KVM virtual machine on undisclosed third-party hosting

Operating System: AlmaLinux (version undisclosed)

Containerization: 
- All services run within Docker containers on the single KVM VM
- Each service component has its own isolated Docker container
- Docker engine manages container lifecycle and resource allocation

Network Access Model: 
- Primary access via Cloudflare Tunnels (DDoS + obfuscation)
- No direct public IP exposure of origin servers
- Container-to-container communication on the same host network

Service Topology:
- Single Point of Infrastructure: One KVM VM hosts all services
- Container Isolation: Services are containerized but share the same host kernel
- Shared Resources: CPU, memory, and disk are shared across all containers on the single VM

## Data Storage

The platform uses a multi-database approach optimized for specific workloads:

Core Platform (MariaDB):
- User authentication credentials
- Account profiles and metadata
- Server configurations
- Platform state and configuration

Caching & Sessions (Redis):
- Session data for active users
- Cached authentication tokens
- Real-time cache for frequently accessed data
- Performance optimization for core services

File Server (Otto - PostgreSQL):
- Image metadata and references
- File server database (separate from core platform)
- Allows independent scaling and management from authentication system

This separation allows Otto to operate independently while maintaining data consistency with the core platform.

## Monitoring & Observability

Current Monitoring:
- Basic uptime checks (ping/HTTP health checks)
- Error log monitoring
- Manual review of logs for issues

Alerting:
- Basic alerting when services go down
- Manual verification required for some issues

Gaps & Considerations:
- No comprehensive metrics collection (Prometheus, Grafana, etc.)
- No centralized log aggregation
- No real-time performance monitoring
- Alert response likely manual or manual-triggered
- No automated incident detection for degraded services

Operational Impact:
- Issues may not be detected immediately
- Troubleshooting relies on manual log inspection
- Difficult to correlate issues across services (Auth, API, Otto)
- Limited historical data for performance analysis or capacity planning

## Service Architecture

### Containerized Services

All services run as Docker containers on the single KVM host. This provides application-level isolation while sharing the underlying VM infrastructure.

Docker Containers:

1. Authentication Service (Docker container)
   - Runs Yggdrasil-compatible authentication server
   - Connects to MariaDB database for credentials and accounts
   - Uses Redis for session caching and performance
   - Handles account management and profile data
   - Accessed at `https://authserver.visoftware.dev/authlib-injector`

2. API Server (Docker container)
   - Provides REST endpoints for launcher and external tools
   - Server management APIs for administrators
   - Status and health monitoring
   - Platform integration layer for Discord bots, etc.

3. Launcher Distribution (Docker container)
   - Manages launcher version artifacts and releases
   - Integrates with GitHub Actions CI/CD pipeline
   - Tracks multi-version support and rollout control

4. Otto - File/Image Server (Docker container)
   - Handles image uploads, storage, and serving
   - Connects to PostgreSQL database for metadata
   - Independent from core platform database
   - Separate container allows resource isolation

5. Database Containers (as applicable)
   - MariaDB container for core platform data
   - PostgreSQL container for Otto file server
   - Redis container for caching/sessions

### Container Communication

- All containers run on a single Docker host on the same KVM VM
- Containers communicate via Docker network bridge
- No network isolation enforced between containers
- Services access databases via Docker service discovery or hostname resolution
- Shared Docker network enables direct container-to-container communication

### Failure Modes & Recovery

Single Container Crash:
- Other containers continue running
- Service unavailable until container is manually restarted
- No automatic restart policy (unless configured in docker-compose)
- Requires manual intervention or cron-based health checks

Host VM Failure:
- All Docker containers offline simultaneously
- Complete platform outage
- Recovery requires manual VM restart or failover
- Data recovery depends on secondary backup server

Docker Engine Failure:
- All containers stop
- Complete platform outage
- Host remains running but services unavailable

### Deployment & CI/CD

- Version Control: GitHub (primary) with GitLab mirroring
- Deployment: GitHub Actions for launcher releases and updates
- Configuration Management: Cronjob-based backups for infrastructure state
- Container Orchestration: Docker Compose or similar (not Kubernetes)

### Operational Tooling

- Discord bot (Artiferrium) for platform integration
- Server synchronization tools (VIS SrvSync) for multi-server management
- Support for Pterodactyl and native Linux server setups

## Privacy & Compliance

- User authentication data managed internally (not on public cloud)
- Yggdrasil protocol provides industry-standard session management
- GDPR-compatible account deletion options (referenced in planning)
- Credentials not stored client-side in launcher

## Data Protection & Backups

Local Backups (On Primary Server):
- Automated cronjob-based backups running on the primary server
- Backs up critical data (databases, configuration, application state)
- Stored locally on the same infrastructure

Secondary Backup Server:
- Remote backup server that periodically connects to primary
- Pulls important backup data via authenticated connection
- Provides geographic/infrastructure redundancy
- Protects against primary server failure or data loss

Backup Strategy:
- Redundant backup locations reduce single point of failure risk for data
- Separates backup infrastructure from primary services
- Allows recovery of:
  - User authentication data (MariaDB)
  - Session/cache data (Redis)
  - File server data (Otto PostgreSQL)
  - Configuration and application state

Current Limitations & Considerations:
- No automated failover for services (manual intervention required)
- No redundant instances running during normal operations
- Services experience downtime during maintenance (accepted operational model)
- Single point of infrastructure failure: If the KVM VM goes down, all services are offline
- Backup recovery requires manual intervention
- Backup schedule/retention policy not specified
- Recovery time objective (RTO) and recovery point objective (RPO) not formally documented
- Data backups are independent from service availability. Data can be recovered even if services are down