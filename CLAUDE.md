# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

FLARE 2026 (Fast, Low-resource, Accurate, Robust, and Effectual Medical Image Analysis) competition website. A single-page Angular app showcasing 3 MICCAI medical imaging challenge tasks, deployed to GitHub Pages at flare-medfm.github.io.

## Commands

- **Dev server:** `npm start` (serves at localhost:4200)
- **Production build:** `npm run build` (outputs to `build/`)
- **Watch mode:** `npm run watch`
- **Tests:** `npm run test` (Karma + Jasmine)
- **Deploy to GitHub Pages:** `ng deploy --base-href="/"`

## Architecture

### Data-Driven Content

All site content is defined in `src/assets/data.min.js` as global variables (`identity`, `data`). Components access this via `declare var data: any;` and read their section (e.g., `data['Task1']`). To update site content, edit this file — no component changes needed.

### Module Structure

- **AppModule** (`app.module.ts`) — bootstraps the app, registers ServiceWorker
- **AppRoutingModule** — two lazy-loaded routes: `''` → ApplicationModule, `'404'` → PageNotFoundModule
- **ApplicationModule** (`application/`) — the main page, declares all section components: Navbar, Home, Task1–Task6, Social, Footer

### Component Pattern

All 6 task components (`task1/` through `task6/`) follow an identical pattern:
- Read from `data['TaskN']` in the global data object
- Use `ChangeDetectionStrategy.OnPush` with manually detached change detection
- Share styles via `src/app/shared/task-styles.css`
- Display: title, image (gif/png), animated timeline keywords, Codabench link

### External Libraries

Loaded as vendored minified scripts in `src/assets/js/` and included via `angular.json` scripts array (not npm):
- Typed.js (typing animation), Particles.js (background), Vanilla Tilt (3D effects)
- WOW.js and Animate.css (scroll animations) — WOW is loaded conditionally on desktop only (>768px) via `loadExternalResource.ts`

### Build Configuration

- Output directory: `build/` (not the Angular default `dist/`)
- Global styles loaded in `angular.json`: Font Awesome, Animate.css, `styles.min.css`
- ServiceWorker enabled in production (`ngsw-config.json`)
- Budget limits: 500kb warning / 1mb error for initial bundle, 7kb/10kb for component styles
