import { Client } from 'boardgame.io/client';
import { SeabattleGame, IShip, generateRandomShips } from './game';

const VALID_SETUP_FIRST_PLAYER: IShip[] = [
  {
    player: 0,
    cells: [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 2, y: 0 },
      { x: 3, y: 0 },
      { x: 4, y: 0 },
    ],
    sunk: false,
  },
  {
    player: 0,
    cells: [
      { x: 6, y: 0 },
      { x: 6, y: 1 },
      { x: 6, y: 2 },
      { x: 6, y: 3 },
    ],
    sunk: false,
  },
  {
    player: 0,
    cells: [
      { x: 9, y: 0 },
      { x: 9, y: 1 },
      { x: 9, y: 2 },
    ],
    sunk: false,
  },
  {
    player: 0,
    cells: [
      { x: 9, y: 3 },
      { x: 9, y: 4 },
      { x: 9, y: 5 },
    ],
    sunk: false,
  },
  {
    player: 0,
    cells: [
      { x: 0, y: 9 },
      { x: 1, y: 9 },
    ],
    sunk: false,
  },
];

const VALID_SETUP_SECOND_PLAYER: IShip[] = VALID_SETUP_FIRST_PLAYER.map((ship) => ({
  ...ship,
  player: 1,
}));

describe('Seabattle', () => {
  it('should set ships correctly', () => {
    const client = Client({
      game: SeabattleGame,
    });

    client.moves.setShips(VALID_SETUP_FIRST_PLAYER);
    client.updatePlayerID('1');
    client.moves.setShips(VALID_SETUP_SECOND_PLAYER);
    expect(client.store.getState().ctx.phase).toEqual('play');
  });

  it('should randomly generate and set ships correctly', () => {
    const client = Client({
      game: SeabattleGame,
    });
    const store = client.store;
    client.moves.setShips(generateRandomShips(0));
    client.updatePlayerID('1');
    client.moves.setShips(generateRandomShips(1));
    expect(store.getState().ctx.phase).toEqual('play');
  });

  it('should only allow correct ship sizes', () => {
    const client = Client({
      game: SeabattleGame,
    });

    expect(() => {
      client.moves.setShips([{player: 0, cells: [ { x: 0, y: 9 }, { x: 1, y: 9 }]}]);
    }).toThrow();
  });

  it('should only allow correct player to set ships', () => {
    const client = Client({
      game: SeabattleGame,
    });

    expect(() => {
      client.moves.setShips(VALID_SETUP_SECOND_PLAYER);
    }).toThrow();
  });

  it('should only allow continuous ships', () => {
    const client = Client({
      game: SeabattleGame,
    });

    const invalid = [... VALID_SETUP_FIRST_PLAYER];
    invalid[4] = {player: 0, cells: [{x: 0, y: 9}, {x: 1, y: 8}], sunk: false};

    expect(() => {
      client.moves.setShips(invalid);
    }).toThrow();
  });

  it('should not have out of bounds ships', () => {
    const client = Client({
      game: SeabattleGame,
    });

    const invalid = [... VALID_SETUP_FIRST_PLAYER];
    invalid[4] = {player: 0, cells: [{x: -1, y: 9}, {x: 0, y: 9}], sunk: false};

    expect(() => {
      client.moves.setShips(invalid);
    }).toThrow();
  });

  it('should not have overlapping ships', () => {
    const client = Client({
      game: SeabattleGame,
    });

    const invalid = [... VALID_SETUP_FIRST_PLAYER];
    invalid[4] = {player: 0, cells: [{x: 0, y: 0}, {x: 0, y: 1}], sunk: false};

    expect(() => {
      client.moves.setShips(invalid);
    }).toThrow();
  });

  it('should hit ship correctly', () => {
    const client = Client({
      game: SeabattleGame
    });
    client.moves.setShips(VALID_SETUP_FIRST_PLAYER);
    client.updatePlayerID('1');
    client.moves.setShips(VALID_SETUP_SECOND_PLAYER);

    client.updatePlayerID('0');
    client.moves.salvo(0, 0);

    const { G, ctx } = client.store.getState();
    expect(G.salvos).toEqual([{player: 0, cell: {x: 0, y: 0}, hit: true, hitShip: 0}]);
  });

  it('should miss ship correctly', () => {
    const client = Client({
      game: SeabattleGame,
    });
    client.moves.setShips(VALID_SETUP_FIRST_PLAYER);
    client.updatePlayerID("1");
    client.moves.setShips(VALID_SETUP_SECOND_PLAYER);

    client.updatePlayerID('0');
    client.moves.salvo(0, 1);
    client.moves.salvo(0, 2); // ignore because it is not player 0 turn

    const { G, ctx } = client.store.getState();
    expect(G.salvos).toEqual([{player: 0, cell: {x: 0, y: 1}, hit: false}]);
  });

  /* TODO: Fix imutability error.
  it('should sunk ship correctly', () => {
    const client = Client({
      game: SeabattleGame,
    });
    client.moves.setShips(VALID_SETUP_FIRST_PLAYER);
    client.events.endTurn();
    client.moves.setShips(VALID_SETUP_SECOND_PLAYER);
    client.events.endTurn();

    client.moves.salvo(0, 9);
    client.moves.salvo(1, 9);

    const { G, ctx } = client.store.getState();
    expect(G.salvos).toEqual([{player: 0, cell: {x: 0, y: 9}, hit: true, hitShip: 4},
                              {player: 0, cell: {x: 1, y: 9}, hit: true, hitShip: 4}]);
    expect(G.ships[4].sunk).toEqual(true);
  });*/
});
