import Thumbnail from './media/thumbnail.png';
import { GameMode } from '../../components/App/Game/GameModePicker';
import { IGameDef } from '../../games';
import instructions from './instructions.md';

export const takesixGameDef: IGameDef = {
  code: 'takesix',
  name: 'Take 6!',
  imageURL: Thumbnail,
  modes: [{ mode: GameMode.AI }, { mode: GameMode.OnlineFriend }],
  minPlayers: 2,
  maxPlayers: 10,
  description: 'Similar To 6 Nimmt!',
  descriptionTag: `Play Take 6!, a free online game similar\
 to 6 Nimmt. You can play multi-player from two and up to\
 ten players online!`,
  instructions: {
    videoId: 'fF0lnDygoes',
    text: instructions,
  },
  config: () => import('./config'),
  aiConfig: () => import('./ai'),
};
