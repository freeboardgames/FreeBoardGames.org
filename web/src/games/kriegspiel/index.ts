const Thumbnail = require('./media/thumbnail.png?lqip-colors');
import { GameMode } from 'gamesShared/definitions/mode';
import { IGameDef, IGameStatus } from 'gamesShared/definitions/game';
import instructions from './instructions.md';

export const kriegspielGameDef: IGameDef = {
  code: 'kriegspiel',
  name: "Guy Debord's Kriegspiel",
  contributors: ['iamcxds'],
  imageURL: Thumbnail,
  modes: [{ mode: GameMode.OnlineFriend }, { mode: GameMode.LocalFriend }],
  minPlayers: 2,
  maxPlayers: 2,
  description: 'Le Jeu de la Guerre',
  descriptionTag: `Kriegspiel is a continuation of politics by other means.`,
  instructions: {
    videoId: '4l2M6vpWLAw',
    text: instructions,
  },
  status: IGameStatus.IN_DEVELOPMENT,
  config: () => import('./config'),
};

export default kriegspielGameDef;
