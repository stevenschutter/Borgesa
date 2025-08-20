"use client";
import { useEffect, useState } from 'react';

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const v = localStorage.getItem('cookie-consent');
    if (!v) setVisible(true);
  }, []);

  if (!visible) return null;
  return (
    <div className="fixed bottom-4 inset-x-4 md:inset-x-auto md:right-4 z-50 max-w-md bg-white border rounded shadow-lg p-4 text-sm">
      <p className="text-text/80">We gebruiken functionele en analytische cookies. Je kan weigeren of aanvaarden.</p>
      <div className="mt-3 flex gap-2">
        <button onClick={() => { localStorage.setItem('cookie-consent', 'denied'); setVisible(false); }} className="border px-3 py-1 rounded">Weiger</button>
        <button onClick={() => { localStorage.setItem('cookie-consent', 'granted'); setVisible(false); }} className="bg-gold text-white px-3 py-1 rounded">Aanvaard</button>
      </div>
    </div>
  );
}
