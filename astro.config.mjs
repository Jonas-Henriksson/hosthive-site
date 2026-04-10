import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { rehypeAffiliateLinks } from './src/plugins/rehype-affiliate-links.mjs';

export default defineConfig({
  site: 'https://host-hive.net',
  markdown: {
    rehypePlugins: [rehypeAffiliateLinks],
  },
  integrations: [mdx(), sitemap()],
  output: 'static',
  vite: { ssr: { external: ['svgo'] } },
});
