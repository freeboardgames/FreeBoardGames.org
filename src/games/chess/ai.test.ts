jest.mock('./stockfish8.worker');
import StockfishWorker from './stockfish8.worker';
import { StockfishBot } from './ai';
import { ChessGame } from './game';
import { Client } from 'boardgame.io/client';

StockfishWorker.prototype.postMessage = function (msg: string) {
  if (msg.includes(`go depth`)) {
    this.onmessage({ data: 'bestmove e2e3' });
  }
};

describe('Chess AI', () => {
  test('should return a move for the initial position', async () => {
    const bot = new StockfishBot(true);
    const client = Client({
      game: ChessGame,
    });
    const state = client.store.getState();
    const move = (await bot.play({ G: state.G, ctx: state.ctx })) as any;
    expect(move.action.payload.args[0]).toEqual('e2e3');
  });

  test('should return a move for the another position', async () => {
    const bot = new StockfishBot(true);
    const client = Client({
      game: ChessGame,
    });
    client.moves.move('f3');
    const state = client.store.getState();
    const move = (await bot.play({ G: state.G, ctx: state.ctx })) as any;
    expect(move.action.payload.args[0]).toEqual('e2e3');
  });

  test('should return empty object when game is over', async () => {
    const bot = new StockfishBot(true);
    const move = await bot.play({ G: {}, ctx: { gameover: '1' } });
    expect(move).toEqual({});
  });
});
