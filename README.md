# Docifice Website

Built with [Astro](https://astro.build) — static site, deployed on Vercel.

## Project Structure

```
src/
  components/
    Nav.astro          ← Navigation (shared across all pages)
    Footer.astro       ← Footer (shared across all pages)
  layouts/
    BaseLayout.astro   ← Base HTML wrapper (head, nav, footer)
  pages/
    index.astro        ← Homepage
    about.astro        ← About page (to be built)
    process.astro      ← Process page (to be built)
    contact.astro      ← Contact page (to be built)
    services/
      technical-documentation.astro
      api-documentation.astro
      ... etc
  styles/
    global.css         ← All CSS
public/
  favicon.svg
```

## Setup (one time)

```bash
# 1. Install Node.js from nodejs.org if you don't have it

# 2. Clone your repo
git clone https://github.com/YOUR_USERNAME/docifice-website
cd docifice-website

# 3. Install dependencies
npm install

# 4. Run locally
npm run dev
# Opens at http://localhost:4321
```

## Making changes

- **Nav or Footer**: edit `src/components/Nav.astro` or `Footer.astro` — updates every page
- **Homepage content**: edit `src/pages/index.astro`
- **Styles**: edit `src/styles/global.css`
- **New page**: create `src/pages/pagename.astro`, import BaseLayout at the top

## Adding a new page

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---

<BaseLayout title="Page Title">
  <!-- your content here -->
</BaseLayout>
```

## Deploy to Vercel

```bash
git add .
git commit -m "your message"
git push
```

Vercel auto-detects Astro and deploys. No config needed.
