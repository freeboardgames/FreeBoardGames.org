import { IAIConfig } from '../index';
// @ts-ignore
import StockfishWorker from 'worker-loader?name=[hash].stockfish.worker.js&inline=true&fallback=false!./stockfish8';

interface IPlayState {
  G: any;
  ctx: any;
}

const LVL_MOVETIMES = [100, 200, 300, 400, 600, 800, 1000, 2000];
const LVL_DEPTHS = [1, 1, 2, 3, 5, 8, 13, 22];

class Stockfish {
  worker: any;
  level: number;

  constructor() {
    this.worker = new StockfishWorker();
    this.send('isready');
  }

  send(message: string) {
    this.worker.postMessage(message);
  }

  async getMove(fen: string): Promise<string> {
    return await new Promise(resolve => {
      this.worker.onmessage = (event: any) => {
        const msg = event.data;
        if (msg.includes('bestmove')) {
          resolve(msg.split(' ')[1]);
        }
      };
      const lvl = Math.round(((this.level - 1) * 20.0) / 7);
      this.send(`setoption name Skill Level value ${lvl}`);
      if (fen !== '') {
        this.send(`position fen ${fen}`);
      } else {
        this.send('position startpos');
      }
      const depth = LVL_DEPTHS[this.level - 1];
      const movetime = LVL_MOVETIMES[this.level - 1];
      this.send(`go depth ${depth} movetime ${movetime}`);
    });
  }
}

const stockfish = new Stockfish();

class StockfishBot {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async play(state: IPlayState, playerID: string) {
    if (!state.ctx.gameover) {
      const move = await stockfish.getMove(state.G.fen);
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
    stockfish.level = Number(level);
    return {
      bot: StockfishBot,
    };
  },
};
export default config;
