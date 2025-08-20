export function LocalBusinessSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Borgesa',
    image: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://borgesa.be'}/og-default.jpg`,
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://borgesa.be',
    areaServed: 'Belgium',
    sameAs: [] as string[],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function BreadcrumbsSchema({ items }: { items: { name: string; url: string }[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function FAQSchema({ items }: { items: { q: string; a: string }[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((it) => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: { '@type': 'Answer', text: it.a },
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
