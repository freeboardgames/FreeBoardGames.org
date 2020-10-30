const Thumbnail = require('./media/thumbnail.png?lqip-colors');
import { GameMode } from 'gamesShared/definitions/mode';
import { IGameDef, IGameStatus } from 'gamesShared/definitions/game';
import instructions from './instructions.md';

export const secretDraculaGameDef: IGameDef = {
  code: 'secretDracula',
  name: 'Secret Dracula',
  imageURL: Thumbnail,
  modes: [{ mode: GameMode.AI }, { mode: GameMode.OnlineFriend }],
  minPlayers: 2, // TODO - set to 5
  maxPlayers: 10,
  description: 'A game of decite, lies, and Vampires.',
  descriptionTag: 'Secret Dracula',
  instructions: {
    videoId: 'mbGXIDYdtas',
    text: instructions,
  },
  status: IGameStatus.IN_DEVELOPMENT,
  config: () => import('./config'),
  aiConfig: () => import('./ai'),
};

export default secretDraculaGameDef;
