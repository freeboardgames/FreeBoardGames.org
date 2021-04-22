const { nextI18NextRewrites } = require('next-i18next/rewrites');
const routing = require('./src/infra/i18n/routing.json');

const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'pt'],
};

const localeSubpaths = i18n.locales.reduce((localeSubpaths, locale) => {
  localeSubpaths[locale] = locale;
  return localeSubpaths;
}, {});

const localizedRoutes = routing.map((r) => buildLocalizedRoutes(r));

function i18nRewrites() {
  const rewrites = localizedRoutes.map((r) => r.rewrites.flat()).flat();
  return [...rewrites, ...nextI18NextRewrites(localeSubpaths)];
}

function i18nRedirects() {
  const redirects = localizedRoutes.map((r) => r.redirects.flat()).flat();
  return [...redirects];
}

function buildLocalizedRoutes(routing) {
  const locales = Object.entries(routing.locales);
  return {
    rewrites: locales.map(([locale, route]) => [
      {
        source: `/:lang(${locale})${route}`,
        destination: `${routing.default}`,
      },
    ]),
    redirects: locales.map(([locale, route]) => [
      {
        source: `/:lang(${locale})${routing.default}`,
        destination: `/:lang(${locale})${route}`,
        permanent: true,
      },
    ]),
  };
}

module.exports.i18nRewrites = i18nRewrites;
module.exports.i18nRedirects = i18nRedirects;
module.exports.localeSubpaths = localeSubpaths;
module.exports.localizedRoutes = localizedRoutes;
module.exports.i18n = i18n;
