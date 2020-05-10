const Thumbnail = require('./media/thumbnail.png?lqip-colors');
import { GameMode } from 'components/App/Game/GameModePicker';
import { IGameDef } from 'games';
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
  config: () => import('./config'),
};
