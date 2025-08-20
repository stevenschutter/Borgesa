const testimonials = [
  {
    name: 'Lotte & Arne',
    text: 'Sara hield alles rustig en strak. Wij konden écht genieten.'
  },
  {
    name: 'Julie & Bram',
    text: 'Duidelijke planning, geen stress. En een topfeest.'
  },
  {
    name: 'Anke & Pieter',
    text: 'Plan B lag klaar. Onweer? Geen probleem.'
  }
];

export function Testimonials() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {testimonials.map((t) => (
        <figure key={t.name} className="border rounded p-5 bg-white shadow-sm">
          <blockquote className="text-text/80">“{t.text}”</blockquote>
          <figcaption className="mt-2 text-sm text-text/60">— {t.name}</figcaption>
        </figure>
      ))}
    </div>
  );
}
