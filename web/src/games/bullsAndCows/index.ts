const Thumbnail = require('./media/thumbnail.jpg');
import { GameMode } from 'gamesShared/definitions/mode';
// import { IGameModeExtraInfoDropdown } from 'gamesShared/definitions/mode';
import { IGameDef, IGameStatus } from 'gamesShared/definitions/game';
import instructions from './instructions.md';

export const bullsAndCowsGameDef: IGameDef = {
  code: 'bullsAndCows',
  name: 'Bulls & Cows',
  contributors: ['leocaseiro'],
  imageURL: Thumbnail,
  modes: [
    {
      mode: GameMode.LocalFriend,
      // extraInfo: { type: 'dropdown', options: ['Easy', 'Medium', 'Hard'] } as IGameModeExtraInfoDropdown,
    },
  ],
  minPlayers: 1,
  maxPlayers: 1,
  description: 'similar to Mastermind',
  descriptionTag: `Play Bulls and Cows (also known as Mastermind) for free online.`,
  instructions: {
    videoId: 'dMHxyulGrEk',
    text: instructions,
  },
  status: IGameStatus.PUBLISHED,
  config: () => import('./config'),
};

export default bullsAndCowsGameDef;
