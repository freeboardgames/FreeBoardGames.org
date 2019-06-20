export default class Piece {
  player: string;
  key: number;

  constructor(player: string, key: number) {
    this.player = player;
    this.key = key;
  }
}
