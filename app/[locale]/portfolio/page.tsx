import { SectionHeader } from '@/components/SectionHeader';
import { CaseGrid } from '@/components/CaseGrid';
import { getNamespace } from '@/lib/i18n/messages';

export default async function PortfolioPage({ params }: { params: { locale: 'nl' | 'en' } }) {
  const t = await getNamespace(params.locale, 'portfolio');
  return (
    <div className="space-y-8 py-12">
      <SectionHeader title={t.title} subtitle={t.subtitle} />
      <CaseGrid />
    </div>
  );
}
