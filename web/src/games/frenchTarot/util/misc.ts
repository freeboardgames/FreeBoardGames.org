import { CardColor, ICard } from 'gamesShared/definitions/cards';

import { IG, IPlayer, Contract } from '../types';

export function colorRank(color: CardColor): number {
  return [
    CardColor.Diamonds,
    CardColor.Spades,
    CardColor.Hearts,
    CardColor.Clubs,
    CardColor.Trumps,
    CardColor.Excuse,
  ].indexOf(color);
}

export function cmpCards(a: ICard, b: ICard): number {
  return (colorRank(a.color) - colorRank(b.color)) * 100 + (a.value - b.value);
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

export function isColorCard(card: ICard): boolean {
  return card.color != CardColor.Excuse && card.color != CardColor.Trumps;
}

export function getPlayerById(G: IG, playerId: string): IPlayer {
  return G.players.find((p) => p.id === playerId);
}

export function mod(n: number, m: number): number {
  return ((n % m) + m) % m;
}
