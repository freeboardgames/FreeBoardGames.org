import Thumbnail from './media/thumbnail.png';
import { GameMode } from '../../App/Game/GameModePicker';
import { IGameDef } from '../../games';

export const rolitGameDef: IGameDef = {
  code: 'rolit',
  name: 'Rolit',
  imageURL: Thumbnail,
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
  description: 'Similar to Othello',
  descriptionTag: `TODO`,
  instructions: {
    videoId: 'hC1sgDNrqq0',
  },
  config: () => import('./config'),
  // aiConfig: () => import('./ai'),
};
