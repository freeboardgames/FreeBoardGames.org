const ChessPkg = require('chess.js'); // tslint:disable-line
import Chess from 'chess.js';

export default function ChessFn() {
  let chess = null;
  if (ChessPkg.Chess) {
    chess = new ChessPkg.Chess();
  } else {
    chess = new ChessPkg();
  }
  return chess as Chess;
}
