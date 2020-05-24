import { IAIConfig } from '../index';
import { IG, getValidMoves, IMove } from './game';
import { Ctx } from 'boardgame.io';

interface IPlayState {
  G: IG;
  ctx: Ctx;
}

class CheckersRandomBot {
  async play(state: IPlayState, playerID: string) {
    const moves =
      state.G.jumping !== null ? getValidMoves(state.G, playerID, state.G.jumping) : getValidMoves(state.G, playerID);
    const move = moves[Math.floor(Math.random() * moves.length)];

    return this.makeMove(playerID, move);
  }

  makeMove(playerID: string, move: IMove) {
    return { action: { type: 'MAKE_MOVE', payload: { type: 'move', args: [move.from, move.to], playerID } } };
  }
}
const config: IAIConfig = {
  bgioAI: () => {
    return {
      bot: CheckersRandomBot,
    };
  },
};
export default config;
