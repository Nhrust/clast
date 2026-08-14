# Security

## Core trust model

The browser client is untrusted.

The server must validate all state transitions that can affect competitive outcomes, including movement limits, firing, ammunition, reload state, damage, visibility, and other authoritative rules.

## Anti-cheat principle

Obfuscation is not a security boundary. Sensitive game state should not be sent to a client that is not entitled to receive it.

## Phase 0

The detailed threat model and anti-cheat implementation will be specified after the first networking and simulation prototypes exist.
