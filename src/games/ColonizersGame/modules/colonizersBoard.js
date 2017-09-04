import {
  newTile
} from './colonizersTile.js';

export function newBoard () {
  let board = {tiles: [],
    edges: [],
    points: [],
    ports: []
  };
  for (let x=0; x <= 4; x++) {
    board.tiles.push([]);
    for (let y=0; y <= 4; y++) {
      board.tiles[x].push(newTile(board, x, y));
    }
  }
  return board;
}

export function expandOuterEdges() {

}
