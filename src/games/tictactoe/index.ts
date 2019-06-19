import { GameMode } from '../../App/Game/GameModePicker';
import { IGameModeExtraInfoDropdown } from '../../App/Game/GameModePicker';
import TicTacToeThumbnail from './media/thumbnail.png';
import { IGameDef } from '../../games';
import instructions from './instructions.md';

export const tictactoeGameDef: IGameDef = {
  code: 'tictactoe',
  name: 'Tic-Tac-Toe',
  minPlayers: 2,
  maxPlayers: 2,
  imageURL: TicTacToeThumbnail,
  modes: [
    {
      mode: GameMode.AI,
      extraInfo: { type: 'dropdown', options: ['Easy', 'Hard'] } as IGameModeExtraInfoDropdown,
    },
    { mode: GameMode.OnlineFriend },
    { mode: GameMode.LocalFriend },
  ],
  description: 'Classic Tic-Tac-Toe Game',
  descriptionTag: `Play Tic-Tac-Toe (also called Noughts and Crosses) for \
 free online. You can either do a single-player game against the computer,\
 a multi-player game against a friend online or share your device and play\
 locally against a friend.`,
  instructions: {
    videoId: 'USEjXNCTvcc',
    text: instructions,
  },
  config: () => import('./config'),
  aiConfig: () => import('./ai'),
};
