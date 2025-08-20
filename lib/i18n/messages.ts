export type Locale = 'nl' | 'en';

export async function loadMessages(locale: Locale) {
  if (locale === 'en') {
    return (await import('../../messages/en.json')).default as any;
  }
  return (await import('../../messages/nl.json')).default as any;
}

export async function getNamespace(locale: Locale, ns: string) {
  const messages = await loadMessages(locale);
  return messages[ns] || {};
}
