import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';

const contentDir = path.join(process.cwd(), 'content', 'portfolio');

export function CaseGrid({ limit }: { limit?: number }) {
  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith('.mdx'));
  const items = files.map((file) => {
    const raw = fs.readFileSync(path.join(contentDir, file), 'utf8');
    const { data } = matter(raw);
    return { slug: file.replace(/\.(md|mdx)$/, ''), ...data } as any;
  });
  const list = limit ? items.slice(0, limit) : items;
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {list.map((c) => (
        <Link key={c.slug} href={`/portfolio/${c.slug}`} className="block group">
          <div className="relative h-56 bg-offwhite rounded overflow-hidden">
            <Image src={c.image || '/images/case-placeholder.jpg'} alt={c.title} fill className="object-cover group-hover:scale-[1.02] transition" />
          </div>
          <div className="mt-3">
            <div className="font-display text-xl text-charcoal">{c.title}</div>
            <div className="text-sm text-text/70">{c.excerpt}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}
