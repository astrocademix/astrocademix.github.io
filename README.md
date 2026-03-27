# AstroCademiX site

This is an Astro site, not a Jekyll site.

## Important GitHub Pages setting

In your GitHub repository:

Settings -> Pages -> Build and deployment -> Source

Set **Source** to **GitHub Actions**.

Do **not** use **Deploy from a branch**, otherwise GitHub will run Jekyll against the source tree and fail on `.astro` files.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy

Push to `main`. The workflow in `.github/workflows` builds Astro and deploys the `dist/` folder to GitHub Pages.
