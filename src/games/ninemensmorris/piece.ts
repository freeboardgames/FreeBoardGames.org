import { immerable } from 'immer';

export default class Piece {
  [immerable] = true;
  player: string;
  key: number;

  constructor(player: string, key: number) {
    this.player = player;
    this.key = key;
  }
}
