import { IShip } from './game';

export const VALID_SETUP_FIRST_PLAYER: IShip[] = [
  {
    player: 0,
    cells: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }],
    sunk: true,
    id: '1',
  },
  {
    player: 0,
    cells: [{ x: 6, y: 0 }, { x: 6, y: 1 }, { x: 6, y: 2 }, { x: 6, y: 3 }],
    sunk: false,
    id: '2',
  },
  {
    player: 0,
    cells: [{ x: 9, y: 0 }, { x: 9, y: 1 }, { x: 9, y: 2 }],
    sunk: false,
    id: '3',
  },
  {
    player: 0,
    cells: [{ x: 9, y: 3 }, { x: 9, y: 4 }, { x: 9, y: 5 }],
    sunk: false,
    id: '4',
  },
  {
    player: 0,
    cells: [{ x: 0, y: 9 }, { x: 1, y: 9 }],
    sunk: false,
    id: '5',
  },
];

export const VALID_SETUP_SECOND_PLAYER: IShip[] = VALID_SETUP_FIRST_PLAYER.map(ship => ({
  ...ship,
  player: 1,
  id: 'second ' + ship.id,
}));

export const VALID_SETUP_PLAYER_LOST0: IShip[] = VALID_SETUP_FIRST_PLAYER.map(ship => ({
  ...ship,
  player: 0,
  id: 'second ' + ship.id,
  sunk: ship.id === '5' ? false : true,
}));

export const VALID_SETUP_PLAYER_LOST1: IShip[] = VALID_SETUP_FIRST_PLAYER.map(ship => ({
  ...ship,
  player: 1,
  id: 'second ' + ship.id,
  sunk: ship.id === '5' ? false : true,
}));
