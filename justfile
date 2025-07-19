@_default:
    just --list

# Bootstrap the project
@bootstrap:
    pnpm install
    pre-commit install

# Run the project
@up:
    pnpm dev
