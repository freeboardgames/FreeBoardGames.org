import { Suit, ICard } from 'gamesShared/definitions/cards';

import { Contract, IG, IPlayer } from '../types';

const SuitOrdering = [Suit.Clubs, Suit.Diamonds, Suit.Hearts, Suit.Spades];

export function suitRank(suit: Suit): number {
  return SuitOrdering.indexOf(suit);
}

export function cardRank(trumpSuit: Suit, card: ICard): number {
  let suit_rank = suitRank(card.suit);
  if (card.suit == trumpSuit) {
    suit_rank = 5;
  }
  const value_rank = card.value == 1 ? 14 : card.value;
  return 100 * suit_rank + value_rank;
}

export function get_cmpCards(trumpSuit: Suit) {
  return function (a: ICard, b: ICard): number {
    return cardRank(trumpSuit, a) - cardRank(trumpSuit, b);
  };
}

function contract2rank(contract: Contract): number {
  let suit_rank = 4;
  if (contract.trumps !== null) {
    suit_rank = suitRank(contract.trumps);
  }
  return 10 * contract.value + 2 * suit_rank;
}

function rank2contract(rank: number): Contract {
  const suit_rank = mod(rank, 10) / 2;
  return {
    trumps: suit_rank == 4 ? null : SuitOrdering[suit_rank],
    value: Math.floor(rank / 10),
  };
}

export function allowedContracts(contract: Contract): Contract[] {
  const rank = !contract ? 9 : contract2rank(contract);
  return Array(39)
    .fill(0)
    .map((_, i) => 2 * i)
    .filter((r) => r > rank)
    .map(rank2contract);
}

export function getPlayerById(G: IG, playerId: string): IPlayer {
  return G.players.find((p) => p.id === playerId);
}

export function mod(n: number, m: number): number {
  return ((n % m) + m) % m;
}
