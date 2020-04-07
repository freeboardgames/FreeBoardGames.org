import { config, TakeSixBot } from './ai';
import { Client } from 'boardgame.io/client';
import { Step } from 'boardgame.io/ai';
import { IG, TakeSixGameForTest } from './game';

function getClient() {
  return Client({
    game: TakeSixGameForTest({ seed: 0 }),
    ai: config.bgioAI('1'),
  });
}

it('should select card', async () => {
  const client = getClient();
  client.moves.selectCard(0);
  client.updatePlayerID('1');
  await Step(client, new TakeSixBot());
  const G: IG = client.store.getState().G;
  expect(G.players[1].cards.length).toEqual(9);
});

it('should select deck', async () => {
  const client = getClient();
  client.moves.selectCard(0);
  client.updatePlayerID('1');
  client.moves.selectCard(0);
  const decksBefore = client.store.getState().G.decks;
  await Step(client, new TakeSixBot());
  const decksAfter = client.store.getState().G.decks;
  expect(decksBefore).not.toEqual(decksAfter);
});

it('should select deck with forced option', async () => {
  const client = getClient();
  client.moves.selectCard(9);
  client.updatePlayerID('1');
  client.moves.selectCard(5);
  await Step(client, new TakeSixBot());
  const G: IG = client.store.getState().G;
  expect(Math.max(...G.decks.map((deck) => deck.length))).toEqual(2);
});
