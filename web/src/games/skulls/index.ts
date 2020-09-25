const Thumbnail = require('./media/thumbnail.png?lqip-colors');
import { GameMode } from 'gamesShared/definitions/mode';
import { IGameDef } from 'gamesShared/definitions/game';
import instructions from './instructions.md';

export const fooBarGameDef: IGameDef = {
  code: 'skulls',
  name: 'Skull',
  imageURL: Thumbnail,
  modes: [{ mode: GameMode.OnlineFriend }, { mode: GameMode.LocalFriend }],
  minPlayers: 2,
  maxPlayers: 6,
  description: 'Similar to Skull',
  descriptionTag: `Play Skull and have lots of fun!`,
  instructions: {
    videoId: 'Cv1_6AfbwlQ',
    text: instructions,
  },
  config: () => import('./config'),
};
