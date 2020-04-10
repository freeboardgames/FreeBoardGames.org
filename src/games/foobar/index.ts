import Thumbnail from './media/thumbnail.png';
import { GameMode } from '../../App/Game/GameModePicker';
import { IGameDef } from '../../games';
import instructions from './instructions.md';

export const fooBarGameDef: IGameDef = {
  code: 'foobar',
  name: 'Foo Bar Game',
  imageURL: Thumbnail,
  modes: [{ mode: GameMode.OnlineFriend }, { mode: GameMode.LocalFriend }],
  minPlayers: 2,
  maxPlayers: 2,
  description: 'Classic game of foo and bar!',
  descriptionTag: `Play Foo Bar and have lots of fun!`,
  instructions: {
    videoId: 'yFrAN-LFZRU',
    text: instructions,
  },
  config: () => import('./config'),
};