import Thumbnail from './media/thumbnail.png';
import { GameMode } from '../../App/Game/GameModePicker';
import { IGameDef } from '../../games';

export const cornerusGameDef: IGameDef = {
  code: 'cornerus',
  name: 'Cornerus',
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
  description: 'Similar to Blokus',
  descriptionTag: 'TODO',
  instructions: {
    videoId: 'Yw8pK6Ak5oE',
  },
  config: () => import('./config'),
  // aiConfig: () => import('./ai'),
};
