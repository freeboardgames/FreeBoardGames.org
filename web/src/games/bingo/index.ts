const Thumbnail = require('./media/thumbnail.jpg');
import { GameMode } from 'gamesShared/definitions/mode';
import { IGameDef, IGameStatus, IGameTranslationStatus } from 'gamesShared/definitions/game';
import translation from './locales/en.json';

export const BingoDef: IGameDef = {
  code: 'bingo',
  name: translation.name,
  translationStatus: { pt: IGameTranslationStatus.DONE, de: IGameTranslationStatus.DONE },
  contributors: ['gk-patel'],
  minPlayers: 2,
  maxPlayers: 30,
  imageURL: Thumbnail,
  modes: [{ mode: GameMode.OnlineFriend }],
  description: translation.description,
  descriptionTag: translation.descriptionTag,
  instructions: translation.instructions,
  config: () => import('./config'),
  status: IGameStatus.PUBLISHED,
};

export default BingoDef;
