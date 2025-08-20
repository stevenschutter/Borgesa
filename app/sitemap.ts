import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://borgesa.be';
  const routes = ['', '/services', '/portfolio', '/about', '/faq', '/blog', '/contact', '/privacy'];
  return routes.map((route) => ({ url: `${base}${route}`, changefreq: 'weekly', priority: 0.7 }));
}
