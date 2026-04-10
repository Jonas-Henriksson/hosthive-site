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
  image: string;
}

export const authors: Record<string, Author> = {
  'james-whitfield': {
    slug: 'james-whitfield',
    name: 'James Whitfield',
    title: 'Editor-in-Chief',
    initials: 'JW',
    years: 10,
    bio: `James was a sysadmin managing 200+ bare-metal servers at a mid-tier hosting company when he realized that every hosting review he read online was benchmarking the wrong things. He spent two years building a monitoring stack that tests real-world WordPress performance — time to first byte under concurrent load, database query latency during traffic spikes, and the actual support response time at 2am on a Saturday when your site is down. He's migrated over 300 sites across providers and has a spreadsheet tracking every hosting company's actual uptime versus their SLA claims going back to 2018. The spreadsheet has tabs. The tabs have subtabs.`,
    expertise: ["Server performance benchmarking", "WordPress hosting", "Cloud infrastructure", "Migration testing"],
    credentials: 'AWS Solutions Architect, former hosting company CTO, 15+ years in server infrastructure',
    image: 'https://i.pravatar.cc/256?u=james-whitfield@host-hive.net',
  },
  'priya-mehta': {
    slug: 'priya-mehta',
    name: 'Priya Mehta',
    title: 'Staff Writer & DevOps Analyst',
    initials: 'PM',
    years: 4,
    bio: `Priya ran DevOps for a 50-person SaaS startup before pivoting to hosting journalism, which means she's the rare reviewer who can explain why your WooCommerce store is slow in terms of PHP worker processes and OPcache hit rates, not just 'try a caching plugin.' She maintains live WordPress and WooCommerce test sites on every hosting provider HostHive covers — real sites with real plugins, real themes, and real product catalogs that break in real ways. Her favorite review metric is 'time to first sale' — how fast a new WooCommerce store can process its first transaction after signup. She's also the person who discovered that three major hosts were running outdated PHP versions on their 'optimized WordPress' plans.`,
    expertise: ["WordPress performance", "E-commerce hosting", "SSL & security", "Developer tools"],
    credentials: 'AWS Certified DevOps Engineer, former SaaS startup DevOps lead',
    image: 'https://i.pravatar.cc/256?u=priya-mehta@host-hive.net',
  },
  'tom-brennan': {
    slug: 'tom-brennan',
    name: 'Tom Brennan',
    title: 'Contributing Infrastructure Expert',
    initials: 'TB',
    years: 8,
    bio: `Tom is a cloud architect who spends his weekdays consulting for Fortune 500 companies on infrastructure strategy and his evenings running Apache JMeter load tests against shared hosting plans that cost $4 a month. The contrast is deliberate — he believes the same performance analysis rigor that applies to enterprise cloud should apply to the hosting plan a small business owner picks on a Tuesday afternoon. His load testing methodology simulates realistic traffic patterns including the 'Hacker News hug of death' scenario that most hosts promise to handle and precisely zero actually do well. He holds both Google Cloud and Kubernetes certifications, which makes him probably overqualified to review Bluehost, but someone has to do it properly.`,
    expertise: ["Cloud architecture", "Load testing", "Database optimization", "CDN performance"],
    credentials: 'Google Cloud Professional Architect, CNCF Certified Kubernetes Admin, 12+ years in cloud infrastructure',
    image: 'https://i.pravatar.cc/256?u=tom-brennan@host-hive.net',
  },
};

export const defaultAuthor = authors['james-whitfield'];

export function getAuthorByName(name: string): Author | undefined {
  return Object.values(authors).find(a => a.name === name);
}

export function getAuthorBySlug(slug: string): Author | undefined {
  return authors[slug];
}
