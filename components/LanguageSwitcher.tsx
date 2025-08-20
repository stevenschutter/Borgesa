"use client";
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export function LanguageSwitcher() {
  const pathname = usePathname();
  const isEN = pathname?.startsWith('/en');
  const target = isEN ? pathname?.replace('/en', '/nl') || '/nl' : `/en${pathname || ''}`;
  return (
    <Link href={target} className="text-text/70 hover:text-charcoal border px-2 py-1 rounded">
      {isEN ? 'NL' : 'EN'}
    </Link>
  );
}
