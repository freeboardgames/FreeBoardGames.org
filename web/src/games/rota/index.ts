const Thumbnail = require('./media/thumbnail.jpg');
import { GameMode } from 'gamesShared/definitions/mode';
import { IGameDef, IGameStatus } from 'gamesShared/definitions/game';
import instructions from './instructions.md';

export const rotaGameDef: IGameDef = {
  code: 'rota',
  name: 'Rota',
  imageURL: Thumbnail,
  modes: [{ mode: GameMode.OnlineFriend }, { mode: GameMode.LocalFriend }],
  minPlayers: 2,
  maxPlayers: 2,
  description: 'A classic Roman Game',
  descriptionTag: `Play Rota, a classic Roman game. You can play multi-player or with your friend locally!`,
  instructions: {
    videoId: '_XVs7CmSXTw',
    text: instructions,
  },
  status: IGameStatus.PUBLISHED,
  config: () => import('./config'),
};
