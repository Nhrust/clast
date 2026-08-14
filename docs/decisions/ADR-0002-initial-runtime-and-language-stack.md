# ADR-0002: Initial Runtime and Language Stack

- **Status:** Accepted
- **Date:** 2026-08-14

## Context

Classic Tanks needs a lightweight, strongly typed development stack for a browser client and an authoritative WebSocket game server. The project is open-source and should keep infrastructure simple while leaving room to evolve later.

## Decision

- **TypeScript** is the primary application language.
- **Deno 2.x** is the primary runtime and development toolchain for the server and project tooling.
- **WebSocket** is the initial realtime transport.
- The browser client remains a standard web application using browser APIs; it is not coupled to Deno at runtime.
- Shared protocol and types may be consumed by both client and server where appropriate.
- npm packages may be used through Deno's npm compatibility when justified, but Node.js is not the architectural foundation.
- Node.js/npm already installed on developer machines may remain installed for tooling compatibility; they are not required as the game's server runtime.

## Consequences

### Positive

- TypeScript across client/server/shared reduces context switching.
- Deno provides formatting, linting, testing and task execution without requiring a large initial toolchain.
- WebSocket matches the project's initial realtime networking plan.
- Runtime boundaries remain replaceable if later requirements justify another transport or runtime.

### Negative / trade-offs

- Some frontend ecosystem tools may still expect Node.js/npm.
- Deno-specific APIs should be isolated from core game simulation so the simulation remains portable.
- The Deno version should be pinned for reproducible development.

## Revisit conditions

This decision should be reconsidered only if prototype measurements, ecosystem limitations, deployment requirements, or scaling requirements demonstrate a concrete problem.

## Current development runtime

The development machine currently has **Deno 2.9.5** installed. The project should initially target Deno 2.x and pin the exact version in the development/tooling setup before the first executable prototype is committed.

## Related

- Phase 0 — Foundation
- GitHub Issue #1 — Phase 0: complete repository foundation
- GitHub Issue #2 — ADR-0002: Initial runtime and language stack
