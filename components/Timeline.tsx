export function Timeline({ steps }: { steps: { title: string; desc: string }[] }) {
  return (
    <ol className="relative border-s pl-6 space-y-6">
      {steps.map((s, i) => (
        <li key={i} className="relative">
          <span className="absolute -start-2 top-1.5 h-3 w-3 rounded-full bg-gold" />
          <div className="font-medium text-charcoal">{s.title}</div>
          <div className="text-text/70 text-sm">{s.desc}</div>
        </li>
      ))}
    </ol>
  );
}
