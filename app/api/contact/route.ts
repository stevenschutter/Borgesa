import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { sendMail } from '@/lib/mail';

const schema = z.object({ name: z.string(), email: z.string().email(), message: z.string(), honey: z.string().optional() });

export async function POST(req: NextRequest) {
  const body = await req.json();
  const parsed = schema.safeParse(body);
  if (!parsed.success || parsed.data.honey) return NextResponse.json({ ok: false }, { status: 400 });
  await sendMail({ subject: 'Borgesa contact', text: `${parsed.data.name} <${parsed.data.email}>\n\n${parsed.data.message}` });
  return NextResponse.json({ ok: true });
}
