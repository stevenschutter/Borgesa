import { getNamespace } from '@/lib/i18n/messages';
import { SectionHeader } from '@/components/SectionHeader';
import { Timeline } from '@/components/Timeline';

export default async function AboutPage({ params }: { params: { locale: 'nl' | 'en' } }) {
  const t = await getNamespace(params.locale, 'about');
  return (
    <div className="space-y-12 py-12">
      <SectionHeader title={t.title} subtitle={t.subtitle} />
      <div className="grid gap-8 md:grid-cols-2">
        <p className="text-text/80">{t.bio}</p>
        <div>
          <h3 className="font-display text-2xl text-charcoal mb-4">{t.processTitle}</h3>
          <Timeline steps={[1,2,3,4,5].map((i)=>({ title: t.process[String(i)].title, desc: t.process[String(i)].desc }))} />
        </div>
      </div>
    </div>
  );
}
