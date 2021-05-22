import translatedPaths from 'infra/i18n/paths';

export function i18nRedirects() {
  const redirects = translatedPaths.map((t) => t.redirects).flat();

  return [...redirects];
}
