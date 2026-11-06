# Nathan Ridacker — Portfolio

Portfolio of Nathan Ridacker, freelance developer building custom business applications (web & mobile) in Luxembourg and France.

**Live:** https://nathan-ridacker-portfolio.vercel.app

## Stack

- React 19 + TypeScript, built with Vite
- framer-motion (loaded through `LazyMotion` + `m` components)
- i18next / react-i18next — English and French
- Self-hosted fonts via Fontsource (Playfair Display, DM Mono, Inter)
- lucide-react icons
- Deployed on Vercel

## Features

- Responsive layout with a mobile burger menu
- Dark / light theme: follows the system preference, remembers the visitor's choice, no flash on load
- Language detection (browser language, fallback to English), remembered on toggle, `<html lang>` kept in sync
- Respects `prefers-reduced-motion`
- Legal notice page (`/mentions-legales`) and karate club case study (`/projets/karate`)
- Custom 404 page (static `404.html` generated at build, served by Vercel with a real 404 status)
- Open Graph / Twitter Card meta tags
- Strict Content Security Policy (no third-party requests)

## Getting started

```bash
npm install --registry=https://registry.npmjs.org/
npm run dev       # dev server
npm run build     # type-check + production build
npm run preview   # serve the production build
npm run lint      # oxlint
```

Always install from the public npm registry so that `package-lock.json` stays installable on Vercel.

## Project structure

```
src/
├── App.tsx                 # Page switch (home / legal notice / case study) + footer
├── components/
│   ├── layout/Navbar.tsx
│   ├── pages/              # LegalNotice, KarateCase
│   ├── sections/           # Hero, About, Services, Projects, Testimonials, Skills, Process, Contact
│   └── ui/Container.tsx
├── hooks/useTheme.tsx
├── i18n/                   # i18next setup + locales/{en,fr}.json
└── index.css               # Theme variables, reset, responsive and hover rules
public/
├── theme-init.js           # Sets the theme before first paint (external because the CSP forbids inline scripts)
├── favicon.svg
└── og-image.png
vercel.json                 # Security headers (CSP…) and rewrites for /mentions-legales and /projets/karate
```

## Content notes

- **Texts** live in `src/i18n/locales/{en,fr}.json`; both files must keep the same keys.
- **Styling** uses inline styles plus a few classes in `index.css`. Responsive rules and hover states must be CSS classes: a property set inline cannot be overridden by `:hover` or media queries.
- **New pages**: add the component to `PAGES` in `App.tsx` and a matching rewrite in `vercel.json`.
- **Karate screenshots**: drop images in `src/assets/projects/karate/` (`01-….png`, `02-….png`…); they are picked up automatically, sorted by filename.
- **Testimonials**: entries flagged `"placeholder": true` are only shown in development. Replace them with real quotes and remove the flag to publish them.

## License

© Nathan Ridacker. All rights reserved — the code is public for reference only.
