const Thumbnail = require('./media/thumbnail.png?lqip-colors');
import { GameMode } from 'gamesShared/definitions/mode';
import { IGameDef, IGameStatus } from 'gamesShared/definitions/game';
import instructions from './instructions.md';

export const frenchTarotDef: IGameDef = {
  code: 'frenchTarot',
  name: 'French Tarot',
  contributors: ['tuxor1337'],
  imageURL: Thumbnail,
  modes: [{ mode: GameMode.OnlineFriend }, { mode: GameMode.LocalFriend }],
  minPlayers: 2,
  maxPlayers: 5,
  description: 'Classical French card game',
  descriptionTag: `Play French Tarot and have lots of fun!`,
  instructions: {
    videoId: 'zo9pLf5Mai4',
    text: instructions,
  },
  status: IGameStatus.PUBLISHED,
  config: () => import('./config'),
};

export default frenchTarotDef;
