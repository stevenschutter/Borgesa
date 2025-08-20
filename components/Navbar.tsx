"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';

const nav = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'Over' },
  { href: '/faq', label: 'FAQ' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b">
      <div className="container-responsive flex items-center justify-between h-16">
        <Link href="/" className="font-display text-xl">Borgesa</Link>
        <nav className="hidden md:flex gap-6 items-center">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className={pathname === item.href ? 'text-charcoal font-medium' : 'text-text/80'}>
              {item.label}
            </Link>
          ))}
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  );
}
