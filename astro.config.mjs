// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://errorz.xyz',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'poimandres',
      wrap: true,
    },
  },
});
