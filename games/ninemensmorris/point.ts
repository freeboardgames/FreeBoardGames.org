import Piece from './piece';

export default interface Point {
  connections: number[];
  piece: Piece | null;
}
