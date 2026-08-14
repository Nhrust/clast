# Client Architecture

The client is a browser application responsible for presentation and interaction.

## Responsibilities

- rendering;
- input handling;
- camera and UI;
- local prediction/interpolation where appropriate;
- network transport integration;
- presentation of server-authoritative state.

## Non-responsibilities

The client must not be the final authority for competitive outcomes such as damage, penetration, ammunition availability, reload completion, or hidden enemy state.

## Rendering direction

The project targets a lightweight, readable visual style suitable for a wide range of devices. WebGPU is the preferred rendering direction, with a fallback path to be evaluated during implementation.
