import { IG, IPlayer, Contract, CardColor, ICard } from '../types';

export function getBidName(bid: number): string {
  return `bid_${['suit', 'null', 'grand'][bid]}`;
}

export function getPlayerById(G: IG, playerId: string): IPlayer {
  return G.players.find((p) => p.id === playerId);
}

export function mod(n: number, m: number): number {
  return ((n % m) + m) % m;
}

export function cardRank(contract: Contract, trumpSuit: CardColor, card: ICard): number {
  if (contract == Contract.Null) {
    return 100 * card.color + card.value;
  }
  if (card.value == 11) {
    return 1000 + card.color;
  }
  let color_rank: number = contract != Contract.Grand && card.color == trumpSuit ? 5 : card.color;
  return 100 * color_rank + [7, 8, 9, 12, 13, 10, 14].indexOf(card.value);
}

export function get_cmpCards(contract: Contract, trumpSuit: CardColor) {
  return function (a: ICard, b: ICard): number {
    return cardRank(contract, trumpSuit, a) - cardRank(contract, trumpSuit, b);
  };
}

export const all_valid_bids = [23, 35, 46, 59]
  .concat(
    Array(17)
      .fill(0)
      .map((_, i) => (i + 2) * 9),
  )
  .concat(
    Array(17)
      .fill(0)
      .map((_, i) => (i + 2) * 10),
  )
  .concat(
    Array(17)
      .fill(0)
      .map((_, i) => (i + 2) * 11),
  )
  .concat(
    Array(17)
      .fill(0)
      .map((_, i) => (i + 2) * 12),
  )
  .concat(
    Array(10)
      .fill(0)
      .map((_, i) => (i + 2) * 24),
  )
  .sort((a, b) => a - b);
