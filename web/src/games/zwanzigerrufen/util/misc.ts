import { CardColor, ICard } from 'gamesShared/definitions/cards';

import { Contract, Announcement, IG, IPlayer } from '../types';

export function isTrump(C: ICard): boolean {
  return C.color == CardColor.Excuse || C.color == CardColor.Trumps;
}

export function isTrull(C: ICard): boolean {
  return C.color == CardColor.Excuse || (C.color == CardColor.Trumps && [1, 21].includes(C.value));
}

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

export function getCalledNo(card: ICard): string {
  return ['XVI', 'XVII', 'XVIII', 'XIX', 'XX'][card.value - 16];
}

export function getCallCard(hand: ICard[]): ICard {
  const trumps = hand.filter((C) => C.color == CardColor.Trumps && C.value >= 16 && C.value <= 20);
  if (trumps.length == 5) return null;
  let val = 20;
  for (; trumps.some((C) => C.value == val); val--);
  return { color: CardColor.Trumps, value: val };
}

export function allowedBids(players: IPlayer[], playerId: string): Contract[] {
  const player = players.find((P) => P.id == playerId);
  if (player.bid == Contract.Pass) return [];
  const highestBid: Contract = Math.max(...players.map((P) => P.bid));
  if (highestBid == Contract.Solo) return [];
  if (highestBid == Contract.SoloSuit) return [Contract.Pass, Contract.Solo];
  const result = [Contract.Solo];
  if (player.hand.filter((C) => !isTrump(C)).length >= 5) {
    result.unshift(Contract.SoloSuit);
  }
  if (highestBid == Contract.Normal) {
    result.unshift(Contract.Pass);
  } else if (getCallCard(player.hand) !== null) {
    result.unshift(Contract.Normal);
  }
  return result;
}

export function allowedAnnouncements(G: IG, playerId: string): [Announcement, boolean][] {
  const player = getPlayerById(G, playerId);
  const isTaker = player.isTaker || G.partnerId == player.id;
  const own = isTaker ? G.announcementsRe : G.announcementsContra;
  const others = isTaker ? G.announcementsContra : G.announcementsRe;
  let result: [Announcement, boolean][] = [[Announcement.None, false]];
  if (isTaker && [2, 8].includes(own.Game)) {
    result.push([Announcement.Game, false]);
  } else if (!isTaker && [1, 4].includes(others.Game)) {
    result.push([Announcement.Game, true]);
  }
  if (own.Valat > 0 || others.Valat > 0) {
    if ([2, 8].includes(own.Valat)) {
      result.push([Announcement.Valat, false]);
    } else if ([1, 4].includes(others.Valat)) {
      result.push([Announcement.Valat, true]);
    }
  } else {
    const has_pagat = player.hand.some((C) => C.value == 1 && C.color == CardColor.Trumps);
    ['Absolut', 'Pagat', 'Valat'].forEach((A) => {
      if (A == 'Pagat' && own[A] == 0 && !has_pagat) return;
      if ([0, 2, 8].includes(own[A])) {
        result.push([Announcement[A], false]);
      }
    });
    ['Absolut', 'Pagat', 'Valat'].forEach((A) => {
      if ([1, 4].includes(others[A])) {
        result.push([Announcement[A], true]);
      }
    });
  }
  return result;
}

export function getAnnouncementName(A: Announcement): string {
  return `announcement_${Announcement[A].toLowerCase()}`;
}

export function getAnnounceLevelName(level: number): string {
  if (level <= 1) return null;
  const levelStr = ['contra', 'recontra', 'supre', 'resupre'][[2, 4, 8, 16].indexOf(level)];
  return `announcelevel_${levelStr}`;
}

export function getPlayerById(G: IG, playerId: string): IPlayer {
  return G.players.find((p) => p.id === playerId);
}

export function mod(n: number, m: number): number {
  return ((n % m) + m) % m;
}
