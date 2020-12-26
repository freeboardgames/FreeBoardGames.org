const Thumbnail = require('./media/thumbnail.jpg');
import { GameMode } from 'gamesShared/definitions/mode';
import { IGameDef, IGameStatus } from 'gamesShared/definitions/game';
import instructions from './instructions.md';

export const holyConspiracyGameDef: IGameDef = {
  code: 'holyConspiracy',
  name: 'Holy Conspiracy',
  minPlayers: 2,
  maxPlayers: 4,
  imageURL: Thumbnail,
  modes: [{ mode: GameMode.OnlineFriend }, { mode: GameMode.LocalFriend }],
  description: 'Similar to Conspiracy',
  descriptionTag: `Play Holy Conspiracy for free online. You can either play a \
  multi-player game against a friend online, or share your device and play locally against a friend.`,
  instructions: {
    // videoId: 'USEjXNCTvcc',
    text: instructions,
  },
  status: IGameStatus.IN_DEVELOPMENT,
  config: () => import('./config'),
};

export default holyConspiracyGameDef;
