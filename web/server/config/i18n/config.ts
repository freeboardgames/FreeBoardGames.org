export const i18n = getI18n();

export function getI18n() {
  return {
    defaultLocale: 'en',
    locales: ['en', ...otherLanguages()],
  };
}

function otherLanguages() {
  return process.env.NEXT_PUBLIC_I18N_ENABLED === 'true' ? ['pt'] : [];
}
