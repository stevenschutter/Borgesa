"use client";
import { ReactNode, useEffect } from 'react';
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics';
import { CookieBanner } from '@/components/privacy/CookieBanner';

export function Providers({ children }: { children: ReactNode }) {
  useEffect(() => {
    document.documentElement.classList.add('scroll-smooth');
  }, []);
  return (
    <>
      <GoogleAnalytics />
      {children}
      <CookieBanner />
    </>
  );
}
