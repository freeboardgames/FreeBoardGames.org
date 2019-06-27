import { immerable } from 'immer';
import Piece from './piece';

export default class Point {
  [immerable] = true;
  connections: number[];
  piece: Piece;

  constructor() {
    this.connections = [];
    this.piece = null;
  }
}
