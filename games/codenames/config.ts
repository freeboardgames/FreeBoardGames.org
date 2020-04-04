import {IGameConfig} from '../index';
import {CodenamesGame} from './game';
import {Board} from './board';

const config: IGameConfig = {
    bgioGame: CodenamesGame,
    bgioBoard: Board,
    debug: true,
};

export default config;
