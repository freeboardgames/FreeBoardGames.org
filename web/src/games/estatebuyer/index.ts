const Thumbnail = require('./media/thumbnail.png?lqip-colors');
import { GameMode } from 'components/App/Game/GameModePicker';
import { IGameDef } from 'games';
import instructions from './instructions.md';

export const estateBuyerGameDef: IGameDef = {
  code: 'estatebuyer',
  name: 'Estate Buyer',
  imageURL: Thumbnail,
  modes: [{ mode: GameMode.AI }, { mode: GameMode.OnlineFriend }, { mode: GameMode.LocalFriend }],
  minPlayers: 3,
  maxPlayers: 6,
  description: 'Similar to For Sale',
  descriptionTag: `Play Estate Buyer, similar to For Sale, locally
  or online against friends!`,
  instructions: {
    videoId: 'OZ0RLgnBp6o',
    text: instructions,
  },
  config: () => import('./config'),
};
