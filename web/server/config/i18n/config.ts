export const i18n = getI18n();

export function getI18n() {
  return {
    defaultLocale: 'en',
    locales: ['en', ...otherLanguages()],
  };
}

function otherLanguages() {
  return ['pt', 'de', 'fr', 'it'];
}
