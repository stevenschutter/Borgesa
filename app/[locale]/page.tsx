import Image from 'next/image';
import Link from 'next/link';
import { getNamespace } from '@/lib/i18n/messages';
import { SectionHeader } from '@/components/SectionHeader';
import { USPList } from '@/components/USPList';
import { CaseGrid } from '@/components/CaseGrid';
import { Testimonials } from '@/components/Testimonials';

export const dynamic = 'force-static';

export default async function Home({ params }: { params: { locale: 'nl' | 'en' } }) {
  const home = await getNamespace(params.locale, 'home');
  return (
    <div className="space-y-24">
      <section className="pt-16 lg:pt-24">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display text-charcoal">
              {home.hero.title}
            </h1>
            <p className="text-lg text-text/80">{home.hero.subtitle}</p>
            <div className="flex gap-3">
              <Link href="#contact" className="bg-gold text-white px-5 py-3 rounded hover:opacity-90 transition">{home.hero.ctaPrimary}</Link>
              <Link href="/services" className="border border-charcoal px-5 py-3 rounded hover:bg-offwhite transition">{home.hero.ctaSecondary}</Link>
            </div>
          </div>
          <div className="relative h-72 sm:h-96">
            <Image src="/images/hero-placeholder.jpg" alt="Borgesa" fill className="object-cover rounded" priority />
          </div>
        </div>
      </section>

      <section>
        <USPList />
      </section>

      <section>
        <SectionHeader title={home.portfolio.title} subtitle={home.portfolio.subtitle} cta={{ href: '/portfolio', label: home.portfolio.cta }} />
        <CaseGrid limit={3} />
      </section>

      <section>
        <SectionHeader title={home.testimonials.title} />
        <Testimonials />
      </section>
    </div>
  );
}
