import { GameMode } from 'gamesShared/definitions/mode';
import { IGameDef, IGameStatus } from 'gamesShared/definitions/game';

export const picnicGoTGameDef: IGameDef = {
  code: 'picnicGoT',
  name: 'Picnic Go Test',
  contributors: ['tuxor1337'],
  imageURL: null,
  modes: [{ mode: GameMode.OnlineFriend }],
  minPlayers: 2,
  maxPlayers: 2,
  description: 'This is just a test playground for picnic go card statistics',
  descriptionTag: "Don't use this!",
  instructions: { text: "No instructions, don't use this if you don't know what you're doing." },
  status: IGameStatus.IN_DEVELOPMENT,
  config: () => import('./config'),
};

export default picnicGoTGameDef;
