export const siteConfig = {
  siteName: 'HostHive',
  tagline: 'The Hosting Benchmark — Tested. Scored. Ranked.',
  domain: process.env.SITE_URL || 'https://host-hive.net',
  description: 'In-depth web hosting reviews, comparisons, and guides. Find the best hosting for WordPress, ecommerce, agencies, and more.',
  niche: 'web-hosting',
  category: 'Web Hosting & Infrastructure',
  defaultAuthor: {
    name: 'HostHive Editorial Team',
    bio: 'We test, benchmark, and review hosting providers so you don\'t have to.',
  },
  analytics: {
    enabled: true,
    type: 'plausible',
    plausibleDomain: process.env.PLAUSIBLE_DOMAIN || 'host-hive.net',
    googleId: process.env.GOOGLE_ANALYTICS_ID || '',
  },
  affiliatePrograms: {
    bluehost: { name: 'Bluehost', affiliateUrl: 'https://host-hive.net/go/bluehost', commission: '65+ per sale' },
    siteground: { name: 'SiteGround', affiliateUrl: 'https://host-hive.net/go/siteground', commission: '50+ per sale' },
    hostinger: { name: 'Hostinger', affiliateUrl: 'https://host-hive.net/go/hostinger', commission: '60+ per sale' },
    cloudways: { name: 'Cloudways', affiliateUrl: 'https://host-hive.net/go/cloudways', commission: 'Up to 125 per sale' },
    wpengine: { name: 'WP Engine', affiliateUrl: 'https://host-hive.net/go/wpengine', commission: '200+ per sale' },
    kinsta: { name: 'Kinsta', affiliateUrl: 'https://host-hive.net/go/kinsta', commission: 'Up to 500 per sale' },
  },
  social: {
    twitter: 'https://twitter.com/hosthive',
    facebook: 'https://facebook.com/hosthive',
    linkedin: 'https://linkedin.com/company/hosthive',
    instagram: '',
  },
  content: { postsPerPage: 12, featuredPostsCount: 3, relatedPostsCount: 3 },
  seo: { includeJsonLd: true, sitemap: true, robotsTxt: true },
  email: 'info@host-hive.net',
  og: { image: 'https://host-hive.net/og-image.png', type: 'website' },
};

export default siteConfig;
