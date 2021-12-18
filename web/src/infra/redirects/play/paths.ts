import { Language, TranslatedPath } from 'infra/i18n/types';
import { buildRewrite } from 'infra/i18n/utils/url';
import omit from 'lodash.omit';
import { generate } from './generate';
import { playDictionary } from '../../navigation/dictionary';

type FallbackPathsByLocale = Partial<Record<Language, string[]>>;

const fallbackPathsByLocale = Object.entries(playDictionary).reduce<FallbackPathsByLocale>(
  (fallback, [language, translation]) => {
    fallback[language] = [language, translation, ':rest+'];
    return fallback;
  },
  {},
);

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
