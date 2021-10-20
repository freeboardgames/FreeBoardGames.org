import { ICard, CardColor } from 'gamesShared/definitions/cards';
import { Contract, IG, IPlayer } from '../types';

export function isTrump(G: IG, C: ICard): boolean {
  if (G.contract == Contract.Wenz) {
    return C.value == 11;
  }
  if (G.contract == Contract.Bettel) {
    return false;
  }
  return C.value == 11 || C.value == 12 || C.color == G.trumpSuit;
}

export function colorRank(color: CardColor): number {
  return [CardColor.Schell, CardColor.Herz, CardColor.Gras, CardColor.Eichel].indexOf(color);
}

export function cardRank(contract: Contract, trumpSuit: CardColor, card: ICard): number {
  let color_rank = colorRank(card.color);
  if (contract == Contract.Bettel) {
    return 100 * color_rank + card.value;
  }
  if (card.value == 11) {
    return 1000 + color_rank;
  }
  if (contract != Contract.Wenz && card.value == 12) {
    return 10000 + color_rank;
  }
  if (contract != Contract.Wenz && card.color == trumpSuit) {
    color_rank = 5;
  }
  let val_order: number[] = contract == Contract.Wenz ? [7, 8, 9, 12, 13, 10, 14] : [7, 8, 9, 13, 10, 14];
  return 100 * color_rank + val_order.indexOf(card.value);
}

export function get_cmpCards(contract: Contract, trumpSuit: CardColor) {
  return function (a: ICard, b: ICard): number {
    return cardRank(contract, trumpSuit, a) - cardRank(contract, trumpSuit, b);
  };
}

export function getBidName(bid: number): string {
  return `bid_${['pass', 'some', 'ace', 'bettel', 'wenz', 'solo'][bid]}`;
}

export function allowedBids(G: IG): Contract[] {
  const is_first_bidround = G.players.some((P) => P.bid == Contract.None);
  if (is_first_bidround) return [Contract.Pass, Contract.Some];
  const numBidders = G.players.filter((P) => P.bid >= Contract.Some).length;
  let allowed = [Contract.Ace, Contract.Bettel, Contract.Wenz, Contract.Solo];
  if (G.players.length == 3) {
    allowed = allowed.slice(1);
  }
  return numBidders == 1 ? allowed : [Contract.Pass].concat(allowed);
}

export function getPlayerById(G: IG, playerId: string): IPlayer {
  return G.players.find((p) => p.id === playerId);
}

export function mod(n: number, m: number): number {
  return ((n % m) + m) % m;
}
