import { GameMode } from 'components/App/Game/GameModePicker';
import FourInARowThumbnail from './media/thumbnail.png';
import { IGameDef } from 'games';
import instructions from './instructions.md';

export const fourinarowGameDef: IGameDef = {
  code: 'fourinarow',
  name: 'Four in a Row',
  minPlayers: 2,
  maxPlayers: 2,
  imageURL: FourInARowThumbnail,
  modes: [{ mode: GameMode.OnlineFriend }, { mode: GameMode.LocalFriend }],
  description: 'Also Known as Connect Four',
  descriptionTag: `Play Four in a Row for free.  You can play\
 a multi-player game against a friend online, or share your device and play\
 locally against a friend.`,
  instructions: {
    videoId: 'utXzIFEVPjA',
    text: instructions,
  },
  config: () => import('./config'),
};
