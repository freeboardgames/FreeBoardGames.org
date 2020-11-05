const Thumbnail = require('./media/thumbnail.jpg');
import { GameMode, IGameModeExtraInfoDropdown } from 'gamesShared/definitions/mode';
import { IGameDef, IGameStatus } from 'gamesShared/definitions/game';
import instructions from './instructions.md';

export const tictactoeplusGameDef: IGameDef = {
  code: 'tictactoeplus',
  name: 'Tic-Tac-Toe-Plus',
  minPlayers: 2,
  maxPlayers: 2,
  imageURL: Thumbnail,
  modes: [
    {
      mode: GameMode.AI,
      extraInfo: { type: 'dropdown', options: ['Easy', 'Hard'] } as IGameModeExtraInfoDropdown,
    },
    { mode: GameMode.OnlineFriend },
    { mode: GameMode.LocalFriend },
  ],
  description: 'A new variant with a plus',
  descriptionTag: `Play Tic-Tac-Toe-Plus for\
 free online. You can either play a single-player game against the computer,\
 a multi-player game against a friend online, or share your device and play\
 locally against a friend.`,
  instructions: {
    text: instructions,
  },
  status: IGameStatus.PUBLISHED,
  config: () => import('./config'),
  aiConfig: () => import('./ai'),
};

export default tictactoeplusGameDef;
