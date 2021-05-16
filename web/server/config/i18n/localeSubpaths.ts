import { i18n } from './config';

export const localeSubpaths = i18n.locales.reduce((localeSubpaths, locale) => {
  localeSubpaths[locale] = locale;
  return localeSubpaths;
}, {});
