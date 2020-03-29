import AIConfig from './ai';
import { Client } from 'boardgame.io/client';
import { IG, ReversiGame } from './game';

function getClient() {
  return Client({
    game: ReversiGame,
    ai: AIConfig.bgioAI('1'),
  });
}

it('should make random move', async () => {
  const client = getClient();
  await client.step();
  const G: IG = client.store.getState().G;
  expect(G.points.filter((point) => point !== null).length).toEqual(5);
});
