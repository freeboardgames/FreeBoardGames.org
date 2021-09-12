import { Contract, IG, IPlayer, ICard } from '../types';

export function isTrump(G: IG, C: ICard): boolean {
  if (G.contract == Contract.Wenz) {
    return C.value == 11;
  }
  if (G.contract == Contract.Bettel) {
    return false;
  }
  return C.value == 11 || C.value == 12 || C.color == G.trumpSuit;
}

export function getBidName(bid: number): string {
  return `bid_${['pass', 'ace', 'bettel', 'wenz', 'solo'][bid]}`;
}

export function kittySize(numPlayers: number): number {
  return [2, 0][Math.max(0, numPlayers - 3)];
}

export function handSize(numPlayers: number): number {
  return [10, 8][Math.max(0, numPlayers - 3)];
}

export function getPlayerById(G: IG, playerId: string): IPlayer {
  return G.players.find((p) => p.id === playerId);
}

export function mod(n: number, m: number): number {
  return ((n % m) + m) % m;
}
