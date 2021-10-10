const Thumbnail = require('./media/thumbnail.jpg');
import { GameMode } from 'gamesShared/definitions/mode';
import { IGameDef, IGameStatus } from 'gamesShared/definitions/game';
import instructions from './instructions.md';

export const cornerusGameDef: IGameDef = {
  code: 'cornerus',
  name: 'Cornerus',
  imageURL: Thumbnail,
  contributors: ['JosefKuchar'],
  modes: [
    /*
            {
                mode: GameMode.AI,
                extraInfo: { type: 'slider', min: 1, max: 8 } as IGameModeExtraInfoSlider,
            },*/
    { mode: GameMode.OnlineFriend },
    { mode: GameMode.LocalFriend },
  ],
  minPlayers: 2,
  maxPlayers: 4,
  description: 'Similar to Blokus',
  descriptionTag: `Play Cornerus, a free online game similar\
 to Blokus. You can play multi-player online or\
 share your device and play locally against a friend.`,
  instructions: {
    text: instructions,
  },
  status: IGameStatus.PUBLISHED,
  config: () => import('./config'),
  // aiConfig: () => import('./ai'),
};

export default cornerusGameDef;
