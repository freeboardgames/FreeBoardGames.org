import AIConfig from './ai.ts';
import { Step, MCTSBot } from 'boardgame.io/ai';
import { TictactoePlusGame } from './game';
import { Client } from 'boardgame.io/client';

test('Easy AI - should return a move for the initial position', async () => {
  const client = Client({
    game: TictactoePlusGame,
    ai: AIConfig.bgioAI('1'),
  });
  client.moves.clickCell(0); // player plays
  await Step(client, new (AIConfig.bgioAI('1').bot)()); // AI plays
  const { G } = client.store.getState();
  const player0Moves = G.cells.filter((cell: string) => cell === '0');
  const player1Moves = G.cells.filter((cell: string) => cell === '1');
  const player2Moves = G.cells.filter((cell: string) => cell === '2');
  expect(player0Moves.length + player1Moves.length + player2Moves.length).toEqual(2);
});

test('Hard AI - should return a move for the initial position', async () => {
  const client = Client({
    game: TictactoePlusGame,
    ai: AIConfig.bgioAI('2'),
  });
  client.moves.clickCell(0); // player plays
  const bot = new MCTSBot({ game: TictactoePlusGame, enumerate: AIConfig.bgioAI('2').ai.enumerate });
  await Step(client, bot); // AI plays
  const { G } = client.store.getState();
  const player0Moves = G.cells.filter((cell: string) => cell === '0');
  const player1Moves = G.cells.filter((cell: string) => cell === '1');
  const player2Moves = G.cells.filter((cell: string) => cell === '2');
  expect(player0Moves.length + player1Moves.length + player2Moves.length).toEqual(2);
});
