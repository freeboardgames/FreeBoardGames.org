import AIConfig from './ai';
import { Client } from '@freeboardgame.org/boardgame.io/client';
import { SeabattleGame, IShip, generateRandomShips, validateShips, playerView } from './game';
import { VALID_SETUP_FIRST_PLAYER, VALID_SETUP_SECOND_PLAYER } from './mocks';

it('should set ships correctly', async () => {
  const client = genClient();

  client.moves.setShips(VALID_SETUP_FIRST_PLAYER);
  client.updatePlayerID('1');

  // AI setShips
  await client.step();

  expect(client.store.getState().ctx.phase).toEqual('play');
});

it('should shoot a random salvo', async () => {
  const client = genReadyClient();

  // AI shoots random salvo
  await client.step();

  const state = client.store.getState();
  expect(state.G.salvos.length).toEqual(1);
});

function genClient() {
  return Client({
    game: SeabattleGame,
    ai: AIConfig.bgioAI('1'),
  });
}

function genReadyClient() {
  const client = genClient();
  client.moves.setShips(VALID_SETUP_FIRST_PLAYER);
  client.updatePlayerID('1');
  client.moves.setShips(VALID_SETUP_SECOND_PLAYER);
  return client;
}
