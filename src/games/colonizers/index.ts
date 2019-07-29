import instructions from './instructions.md';
import Thumbnail from './media/thumbnail.png';
import { GameMode } from '../../App/Game/GameModePicker';
import { IGameDef } from '../../games';

export const colonizersGameDef: IGameDef = {
  code: 'colonizers',
  name: 'Colonizers',
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
  maxPlayers: 4,
  description: 'TODO',
  descriptionTag: `TODO`,
  instructions: {
    videoId: 'cPhX_1RiwEg',
    text: instructions,
  },
  config: () => import('./config'),
  // aiConfig: () => import('./ai'),
};
