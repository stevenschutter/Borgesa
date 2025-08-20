export const routing = {
  locales: ['nl', 'en'] as const,
  defaultLocale: 'nl' as const,
};

export type AppLocale = (typeof routing)['locales'][number];
