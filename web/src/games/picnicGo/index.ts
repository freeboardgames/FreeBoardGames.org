const Thumbnail = require('./media/thumbnail.jpg');
import { GameMode } from 'gamesShared/definitions/mode';
import { IGameDef, IGameStatus, IGameTranslationStatus } from 'gamesShared/definitions/game';
import translation from './locales/en.json';

export const picnicGoGameDef: IGameDef = {
  code: 'picnicGo',
  name: translation.name,
  contributors: ['ProspectPyxis'],
  translationStatus: {
    it: IGameTranslationStatus.DONE,
    pt: IGameTranslationStatus.DONE,
  },
  codes: { it: 'pic-nicGo', pt: 'piquenique-go' },
  imageURL: Thumbnail,
  modes: [{ mode: GameMode.OnlineFriend }],
  minPlayers: 2,
  maxPlayers: 5,
  description: translation.description,
  descriptionTag: translation.descriptionTag,
  instructions: translation.instructions,
  status: IGameStatus.PUBLISHED,
  config: () => import('./config'),
};

export default picnicGoGameDef;
