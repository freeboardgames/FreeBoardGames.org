import Thumbnail from './media/thumbnail.png';
import { GameMode } from '../../App/Game/GameModePicker';
import { IGameModeExtraInfoSlider } from '../../App/Game/GameModePicker';
import { IGameDef } from '../../games';

export const takesixGameDef: IGameDef = {
  code: 'takesix',
  name: 'Take 6!',
  imageURL: Thumbnail,
  modes: [
    /*
    {
        mode: GameMode.AI,
        extraInfo: { type: 'slider', min: 1, max: 8 } as IGameModeExtraInfoSlider,
    },*/
    { mode: GameMode.OnlineFriend },
  ],
  description: 'Also known as 6 Nimmt!',
  descriptionTag: `Also known as 6 Nimmt!`,
  config: () => import('./config'),
  // aiConfig: () => import('./ai'),
};
