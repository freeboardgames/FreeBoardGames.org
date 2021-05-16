import translatedPaths from 'infra/i18n/paths';

export function i18nRedirects() {
  if (process.env.NEXT_PUBLIC_I18N_ENABLED !== 'true') return [];

  const redirects = translatedPaths.map((t) => t.redirects).flat();

  return [...redirects];
}
