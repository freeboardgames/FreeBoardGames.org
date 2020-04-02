import {IGameArgs} from 'boardgame.io/core';

export interface IG {

}

const GameConfig: IGameArgs = {
    name: 'codenames',
    setup: (ctx): IG => {
        return {};
    },
};

export const CodenamesGame = GameConfig;
