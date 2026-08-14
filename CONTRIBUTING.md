# Contributing to Classic Tanks

## General rule

Keep changes small, reviewable, and tied to a clear goal. Do not introduce production gameplay systems without a corresponding design or technical rationale when the change affects project architecture.

## Branches

Use descriptive branches such as:

- `feature/<name>`
- `fix/<name>`
- `refactor/<name>`
- `docs/<name>`
- `chore/<name>`

## Commits

Use concise conventional-style messages, for example:

- `feat(server): add authoritative movement`
- `fix(combat): prevent duplicate damage`
- `docs(network): document snapshot format`
- `refactor(client): isolate camera system`

## Pull requests

A pull request should explain:

1. what changed;
2. why it changed;
3. how it was tested;
4. any known limitations or follow-up work.

## Documentation

Important architectural decisions belong in `docs/decisions/` as ADRs. Gameplay changes should update the relevant game-design documentation when the design is considered stable enough to record.

## Security

Never commit credentials, tokens, private keys, production secrets, or personal data.
