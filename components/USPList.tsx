"use client";

const usps = [
  { title: 'Dagcoördinatie zonder ruis', desc: 'Regie op de dag. Jij geniet.' },
  { title: 'Draaiboek met plan B/C', desc: 'Scenario’s uitgewerkt. Geen stress.' },
  { title: 'Netwerk van solide leveranciers', desc: 'Selectie en opvolging.' },
  { title: 'Optionele DJ-combi (25 jaar ervaring)', desc: 'Dansvloer gevuld.' },
];

export function USPList() {
  return (
    <div className="grid gap-6 md:grid-cols-4">
      {usps.map((u) => (
        <div key={u.title} className="border rounded p-5 bg-white shadow-sm transition-transform hover:-translate-y-0.5">
          <div className="font-medium text-charcoal">{u.title}</div>
          <div className="text-sm text-text/70">{u.desc}</div>
        </div>
      ))}
    </div>
  );
}
