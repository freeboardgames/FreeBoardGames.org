import AIConfig from './ai';
import { expect } from 'chai';
import { TictactoeGame } from './game';
import { Client } from '@freeboardgame.org/boardgame.io/client';

test('Easy AI - should return a move for the initial position', async () => {
  const client = Client({
    game: TictactoeGame,
    ai: AIConfig.bgioAI('1'),
  });
  await client.moves.clickCell(0);  // player plays
  await client.step();  // AI plays
  const { G, ctx } = client.store.getState();
  const player0Moves = G.cells.filter((cell: string) => cell === '0');
  const player1Moves = G.cells.filter((cell: string) => cell === '1');
  expect(player0Moves.length).to.equal(1);
  expect(player1Moves.length).to.equal(1);
});

test('Hard AI - should return a move for the initial position', async () => {
  const client = Client({
    game: TictactoeGame,
    ai: AIConfig.bgioAI('2'),
  });
  await client.moves.clickCell(0);  // player plays
  await client.step();  // AI plays
  const { G, ctx } = client.store.getState();
  const player0Moves = G.cells.filter((cell: string) => cell === '0');
  const player1Moves = G.cells.filter((cell: string) => cell === '1');
  expect(player0Moves.length).to.equal(1);
  expect(player1Moves.length).to.equal(1);
});
