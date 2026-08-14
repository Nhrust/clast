# Server Architecture

The game server is authoritative for the real-time match state.

## Responsibilities

- receive and validate player inputs;
- advance the authoritative simulation;
- resolve movement and collisions;
- resolve combat and damage;
- manage visibility information;
- manage match state and player participation;
- emit snapshots/events required by authorized clients.

## Performance principle

The real-time simulation should not depend on slow durable database operations on every tick. Persistence is asynchronous or boundary-driven where practical.

## Initial deployment

During development, client, server, and local persistence may run on the same machine.
