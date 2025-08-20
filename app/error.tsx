"use client";
export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="py-24 text-center">
      <h1 className="font-display text-4xl text-charcoal">Er ging iets mis</h1>
      <p className="text-text/70">Probeer het opnieuw.</p>
      <button onClick={reset} className="mt-4 border px-4 py-2 rounded">Opnieuw</button>
    </div>
  );
}
