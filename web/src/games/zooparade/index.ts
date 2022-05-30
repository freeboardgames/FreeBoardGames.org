const Thumbnail = require('./media/thumbnail.jpg');
import { GameMode } from 'gamesShared/definitions/mode';
import { IGameDef, IGameStatus, IGameTranslationStatus } from 'gamesShared/definitions/game';
import translation from './locales/en.json';

export const zooParadeGameDef: IGameDef = {
  code: 'zooparade',
  name: translation.name,
  codes: { pt: 'desfile-do-zoo', de: 'zooparade' },
  translationStatus: {
    pt: IGameTranslationStatus.DONE,
    de: IGameTranslationStatus.DONE,
  },
  contributors: ['Spooky-0', 'DanielSherlock'],
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

export default zooParadeGameDef;
