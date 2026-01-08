# Goodbytes - Personal Website

A personal portfolio and CV website for Alvaro Torres, a software architect. Built with modern web technologies for a fast, responsive experience.

## Tech Stack

- **Preact** with preact-iso for routing (lightweight alternative to React)
- **Vite** for fast development and building
- **TypeScript** for type safety
- **i18next** for internationalization (English/Spanish support)

## Development

### Prerequisites

- Node.js (version 20 or later)
- pnpm (recommended package manager)

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/alvarotor/goodbytes.git
   cd goodbytes
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Start development server:
   ```bash
   pnpm dev
   ```

### Build Commands

- `pnpm dev`: Start development server (Vite)
- `pnpm build`: TypeScript type-check and production build
- `pnpm preview`: Preview production build locally
- `pnpm lint`: Run ESLint on src directory
- `pnpm lint:fix`: Run ESLint with --fix on src directory
- `pnpm typecheck`: Run TypeScript type checking

## Pages

- `/`: Home page - Introduction and overview
- `/profile`: Profile page - Detailed professional profile
- `/contact`: Contact page - Contact information and form
- `/cv`: CV page - Curriculum vitae

## Architecture

- **Entry Point**: `index.html` loads `src/main.tsx`
- **Routing**: Uses preact-iso's `LocationProvider` and `Router`
- **Internationalization**: Browser language detection with fallback to English
- **Static Assets**: Stored in `public/` directory (images, CSS, etc.)

## Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions on pushes to the `master` branch. The workflow runs linting, type checking, builds the project, and deploys the `dist` directory.

## License

This project is private and for personal use.
