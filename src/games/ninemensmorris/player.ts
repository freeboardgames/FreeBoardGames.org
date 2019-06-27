import { immerable } from 'immer';

export default class Player {
  [immerable] = true;
  lostPieces: number;
  constructor() {
    this.lostPieces = 0;
  }
}
