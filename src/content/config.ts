import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    author: z.string().optional().default('HostHive Editorial Team'),
    image: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional().default([]),
    keywords: z.array(z.string()).optional().default([]),
    featured: z.boolean().optional().default(false),
    draft: z.boolean().optional().default(false),
    canonicalUrl: z.string().optional(),
    ogImage: z.string().optional(),
    tableOfContents: z.boolean().optional().default(true),
    affiliateDisclosure: z.boolean().optional().default(true),
    amazon: z.array(z.object({ product: z.string(), asin: z.string(), link: z.string() })).optional(),
    affiliateLinks: z.array(z.object({
      host: z.string(),
      url: z.string(),
    })).optional(),
    schemaType: z.enum(['BlogPosting', 'NewsArticle', 'Article', 'HowTo', 'FAQPage']).optional().default('BlogPosting'),
    relatedArticles: z.array(z.string()).optional(),
    // Arena fields
    score: z.number().min(0).max(10).optional(),
    badge: z.enum(['editors-pick', 'best-value', 'top-rated', 'tested']).optional(),
    verdict: z.string().optional(),
    winner: z.string().optional(),
  }),
});

export const collections = { articles };
