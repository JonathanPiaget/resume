# CLAUDE.md

Astro resume site, EN/FR, deployed to GitHub Pages at https://piagetjonathan.ch on push to `main`.

## Rules

- **Never run `pnpm dev`** — a dev server is always already open in the user's terminal.
- **Verify with `pnpm build`** — it compiles Paraglide, typechecks (`astro check`), then builds. It is the only check available here.
- **Run `pre-commit run --all-files` before handing back** — CI gates on the same hooks (prettier, gitleaks, actionlint, zizmor).

## Where content lives

- Structured resume data (basics, skills, theme) → `cv.json`, imported as `@cv`.
- User-facing text → `messages/en.json` **and** `messages/fr.json`; every key must exist in both (CI comments on missing translations).
- After editing message files, run `pnpm run postinstall` to regenerate `src/paraglide/` (generated — never edit by hand).
- Components read text with `import * as m from "../paraglide/messages.js"`, then `m.some_key()`.

## Gotchas

- Both locales render the same `BaseIndex.astro`; `src/pages/index.astro` and `src/pages/fr/index.astro` only call `setLocale()`.
- `src/pages/amcis.astro` is a standalone academic page — it deliberately uses the he-arc.ch email, not the CV one.
- The page doubles as a printed PDF resume: keep the `print:` utility classes working on any layout change.
- Colour themes are the `[data-theme]` blocks in `src/globals.css`, picked by `basics.theme` in `cv.json`.
