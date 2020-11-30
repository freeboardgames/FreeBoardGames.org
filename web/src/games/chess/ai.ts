import { IAIConfig } from 'gamesShared/definitions/game';
import StockfishWorker from './stockfish8.worker';

interface IPlayState {
  G: any;
  ctx: any;
}

const LVL_MOVETIMES = [100, 200, 300, 400, 600, 800, 1000, 2000];
const LVL_DEPTHS = [1, 1, 2, 3, 5, 8, 13, 22];

let botLevel = 1;

class Stockfish {
  worker: any;

  constructor() {
    this.worker = new StockfishWorker();
  }

  start() {
    this.send('isready');
  }

  send(message: string) {
    this.worker.postMessage(message);
  }

  async getMove(fen: string): Promise<string> {
    return await new Promise((resolve) => {
      this.worker.onmessage = (event: any) => {
        const msg = event.data;
        if (msg && msg.includes('bestmove')) {
          resolve(msg.split(' ')[1]);
        }
      };
      const lvl = Math.round(((botLevel - 1) * 20.0) / 7);
      this.send(`setoption name Skill Level value ${lvl}`);
      if (fen !== '') {
        this.send(`position fen ${fen}`);
      } else {
        this.send('position startpos');
      }
      const depth = LVL_DEPTHS[botLevel - 1];
      const movetime = LVL_MOVETIMES[botLevel - 1];
      this.send(`go depth ${depth} movetime ${movetime}`);
    });
  }
}

export class StockfishBot {
  stockfish = new Stockfish();

  constructor(isTest = false) {
    if (!isTest) {
      this.stockfish.start();
    }
  }

  async play(state: IPlayState) {
    if (!state.ctx.gameover) {
      const move = await this.stockfish.getMove(state.G.fen);
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
    botLevel = Number(level);
    return StockfishBot;
  },
};
export default config;
