const Thumbnail = require('./media/thumbnail.png?lqip-colors');

import { GameMode } from 'gamesShared/definitions/mode';
import { IGameDef } from 'gamesShared/definitions/game';
import instructions from './instructions.md';

export const cardtableGameDef: IGameDef = {
  code: 'cardtable',
  name: 'Card Table Game',
  imageURL: Thumbnail,
  modes: [{ mode: GameMode.OnlineFriend }, { mode: GameMode.LocalFriend }],
  minPlayers: 2,
  maxPlayers: 2,
  description: 'Simple Card Table No Rules!',
  descriptionTag: `Card Multiplayer`,
  instructions: {
    videoId: 'yFrAN-LFZRU',
    text: instructions,
  },
  config: () => import('./config'),
};
