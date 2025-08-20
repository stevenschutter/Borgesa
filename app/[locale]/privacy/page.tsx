import { SectionHeader } from '@/components/SectionHeader';
import { getNamespace } from '@/lib/i18n/messages';

export default async function PrivacyPage({ params }: { params: { locale: 'nl' | 'en' } }) {
  const t = await getNamespace(params.locale, 'privacy');
  return (
    <div className="space-y-6 py-12">
      <SectionHeader title={t.title} />
      <div className="prose prose-neutral max-w-none">
        <p>{t.intro}</p>
        <h3>{t.data.title}</h3>
        <p>{t.data.desc}</p>
        <h3>{t.cookies.title}</h3>
        <p>{t.cookies.desc}</p>
        <h3>{t.rights.title}</h3>
        <p>{t.rights.desc}</p>
      </div>
    </div>
  );
}
