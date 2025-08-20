"use client";
import { useState } from 'react';
import { z } from 'zod';

const schema = z.object({
  date: z.string().min(4),
  location: z.string().min(2),
  guests: z.string(),
  priorities: z.array(z.string()).optional(),
  services: z.array(z.string()).optional(),
  budget: z.string().optional(),
  decision: z.string().optional(),
  message: z.string().optional(),
  honey: z.string().max(0).optional(),
});

export function IntakeForm() {
  const [status, setStatus] = useState<string | null>(null);

  async function onSubmit(formData: FormData) {
    setStatus(null);
    const values = Object.fromEntries(formData) as any;
    values.priorities = formData.getAll('priorities');
    values.services = formData.getAll('services');
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      setStatus('Invalid input');
      return;
    }
    const res = await fetch('/api/intake', { method: 'POST', body: JSON.stringify(parsed.data) });
    setStatus(res.ok ? 'OK' : 'Error');
  }

  return (
    <form action={onSubmit} className="space-y-3">
      <div className="grid md:grid-cols-2 gap-3">
        <input type="date" name="date" className="w-full border rounded p-2" required aria-label="Datum" />
        <input type="text" name="location" placeholder="Locatie" className="w-full border rounded p-2" required aria-label="Locatie" />
      </div>
      <input type="number" name="guests" placeholder="Aantal gasten" className="w-full border rounded p-2" aria-label="Aantal gasten" />
      <fieldset>
        <legend className="text-sm mb-1">Prioriteiten</legend>
        <label className="mr-3"><input type="checkbox" name="priorities" value="organisatie" /> Organisatie</label>
        <label className="mr-3"><input type="checkbox" name="priorities" value="dagcoördinatie" /> Dagcoördinatie</label>
        <label className="mr-3"><input type="checkbox" name="priorities" value="dansfeest" /> Dansfeest</label>
      </fieldset>
      <fieldset>
        <legend className="text-sm mb-1">Services</legend>
        <label className="mr-3"><input type="checkbox" name="services" value="day" /> Dagcoördinatie</label>
        <label className="mr-3"><input type="checkbox" name="services" value="partial" /> Deelorganisatie</label>
        <label className="mr-3"><input type="checkbox" name="services" value="full" /> Full service</label>
        <label className="mr-3"><input type="checkbox" name="services" value="dj" /> DJ-combi</label>
      </fieldset>
      <select name="budget" className="w-full border rounded p-2" aria-label="Budgetrange">
        <option value="">Budgetrange</option>
        <option>tot €15k</option>
        <option>€15–30k</option>
        <option>€30–50k</option>
        <option>€50k+</option>
      </select>
      <select name="decision" className="w-full border rounded p-2" aria-label="Beslistermijn">
        <option value="">Beslistermijn</option>
        <option>Deze week</option>
        <option>Deze maand</option>
        <option>Later</option>
      </select>
      <textarea name="message" placeholder="Extra info" className="w-full border rounded p-2" rows={4} aria-label="Extra info" />
      <input type="text" name="honey" className="hidden" tabIndex={-1} autoComplete="off" />
      <button type="submit" className="bg-gold text-white px-4 py-2 rounded">Verstuur intake</button>
      {status && <p className="text-sm text-text/70">{status}</p>}
    </form>
  );
}
