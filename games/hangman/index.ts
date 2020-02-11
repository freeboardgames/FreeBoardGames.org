import { GameMode } from 'components/App/Game/GameModePicker';
// import { IGameModeExtraInfoDropdown } from 'components/App/Game/GameModePicker';
import HangmanThumbail from './media/thumbnail.png';
import { IGameDef } from 'games';
import instructions from './instructions.md';

export const hangmanGameDef: IGameDef = {
  code: 'hangman',
  name: 'Hangman',
  minPlayers: 2,
  maxPlayers: 2,
  imageURL: HangmanThumbail,
  modes: [
    { mode: GameMode.OnlineFriend },
    { mode: GameMode.LocalFriend },
  ],
  description: 'A Classic Game',
  descriptionTag: `Play Hangman for free online. You can either play a multi-player game against a friend online, or share your device and play locally against a friend.`,
  instructions: {
    videoId: 'USEjXNCTvcc',
    text: instructions,
  },
  config: () => import('./config'),
};
