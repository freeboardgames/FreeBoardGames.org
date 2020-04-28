const Thumbnail = require('./media/thumbnail.png?lqip-colors');
import { GameMode } from 'components/App/Game/GameModePicker';
import { IGameDef } from 'games';
import instructions from './instructions.md';

export const hangmanGameDef: IGameDef = {
  code: 'hangman',
  name: 'Guess the Word',
  minPlayers: 2,
  maxPlayers: 2,
  imageURL: Thumbnail,
  modes: [{ mode: GameMode.OnlineFriend }, { mode: GameMode.LocalFriend }],
  description: 'સામે વાળા આપેલો શબ્દ શોધી કાઢો',
  descriptionTag: `Play Guess the Word for free online. You can either play a multi-player game against a friend online, or share your device and play locally against a friend.`,
  instructions: {
    videoId: 'leW9ZotUVYo',
    text: instructions,
  },
  config: () => import('./config'),
};
