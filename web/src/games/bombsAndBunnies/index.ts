const Thumbnail = require('./media/thumbnail.png?lqip-colors');
import { GameMode } from 'gamesShared/definitions/mode';
import { IGameDef, IGameStatus } from 'gamesShared/definitions/game';
import instructions from './instructions.md';

export const bombsAndBunniesDef: IGameDef = {
  code: 'bombsAndBunnies',
  name: 'Bombs & Bunnies',
  imageURL: Thumbnail,
  modes: [{ mode: GameMode.OnlineFriend }, { mode: GameMode.LocalFriend }],
  minPlayers: 2,
  maxPlayers: 6,
  description: 'Similar to Skull',
  descriptionTag: `Play Bombs & Bunnies and have lots of fun!`,
  instructions: {
    videoId: 'Cv1_6AfbwlQ',
    text: instructions,
  },
  status: IGameStatus.IN_DEVELOPMENT,
  config: () => import('./config'),
};

export default bombsAndBunniesDef;
