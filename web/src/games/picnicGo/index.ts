const Thumbnail = require('./media/thumbnail.png?lqip-colors');
import { GameMode } from 'gamesShared/definitions/mode';
import { IGameDef, IGameStatus } from 'gamesShared/definitions/game';
import instructions from './instructions.md';

export const picnicGoGameDef: IGameDef = {
  code: 'picnicGo',
  name: 'Picnic Go',
  contributors: ['ProspectPyxis'],
  imageURL: Thumbnail,
  modes: [{ mode: GameMode.OnlineFriend }],
  minPlayers: 2,
  maxPlayers: 5,
  description: 'Similar to Sushi Go',
  descriptionTag: `Play Picnic Go and grab the best picnic meal that you can!`,
  instructions: {
    videoId: '-WO1cP9wzrw',
    text: instructions,
  },
  status: IGameStatus.IN_DEVELOPMENT,
  config: () => import('./config'),
};

export default picnicGoGameDef;
