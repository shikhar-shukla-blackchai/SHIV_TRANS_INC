# Shiv Trans Inc — Landing Page

**Live:** [https://shiv-trans-inc.vercel.app/](https://shiv-trans-inc.vercel.app/)

## About

Static marketing website for **Shiv Trans Inc**, a California-based, owner-operated refrigerated (reefer) trucking company headquartered in Fresno, CA. The site presents cold-chain capabilities, fleet and equipment details, service lanes across the Western U.S., compliance credentials, and contact options for shippers and brokers. Copy is aligned with the company profile and includes local dry van load messaging alongside reefer specialization.

## Tech stack

- **Next.js 16** (App Router)
- **React 19** + **TypeScript**
- **Tailwind CSS v4**
- **Static export** (`output: "export"`) — deployed on [Vercel](https://vercel.com)

## Features

- Responsive landing page: Hero, stats, fleet, specializations, technology, routes, dispatch flow, compliance, and CTA
- Privacy Policy and Terms of Service (`/privacy`, `/terms`)
- Centralized business copy in `src/lib/business.ts`
- Mobile-optimized layout and typography

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

**Production build:**

```bash
npm run build
npx serve out
```

## Repository

[github.com/shikhar-shukla-blackchai/SHIV_TRANS_INC](https://github.com/shikhar-shukla-blackchai/SHIV_TRANS_INC)
