import NextI18Next from 'next-i18next';
import { resolve } from 'path';
import { i18n, localeSubpaths } from 'server/config/i18n';

export type INextI18Next = NextI18Next;

export const nextI18Next = new NextI18Next({
  ...(process.env.NEXT_PUBLIC_I18N_ENABLED === 'true' && { localeSubpaths }),
  defaultLanguage: i18n.defaultLocale,
  otherLanguages: i18n.locales.filter((l) => l !== i18n.defaultLocale),
  localePath: resolve('./public/static/locales'),
});

if (process.env.NODE_ENV !== 'production') {
  const { applyClientHMR } = require('i18next-hmr');
  applyClientHMR(nextI18Next.i18n);
}

if (process.env.NODE_ENV !== 'production' && typeof window !== 'undefined') {
  // @ts-ignore
  window.nextI18Next = nextI18Next;
}
