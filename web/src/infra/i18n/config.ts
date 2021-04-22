import NextI18Next from 'next-i18next';
import { resolve } from 'path';
import { i18n } from '../../../next-i18next.config';

export const nextI18Next = new NextI18Next({
  defaultLanguage: i18n.defaultLocale,
  otherLanguages: i18n.locales.filter((l) => l !== i18n.defaultLocale),
  localePath: resolve('./public/static/locales'),
});

if (process.env.NODE_ENV !== 'production') {
  const { applyClientHMR } = require('i18next-hmr');
  applyClientHMR(nextI18Next.i18n);
}
