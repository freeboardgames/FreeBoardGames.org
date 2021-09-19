const Thumbnail = require('./media/thumbnail.png?lqip-colors');
import { GameMode } from 'gamesShared/definitions/mode';
import { IGameDef, IGameStatus } from 'gamesShared/definitions/game';
import translation from './locales/en.json';

export const picnicGoGameDef: IGameDef = {
  code: 'picnicGo',
  name: translation.name,
  contributors: ['ProspectPyxis'],
  imageURL: Thumbnail,
  modes: [{ mode: GameMode.OnlineFriend }],
  minPlayers: 2,
  maxPlayers: 5,
  description: translation.description,
  descriptionTag: translation.descriptionTag,
  instructions: translation.instructions,
  status: IGameStatus.IN_DEVELOPMENT,
  config: () => import('./config'),
};

export default picnicGoGameDef;
