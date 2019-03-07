import AIConfig from './ai';
import { expect } from 'chai';
import { ChessGame } from './game';
import { Client } from '@freeboardgame.org/boardgame.io/client';

test('should return a move for the initial position', async () => {
  const Bot = AIConfig.bgioAI('1').bot;
  const bot = new Bot();
  const client = Client({
    game: ChessGame,
  });
  const state = client.store.getState();
  const move = await bot.play({ G: state.G, ctx: state.ctx }, '0');
  expect(move.action.payload.args[0]).to.equal('e2e3');
});

test('should return a move for the another position', async () => {
  const Bot = AIConfig.bgioAI('1').bot;
  const bot = new Bot();
  const client = Client({
    game: ChessGame,
  });
  client.moves.move('f3');
  const state = client.store.getState();
  const move = await bot.play({ G: state.G, ctx: state.ctx }, '1');
  expect(move.action.payload.args[0]).to.equal('e2e3');
});

test('should return empty object when game is over', async () => {
  const Bot = AIConfig.bgioAI('1').bot;
  const bot = new Bot();
  const move = await bot.play({ G: {}, ctx: { gameover: '1' } }, '0');
  expect(move).to.deep.equal({});
});
