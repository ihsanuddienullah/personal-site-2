# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server at http://localhost:8080
npm run build     # Production build
npm run build:dev # Development build
npm run lint      # ESLint
npm run preview   # Preview production build
```

There is no test suite configured.

## Architecture

This is a single-page personal portfolio website. All content lives on one route (`/`) composed of stacked full-width sections.

**Section render order** (`src/pages/Index.tsx`):
`Header` → `Hero` → `About` → `Experiences` → `Skills` → `Contact` → `Footer`

> `<Projects />` is currently commented out in `Index.tsx`.

**Provider wrapping** (`src/App.tsx`): `QueryClientProvider` → `TooltipProvider` → `BrowserRouter`. `ThemeProvider` is scoped inside the `Index` page, not at the app root.

**Theme system**: Custom `ThemeProvider` (not `next-themes`) in `src/components/ThemeProvider.tsx`. Applies `dark`/`light` class to `<html>`. Theme persisted to `localStorage` under key `portfolio-theme`. CSS variables for all tokens defined in `src/index.css`.

**Path alias**: `@/` maps to `src/` (configured in `vite.config.ts`).

**Content as data**: Section content (experiences, skills, projects) is defined as plain arrays/objects directly inside each component file — there is no external data layer or CMS. To update content, edit the relevant component.

**Custom CSS utilities** (defined in `src/index.css`, used via className):
- `.gradient-bg` — purple/blue/green radial gradient used in the Hero background
- `.glass-effect` — frosted glass card style

**shadcn/ui**: Pre-built primitives live in `src/components/ui/`. Do not edit these files directly; re-generate via the shadcn CLI if updates are needed. All business-logic components live in `src/components/` (one level up).
