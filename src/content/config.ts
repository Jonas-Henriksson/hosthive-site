import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    updated: z.date().optional(),
    category: z.enum(['wordpress', 'shared', 'vps', 'cloud', 'dedicated', 'ecommerce', 'managed', 'budget']),
    author: z.string().optional(),
    keywords: z.array(z.string()),
    featured: z.boolean().default(false),
    affiliateLinks: z.array(z.object({ host: z.string(), url: z.string() })).optional(),
  }),
});

export const collections = { articles };
