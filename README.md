# Basic IT Website

Professional marketing site for [Basic IT](https://basicit.com.bd) — websites, e-commerce, education platforms, software systems, and digital business setup.

## Stack

- React 19 + Vite 8
- Content in `src/data/siteData.js`
- Section components in `src/sections/`

## Commands

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
npm run preview  # preview production build
```

## Deploy

1. Run `npm run build`
2. Upload `dist/` to your host (Vercel, Netlify, Cloudflare Pages, or cPanel)
3. Point `basicit.com.bd` DNS to the host
4. Ensure HTTPS is enabled

## Customize

- **Copy & contact:** `src/data/siteData.js`
- **Logo:** replace `public/basic-it-logo.svg` (or add `basic-it-logo.jpeg` and update paths in `Navbar.jsx` / `Footer.jsx`)
- **Legal pages:** `public/privacy-policy.html`, `public/terms-and-conditions.html`

## Homepage sections

Hero → Trust stats → Services → Work → Why Us → CTA → Contact

Additional section components (About, Journey, Products, etc.) remain in the repo for future pages.
