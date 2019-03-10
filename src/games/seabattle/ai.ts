import { IAIConfig } from '../index';

interface IPlayState {
  G: any;
  ctx: any;
}

class SeabattleAI {
  worker: any;
  level: number;

  getMove(fen: string): any {
    return null;
  }
}

const seabattleAI = new SeabattleAI();

class SeabattleBot {
  async play(state: IPlayState, playerID: string) {
    if (!state.ctx.gameover) {
      const move = await seabattleAI.getMove(state.G.fen);
      return this.makeMove(move, state.ctx.currentPlayer);
    } else {
      return {};
    }
  }

  makeMove(move: string, playerID: string) {
    return { action: { type: 'MAKE_MOVE', payload: { type: 'move', args: [move], playerID } } };
  }
}

const config: IAIConfig = {
  bgioAI: (level: string) => {
    return {
      bot: SeabattleBot,
    };
  },
};
export default config;
