import { Suit, ICard } from 'gamesShared/definitions/cards';

import { Contract, Announcement, IG, IPlayer } from '../types';

export function isTrump(G: IG, C: ICard): boolean {
  if (G.contract == Contract.SoloAce) return false;
  if (G.contract == Contract.SoloJack) {
    return C.value == 11;
  }
  if (G.contract == Contract.SoloQueen) {
    return C.value == 12;
  }
  return (C.suit == Suit.Hearts && C.value == 10) || C.value == 11 || C.value == 12 || C.suit == G.trumpSuit;
}

export function suitRank(suit: Suit): number {
  return [Suit.Diamonds, Suit.Hearts, Suit.Spades, Suit.Clubs].indexOf(suit);
}

export function cardRank(contract: Contract, trumpSuit: Suit, card: ICard): number {
  let suit_rank = suitRank(card.suit);
  if (contract != Contract.SoloAce) {
    if (contract != Contract.SoloQueen && card.value == 11) {
      return 1000 + suit_rank;
    }
    if (contract != Contract.SoloJack && card.value == 12) {
      return 10000 + suit_rank;
    }
    if (
      contract != Contract.SoloJack &&
      contract != Contract.SoloQueen &&
      card.suit == Suit.Hearts &&
      card.value == 10
    ) {
      return 100000;
    }
  }
  if (card.suit == trumpSuit) {
    suit_rank = 5;
  }
  let val_order: number[] = [9, 13, 10, 14];
  if (contract == Contract.SoloJack) {
    val_order = [9, 12, 13, 10, 14];
  } else if (contract == Contract.SoloQueen) {
    val_order = [9, 11, 13, 10, 14];
  } else if (contract == Contract.SoloAce) {
    val_order = [9, 11, 12, 13, 10, 14];
  }
  return 100 * suit_rank + val_order.indexOf(card.value);
}

export function get_cmpCards(contract: Contract, trumpSuit: Suit) {
  return function (a: ICard, b: ICard): number {
    return cardRank(contract, trumpSuit, a) - cardRank(contract, trumpSuit, b);
  };
}

export function getBidName(bid: Contract): string {
  return `bid_${Contract[bid].toLowerCase()}`;
}

export function getAnnounceName(A: Announcement, isRe: boolean): string {
  let announceStr = Announcement[A].toLowerCase();
  if (announceStr == 'win') {
    announceStr = isRe ? 're' : 'contra';
  }
  return `announce_${announceStr}`;
}

export function isOld(C: ICard): boolean {
  return C.suit == Suit.Clubs && C.value == 12;
}

export function announceRank(A: Announcement): number {
  return [
    Announcement.None,
    Announcement.Win,
    Announcement.No90,
    Announcement.No60,
    Announcement.No30,
    Announcement.Schwarz,
  ].indexOf(A);
}

export function allowedBids(P: IPlayer, numBidders: number): Contract[] {
  if (P.bid == Contract.None) return [Contract.Pass, Contract.Some];
  const numOlds = P.hand.filter(isOld).length;
  let allowed = [Contract.SoloTrump, Contract.SoloQueen, Contract.SoloJack, Contract.SoloAce];
  if (numOlds == 2 && numBidders == 1) return [Contract.Marriage].concat(allowed);
  if (numOlds == 2 && numBidders > 1) return [Contract.Pass].concat(allowed);
  if (numOlds < 2) return allowed;
}

export function getPlayerById(G: IG, playerId: string): IPlayer {
  return G.players.find((p) => p.id === playerId);
}

export function mod(n: number, m: number): number {
  return ((n % m) + m) % m;
}
