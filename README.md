# Shiv Trans Inc — Landing Page

Static marketing site for Shiv Trans Inc, a California-based refrigerated trucking company. Built with Next.js and exported as a fully static site for deployment on Vercel or Hostinger.

## Tech stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Static export (`output: "export"`)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run build
```

This generates a static site in the `out/` folder.

Preview locally:

```bash
npx serve out
```

## Deploy

### Git setup

```bash
git init
git add .
git commit -m "Initial Shiv Trans Inc landing page"
git remote add origin <your-repo-url>
git push -u origin main
```

### Vercel

1. Push the repo to GitHub or GitLab.
2. Import the project at [vercel.com](https://vercel.com).
3. Framework preset: **Next.js** (auto-detected).
4. Deploy — Vercel runs `npm run build` and serves the static export.

### Hostinger (static hosting)

1. Run `npm run build` locally (or in CI).
2. Upload the **contents** of the `out/` folder to `public_html` via File Manager or FTP.
3. Do not upload `node_modules` or the full repo — only the built `out/` files.

## Project structure

```
src/
├── app/           # layout, page, globals.css
├── components/    # landing page sections
└── hooks/         # scroll reveal animation
public/
└── images/        # hero, reefer unit, ops center photos
```

## Before go-live

Update footer contact details in `src/components/Footer.tsx` with real phone and email.

## Images

| File | Usage |
|------|-------|
| `public/images/hero-truck.png` | Hero + final CTA background |
| `public/images/reefer-unit.png` | Fleet / trust section |
| `public/images/ops-center.png` | Technology dashboard panel |
