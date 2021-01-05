import AIConfig from './ai.ts';
import { Step, MCTSBot } from 'boardgame.io/ai';
import { TictactoePlusGame } from './game';
import { Client } from 'boardgame.io/client';
import { GameCustommizationState } from 'gamesShared/definitions/customization';
import { TicTacToePlusDifficulty, QuickCustomizationState } from './customization';

function customizationState(difficulty: TicTacToePlusDifficulty): GameCustommizationState {
  const quick: QuickCustomizationState = { difficulty };
  return {
    quick,
  };
}

test('Easy AI - should return a move for the initial position', async () => {
  const aiConfig = AIConfig.bgioAI(customizationState(TicTacToePlusDifficulty.EASY));
  const client = Client({
    game: TictactoePlusGame,
  });
  client.moves.clickCell(0); // player plays
  await Step(client, new aiConfig.bot()); // AI plays
  const { G } = client.store.getState();
  const player0Moves = G.cells.filter((cell: string) => cell === '0');
  const player1Moves = G.cells.filter((cell: string) => cell === '1');
  const player2Moves = G.cells.filter((cell: string) => cell === '2');
  expect(player0Moves.length + player1Moves.length + player2Moves.length).toEqual(2);
});

test('Hard AI - should return a move for the initial position', async () => {
  const aiConfig = AIConfig.bgioAI(customizationState(TicTacToePlusDifficulty.HARD));
  const client = Client({
    game: TictactoePlusGame,
  });
  client.moves.clickCell(0); // player plays
  const bot = new MCTSBot({ game: TictactoePlusGame, enumerate: aiConfig.ai.enumerate });
  await Step(client, bot); // AI plays
  const { G } = client.store.getState();
  const player0Moves = G.cells.filter((cell: string) => cell === '0');
  const player1Moves = G.cells.filter((cell: string) => cell === '1');
  const player2Moves = G.cells.filter((cell: string) => cell === '2');
  expect(player0Moves.length + player1Moves.length + player2Moves.length).toEqual(2);
});
