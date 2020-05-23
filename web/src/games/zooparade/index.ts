const Thumbnail = require('./media/thumbnail.png?lqip-colors');
import { GameMode } from '../../components/App/Game/GameModePicker';
import { IGameDef } from '../../games';
import instructions from './instructions.md';

export const zooParadeGameDef: IGameDef = {
  code: 'zooparade',
  name: 'Zoo Parade',
  imageURL: Thumbnail,
  modes: [
    { mode: GameMode.OnlineFriend },
    { mode: GameMode.LocalFriend },
  ],
  minPlayers: 2,
  maxPlayers: 5,
  description: 'A cooperative game where the Team wins!',
  descriptionTag: `Tag for Zoo Parade TODO`,
  instructions: {
    videoId: 'LQ8iwNjBW_s',
    text: instructions,
  },
  config: () => import('./config'),
};