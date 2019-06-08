export default class Player {
  pieces: number;
  lostPieces: number;
  haveToRemovePiece: boolean;

  constructor() {
    this.pieces = 9;
    this.haveToRemovePiece = false;
  }
}
