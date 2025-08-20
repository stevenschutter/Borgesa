import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { markdownToHtml } from '@/lib/markdown';
import { notFound } from 'next/navigation';

const blogDir = path.join(process.cwd(), 'content', 'blog');

export async function generateStaticParams() {
  return fs
    .readdirSync(blogDir)
    .filter((f) => f.endsWith('.mdx'))
    .map((file) => ({ slug: file.replace(/\.(md|mdx)$/, '') }));
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const filePath = path.join(blogDir, `${params.slug}.mdx`);
  if (!fs.existsSync(filePath)) return notFound();
  const raw = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(raw);
  const html = await markdownToHtml(content);
  return (
    <article className="prose prose-neutral max-w-none py-12">
      <h1 className="font-display text-4xl text-charcoal mb-4">{data.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  );
}
