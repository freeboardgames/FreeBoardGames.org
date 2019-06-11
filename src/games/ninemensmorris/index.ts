import Thumbnail from './media/thumbnail.png';
import { GameMode } from '../../App/Game/GameModePicker';
import { IGameDef } from '../../games';

export const ninemensmorrisGameDef: IGameDef = {
  code: 'ninemensmorris',
  name: 'Nine Mens Morris',
  imageURL: Thumbnail,
  modes: [
    /*
        {
            mode: GameMode.AI,
            extraInfo: { type: 'slider', min: 1, max: 8 } as IGameModeExtraInfoSlider,
        },*/
    { mode: GameMode.OnlineFriend },
  ],
  minPlayers: 2,
  maxPlayers: 2,
  description: 'Similar to 6 Nimmt!',
  descriptionTag: `Play Take 6!, a free online game similar\
 to 6 Nimmt. You can play multi-player from two and up to\
 ten players online!`,
  instructions: {
    videoId: 'zvbIKOHIkRE',
  },
  config: () => import('./config'),
  // aiConfig: () => import('./ai'),
};
