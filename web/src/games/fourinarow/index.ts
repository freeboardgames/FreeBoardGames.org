const Thumbnail = require('./media/thumbnail.jpg');
import { GameMode } from 'gamesShared/definitions/mode';
import { IGameDef, IGameStatus } from 'gamesShared/definitions/game';
import instructions from './instructions.md';

export const fourinarowGameDef: IGameDef = {
  code: 'fourinarow',
  name: 'Four in a Row',
  minPlayers: 2,
  maxPlayers: 2,
  imageURL: Thumbnail,
  modes: [{ mode: GameMode.OnlineFriend }, { mode: GameMode.LocalFriend }],
  description: 'Similar to Connect Four',
  descriptionTag: `Play Four in a Row for free.  You can play\
 a multi-player game against a friend online, or share your device and play\
 locally against a friend.`,
  instructions: {
    videoId: 'utXzIFEVPjA',
    text: instructions,
  },
  status: IGameStatus.PUBLISHED,
  config: () => import('./config'),
};

export default fourinarowGameDef;
