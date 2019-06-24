import { Game, IGameArgs, IGameCtx, INVALID_MOVE } from '@freeboardgame.org/boardgame.io/core';

export interface IScore {}

export interface IG {}

const GameConfig: IGameArgs = {
  name: 'cornerus',
  flow: {
    movesPerTurn: 1,
    endGameIf: (G: IG, ctx) => {},
  },
  moves: {},
  setup: (ctx): IG => {
    return {};
  },
};

export const CornerusGame = Game(GameConfig);
