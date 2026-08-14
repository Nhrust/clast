# Networking

## Initial transport

WebSocket is the initial real-time transport for the prototype.

## Model

The server is authoritative. Clients send input/intent; the server advances the simulation and sends state updates and events.

The client may use prediction and interpolation to keep controls responsive and presentation smooth.

## Security

The server must not trust client claims about positions, hits, damage, reload state, ammunition, or hidden entities.

## Future evolution

The transport layer should be isolated enough that a more specialized real-time transport can be evaluated later without rewriting gameplay systems.
