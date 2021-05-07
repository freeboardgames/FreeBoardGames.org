import omit from 'lodash.omit';
import { transpose } from 'infra/i18n/utils/transpose';
import { TranslatedPath } from 'infra/i18n/types';
import { cartesianProduct } from 'cartesian-product-multiple-arrays';
import { buildRewrite, buildRedirect } from 'infra/i18n/utils/url';

const fallbackPathsByLocale = {
  en: ['en', 'play', ':rest+'],
  pt: ['en', 'jogar', ':rest+'],
};

const pathsByLocale = {
  en: ['en', 'play', 'chess'],
  pt: ['pt', 'jogar', 'xadrez'],
};

const transposed = transpose(Object.values(pathsByLocale));
const combinedPaths = cartesianProduct(...transposed) as string[][];

export const playPaths: TranslatedPath[] = [
  {
    rewrite() {
      return [
        ...buildRewrite(Object.values(omit(pathsByLocale, ['en'])), pathsByLocale.en),
        ...buildRewrite(Object.values(omit(fallbackPathsByLocale, ['en'])), fallbackPathsByLocale.en),
      ];
    },
    redirect() {
      return [...buildRedirect(combinedPaths, pathsByLocale)];
    },
  },
];
