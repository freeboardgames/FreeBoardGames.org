import SeabattleThumbnail from './media/thumbnail.png';
import { GameMode } from '../../App/Game/GameModePicker';
import { IGameDef } from '../../games';

export const seabattleGameDef: IGameDef = {
  code: 'seabattle',
  name: 'Sea Battle',
  imageURL: SeabattleThumbnail,
  minPlayers: 2,
  maxPlayers: 2,
  modes: [{ mode: GameMode.AI }, { mode: GameMode.OnlineFriend }],
  description: 'Similar to Battleship',
  descriptionTag: `Play Sea Battle, a free online game similar\
 to Battleship. You can play single-player against the computer\
 or multi-player against a friend online.`,
  instructions: {
    videoId: 'q0qpQ8doUp8',
  },
  config: () => import('./config'),
  aiConfig: () => import('./ai'),
};
