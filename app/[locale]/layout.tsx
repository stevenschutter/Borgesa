import { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { routing } from '@/lib/i18n/routing';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({ children, params }: { children: ReactNode; params: { locale: string } }) {
  const locale = params.locale as (typeof routing.locales)[number];
  if (!routing.locales.includes(locale)) {
    notFound();
  }
  return children;
}
