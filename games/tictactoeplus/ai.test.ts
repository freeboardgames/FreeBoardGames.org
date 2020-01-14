import AIConfig from './ai';
import { expect } from 'chai';
import { TictactoePlusGame } from './game';
import { Client } from 'boardgame.io/client';

test('Easy AI - should return a move for the initial position', async () => {
  const client = Client({
    game: TictactoePlusGame,
    ai: AIConfig.bgioAI('1'),
  });
  client.moves.clickCell(0); // player plays
  await client.step(); // AI plays
  const { G } = client.store.getState();
  const player0Moves = G.cells.filter((cell: string) => cell === '0');
  const player1Moves = G.cells.filter((cell: string) => cell === '1');
  const player2Moves = G.cells.filter((cell: string) => cell === '2');
  expect(player0Moves.length + player1Moves.length + player2Moves.length).to.equal(2);
});

test('Hard AI - should return a move for the initial position', async () => {
  const client = Client({
    game: TictactoePlusGame,
    ai: AIConfig.bgioAI('2'),
  });
  client.moves.clickCell(0); // player plays
  await client.step(); // AI plays
  const { G } = client.store.getState();
  const player0Moves = G.cells.filter((cell: string) => cell === '0');
  const player1Moves = G.cells.filter((cell: string) => cell === '1');
  const player2Moves = G.cells.filter((cell: string) => cell === '2');
  expect(player0Moves.length + player1Moves.length + player2Moves.length).to.equal(2);
});
