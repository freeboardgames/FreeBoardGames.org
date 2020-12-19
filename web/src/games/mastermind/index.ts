const Thumbnail = require('./media/thumbnail.jpg');
import { GameMode } from 'gamesShared/definitions/mode';
// import { IGameModeExtraInfoDropdown } from 'gamesShared/definitions/mode';
import { IGameDef, IGameStatus } from 'gamesShared/definitions/game';
import instructions from './instructions.md';

export const mastermindGameDef: IGameDef = {
  code: 'mastermind',
  name: 'Master-Mind',
  imageURL: Thumbnail,
  modes: [
    // {
    //   mode: GameMode.AI,
    //   extraInfo: { type: 'dropdown', options: ['Easy', 'Medium', 'Hard'] } as IGameModeExtraInfoDropdown,
    // },
    { mode: GameMode.LocalFriend },
  ],
  minPlayers: 1,
  maxPlayers: 1,
  description: 'A code breaking game',
  descriptionTag: `Play MasterMind (also called Bulls and Cows) for free online.`,
  instructions: {
    videoId: 'dMHxyulGrEk',
    // text: instructions,
  },
  status: IGameStatus.IN_DEVELOPMENT,
  config: () => import('./config'),
};

export default mastermindGameDef;
