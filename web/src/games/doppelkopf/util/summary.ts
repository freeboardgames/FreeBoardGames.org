import { Contract, Announcement, CardColor, IG, ICard, ITrick, IRoundSummary } from '../types';
import * as util from './misc';

export function getRoundSummary(G: IG): IRoundSummary {
  G.players[+G.takerId].isTaker = true;
  if (G.contract == Contract.Normal) {
    G.players[+G.partnerId].isTaker = true;
  }
  G.resolvedTricks.forEach((T) => {
    if (G.contract == Contract.Normal) {
      if (T.winner.id == G.partnerId) T.winner.isTaker = true;
      if (T.leader.id == G.partnerId) T.leader.isTaker = true;
    }
    if (T.winner.id == G.takerId) T.winner.isTaker = true;
    if (T.leader.id == G.takerId) T.leader.isTaker = true;
  });

  const takers = G.partnerId ? [G.takerId, G.partnerId] : [G.takerId];
  const rePoints = countTakerPoints(G.resolvedTricks);
  const contraPoints = 240 - rePoints;
  const [rePointsReq, contraPointsReq] = pointsRequired(G.announcementRe, G.announcementContra);

  let basic = Math.max(0, Math.floor((rePoints - 1) / 30) - 4);
  basic -= Math.max(0, Math.floor((contraPoints - 1) / 30) - 4);
  let winSign = 0;
  if (rePoints >= rePointsReq) {
    basic += 1;
    winSign = 1;
  } else if (contraPoints >= contraPointsReq) {
    basic -= 1;
    if (G.contract == Contract.Normal) {
      basic -= 1;
    }
    winSign = -1;
  }

  let re = 0;
  if (G.announcementRe > Announcement.None) {
    re = winSign * (Math.floor((G.announcementRe - 1) / 30) - 2);
  }
  if (G.announcementContra >= Math.max(Announcement.No90, contraPoints + 31)) {
    re += Math.floor((G.announcementContra - 1 - Math.max(120, contraPoints)) / 30);
  }
  let contra = 0;
  if (G.announcementContra > Announcement.None) {
    contra = winSign * (Math.floor((G.announcementContra - 1) / 30) - 2);
  }
  if (G.announcementRe >= Math.max(Announcement.No90, rePoints + 31)) {
    contra -= Math.floor((G.announcementRe - 1 - Math.max(120, rePoints)) / 30);
  }

  let roundValue = basic + re + contra;
  let charlie = NaN;
  let doppelkopf = NaN;
  let fox = NaN;
  if (G.contract == Contract.Normal) {
    charlie = charliePoint(G.resolvedTricks[G.resolvedTricks.length - 1]);
    doppelkopf = countDoppelkopf(G.resolvedTricks);
    fox = countFoxes(G.resolvedTricks, takers);
    roundValue += charlie + doppelkopf + fox;
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
    re: re,
    contra: contra,
    charlie: charlie,
    doppelkopf: doppelkopf,
    fox: fox,
    scoring: scoring,
  };
}

function countFoxes(tricks: ITrick[], takers: string[]): number {
  return tricks
    .map((T) => {
      const takerPos = takers.map((i) => util.mod(+i - +T.leader.id, 4));
      return T.cards
        .map((C, i) => {
          if (C.color != CardColor.Diamonds || C.value != 14) return 0;
          const ownerIsTaker = takerPos.indexOf(i) > 0;
          if (ownerIsTaker == T.winner.isTaker) return 0;
          return T.winner.isTaker ? 1 : -1;
        })
        .reduce((a, b) => a + b, 0);
    })
    .reduce((a, b) => a + b, 0);
}

function countDoppelkopf(tricks: ITrick[]): number {
  return tricks
    .map((T) => {
      const points = T.cards.map(cardPoints).reduce((a, b) => a + b, 0);
      if (points < 40) return 0;
      return T.winner.isTaker ? 1 : -1;
    })
    .reduce((a, b) => a + b, 0);
}

function charliePoint(lastTrick: ITrick): number {
  const winnerPos = util.mod(+lastTrick.winner.id - +lastTrick.leader.id, 4);
  const winningCard = lastTrick.cards[winnerPos];
  if (winningCard.color != CardColor.Clubs || winningCard.value != 11) return 0;
  return lastTrick.winner.isTaker ? 1 : -1;
}

function pointsRequired(announcementRe: Announcement, announcementContra: Announcement): number[] {
  let pointsRe: number = 121;
  let pointsContra: number = 120;
  if (announcementRe > Announcement.Win) {
    pointsRe = announcementRe;
    pointsContra = announcementContra <= Announcement.Win ? 241 - pointsRe : announcementContra;
  } else if (announcementContra > Announcement.Win) {
    pointsContra = announcementContra;
    pointsRe = 241 - pointsContra;
  } else if (announcementRe == Announcement.None && announcementContra == Announcement.Win) {
    pointsRe = 120;
    pointsContra = 121;
  }
  return [pointsRe, pointsContra];
}

function countTakerPoints(tricks: ITrick[]): number {
  return tricks
    .filter((T) => T.winner.isTaker)
    .reduce((a, b) => a.concat(b.cards), [])
    .map(cardPoints)
    .reduce((a, b) => a + b, 0);
}

function cardPoints(card: ICard): number {
  return [0, 10, 2, 3, 4, 11][Math.max(0, card.value - 9)];
}
