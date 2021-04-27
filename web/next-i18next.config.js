const { nextI18NextRewrites } = require('next-i18next/rewrites');
const routing = require('./src/infra/i18n/routing.json');

const i18n = {
  defaultLocale: 'en',
  locales: ['en', ...otherLanguages()],
};

function otherLanguages() {
  return process.env.NEXT_PUBLIC_I18N_ENABLED === 'true' ? ['pt'] : [];
}

const localeSubpaths = i18n.locales.reduce((localeSubpaths, locale) => {
  localeSubpaths[locale] = locale;
  return localeSubpaths;
}, {});

const localizedRoutes = routing.map((r) => buildLocalizedRoutes(r));

function i18nRewrites() {
  if (process.env.NEXT_PUBLIC_I18N_ENABLED !== 'true') return [];

  const rewrites = localizedRoutes.map((r) => r.rewrites.flat()).flat();
  return [...rewrites, ...nextI18NextRewrites(localeSubpaths)];
}

function i18nRedirects() {
  if (process.env.NEXT_PUBLIC_I18N_ENABLED !== 'true') return [];

  const redirects = localizedRoutes.map((r) => r.redirects.flat()).flat();
  return [...redirects];
}

function buildLocalizedRoutes(routing) {
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

module.exports.i18nRewrites = i18nRewrites;
module.exports.i18nRedirects = i18nRedirects;
module.exports.localeSubpaths = localeSubpaths;
module.exports.i18n = i18n;
