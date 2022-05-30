const Thumbnail = require('./media/thumbnail.jpg');
import { GameMode } from 'gamesShared/definitions/mode';
import { IGameDef, IGameStatus } from 'gamesShared/definitions/game';
import instructions from './instructions.md';

export const estateBuyerGameDef: IGameDef = {
  code: 'estatebuyer',
  name: 'Estate Buyer',
  contributors: ['ryandriskel'],
  imageURL: Thumbnail,
  modes: [{ mode: GameMode.OnlineFriend }, { mode: GameMode.LocalFriend }],
  minPlayers: 2,
  maxPlayers: 6,
  description: 'Buy and Sell Buildings',
  descriptionTag: `Play Estate Buyer locally
  or online against friends!`,
  instructions: {
    text: instructions,
  },
  status: IGameStatus.PUBLISHED,
  config: () => import('./config'),
};

export default estateBuyerGameDef;
