const Thumbnail = require('./media/thumbnail.jpg');
import { GameMode } from 'gamesShared/definitions/mode';
import { IGameDef, IGameStatus } from 'gamesShared/definitions/game';
import instructions from './instructions.md';

export const memoryMatchDef: IGameDef = {
    code: 'memorymatch',
    name: 'Memory Match',
    minPlayers: 2,
    maxPlayers: 2,
    imageURL: Thumbnail,
    modes: [{ mode: GameMode.OnlineFriend }, { mode: GameMode.LocalFriend }],
    description: 'A small game to sharpen memory',
    descriptionTag: `Play memory match for free online. You can either play a multi-player game against a friend online, or share your device and play locally against a friend.`,
    instructions: {
        videoId: 'leW9ZotUVYo',
        text: instructions,
    },
    config: () => import('./config'),
  status: IGameStatus.IN_DEVELOPMENT,

};

export default memoryMatchDef;
