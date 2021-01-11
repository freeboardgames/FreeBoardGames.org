import AIConfig from './ai';
import { Step, MCTSBot } from 'boardgame.io/ai';
import { TictactoeGame } from './game';
import { Client } from 'boardgame.io/client';
import { GameCustomizationState } from 'gamesShared/definitions/customization';
import { TicTacToeDifficulty, QuickCustomizationState } from './customization';

function customizationState(difficulty: TicTacToeDifficulty): GameCustomizationState {
  const quick: QuickCustomizationState = { difficulty };
  return {
    quick,
  };
}

test('Easy AI - should return a move for the initial position', async () => {
  const aiConfig = AIConfig.bgioAI(customizationState(TicTacToeDifficulty.EASY));
  const client = Client({
    game: TictactoeGame,
  });
  client.moves.clickCell(0); // player plays
  await Step(client, new aiConfig.ai()); // AI plays
  const { G } = client.store.getState();
  const player0Moves = G.cells.filter((cell: string) => cell === '0');
  const player1Moves = G.cells.filter((cell: string) => cell === '1');
  expect(player0Moves.length).toEqual(1);
  expect(player1Moves.length).toEqual(1);
});

test('Hard AI - should return a move for the initial position', async () => {
  const aiConfig = AIConfig.bgioAI(customizationState(TicTacToeDifficulty.HARD));
  const client = Client({
    game: TictactoeGame,
  });
  client.moves.clickCell(0); // player plays
  const bot = new MCTSBot({ game: TictactoeGame, enumerate: aiConfig.ai.enumerate });
  await Step(client, bot); // AI plays
  const { G } = client.store.getState();
  const player0Moves = G.cells.filter((cell: string) => cell === '0');
  const player1Moves = G.cells.filter((cell: string) => cell === '1');
  expect(player0Moves.length).toEqual(1);
  expect(player1Moves.length).toEqual(1);
});
