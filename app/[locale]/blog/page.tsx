import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import Link from 'next/link';
import { SectionHeader } from '@/components/SectionHeader';
import { getNamespace } from '@/lib/i18n/messages';

const blogDir = path.join(process.cwd(), 'content', 'blog');

export default async function BlogPage({ params }: { params: { locale: 'nl' | 'en' } }) {
  const t = await getNamespace(params.locale, 'blog');
  const posts = fs
    .readdirSync(blogDir)
    .filter((f) => f.endsWith('.mdx'))
    .map((file) => {
      const raw = fs.readFileSync(path.join(blogDir, file), 'utf8');
      const { data } = matter(raw);
      return { slug: file.replace(/\.(md|mdx)$/, ''), ...data } as any;
    });
  return (
    <div className="space-y-8 py-12">
      <SectionHeader title={t.title} />
      <div className="grid gap-6 md:grid-cols-3">
        {posts.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="block border rounded p-4 hover:bg-offwhite">
            <h3 className="font-display text-xl text-charcoal">{p.title}</h3>
            <p className="text-sm text-text/70">{p.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
