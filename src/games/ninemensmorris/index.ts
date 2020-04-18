const Thumbnail = require('./media/thumbnail.png?lqip-colors');
import { GameMode } from 'components/App/Game/GameModePicker';
import instructions from './instructions.md';
import { IGameDef } from 'games';

export const ninemensmorrisGameDef: IGameDef = {
  code: 'ninemensmorris',
  name: 'Tri-Murti',
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
  maxPlayers: 2,
  description: 'ત્રણ મૂર્તિ ગોઠવી ને સામે વાળા ને Out કરો',
  descriptionTag: `Play Nine Men's Morris, a free online game also\
 known as Mills. You can play multi-player or with your friend\
 locally!`,
  instructions: {
    videoId: 'zvbIKOHIkRE',
    text: instructions,
  },
  config: () => import('./config'),
  // aiConfig: () => import('./ai'),
};
