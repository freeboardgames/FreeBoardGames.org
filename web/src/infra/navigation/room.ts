import { IGameDef } from 'gamesShared/definitions/game';
import { nextI18Next } from 'infra/i18n';

export const room = (roomId: string, game?: IGameDef, numberOfPlayers?: number) => {
  const { language } = nextI18Next.i18n;
  return `/${['room', roomId, game.codes[language], numberOfPlayers].filter((e) => e != null).join('/')}`;
};
