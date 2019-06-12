import Piece from './piece';

export default class Point {
  connections: number[];
  piece: Piece;

  constructor() {
    this.connections = [];
    this.piece = null;
  }
}
