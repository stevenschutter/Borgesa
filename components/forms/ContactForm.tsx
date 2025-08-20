"use client";
import { useState } from 'react';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
  honey: z.string().max(0).optional(),
});

export function ContactForm() {
  const [status, setStatus] = useState<string | null>(null);

  async function onSubmit(formData: FormData) {
    setStatus(null);
    const values = Object.fromEntries(formData) as any;
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      setStatus('Invalid input');
      return;
    }
    const res = await fetch('/api/contact', { method: 'POST', body: JSON.stringify(parsed.data) });
    setStatus(res.ok ? 'OK' : 'Error');
  }

  return (
    <form action={onSubmit} className="space-y-3">
      <input type="text" name="name" placeholder="Naam" className="w-full border rounded p-2" required aria-label="Naam" />
      <input type="email" name="email" placeholder="E-mail" className="w-full border rounded p-2" required aria-label="E-mail" />
      <textarea name="message" placeholder="Bericht" className="w-full border rounded p-2" rows={4} required aria-label="Bericht" />
      <input type="text" name="honey" className="hidden" tabIndex={-1} autoComplete="off" />
      <button type="submit" className="bg-gold text-white px-4 py-2 rounded">Verstuur</button>
      {status && <p className="text-sm text-text/70">{status}</p>}
    </form>
  );
}
