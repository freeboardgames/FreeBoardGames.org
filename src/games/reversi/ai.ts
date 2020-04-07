import { IAIConfig } from '../index';
import { IG, getValidMoves } from './game';
import { IGameCtx } from 'boardgame.io/core';

interface IPlayState {
  G: IG;
  ctx: IGameCtx;
}

export class ReversiRandomBot {
  async play(state: IPlayState, playerID: string) {
    const moves = Array.from(getValidMoves(state.G, playerID));
    // const move = moves[Math.floor(Math.random() * moves.length)];  // https://github.com/babel/minify/issues/904
    const move = moves[(Math.random() * moves.length) << 0]; // https://github.com/babel/minify/issues/904
    const x = move % 8;
    const y = Math.floor(move / 8);
    return this.makeMove(playerID, x, y);
  }

  makeMove(playerID: string, x: number, y: number) {
    return { action: { type: 'MAKE_MOVE', payload: { type: 'placePiece', args: [x, y], playerID } } };
  }
}
export const config: IAIConfig = {
  bgioAI: () => {
    return {
      bot: ReversiRandomBot,
    };
  },
};
export default config;
