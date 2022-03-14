const Thumbnail = require('./media/thumbnail.jpg');
import { GameMode } from 'gamesShared/definitions/mode';
import { IGameDef, IGameStatus, IGameTranslationStatus } from 'gamesShared/definitions/game';
import translation from './locales/en.json';

export const seabattleGameDef: IGameDef = {
  code: 'seabattle',
  translationStatus: {
    de: IGameTranslationStatus.DONE,
    pt: IGameTranslationStatus.DONE,
  },
  name: translation.name,
  contributors: ['flamecoals'],
  imageURL: Thumbnail,
  minPlayers: 2,
  maxPlayers: 2,
  modes: [{ mode: GameMode.AI }, { mode: GameMode.OnlineFriend }],
  description: translation.description,
  descriptionTag: translation.descriptionTag,
  instructions: translation.instructions,
  status: IGameStatus.PUBLISHED,
  config: () => import('./config'),
  aiConfig: () => import('./ai'),
};

export default seabattleGameDef;
