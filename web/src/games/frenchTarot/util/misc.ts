import { IG, IPlayer, ICard, CardColor } from '../types';

import * as Placement from './placement';
import * as Discard from './discard';
import * as Poignee from './poignee';
import * as Summary from './summary';
export { Placement, Discard, Poignee, Summary };

export function getBidName(bid: number): string {
  return `bid_${['pass', 'small', 'guard', 'guard_without', 'guard_against'][bid]}`;
}

export function kittySize(numPlayers: number): number {
  return [6, 6, 3][Math.max(0, numPlayers - 3)];
}

export function handSize(numPlayers: number): number {
  return [24, 18, 15][Math.max(0, numPlayers - 3)];
}

export function pointsRequiredToWin(numBouts: number): number {
  return [56, 51, 41, 36][numBouts];
}

export function isColorCard(card: ICard): boolean {
  return card.color != CardColor.Excuse && card.color != CardColor.Trumps;
}

export function getPlayerById(G: IG, playerId: string): IPlayer {
  return G.players.find((p) => p.id === playerId);
}

export function mod(n: number, m: number): number {
  return ((n % m) + m) % m;
}
