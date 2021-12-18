const Thumbnail = require('./media/thumbnail.jpg');
import { GameMode } from 'gamesShared/definitions/mode';
import instructions from './instructions.md';
import { IGameDef, IGameStatus } from 'gamesShared/definitions/game';

export const ninemensmorrisGameDef: IGameDef = {
  code: 'ninemensmorris',
  name: 'Nine Mens Morris',
  contributors: ['JosefKuchar'],
  imageURL: Thumbnail,
  modes: [{ mode: GameMode.OnlineFriend }, { mode: GameMode.LocalFriend }],
  minPlayers: 2,
  maxPlayers: 2,
  description: 'Also Known as Mills',
  descriptionTag: `Play Nine Men's Morris, a free online game also\
 known as Mills. You can play multi-player or with your friend\
 locally!`,
  instructions: {
    videoId: 'zvbIKOHIkRE',
    text: instructions,
  },
  status: IGameStatus.PUBLISHED,
  config: () => import('./config'),
  // aiConfig: () => import('./ai'),
};

export default ninemensmorrisGameDef;
