import SeabattleThumbnail from './media/thumbnail.png';
import { GameMode } from '../../App/Game/GameModePicker';
import { IGameDef } from '../../games';

export const seabattleGameDef: IGameDef = {
  code: 'seabattle',
  name: 'Sea Battle',
  imageURL: SeabattleThumbnail,
  modes: [
    { mode: GameMode.AI },
    { mode: GameMode.OnlineFriend },
  ],
  description: 'Play Sea Battle, similar to Battleship!',
  descriptionTag: `Play Sea Battle, a free online game similar\
 to Battleship. You can play single-player against the computer\
 or multi-player against a friend online.`,
  config: () => import('./config'),
  aiConfig: () => import('./ai'),
};
