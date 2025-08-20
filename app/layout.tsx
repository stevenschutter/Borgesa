import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display, Cormorant_Garamond } from 'next/font/google';
import { ReactNode } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Providers } from '@/components/Providers';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
const cormorant = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-cormorant', weight: ['400','700'] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://borgesa.be'),
  title: {
    default: 'Borgesa — Wedding Planning & Day Coordination',
    template: '%s | Borgesa'
  },
  description:
    'Wedding planning en dagcoördinatie in België. Strak draaiboek, vlot verloop, en optioneel: DJ-combi met 25 jaar ervaring.',
  openGraph: {
    title: 'Borgesa — Wedding Planning & Day Coordination',
    description:
      'Wedding planning en dagcoördinatie in België. Strak draaiboek, vlot verloop, en optioneel: DJ-combi met 25 jaar ervaring.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://borgesa.be',
    siteName: 'Borgesa',
    images: ['/og-default.jpg'],
    locale: 'nl_BE',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@borgesa'
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon-16x16.png'
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="nl" className={`${inter.variable} ${playfair.variable} ${cormorant.variable}`}>
      <body>
        <Providers>
          <Navbar />
          <main className="container-responsive">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}