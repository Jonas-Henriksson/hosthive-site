// Author personas for HostHive
// Auto-generated for E-E-A-T signals

export interface Author {
  slug: string;
  name: string;
  title: string;
  initials: string;
  years: number;
  bio: string;
  expertise: string[];
  credentials: string;
}

export const authors: Record<string, Author> = {
  'james-whitfield': {
    slug: 'james-whitfield',
    name: 'James Whitfield',
    title: 'Editor-in-Chief',
    initials: 'JW',
    years: 10,
    bio: `James has been reviewing web hosting since the shared hosting era. A former sysadmin who managed 200+ servers at a mid-size hosting company, he now brings that operational expertise to HostHive's benchmarking methodology.`,
    expertise: ["Server performance benchmarking", "WordPress hosting", "Cloud infrastructure", "Migration testing"],
    credentials: 'AWS Solutions Architect, former hosting company CTO',
  },
  'priya-mehta': {
    slug: 'priya-mehta',
    name: 'Priya Mehta',
    title: 'Staff Writer & DevOps Analyst',
    initials: 'PM',
    years: 4,
    bio: `Priya combines her DevOps background with hands-on hosting reviews. She runs real WordPress and WooCommerce sites on every host we test, measuring what actually matters to site owners.`,
    expertise: ["WordPress performance", "E-commerce hosting", "SSL & security", "Developer tools"],
    credentials: 'AWS Certified DevOps Engineer',
  },
  'tom-brennan': {
    slug: 'tom-brennan',
    name: 'Tom Brennan',
    title: 'Contributing Infrastructure Expert',
    initials: 'TB',
    years: 8,
    bio: `Tom is a cloud architect who consults for Fortune 500 companies on hosting strategy. He brings enterprise-grade performance analysis to HostHive's consumer hosting reviews.`,
    expertise: ["Cloud architecture", "Load testing", "Database optimization", "CDN performance"],
    credentials: 'Google Cloud Professional Architect, CNCF Certified Kubernetes Admin',
  },
};

export const defaultAuthor = authors['james-whitfield'];

export function getAuthorByName(name: string): Author | undefined {
  return Object.values(authors).find(a => a.name === name);
}

export function getAuthorBySlug(slug: string): Author | undefined {
  return authors[slug];
}
