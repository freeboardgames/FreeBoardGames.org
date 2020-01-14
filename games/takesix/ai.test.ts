import AIConfig from './ai';
import { Client } from 'boardgame.io/client';
import { IG, TakeSixGameForTest } from './game';

function getClient() {
  return Client({
    game: TakeSixGameForTest({ seed: 0 }),
    ai: AIConfig.bgioAI('1'),
  });
}

it('should select card', async () => {
  const client = getClient();
  client.moves.selectCard(0);
  client.updatePlayerID('1');
  await client.step();
  const G: IG = client.store.getState().G;
  expect(G.players[1].cards.length).toEqual(9);
});

it('should select deck', async () => {
  const client = getClient();
  client.moves.selectCard(0);
  client.updatePlayerID('1');
  client.moves.selectCard(0);
  const decksBefore = client.store.getState().G.decks;
  await client.step();
  const decksAfter = client.store.getState().G.decks;
  expect(decksBefore).not.toEqual(decksAfter);
});

it('should select deck with forced option', async () => {
  const client = getClient();
  client.moves.selectCard(9);
  client.updatePlayerID('1');
  client.moves.selectCard(5);
  await client.step();
  const G: IG = client.store.getState().G;
  expect(Math.max(...G.decks.map(deck => deck.length))).toEqual(2);
});
