import { Client } from 'boardgame.io/client';
import { BattleshipGame, Ship, Cell } from './game';

const VALID_SETUP_FIRST_PLAYER: Ship[] = [
  {
    player: 0,
    cells: [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 2, y: 0 },
      { x: 3, y: 0 },
      { x: 4, y: 0 },
    ],
  },
  {
    player: 0,
    cells: [
      { x: 6, y: 0 },
      { x: 6, y: 1 },
      { x: 6, y: 2 },
      { x: 6, y: 3 },
    ],
  },
  {
    player: 0,
    cells: [
      { x: 9, y: 0 },
      { x: 9, y: 1 },
      { x: 9, y: 2 },
    ],
  },
  {
    player: 0,
    cells: [
      { x: 9, y: 3 },
      { x: 9, y: 4 },
      { x: 9, y: 5 },
    ],
  },
  {
    player: 0,
    cells: [
      { x: 0, y: 9 },
      { x: 1, y: 9 },
    ],
  },
];

const VALID_SETUP_SECOND_PLAYER: Ship[] = VALID_SETUP_FIRST_PLAYER.map((ship) => ({
  ...ship,
  player: 1,
}));

describe('Battleship', () => {
  it('should set ships correctly', () => {
    const client = Client({
      game: BattleshipGame,
    });
    client.moves.setShips(VALID_SETUP_FIRST_PLAYER);
    client.events.endTurn();

    client.moves.setShips(VALID_SETUP_SECOND_PLAYER);
    client.events.endTurn();

    const { G, ctx } = client.store.getState();
    expect(G.ships.length).toEqual(10);
  });

  it('should only allow correct ship sizes', () => {
    const client = Client({
      game: BattleshipGame,
    });

    expect(() => {
      client.moves.setShips([{player: 0, cells: [ { x: 0, y: 9 }, { x: 1, y: 9 }]}]);
    }).toThrow();
  });

  it('should only allow correct player to set ships', () => {
    const client = Client({
      game: BattleshipGame,
    });

    expect(() => {
      client.moves.setShips(VALID_SETUP_SECOND_PLAYER);
    }).toThrow();
  });

  it('should only allow continuous ships', () => {
    const client = Client({
      game: BattleshipGame,
    });

    const invalid = [... VALID_SETUP_FIRST_PLAYER];
    invalid[4] = {player: 0, cells: [{x: 0, y: 9}, {x: 1, y: 8}]};

    expect(() => {
      client.moves.setShips(invalid);
    }).toThrow();
  });

  it('should not have out of bounds ships', () => {
    const client = Client({
      game: BattleshipGame,
    });

    const invalid = [... VALID_SETUP_FIRST_PLAYER];
    invalid[4] = {player: 0, cells: [{x: -1, y: 9}, {x: 0, y: 9}]};

    expect(() => {
      client.moves.setShips(invalid);
    }).toThrow();
  });

  it('should not have overlapping ships', () => {
    const client = Client({
      game: BattleshipGame,
    });

    const invalid = [... VALID_SETUP_FIRST_PLAYER];
    invalid[4] = {player: 0, cells: [{x: 0, y: 0}, {x: 0, y: 1}]};

    expect(() => {
      client.moves.setShips(invalid);
    }).toThrow();
  });
});
