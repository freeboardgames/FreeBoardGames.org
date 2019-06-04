import { Client } from '@freeboardgame.org/boardgame.io/client';
import { SeabattleGame, generateRandomShips, playerView } from './game';
import { VALID_SETUP_FIRST_PLAYER, VALID_SETUP_SECOND_PLAYER } from './mocks';

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
      client.moves.setShips([{ player: 0, cells: [{ x: 0, y: 9 }, { x: 1, y: 9 }] }]);
    }).toThrow();
  });

  it('should only allow unique IDs', () => {
    const client = Client({
      game: SeabattleGame,
    });
    expect(() => {
      client.moves.setShips([
        { player: 0, id: 1, cells: [{ x: 0, y: 9 }, { x: 1, y: 9 }] },
        { player: 0, id: 1, cells: [{ x: 2, y: 9 }, { x: 3, y: 9 }] },
      ]);
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

  it('should only allow correctly length ships', () => {
    const client = Client({
      game: SeabattleGame,
    });

    const invalid = [...VALID_SETUP_FIRST_PLAYER];
    invalid[4] = { player: 0, cells: [{ x: 0, y: 9 }], sunk: false };

    expect(() => {
      client.moves.setShips(invalid);
    }).toThrow();
  });

  it('should only allow continuous ships', () => {
    const client = Client({
      game: SeabattleGame,
    });

    const invalid = [...VALID_SETUP_FIRST_PLAYER];
    invalid[4] = { player: 0, cells: [{ x: 0, y: 9 }, { x: 1, y: 8 }], sunk: false };

    expect(() => {
      client.moves.setShips(invalid);
    }).toThrow();
  });

  it('should only allow continuous ships 2', () => {
    const client = Client({
      game: SeabattleGame,
    });

    const invalid = [...VALID_SETUP_FIRST_PLAYER];
    invalid[4] = { player: 0, cells: [{ x: 0, y: 9 }, { x: 0, y: 8 }, { x: 1, y: 7 }], sunk: false };

    expect(() => {
      client.moves.setShips(invalid);
    }).toThrow();
  });

  it('should not have out of bounds ships', () => {
    const client = Client({
      game: SeabattleGame,
    });

    const invalid = [...VALID_SETUP_FIRST_PLAYER];
    invalid[4] = { player: 0, cells: [{ x: -1, y: 9 }, { x: 0, y: 9 }], sunk: false };

    expect(() => {
      client.moves.setShips(invalid);
    }).toThrow();
  });

  it('should not have overlapping ships', () => {
    const client = Client({
      game: SeabattleGame,
    });

    const invalid = [...VALID_SETUP_FIRST_PLAYER];
    invalid[4] = { player: 0, cells: [{ x: 0, y: 0 }, { x: 0, y: 1 }], sunk: false };

    expect(() => {
      client.moves.setShips(invalid);
    }).toThrow();
  });

  it('should show victory correctly - player 0 loss', () => {
    const client = Client({
      game: SeabattleGame,
    });
    const store = client.store;
    client.moves.setShips(
      VALID_SETUP_FIRST_PLAYER.map(ship => ({
        ...ship,
        sunk: true,
      })),
    );
    client.updatePlayerID('1');
    client.moves.setShips(VALID_SETUP_SECOND_PLAYER);

    expect(store.getState().ctx.gameover.winner).toEqual('1');
  });

  it('should show victory correctly - player 1 loss', () => {
    const client = Client({
      game: SeabattleGame,
    });
    const store = client.store;
    client.moves.setShips(VALID_SETUP_FIRST_PLAYER);
    client.updatePlayerID('1');
    client.moves.setShips(
      VALID_SETUP_SECOND_PLAYER.map(ship => ({
        ...ship,
        sunk: true,
      })),
    );

    expect(store.getState().ctx.gameover.winner).toEqual('0');
  });

  it('should hit ship correctly', () => {
    const client = Client({
      game: SeabattleGame,
    });
    const store = client.store;
    client.moves.setShips(VALID_SETUP_FIRST_PLAYER);
    client.updatePlayerID('1');
    client.moves.setShips(VALID_SETUP_SECOND_PLAYER);

    client.moves.salvo(0, 0);

    expect(store.getState().G.salvos).toEqual([{ player: 1, cell: { x: 0, y: 0 }, hit: true, hitShip: '1' }]);
  });

  it('should miss ship correctly', () => {
    const client = Client({
      game: SeabattleGame,
    });
    client.moves.setShips(VALID_SETUP_FIRST_PLAYER);
    client.updatePlayerID('1');
    client.moves.setShips(VALID_SETUP_SECOND_PLAYER);

    client.moves.salvo(0, 1);

    const { G } = client.store.getState();
    expect(G.salvos).toEqual([{ player: 1, cell: { x: 0, y: 1 }, hit: false }]);
  });

  it('should not allow duplicate moves', () => {
    const client = Client({
      game: SeabattleGame,
    });
    client.moves.setShips(VALID_SETUP_FIRST_PLAYER);
    client.updatePlayerID('1');
    client.moves.setShips(VALID_SETUP_SECOND_PLAYER);

    client.moves.salvo(0, 0);
    client.updatePlayerID('0');
    client.moves.salvo(0, 0);
    client.updatePlayerID('1');
    client.moves.salvo(0, 0);

    const { G } = client.store.getState();

    expect(G.salvos.length).toEqual(2);
  });

  it('should sink ship correctly', () => {
    const client = Client({
      game: SeabattleGame,
    });
    client.moves.setShips(VALID_SETUP_FIRST_PLAYER);
    client.updatePlayerID('1');
    client.moves.setShips(VALID_SETUP_SECOND_PLAYER);

    client.moves.salvo(0, 9);
    client.updatePlayerID('0');
    client.moves.salvo(0, 0);
    client.updatePlayerID('1');
    client.moves.salvo(1, 9);

    const { G, ctx } = client.store.getState();
    const newG = playerView(G, ctx, '1');
    expect(newG.salvos).toEqual([
      { player: 1, cell: { x: 0, y: 9 }, hit: true, hitShip: '5' },
      { player: 0, cell: { x: 0, y: 0 }, hit: true, hitShip: 'second 1' },
      { player: 1, cell: { x: 1, y: 9 }, hit: true, hitShip: '5' },
    ]);
    expect(newG.ships[2].sunk).toEqual(true);
  });
});
