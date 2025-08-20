import { getNamespace } from '@/lib/i18n/messages';
import { SectionHeader } from '@/components/SectionHeader';

export default async function ServicesPage({ params }: { params: { locale: 'nl' | 'en' } }) {
  const t = await getNamespace(params.locale, 'services');
  return (
    <div className="space-y-16 py-12">
      <SectionHeader title={t.title} subtitle={t.intro} />
      <div className="grid gap-8 md:grid-cols-3">
        {(['day', 'partial', 'full'] as const).map((key) => (
          <div key={key} className="border rounded p-6 bg-white shadow-sm">
            <h3 className="font-display text-2xl text-charcoal">{t[key].title}</h3>
            <p className="text-text/80 mt-2">{t[key].desc}</p>
          </div>
        ))}
      </div>
      <div className="border rounded p-6 bg-offwhite">
        <h3 className="font-display text-2xl text-charcoal">{t.pricing.title}</h3>
        <p className="text-text/80 mt-2">{t.pricing.desc}</p>
      </div>
      <div className="border rounded p-6">
        <h3 className="font-display text-2xl text-charcoal">{t.dj.title}</h3>
        <p className="text-text/80 mt-2">{t.dj.desc}</p>
      </div>
    </div>
  );
}
