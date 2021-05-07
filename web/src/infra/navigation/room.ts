import { IGameDef } from 'gamesShared/definitions/game';
import { Language } from 'infra/i18n';
import { LanguagePathResolver } from './types';

export const room = (roomId: string, game?: IGameDef, numberOfPlayers?: number): LanguagePathResolver => (
  language: Language,
) => `/${[language, 'room', roomId, game?.codes[language], numberOfPlayers].filter((e) => e != null).join('/')}`;
