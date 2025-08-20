import Link from 'next/link';

export function Footer() {
  return (
    <footer className="mt-24 border-t py-10">
      <div className="container-responsive grid gap-6 md:grid-cols-3 text-sm text-text/80">
        <div>
          <div className="font-display text-lg text-charcoal">Borgesa</div>
          <p>Wedding Planning & Day Coordination</p>
        </div>
        <div>
          <div className="font-medium text-charcoal mb-2">Contact</div>
          <p>België</p>
          <p>hello@borgesa.be</p>
        </div>
        <div className="md:text-right">
          <Link href="/privacy">Privacy & Cookies</Link>
        </div>
      </div>
    </footer>
  );
}
