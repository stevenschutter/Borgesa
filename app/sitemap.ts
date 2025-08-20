import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://borgesa.be';
  const locales = ['nl', 'en'];
  const routes = ['', '/services', '/portfolio', '/about', '/faq', '/blog', '/contact', '/privacy', '/setup'];
  return locales
    .flatMap((loc) => routes.map((route) => ({ url: `${base}/${loc}${route}`, changefreq: 'weekly', priority: 0.7 })))
    .concat([{ url: base, changefreq: 'weekly', priority: 0.8 }]);
}
