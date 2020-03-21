import { GameMode } from 'components/App/Game/GameModePicker';
import HangmanThumbnail from './media/thumbnail.png';
import { IGameDef } from 'games';
import instructions from './instructions.md';

export const hangmanGameDef: IGameDef = {
  code: 'hangman',
  name: 'Guess the Word',
  minPlayers: 2,
  maxPlayers: 2,
  imageURL: HangmanThumbnail,
  modes: [{ mode: GameMode.OnlineFriend }, { mode: GameMode.LocalFriend }],
  description: 'પરસ્પર શબ્દ નું અનુમાન લગાવો',
  descriptionTag: `Play Hangman for free online. You can either play a multi-player game against a friend online, or share your device and play locally against a friend.`,
  instructions: {
    videoId: 'USEjXNCTvcc',
    text: instructions,
  },
  config: () => import('./config'),
};
