import { ITrick, CardColor, ICard } from 'gamesShared/definitions/cards';

import { Announcement, Contract, IG, IRoundSummary } from '../types';
import * as util from './misc';

export function getRoundSummary(G: IG): IRoundSummary {
  if (G.contract == Contract.Null) {
    return getRoundSummaryNull(G);
  }

  const taker = util.getPlayerById(G, G.takerId);
  const basicValue = G.contract == Contract.Grand ? 24 : getBasicValue(G.trumpSuit);
  const tops = countTops(G);
  const takerPoints = countTakerPoints(G.resolvedTricks, G.takerId);
  const winLevelRequired = Math.max(1, Math.ceil(taker.bid / basicValue - Math.abs(tops)));
  const winLevel = Math.max(winLevelRequired, getWinLevel(G, takerPoints));
  const thresh = G.hand ? [61, 61, 61, 90, 90, 120, 120, 120] : [61, 61, 90, 120];
  const takerPointsRequired = winLevelRequired >= thresh.length ? NaN : thresh[winLevelRequired];
  const takerWins = winLevel >= thresh.length ? false : takerPoints >= takerPointsRequired;
  const roundValue = (winLevel + Math.abs(tops)) * basicValue;

  return {
    takerId: G.takerId,
    takerBid: taker.bid,
    takerPointsRequired: takerPointsRequired,
    takerPoints: takerPoints,
    winLevel: winLevel,
    tops: tops,
    basicValue: basicValue,
    scoring: G.players.map((P) => (P.isTaker ? (takerWins ? 1 : -2) : 0) * roundValue),
  };
}

function getRoundSummaryNull(G: IG): IRoundSummary {
  const taker = util.getPlayerById(G, G.takerId);
  let basicValue = 0;
  if (G.announcement == Announcement.Ouvert) {
    basicValue = G.hand ? 59 : 46;
  } else {
    basicValue = G.hand ? 35 : 23;
  }
  let takerWins = G.resolvedTricks.slice(1).every((T) => T.winnerId != G.takerId);
  if (taker.bid > basicValue) {
    takerWins = false;
    basicValue = taker.bid;
  }
  return {
    takerId: G.takerId,
    takerBid: taker.bid,
    takerPointsRequired: NaN,
    takerPoints: NaN,
    winLevel: NaN,
    tops: NaN,
    basicValue: basicValue,
    scoring: G.players.map((P) => (P.isTaker ? (takerWins ? 1 : -2) : 0) * basicValue),
  };
}

function countTops(G: IG) {
  const ranks = G.takerCards.map((C) => util.cardRank(G.contract, G.trumpSuit, C)).sort((a, b) => b - a);
  let all_trumps = [1003, 1002, 1001, 1000, 506, 505, 504, 503, 502, 501, 500];
  if (G.contract == Contract.Grand) {
    all_trumps = all_trumps.slice(0, 4);
  }
  const highest_trump = ranks[0];
  if (highest_trump != all_trumps[0]) {
    const n_tops = all_trumps.indexOf(highest_trump);
    return n_tops > 0 ? -n_tops : -all_trumps.length;
  }
  let n_tops = 1;
  for (; all_trumps[n_tops] == ranks[n_tops]; n_tops++);
  return n_tops;
}

function getWinLevel(G: IG, takerPoints: number) {
  const is_schwarz = takerPoints == 0 || takerPoints == 120;
  const is_schneider = takerPoints >= 90 || takerPoints <= 30;
  if (!G.hand) {
    return is_schwarz ? 3 : is_schneider ? 2 : 1;
  } else if (G.announcement == Announcement.Ouvert) {
    return 7;
  } else if (G.announcement == Announcement.Schwarz) {
    return 6;
  } else if (G.announcement == Announcement.Schneider && is_schwarz) {
    return 5;
  } else if (G.announcement == Announcement.Schneider || is_schwarz) {
    return 4;
  }
  return is_schneider ? 3 : 2;
}

function getBasicValue(trumpSuit: CardColor) {
  return {
    Diamonds: 9,
    Hearts: 10,
    Spades: 11,
    Clubs: 12,
  }[CardColor[trumpSuit]];
}

function countTakerPoints(tricks: ITrick[], takerId: string): number {
  return tricks
    .filter((T) => T.winnerId == takerId)
    .reduce((a, b) => a.concat(b.cards), [])
    .map(cardPoints)
    .reduce((a, b) => a + b, 0);
}

function cardPoints(card: ICard): number {
  return [0, 10, 2, 3, 4, 11][Math.max(0, card.value - 9)];
}
