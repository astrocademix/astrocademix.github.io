import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://astrocademix.github.io',
  base: '/home',
  trailingSlash: 'always',
  integrations: [mdx(), sitemap()],
});
