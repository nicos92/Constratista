# Constratista - Astro Project

## Project Overview

**Constratista** is a web project built with [Astro](https://astro.build/), a modern static site generator. The project currently uses the Astro Basics starter template — a minimal scaffold intended for learning and building from scratch.

- **Version:** 0.0.1
- **Node.js:** >= 22.12.0
- **Package Manager:** pnpm
- **TypeScript:** Strict mode (via `astro/tsconfigs/strict`)

## Project Structure

```
/
├── public/             # Static assets (favicon, etc.)
├── src/
│   ├── assets/         # SVG images (astro.svg, background.svg)
│   ├── components/     # Reusable Astro components
│   │   └── Welcome.astro
│   ├── layouts/        # Page layout wrappers
│   │   └── Layout.astro
│   └── pages/          # File-based routing
│       └── index.astro
├── astro.config.mjs    # Astro configuration
├── tsconfig.json       # TypeScript configuration
└── package.json
```

### Key Directories

| Directory | Purpose |
|-----------|---------|
| `src/pages/` | File-based routing. Each `.astro` file becomes a route. `index.astro` is the home page. |
| `src/components/` | Reusable UI components (`.astro` files). |
| `src/layouts/` | Layout wrappers that provide shared HTML shell and styles. |
| `src/assets/` | Static assets imported in components (images, SVGs, etc.). |
| `public/` | Static files served as-is (favicon, robots.txt, etc.). |

## Commands

All commands are run from the project root using pnpm:

| Command | Description |
|---------|-------------|
| `pnpm install` | Install dependencies |
| `pnpm dev` | Start local dev server at `localhost:4321` |
| `pnpm build` | Build production site to `./dist/` |
| `pnpm preview` | Preview the build locally before deploying |
| `pnpm astro ...` | Run Astro CLI commands (e.g., `pnpm astro add`, `pnpm astro check`) |

## Dependencies

- **astro** ^6.1.5 — The core framework

## Development Conventions

- **TypeScript:** Strict mode is enabled via `astro/tsconfigs/strict`. All code should pass strict type checking.
- **ES Modules:** The project uses `"type": "module"` in `package.json`, so use ESM `import`/`export` syntax.
- **Component Style:** Astro components (`.astro`) use a frontmatter pattern — JS/TS code between `---` delimiters at the top, followed by HTML-like template syntax.
- **Styling:** Scoped `<style>` tags inside `.astro` files for component-level CSS. No external CSS framework is currently configured.

## Configuration Files

- **`astro.config.mjs`** — Currently uses default configuration. Integrations can be added here.
- **`tsconfig.json`** — Extends `astro/tsconfigs/strict`, includes all files except `dist/`.
- **`.gitignore`** — Excludes `dist/`, `.astro/`, `node_modules/`, logs, `.env` files, `.DS_Store`, and `.idea/`.
