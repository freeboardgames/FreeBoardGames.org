const Thumbnail = require('./media/thumbnail.jpg');
import { GameMode } from 'gamesShared/definitions/mode';
import { IGameDef, IGameStatus } from 'gamesShared/definitions/game';
import instructions from './instructions.md';

export const warGameDef: IGameDef = {
  code: 'war',
  name: 'War',
  contributors: ['ignoreintuition'],
  imageURL: Thumbnail,
  modes: [{ mode: GameMode.OnlineFriend }, { mode: GameMode.LocalFriend }],
  minPlayers: 2,
  maxPlayers: 2,
  description: 'War is a simple card game, typically played by two players using a standard playing card deck.',
  descriptionTag: 'War is a simple card game.',
  instructions: {
    videoId: '23QQ1Hz2-jY',
    text: instructions,
  },
  status: IGameStatus.IN_DEVELOPMENT,
  config: () => import('./config'),
};
export default warGameDef;
