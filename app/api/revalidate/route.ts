import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get('secret');
  if (secret !== process.env.REVALIDATE_SECRET) return NextResponse.json({ ok: false }, { status: 401 });
  try {
    await Promise.all(['/portfolio', '/blog', '/'].map((p) => fetch(`${process.env.NEXT_PUBLIC_SITE_URL}${p}`, { cache: 'no-store' })));
    return NextResponse.json({ revalidated: true });
  } catch (e) {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
