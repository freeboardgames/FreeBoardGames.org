import { config, ReversiRandomBot } from './ai';
import { Client } from 'boardgame.io/client';
import { IG, ReversiGame } from './game';
import { Step } from 'boardgame.io/ai';

function getClient() {
  return Client({
    game: ReversiGame,
    ai: config.bgioAI('1'),
  });
}

it('should make random move', async () => {
  const client = getClient();
  await Step(client, new ReversiRandomBot());
  const G: IG = client.store.getState().G;
  expect(G.points.filter((point) => point !== null).length).toEqual(5);
});
