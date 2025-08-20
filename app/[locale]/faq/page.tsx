import { getNamespace } from '@/lib/i18n/messages';
import { SectionHeader } from '@/components/SectionHeader';
import { FAQSchema } from '@/components/StructuredData';

export default async function FAQPage({ params }: { params: { locale: 'nl' | 'en' } }) {
  const t = await getNamespace(params.locale, 'faq');
  const items = Array.from({ length: 10 }).map((_, i) => ({ q: t[String(i+1)].q, a: t[String(i+1)].a }));
  return (
    <div className="space-y-8 py-12">
      <FAQSchema items={items} />
      <SectionHeader title={t.title} />
      <div className="divide-y">
        {items.map((it, idx) => (
          <details key={idx} className="py-4">
            <summary className="font-medium cursor-pointer">{it.q}</summary>
            <p className="mt-2 text-text/80">{it.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
