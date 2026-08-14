# System Overview

## Target shape for the first implementation

```text
Browser Client
     │
     │ WebSocket
     ▼
Game Server
     │
     ├── authoritative simulation
     ├── combat and visibility
     └── player / match session state
     │
     ▼
Persistence Layer
```

The first local prototype may run all components on one machine.

## Boundaries

### Client

Responsible for presentation, input, local prediction/interpolation, and user interface.

### Server

Responsible for authoritative state, rules, validation, combat, visibility, and match state.

### Persistence

Responsible for durable account and progression data. It must not become a dependency of the real-time simulation loop for every frame or input.

## Future scaling

Multiple game-server instances, matchmaking services, regional deployment, and operational infrastructure are future concerns. They are not part of the initial foundation.
