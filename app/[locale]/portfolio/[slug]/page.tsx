import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import { SectionHeader } from '@/components/SectionHeader';
import { getNamespace } from '@/lib/i18n/messages';

const contentDir = path.join(process.cwd(), 'content', 'portfolio');

export async function generateStaticParams() {
  const files = fs.readdirSync(contentDir);
  return files.map((file) => ({ slug: file.replace(/\.(md|mdx)$/, '') }));
}

export default async function CasePage({ params }: { params: { slug: string; locale: 'nl' | 'en' } }) {
  const t = await getNamespace(params.locale, 'portfolio');
  const filePath = path.join(contentDir, `${params.slug}.mdx`);
  if (!fs.existsSync(filePath)) return notFound();
  const raw = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(raw);
  return (
    <article className="prose prose-neutral max-w-none py-12">
      <SectionHeader title={data.title || params.slug} subtitle={data.subtitle || ''} />
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <div className="mt-8 p-4 bg-offwhite rounded">
        <h3 className="font-display text-xl text-charcoal">{t.vendors}</h3>
        <ul className="list-disc pl-6">
          {(data.vendors || []).map((v: string) => (
            <li key={v}>{v}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
