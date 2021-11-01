import { Suit, ICard } from 'gamesShared/definitions/cards';

import { IG, IPlayer, Contract } from '../types';

export function suitRank(suit: Suit): number {
  return [Suit.Diamonds, Suit.Spades, Suit.Hearts, Suit.Clubs, Suit.Trumps, Suit.Excuse].indexOf(suit);
}

export function cmpCards(a: ICard, b: ICard): number {
  return (suitRank(a.suit) - suitRank(b.suit)) * 100 + (a.value - b.value);
}

export function getBidName(bid: Contract): string {
  return `bid_${Contract[bid].toLowerCase()}`;
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

export function isSuitCard(card: ICard): boolean {
  return card.suit != Suit.Excuse && card.suit != Suit.Trumps;
}

export function getPlayerById(G: IG, playerId: string): IPlayer {
  return G.players.find((p) => p.id === playerId);
}

export function mod(n: number, m: number): number {
  return ((n % m) + m) % m;
}
