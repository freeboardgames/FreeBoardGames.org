import { IGameConfig } from 'gamesShared/definitions/game';
import { MemoryMatchGame } from './game';
import { MemoryMatchBoard } from './board';

const config: IGameConfig = {
    bgioGame: MemoryMatchGame,
    bgioBoard: MemoryMatchBoard,
};

export default config;
