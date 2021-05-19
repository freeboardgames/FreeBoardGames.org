import { transpose } from 'infra/i18n/utils/transpose';
import { Language, Rewrite, Redirect } from 'infra/i18n/types';
import cartesian from 'fast-cartesian';
import { buildRewrite, buildRedirect } from 'infra/i18n/utils/url';
import { getAllGames } from 'infra/game';
import { playDictionary } from 'infra/navigation/dictionary';
import omit from 'lodash.omit';

type PathsByLocale = Partial<Record<Language, string[]>>;

const words = {
  play: playDictionary,
};

export function generate() {
  return getAllGames().reduce<{ rewrites: Rewrite[]; redirects: Redirect[] }>(
    (wrapper, game) => {
      if (!game.codes) return wrapper;

      const codes = [...Object.entries(game.codes), ['en', game.code]];
      const pathsByLocale: PathsByLocale = {};

      codes.forEach(([language, code]) => {
        pathsByLocale[language] = [language, words.play[language], code];
      });

      const transposed = transpose(Object.values(pathsByLocale));
      const combinedPaths = cartesian(transposed) as string[][];

      return {
        ...wrapper,
        rewrites: [...wrapper.rewrites, ...buildRewrite(Object.values(omit(pathsByLocale, ['en'])), pathsByLocale.en)],
        redirects: [...wrapper.redirects, ...buildRedirect(combinedPaths, pathsByLocale)],
      };
    },
    { redirects: [], rewrites: [] },
  );
}
