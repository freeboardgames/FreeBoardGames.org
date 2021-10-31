import AIConfig from './ai';
import { Step } from 'boardgame.io/ai';
import { Client } from 'boardgame.io/client';
import { IG, BashniGame, INITIAL_BOARD } from './game';

function getClient() {
  return Client({
    game: BashniGame,
    ai: AIConfig.bgioAI('1'),
  });
}

it('should make random move', async () => {
  const client = getClient();
  await Step(client, new (AIConfig.bgioAI('1').bot)()); // AI plays
  const G: IG = client.store.getState().G;
  expect(G.board).not.toEqual(INITIAL_BOARD);
});
