import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { sendMail } from '@/lib/mail';

const schema = z.object({
  date: z.string(),
  location: z.string(),
  guests: z.string().optional(),
  priorities: z.array(z.string()).optional(),
  services: z.array(z.string()).optional(),
  budget: z.string().optional(),
  decision: z.string().optional(),
  message: z.string().optional(),
  honey: z.string().optional(),
});

export async function POST(req: NextRequest) {
  const body = await req.json();
  const parsed = schema.safeParse(body);
  if (!parsed.success || parsed.data.honey) return NextResponse.json({ ok: false }, { status: 400 });
  const d = parsed.data;
  const text = `Intake aanvraag\nDatum: ${d.date}\nLocatie: ${d.location}\nGasten: ${d.guests}\nPrioriteiten: ${d.priorities?.join(', ')}\nServices: ${d.services?.join(', ')}\nBudget: ${d.budget}\nBeslistermijn: ${d.decision}\n\n${d.message || ''}`;
  await sendMail({ subject: 'Borgesa intake', text });
  return NextResponse.json({ ok: true });
}
