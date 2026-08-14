# Technical Overview

## Current status

This document describes the current technical direction, not an immutable implementation contract.

## Initial direction

- Browser client.
- Server-authoritative real-time game simulation.
- WebSocket as the initial real-time transport.
- Lightweight JSON-oriented persistence for the early prototype.
- Local development first; production infrastructure is intentionally deferred.

## Architectural principle

Infrastructure choices must remain replaceable behind clear interfaces where practical. The prototype should optimize for learning and iteration rather than premature scalability.

## Authority

The server is authoritative for all game state that affects fairness or competitive results. The client is treated as untrusted.

## Phase 0 boundary

No full gameplay implementation is required in Phase 0. The goal is a reproducible development foundation and clear system boundaries for the first vertical slice.
