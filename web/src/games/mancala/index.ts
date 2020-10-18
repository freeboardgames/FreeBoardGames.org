const Thumbnail = require('./media/thumbnail.png?lqip-colors');
import { GameMode } from 'gamesShared/definitions/mode';
import { IGameDef, IGameStatus } from 'gamesShared/definitions/game';
import instructions from './instructions.md';

export const mancalaGameDef: IGameDef = {
  code: 'mancala',
  name: 'Mancala',
  imageURL: Thumbnail,
  modes: [{ mode: GameMode.OnlineFriend }, { mode: GameMode.LocalFriend }],
  minPlayers: 2,
  maxPlayers: 2,
  description: 'Classic game of Mancala',
  descriptionTag: `Play Mancala`,
  instructions: {
    videoId: 'aLQX1TQjUbw',
    text: instructions,
  },
  status: IGameStatus.PUBLISHED,
  config: () => import('./config'),
};
