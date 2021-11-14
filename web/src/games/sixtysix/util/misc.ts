import { Suit, ICard } from 'gamesShared/definitions/cards';

import { IG, IPlayer } from '../types';

export function getPlayerById(G: IG, playerId: string): IPlayer {
  return G.players.find((p) => p.id === playerId);
}

export function mod(n: number, m: number): number {
  return ((n % m) + m) % m;
}

export function suitRank(suit: Suit): number {
  return [Suit.Diamonds, Suit.Hearts, Suit.Spades, Suit.Clubs].indexOf(suit);
}

export function cardRank(trumpSuit: Suit, card: ICard): number {
  let suit_rank = suitRank(card.suit);
  if (card.suit == trumpSuit) {
    suit_rank = 5;
  }
  return 100 * suit_rank + [9, 11, 12, 13, 10, 14].indexOf(card.value);
}

export function meldSuits(hand: ICard[]): Suit[] {
  return [Suit.Diamonds, Suit.Hearts, Suit.Spades, Suit.Clubs].filter(
    (S) => hand.filter((C) => C.suit == S && [12, 13].includes(C.value)).length == 2,
  );
}

export function get_cmpCards(trumpSuit: Suit) {
  return function (a: ICard, b: ICard): number {
    return cardRank(trumpSuit, a) - cardRank(trumpSuit, b);
  };
}
