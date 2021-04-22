import NextI18Next from 'next-i18next';
import { resolve } from 'path';

export const nextI18Next = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['pt'],
  localePath: resolve('./public/static/locales'),
});

if (process.env.NODE_ENV !== 'production') {
  const { applyClientHMR } = require('i18next-hmr');
  applyClientHMR(nextI18Next.i18n);
}
