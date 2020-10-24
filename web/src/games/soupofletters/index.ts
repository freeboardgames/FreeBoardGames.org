const Thumbnail = require('./media/thumbnail.png');
import { GameMode } from 'gamesShared/definitions/mode';
import { IGameDef, IGameStatus } from 'gamesShared/definitions/game';
import instructions from './instructions.md';

export const soupOfLettersGameDef: IGameDef = {
  code: 'soupofletters',
  name: 'Soup of Letters',
  imageURL: Thumbnail,
  modes: [{ mode: GameMode.LocalFriend }, { mode: GameMode.OnlineFriend }],
  minPlayers: 2,
  maxPlayers: 4,
  description: "Always more fun with friends.",
  descriptionTag: `Soup of letters, Alphabet soup. Find words in puzzel game.`,
  instructions: {
    // videoId: '_XVs7CmSXTw',
    text: instructions,
  },
  status: IGameStatus.IN_DEVELOPMENT,
  config: () => import('./config'),
  // aiConfig: () => import('./ai'),
};