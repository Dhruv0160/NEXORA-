# Nexora AI Solutions — Website

Modern marketing site for Nexora AI Solutions, an applied AI studio based in
Vadodara, India.

* **Framework**: React 19 + Create React App (Craco)
* **Styling**: Tailwind CSS + shadcn/ui components
* **Routing**: React Router v7
* **State**: Frontend-only (mock data in `src/data/mock.js`, contact form
  submissions stored in `localStorage`)
* **No backend required** — fully static SPA

---

## Local development

```bash
cd frontend
yarn install
yarn start
```

The dev server runs on http://localhost:3000.

To produce a production bundle:

```bash
yarn build
```

The output is in `frontend/build/`.

---

## Deploy to Vercel

This repo is pre-configured for Vercel. Two ways to deploy:

### Option A — Vercel Dashboard (recommended)

1. Push this repo to GitHub / GitLab / Bitbucket.
2. Go to https://vercel.com/new and import the repository.
3. **Important**: when Vercel asks for the project root, set
   **Root Directory** to `frontend` (the React app lives inside `frontend/`).
4. Framework Preset will auto-detect as **Create React App**.
5. Leave Build Command / Output Directory as the defaults (already set in
   `vercel.json`):
   * Build Command: `yarn build`
   * Output Directory: `build`
   * Install Command: `yarn install`
6. Click **Deploy**.

Every push to `main` will redeploy automatically.

### Option B — Vercel CLI

```bash
npm i -g vercel
cd frontend
vercel            # follow the prompts (link / create project)
vercel --prod     # promote to production
```

---

## Environment variables

The site is fully static and does not require any environment variables to run.
You can safely ignore the existing `.env` file inside `frontend/` — it only
exists for the local dev container and is **not** read by the production build.

If you later add a backend (for the contact form, CRM, analytics, etc.), set
your variables in **Vercel → Project → Settings → Environment Variables** and
prefix them with `REACT_APP_` so the build can read them.

---

## Custom domain

1. Go to **Vercel → Project → Settings → Domains**.
2. Add your domain (e.g. `nexora-digital.in`).
3. Vercel will show DNS records (A / CNAME) you need to add at your domain
   registrar.
4. SSL is provisioned automatically.

---

## Updating content

All copy, services, use cases, founder bio, offices, socials, email and phone
live in **`frontend/src/data/mock.js`**. Edit fields there and redeploy.

---

## Contact

* Email: help@nexora-digital.in
* Phone: +91 99042 56613
* HQ: FF-26 Sunmilan Complex, Near Waghodia Chowkdi, Waghodia Road, Vadodara - 390019
