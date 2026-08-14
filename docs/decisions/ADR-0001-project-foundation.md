# ADR-0001: Project foundation principles

- **Status:** Accepted
- **Date:** 2026-08-14

## Context

Classic Tanks is being developed as a public open-source browser game. The project is still at the pre-production stage, so the repository must support rapid iteration without locking the project into unnecessary infrastructure.

## Decision

1. The repository is the source of truth for stable project decisions.
2. Phase 0 prioritizes reproducibility, documentation, clear boundaries, and developer workflow over gameplay implementation.
3. The first implementation will be local-first.
4. The initial real-time transport is WebSocket.
5. Persistence will begin with a lightweight JSON-oriented approach and remain isolated behind a data-access boundary.
6. The server is authoritative for competitive game state.
7. Large-scale production infrastructure is deferred until the prototype demonstrates a real need.

## Consequences

The project can move quickly during prototyping while preserving a path to replace infrastructure components later. Some decisions will intentionally remain provisional until validated by the vertical slice.
