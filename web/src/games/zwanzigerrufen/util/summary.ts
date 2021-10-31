import { CardColor, ICard, ITrick } from 'gamesShared/definitions/cards';

import { Contract, IG, IRoundSummary } from '../types';
import * as util from './misc';

export function getRoundSummary(G: IG): IRoundSummary {
  G.players[+G.takerId].isTaker = true;
  if (G.contract == Contract.Normal) {
    G.players[+G.partnerId].isTaker = true;
  }

  const takers = G.partnerId ? [G.takerId, G.partnerId] : [G.takerId];
  const rePoints = countTakerPoints(G.resolvedTricks, takers);
  const contraPoints = 88 - rePoints;
  let [rePointsReq, contraPointsReq] = pointsRequired(G);

  const winner_is_taker = G.resolvedTricks.map((T) => winnerIsTaker(T, takers));
  const isValatRe = !winner_is_taker.some((v) => !v);
  const isValatContra = !winner_is_taker.some((v) => v);
  const isValat = isValatRe || isValatContra;
  const valatAnnounced = Math.max(G.announcementsRe.Valat, G.announcementsContra.Valat);

  let basic = G.contract == Contract.Normal ? 1 : G.contract == Contract.Solo ? 5 : 4;
  basic *= G.announcementsRe.Game;
  let valat = 0;
  let absolut = NaN;
  let pagat = NaN;
  let kings = NaN;
  let trull = NaN;
  let mond = NaN;
  let roundValue = 0;

  if (isValat || valatAnnounced > 0) {
    valat = valatAnnounced > 0 ? 12 * valatAnnounced : 6;
    if (valatAnnounced > 0) {
      [rePointsReq, contraPointsReq] = G.announcementsRe.Valat > 0 ? [88, 0] : [0, 88];
    }
    if (isValatContra || (G.announcementsRe.Valat > 0 && !isValatRe)) {
      basic *= -1;
      valat *= -1;
    }
    roundValue = basic + valat;
  } else {
    basic *= rePoints >= rePointsReq ? 1 : contraPoints >= contraPointsReq ? -1 : 0;
    roundValue = basic;

    const isAbsolutRe = contraPoints <= 32;
    const isAbsolutContra = rePoints <= 32;
    const isAbsolut = isAbsolutRe || isAbsolutContra;
    const absolutAnnounced = Math.max(G.announcementsRe.Absolut, G.announcementsContra.Absolut);
    absolut = absolutAnnounced > 0 ? 2 * absolutAnnounced : isAbsolut ? 1 : 0;
    if (isAbsolutContra || (G.announcementsRe.Absolut > 0 && !isAbsolutRe)) {
      absolut *= -1;
    }
    kings = kingsPoints(G.deck, takers);
    roundValue += absolut + kings;
    if (G.contract != Contract.SoloSuit) {
      const isPagat = isPagatUltimo(G.resolvedTricks[G.resolvedTricks.length - 1], takers);
      const pagatAnnounced = Math.max(G.announcementsRe.Pagat, G.announcementsContra.Pagat);
      pagat = pagatAnnounced > 0 ? 2 * pagatAnnounced : isPagat == 0 ? 0 : 1;
      if (isPagat < 0 || (G.announcementsRe.Pagat > 0 && isPagat != 1)) {
        pagat *= -1;
      }
      trull = trullPoints(G.deck, takers);
      mond = mondPoints(G.resolvedTricks, takers);
      roundValue += pagat + trull + mond;
    }
  }

  const takerFactor = takers.length == 1 ? 3 : 1;
  const scoring = G.players.map((p) => (p.isTaker ? takerFactor : -1) * roundValue);

  return {
    takerId: G.takerId,
    partnerId: G.partnerId,
    rePointsRequired: rePointsReq,
    contraPointsRequired: contraPointsReq,
    rePoints: rePoints,
    basic: basic,
    valat: valat,
    absolut: absolut,
    kings: kings,
    trull: trull,
    pagat: pagat,
    mond: mond,
    scoring: scoring,
  };
}

function kingsPoints(deck: ICard[], takers: string[]): number {
  const handSize = 10;
  for (let i = 0; i < 4; i++) {
    const hand = deck.slice(i * handSize, (i + 1) * handSize);
    const kings = hand.filter((C) => !util.isTrump(C) && C.value == 14);
    if (kings.length == 4) {
      return takers.includes(i.toString()) ? 1 : -1;
    }
    if (kings.length > 0) {
      return 0;
    }
  }
  return 0;
}

function isPagatUltimo(lastTrick: ITrick, takers: string[]): number {
  const winnerPos = util.mod(+lastTrick.winnerId - +lastTrick.leaderId, 4);
  const winningCard = lastTrick.cards[winnerPos];
  if (winningCard.color != CardColor.Trumps || winningCard.value != 1) return 0;
  return winnerIsTaker(lastTrick, takers) ? 1 : -1;
}

function trullPoints(deck: ICard[], takers: string[]): number {
  const handSize = 10;
  for (let i = 0; i < 4; i++) {
    const hand = deck.slice(i * handSize, (i + 1) * handSize);
    const trulls = hand.filter(util.isTrull);
    if (trulls.length == 3) {
      return takers.includes(i.toString()) ? 1 : -1;
    }
    if (trulls.length > 0) {
      return 0;
    }
  }
  return 0;
}

function mondPoints(tricks: ITrick[], takers: string[]): number {
  const T = tricks.filter((T) => T.cards.some((C) => C.value == 21))[0];
  const winnerPos = util.mod(+T.winnerId - +T.leaderId, 4);
  const isCaught = T.cards[winnerPos].color == CardColor.Excuse;
  if (!isCaught) return 0;
  return winnerIsTaker(T, takers) ? 1 : -1;
}

function pointsRequired(G): number[] {
  if (G.announcementsRe.Absolut > 0 && G.announcementsContra.Absolut > 0) {
    return [56, 56];
  }
  if (G.announcementsRe.Absolut > 0) {
    return [56, 33];
  }
  return G.announcementsContra.Absolut > 0 ? [33, 56] : [45, 44];
}

function countTakerPoints(tricks: ITrick[], takers: string[]): number {
  return tricks
    .filter((T) => winnerIsTaker(T, takers))
    .reduce((a, b) => a.concat(b.cards), [])
    .map(cardPoints)
    .reduce((a, b) => a + b, 0);
}

function cardPoints(card: ICard): number {
  if (card.color == CardColor.Excuse) return 5;
  if (card.color == CardColor.Trumps) {
    return [1, 21].includes(card.value) ? 5 : 1;
  }
  return [0, 2, 3, 4, 5][Math.max(0, card.value - 10)];
}

function winnerIsTaker(T: ITrick, takers: string[]): boolean {
  return takers.includes(T.winnerId);
}
