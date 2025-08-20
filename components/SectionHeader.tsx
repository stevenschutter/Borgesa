import Link from 'next/link';

export function SectionHeader({
  title,
  subtitle,
  cta,
}: {
  title: string;
  subtitle?: string;
  cta?: { href: string; label: string };
}) {
  return (
    <div className="mb-8 flex items-end justify-between gap-4">
      <div>
        <h2 className="font-display text-3xl text-charcoal">{title}</h2>
        {subtitle && <p className="text-text/70 mt-1 max-w-2xl">{subtitle}</p>}
      </div>
      {cta && (
        <Link href={cta.href} className="text-charcoal hover:underline">
          {cta.label}
        </Link>
      )}
    </div>
  );
}
