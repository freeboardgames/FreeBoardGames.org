import { TranslatedPath } from 'infra/i18n/translatedPaths';

export function buildLocalizedRoutes(routing: TranslatedPath) {
  const locales = Object.entries(routing.locales);
  return {
    rewrites: locales.map(([locale, route]) => [
      {
        source: `/:lang(${locale})${route}`,
        destination: `${routing.original}`,
      },
    ]),
    redirects: locales.map(([locale, route]) => [
      {
        source: `/:lang(${locale})${routing.original}`,
        destination: `/:lang(${locale})${route}`,
        permanent: true,
      },
    ]),
  };
}
