# AstroCademiX starter site

This is a cleaned, single-project starter for AstroCademiX.

It is designed around the choices we discussed:

1. A Clay-like entry page at `/`
2. A club-oriented home page at `/home`
3. A lightweight `Thinking` area for short writing and notes
4. A shared cosmic background across the whole site
5. No bot, no backend, and no unrelated portfolio features

## What is inside

- `src/pages/index.astro`
  - entry page
- `src/pages/home.astro`
  - second-layer club page with About, Members, Thinking
- `src/pages/thinking/`
  - starter note pages
- `src/components/StarfieldBackground.astro`
  - Three.js starfield inspired by the rotating starfield feel you liked
- `src/components/EntryHero.astro`
  - Clay-like hero section with a CSS black-hole style visual
- `src/data/members.ts`
  - member cards
- `src/data/thinking.ts`
  - thinking cards and metadata

## Why it is organized this way

Instead of keeping two separate projects, this starter keeps everything in one Astro site.
That makes it easier to keep the background, color language, and atmosphere consistent.
It also keeps GitHub Pages deployment much simpler.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy to GitHub Pages

This package already includes a GitHub Actions workflow in:

`.github/workflows/deploy.yml`

Recommended setup:

1. Create or use the repository `astrocademix.github.io`
2. Upload the contents of this package
3. Push to the `main` branch
4. In GitHub repo settings, enable Pages and use GitHub Actions as the source

## First things to customize

### 1. Site identity

Edit:

- `src/data/site.ts`

### 2. Members

Edit:

- `src/data/members.ts`

### 3. Thinking cards

Edit:

- `src/data/thinking.ts`
- `src/pages/thinking/*.astro`

### 4. Entry text

Edit:

- `src/components/EntryHero.astro`

## Notes

This is a cleaned starter package, not a full mirror of either upstream project.
Only the parts relevant to your requested direction were retained in spirit:

- Clay-like landing feel
- cosmic background language
- Astro-based club content structure

So you can treat this as a practical foundation rather than a raw fork.
