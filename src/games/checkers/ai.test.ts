import AIConfig from './ai';
import { Client } from '@freeboardgame.org/boardgame.io/client';
import { IG, CheckersGame, INITIAL_BOARD } from './game';

function getClient() {
  return Client({
    game: CheckersGame,
    ai: AIConfig.bgioAI('1'),
  });
}

it('should make random move', async () => {
  const client = getClient();
  await client.step();
  const G: IG = client.store.getState().G;
  expect(G.board).not.toEqual(INITIAL_BOARD);
});
