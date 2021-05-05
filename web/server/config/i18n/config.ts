export const i18n = {
  defaultLocale: 'en',
  locales: ['en', ...otherLanguages()],
};

function otherLanguages() {
  return process.env.NEXT_PUBLIC_I18N_ENABLED === 'true' ? ['pt'] : [];
}
