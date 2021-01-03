const Thumbnail = require('./media/thumbnail.jpg');
import { GameMode } from 'gamesShared/definitions/mode';
import { IGameModeExtraInfoDropdown } from 'gamesShared/definitions/mode';
import { IGameDef, IGameStatus } from 'gamesShared/definitions/game';
import instructions from './instructions.md';

export const thinkAlikeGameDef: IGameDef = {
  code: 'thinkAlike',
  name: 'Think Alike',
  minPlayers: 4,
  maxPlayers: 10,
  imageURL: Thumbnail,
  modes: [
    { mode: GameMode.OnlineFriend },
    { mode: GameMode.LocalFriend },
  ],
  description: 'Similar to Compatibility',
  descriptionTag: `Play Think Alike Compatibility for free online. \
  You can either play a multi-player game against a friend online, \
  or share your device and play locally against a friend.`,
  instructions: {
    videoId: 'EU6rr7mzU8c',
    text: instructions,
  },
  status: IGameStatus.IN_DEVELOPMENT,
  config: () => import('./config'),
};

export default thinkAlikeGameDef;
