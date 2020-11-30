const Thumbnail = require('./media/thumbnail.png');
import { GameMode } from 'gamesShared/definitions/mode';
import { IGameDef, IGameStatus } from 'gamesShared/definitions/game';
import instructions from './instructions.md';

export const rotaGameDef: IGameDef = {
  urlName: 'rass',
  code: 'rota',
  name: 'Rass',
  imageURL: Thumbnail,
  modes: [{ mode: GameMode.OnlineFriend }, { mode: GameMode.LocalFriend }],
  minPlayers: 2,
  maxPlayers: 2,
  description: 'જુઓ જુઓને સાહેલીઓ આજ, રસિયો રાસ રમે',
  descriptionTag: `Play Rass, just like Shreeji Maharaj played in Panchala. You can play multi-player or with your friend locally!`,
  instructions: {
    videoId: '_XVs7CmSXTw',
    text: instructions,
  },
  status: IGameStatus.PUBLISHED,
  config: () => import('./config'),
};

export default rotaGameDef;
