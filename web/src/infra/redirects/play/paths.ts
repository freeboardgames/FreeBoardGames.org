import { TranslatedPath } from 'infra/i18n/types';
import { buildRewrite } from 'infra/i18n/utils/url';
import omit from 'lodash.omit';
import { generate } from './generate';

const fallbackPathsByLocale = {
  en: ['en', 'play', ':rest+'],
  pt: ['en', 'jogar', ':rest+'],
};

const { rewrites: gameRewrites, redirects: gameRedirects } = generate();

export const playPaths: TranslatedPath[] = [
  {
    rewrites: [
      ...gameRewrites,
      ...buildRewrite(Object.values(omit(fallbackPathsByLocale, ['en'])), fallbackPathsByLocale.en),
    ],
    redirects: [...gameRedirects],
  },
];
