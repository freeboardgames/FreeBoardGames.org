import { nextI18Next } from 'infra/i18n';
import { IGameDef } from 'gamesShared/definitions/game';

const playDictionary = { en: 'play', pt: 'jogar' };

export const play = (game: IGameDef, mode?: string) => {
  const { language } = nextI18Next.i18n;
  return `/${[playDictionary[language], game.codes[language], mode].filter((e) => e != null).join('/')}`;
};
