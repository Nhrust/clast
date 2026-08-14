# Persistence

## Initial direction

The first prototype will use a lightweight JSON-oriented persistence approach.

## Boundary

Gameplay code should access persistence through a small data-access boundary rather than depending directly on storage implementation details.

## Why

The project is still discovering its real data model. A flexible early store keeps iteration fast while preserving the option to move to another persistence technology later.

## Rule

Durable persistence must not become the per-frame source of truth for the real-time simulation.
