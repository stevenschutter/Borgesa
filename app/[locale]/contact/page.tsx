import { ContactForm } from '@/components/forms/ContactForm';
import { IntakeForm } from '@/components/forms/IntakeForm';
import { SectionHeader } from '@/components/SectionHeader';
import { getNamespace } from '@/lib/i18n/messages';

export default async function ContactPage({ params }: { params: { locale: 'nl' | 'en' } }) {
  const t = await getNamespace(params.locale, 'contact');
  return (
    <div className="space-y-12 py-12" id="contact">
      <SectionHeader title={t.title} subtitle={t.subtitle} />
      <div className="grid gap-8 md:grid-cols-2">
        <div className="border rounded p-6 bg-white shadow-sm">
          <h3 className="font-display text-2xl text-charcoal mb-4">{t.short.title}</h3>
          <ContactForm />
        </div>
        <div className="border rounded p-6 bg-white shadow-sm">
          <h3 className="font-display text-2xl text-charcoal mb-4">{t.intake.title}</h3>
          <IntakeForm />
        </div>
      </div>
      <div className="text-sm text-text/80">
        <p>{t.info}</p>
      </div>
    </div>
  );
}
