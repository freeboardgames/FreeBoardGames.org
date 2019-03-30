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

it('should shoot a salvo randomly', async () => {
  const client = genReadyClient();

  // AI shoots random salvo
  await client.step();

  const state = client.store.getState();
  expect(state.G.salvos.length).toEqual(1);
});

it('should shoot a salvo at a random neighbor', async () => {
  const client = genReadyClient();

  // Set up board for test:
  bothPlayersMakeMove(client, 9, 3);
  bothPlayersMakeMove(client, 9, 2);
  bothPlayersMakeMove(client, 8, 3);

  // AI shoots random salvo
  await client.step();

  const state = client.store.getState();
  const lastSalvo = state.G.salvos[state.G.salvos.length - 1];
  expect(lastSalvo.cell.x).toEqual(9);
  expect(lastSalvo.cell.y).toEqual(4);
});

it('should shoot a salvo at a cell between min/max SalvoPos', async () => {
  const client = genReadyClient();

  // Set up board for test:
  bothPlayersMakeMove(client, 6, 2);
  bothPlayersMakeMove(client, 6, 3);
  bothPlayersMakeMove(client, 6, 4);

  // AI shoots random salvo
  await client.step();

  const state = client.store.getState();
  const lastSalvo = state.G.salvos[state.G.salvos.length - 1];

  expect(lastSalvo.cell.x).toEqual(6);
  expect(lastSalvo.cell.y).toEqual(1);
});

// returns a client, setup phase
function genClient() {
  return Client({
    game: SeabattleGame,
    ai: AIConfig.bgioAI('1'),
  });
}

// returns a client, play phase, no salvos, player 1's turn
function genReadyClient() {
  const client = genClient();

  client.moves.setShips(VALID_SETUP_FIRST_PLAYER);
  client.updatePlayerID('1');
  client.moves.setShips(VALID_SETUP_SECOND_PLAYER);

  return client;
}

function bothPlayersMakeMove(client: any, x: number, y: number) {
  const player = client.store.getState().ctx.currentPlayer;
  client.moves.salvo(x, y);  // initial player fires

  const nextPlayer = (player === '0') ? '1' : '0';
  client.updatePlayerID(nextPlayer);
  client.moves.salvo(x, y);  // other player fires

  client.updatePlayerID(player);  // switch back to current player
}
