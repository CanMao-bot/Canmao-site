import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const SITE_URL = 'https://canmao-bot.github.io/Canmao-site/';

export default defineConfig({
  site: SITE_URL,
  base: '/Canmao-site/',
  integrations: [sitemap()],
  build: {
    format: 'directory',
  },
});