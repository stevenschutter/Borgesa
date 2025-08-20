import Link from 'next/link';
import { SectionHeader } from '@/components/SectionHeader';

const requiredEnv = [
  'NEXT_PUBLIC_SITE_URL',
  // Optional for preview: 'NEXT_PUBLIC_GA4_ID',
  // Mail provider is optional for previews
];

export default function SetupPage() {
  const envStatus = requiredEnv.map((key) => ({ key, set: Boolean(process.env[key]) }));

  return (
    <div className="space-y-10 py-12">
      <SectionHeader title="Preview & Deployment Setup" subtitle="Use Vercel preview URLs or run locally. No custom domain required." />

      <section className="space-y-4">
        <h3 className="font-display text-2xl text-charcoal">Recommended: Vercel Preview</h3>
        <ol className="list-decimal pl-5 space-y-2 text-text/80">
          <li>Go to <Link className="underline" href="https://vercel.com/new">Vercel New Project</Link> and import your GitHub repo <strong>Borgesa</strong>.</li>
          <li>Framework auto-detects Next.js. Keep defaults (Build: <code>next build</code>, Output: Next.js).</li>
          <li>Environment variables: add the ones you need now or later. For previews you can leave mail/GA4 empty.</li>
          <li>Click Deploy. You get a unique preview URL per branch/commit, e.g. <code>https://borgesa-git-main-user.vercel.app</code>.</li>
        </ol>
        <div className="rounded border bg-offwhite p-4 text-sm text-text/80">
{`Minimal env for previews:
NEXT_PUBLIC_SITE_URL=https://borgesa-git-main-yourname.vercel.app
`}
        </div>
      </section>

      <section className="space-y-3">
        <h3 className="font-display text-2xl text-charcoal">Local preview</h3>
        <div className="rounded border p-4 bg-white text-sm">
{`pnpm i
cp .env.example .env  # set NEXT_PUBLIC_SITE_URL=http://localhost:3000
pnpm dev
# open http://localhost:3000/nl  (English at /en)
`}
        </div>
      </section>

      <section className="space-y-3">
        <h3 className="font-display text-2xl text-charcoal">GitHub Codespaces (optional)</h3>
        <ol className="list-decimal pl-5 space-y-2 text-text/80">
          <li>Open the repo in Codespaces.</li>
          <li>Run <code>pnpm dev</code>. Use the forwarded port URL to preview.</li>
        </ol>
      </section>

      <section className="space-y-3">
        <h3 className="font-display text-2xl text-charcoal">Preflight</h3>
        <ul className="text-sm text-text/80">
          {envStatus.map((e) => (
            <li key={e.key}>
              <span className={e.set ? 'text-green-700' : 'text-red-700'}>
                {e.set ? 'OK' : 'Missing'}
              </span>{' '}
              {e.key}
            </li>
          ))}
        </ul>
        <p className="text-xs text-text/60">Mail provider env vars are optional for previews; forms will still submit but mail sending requires configuration.</p>
      </section>
    </div>
  );
}
