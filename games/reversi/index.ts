import Thumbnail from './media/thumbnail.png';
import { GameMode } from 'components/App/Game/GameModePicker';
import { IGameDef } from 'games';
import instructions from './instructions.md';

export const reversiGameDef: IGameDef = {
  code: 'reversi',
  name: 'Reversi',
  imageURL: Thumbnail,
  modes: [{ mode: GameMode.AI }, { mode: GameMode.OnlineFriend }, { mode: GameMode.LocalFriend }],
  minPlayers: 2,
  maxPlayers: 4,
  description: 'બીજા ની મૂર્તિ ફેરવી ને તમારી કરીલો',
  descriptionTag: `Play Reversi, a free online game similar\
 to Rollit and Othello. You can play multi-player online or \
 share your device and play locally against a friend.`,
  instructions: {
    videoId: 'hC1sgDNrqq0',
    text: instructions,
  },
  config: () => import('./config'),
  aiConfig: () => import('./ai'),
};
