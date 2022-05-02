import { Suit, ICard } from 'gamesShared/definitions/cards';

import { Contract, IG, IRoundSummary } from '../types';
import * as util from './misc';

export function getRoundSummary(G: IG): IRoundSummary {
  const declarers = [G.declarerId, G.partnerId];
  const reTricksReq = 6 + G.contract.value;
  const reTricks = G.resolvedTricks.filter((T) => declarers.includes(T.winnerId)).length;
  const reWins = reTricks >= reTricksReq;
  const reVulnerable = util.getPlayerById(G, G.declarerId).isVulnerable;
  const isMinor = [Suit.Clubs, Suit.Diamonds].includes(G.contract.trumps);

  let contractPoints = NaN;
  let slamBonus = NaN;
  let overtrickBonus = NaN;
  let doubleBonus = NaN;
  if (reWins) {
    if (G.contract.trumps === null) {
      contractPoints = 40 + (G.contract.value - 1) * 30;
    } else {
      contractPoints = G.contract.value * (isMinor ? 20 : 30);
    }
    contractPoints *= G.doubling;

    if (reTricks > reTricksReq) {
      overtrickBonus = reTricks - reTricksReq;
      if (G.doubling > 1) {
        overtrickBonus *= reVulnerable ? 100 : 50;
      } else {
        overtrickBonus *= isMinor ? 20 : 30;
      }
      overtrickBonus *= G.doubling;
    }

    if (reTricksReq == 12 && reTricks >= 12) {
      slamBonus = reVulnerable ? 750 : 500;
    } else if (reTricksReq == 13 && reTricks == 13) {
      slamBonus = reVulnerable ? 1500 : 1000;
    }

    if (G.doubling > 1) {
      doubleBonus = G.doubling == 2 ? 50 : 100;
    }
  }

  const penaltyBonus = undertrickPenalty(G, reTricks);
  const honorsBonus = getHonorsBonus(G.deck, declarers, G.contract);

  const validBonuses = [overtrickBonus, slamBonus, doubleBonus, penaltyBonus, honorsBonus].filter((v) => !isNaN(v));
  const decBonus = validBonuses.filter((v) => v > 0).reduce((a, b) => a + b, 0);
  const oppScore = -validBonuses.filter((v) => v < 0).reduce((a, b) => a + b, 0);
  const decScore = (reWins ? contractPoints : 0) + decBonus;

  const scoring = G.players.map((P) => (P.isDeclarer ? decScore : oppScore));

  return {
    declarerId: G.declarerId,
    partnerId: G.partnerId,
    contract: G.contract,
    reTricks: reTricks,
    contractPoints: contractPoints,
    overtrickBonus: overtrickBonus,
    slamBonus: slamBonus,
    doubleBonus: doubleBonus,
    honorsBonus: honorsBonus,
    penaltyBonus: penaltyBonus,
    scoring: scoring,
  };
}

function undertrickPenalty(G: IG, reTricks: number) {
  const reTricksReq = 6 + G.contract.value;
  const reVulnerable = util.getPlayerById(G, G.declarerId).isVulnerable;
  if (reTricks >= reTricksReq) {
    return NaN;
  }
  let undertricks = reTricksReq - reTricks;
  let penalty: number;
  if (G.doubling == 1) {
    penalty = undertricks * (reVulnerable ? 100 : 50);
  } else {
    if (reVulnerable) {
      undertricks += 1;
    }
    let penalty_per_trick = Array(13).fill(150);
    penalty_per_trick[0] = 50;
    penalty_per_trick[1] = 100;
    penalty_per_trick[2] = 100;
    penalty = penalty_per_trick.slice(0, undertricks).reduce((a, b) => a + b, 0);
  }
  return -G.doubling * penalty;
}

function getHonorsBonus(deck: ICard[], declarers: string[], contract: Contract): number {
  const handSize = 13;
  for (let i = 0; i < 4; i++) {
    const hand = deck.slice(i * handSize, (i + 1) * handSize);
    const honors = hand.filter((C) => isHonor(C, contract));
    if (honors.length < 4) {
      continue;
    }
    if (contract.trumps === null || honors.length == 5) {
      return declarers.includes(i.toString()) ? 150 : -150;
    } else {
      return declarers.includes(i.toString()) ? 100 : -100;
    }
  }
  return NaN;
}

function isHonor(C: ICard, contract: Contract): boolean {
  const isAce = [1, 14].includes(C.value);
  if (contract.trumps === null) {
    return isAce;
  }
  if (C.suit != contract.trumps) {
    return false;
  }
  return isAce || C.value >= 10;
}
