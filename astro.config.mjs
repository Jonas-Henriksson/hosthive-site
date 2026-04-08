import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://host-hive.net',
  integrations: [mdx(), sitemap()],
  output: 'static',
  vite: { ssr: { external: ['svgo'] } },
});
