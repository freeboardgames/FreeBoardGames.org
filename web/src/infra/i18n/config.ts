import NextI18Next from 'next-i18next';
import { resolve } from 'path';

export const nextI18Next = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: [],
  localePath: resolve('./public/static/locales'),
});
