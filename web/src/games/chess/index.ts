const Thumbnail = require('./media/thumbnail.jpg');
import { GameMode } from 'gamesShared/definitions/mode';
import { IGameDef, IGameStatus, IGameTranslationStatus } from 'gamesShared/definitions/game';
import instructions from './instructions.md';

export const chessGameDef: IGameDef = {
  code: 'chess',
  codes: { en: 'chess', pt: 'xadrez' },
  translationStatus: { pt: IGameTranslationStatus.PARTIAL },
  name: 'Chess',
  contributors: ['flamecoals'],
  imageURL: Thumbnail,
  minPlayers: 2,
  maxPlayers: 2,
  modes: [
    {
      mode: GameMode.AI,
    },
    { mode: GameMode.OnlineFriend },
    { mode: GameMode.LocalFriend },
  ],
  description: 'International Rules',
  descriptionTag: `Play an online Chess game in your browser against a\
 top chess computer. You can set the computer level from 1 to 8,\
 from easy to grandmaster. You can also easily share a link and play\
 chess with a friend online, or you can share your device and play\
 with a friend locally !`,
  instructions: {
    videoId: 'fKxG8KjH1Qg',
    text: instructions,
  },
  status: IGameStatus.PUBLISHED,
  config: () => import('./config'),
  aiConfig: () => import('./ai'),
  customization: () => import('./customization'),
};

export default chessGameDef;
