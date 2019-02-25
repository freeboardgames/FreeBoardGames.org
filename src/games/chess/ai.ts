import { IAIConfig } from '../index';
// @ts-ignore
import StockfishWorker from 'worker-loader?name=[hash].stockfish.worker.js&inline=true&fallback=false!./stockfish8';

interface IPlayState {
  G: any;
  ctx: any;
}

class StockfishBot {
  play(state: IPlayState, playerID: string) {
    const G = state.G;
    const ctx = state.ctx;
    return this.makeMove('e2e4', playerID);
  }

  makeMove(move: string, playerID: string) {
    return { action: { type: 'MAKE_MOVE', payload: { type: 'move', args: [move], playerID } } };
  }
}
const config: IAIConfig = {
  bgioAI: (level: string) => {
    const worker = new StockfishWorker();
    worker.postMessage('isready');
    worker.onmessage = (event: any) => {
      console.log(`<<< ${event.data}`); // tslint:disable-line
    };
    console.log(`Set level to: ${level}`); // tslint:disable-line
    return {
      bot: StockfishBot,
    };
  },
};
export default config;
