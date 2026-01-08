# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build and Development Commands

```bash
pnpm dev       # Start development server (Vite)
pnpm build     # TypeScript type-check and production build
pnpm preview   # Preview production build locally
pnpm lint      # Run ESLint on src directory
pnpm lint:fix  # Run ESLint with --fix on src directory
pnpm typecheck # Run TypeScript type checking
```

## Deployment

The site is deployed to GitHub Pages via a GitHub Actions workflow on pushes to the `master` branch. The workflow:

- Installs dependencies with pnpm
- Runs linting and type checking
- Builds the project
- Copies `index.html` to `404.html` for SPA routing
- Deploys the `dist` directory to GitHub Pages

## Architecture Overview

This is a personal portfolio/CV website built with **Preact** and **Vite**. The site is for software architect Alvaro Torres (goodbytes.net).

### Tech Stack
- **Preact** with preact-iso for routing (not React, despite react-i18next being used)
- **Vite** with @preact/preset-vite
- **i18next** for internationalization (English/Spanish)
- **TypeScript**

### Key Structure

**Entry Point**: `index.html` loads `src/main.tsx`

**Routing** (`src/routes.tsx`): Uses preact-iso's `LocationProvider` and `Router`
- `/` → App (home page)
- `/profile` → Profile
- `/contact` → Contact
- `/cv` → Cv
- `default` → 404 (NotFound)

**Internationalization** (`src/i18n.ts`):
- Translation files in `src/locales/en.json` and `src/locales/es.json`
- Browser language detection with fallback to English
- Uses `react-i18next` (compatible with Preact via preact/compat)

**Shared Components**:
- `src/header.tsx` - Navigation with language switcher
- `src/footer.tsx` - Footer navigation
- `src/util/navLink.tsx` - Custom navigation link component

**Static Assets**: All in `public/` directory
- `public/content/` - Images, icons, CSS files
- `public/images/` - Additional images
- Responsive CSS: style.css, tablet.css, small.css, xsmall.css

### Preact-specific Notes
- Uses `class` instead of `className` for CSS classes (Preact convention)
- Components use Preact hooks from `preact/hooks`
- Lazy loading via `preact/compat`'s Suspense and lazy
