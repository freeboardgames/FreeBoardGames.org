const Thumbnail = require('./media/thumbnail.jpg');
import { GameMode } from 'gamesShared/definitions/mode';
import { IGameDef, IGameStatus } from 'gamesShared/definitions/game';
import instructions from './instructions.md';

export const BarnBarterDef: IGameDef = {
  code: 'barnbarter',
  name: 'Barn Barter',
  contributors: ['Spooky-O'],
  minPlayers: 1, // TODO: Min is 3
  maxPlayers: 5,
  imageURL: Thumbnail,
  modes: [{ mode: GameMode.OnlineFriend }, { mode: GameMode.LocalFriend }], // TODO : no Local
  description: 'Haggle for Animals!',
  descriptionTag: 'Similar to Kuh Handel.',
  instructions: {
    videoId: '9OInfGB7Ejs',
    text: instructions,
  },
  config: () => import('./config'),
  status: IGameStatus.IN_DEVELOPMENT,
};

export default BarnBarterDef;
