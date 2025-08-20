import type { Metadata } from 'next';

export function createMetadata(overrides: Partial<Metadata> = {}): Metadata {
  const base: Metadata = {
    title: 'Borgesa — Wedding Planning & Day Coordination',
    description: 'Strakke organisatie. Zorgeloze trouwdag. Dansfeest centraal.',
    openGraph: {
      images: ['/og-default.jpg'],
    },
  };
  return { ...base, ...overrides } as Metadata;
}
