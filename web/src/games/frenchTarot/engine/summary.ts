import { IG, ICard, CardColor, ITrick, IRoundSummary } from './types';
import * as util from './util';

export function getRoundSummary(G: IG): IRoundSummary {
  if (G.calledCard) findCalledTaker(G);

  const takerPointsRequired = util.pointsRequiredToWin(countTakerBouts(G.resolvedTricks, G.takerId));

  const takerPoints = countTakerPoints(G.resolvedTricks, G.players.find((p) => p.isTaker).id);

  const isSlam = G.resolvedTricks.every((T) => T.winner.isTaker);
  const petitAuBout = isPetitAuBout(G.resolvedTricks, isSlam);

  const multiplier = [0, 1, 2, 4, 6][G.contract];

  const slam = G.announcedSlam ? (isSlam ? 400 : -200) : isSlam ? 200 : 0;

  const diff = roundAwayFrom0(takerPoints - takerPointsRequired);
  const sign = diff >= 0 ? 1 : -1;
  const roundValue = multiplier * (sign * 25 + diff + petitAuBout) + G.poignee + slam;
  const numTakers = G.players.filter((P) => P.isTaker).length;
  const takerFactor = (G.players.length - numTakers) / numTakers;
  const scoring = G.players.map((p) => (p.isTaker ? takerFactor : -1) * roundValue);

  return {
    takerPointsRequired: takerPointsRequired,
    takerPoints: takerPoints,
    petitAuBout: petitAuBout,
    multiplier: multiplier,
    poignee: G.poignee,
    slam: slam,
    scoring: scoring,
  };
}

function findCalledTaker(G: IG) {
  var callTrickId = 0;
  var callT: ITrick = null;
  var T_calledTakerPos = -1;
  for (; callTrickId < G.resolvedTricks.length; callTrickId++) {
    callT = G.resolvedTricks[callTrickId];
    T_calledTakerPos = callT.cards.findIndex((C) => C.color == G.calledCard.color && C.value == G.calledCard.value);
    if (T_calledTakerPos != -1) break;
  }
  const T_takerPos = util.mod(parseInt(G.takerId) - parseInt(callT.leader.id), callT.cards.length);
  if (callTrickId == 0 || T_calledTakerPos == T_takerPos) {
    // the called card was in the discard
    G.calledTakerId = G.takerId;
    return;
  }
  G.calledTakerId = util.mod(parseInt(callT.leader.id) + T_calledTakerPos, callT.cards.length).toString();
  const calledTaker = G.players[parseInt(G.calledTakerId)];
  calledTaker.isTaker = true;
  // correct winner objects to be takers
  G.resolvedTricks
    .filter((T) => T.winner.id == calledTaker.id)
    .forEach((T) => {
      T.winner.isTaker = true;
    });
}

function isPetitAuBout(tricks: ITrick[], isSlam: boolean): number {
  const [T_1, T_0] = tricks.slice(-2);
  let petitAuBout = trickHasPetit(T_0);
  if (isSlam && petitAuBout == 0 && T_0.cards[0].color == CardColor.Excuse) {
    petitAuBout = trickHasPetit(T_1);
  }
  return petitAuBout;
}

function trickHasPetit(T: ITrick): number {
  const T_petitPos = T.cards.findIndex((C) => C.color == CardColor.Trumps && C.value == 1);
  return T_petitPos == -1 ? 0 : T.winner.isTaker ? 10 : -10;
}

function countTakerBouts(tricks: ITrick[], takerId: string): number {
  return (
    (excusePoints(tricks, takerId) > 0.5 ? 1 : 0) +
    tricks
      .filter((T) => T.winner.isTaker)
      .reduce((a, b) => a.concat(b.cards), [])
      .filter((C) => C.color == CardColor.Trumps)
      .filter((C) => [1, 21].indexOf(C.value) != -1).length
  );
}

function excusePoints(tricks: ITrick[], takerId: string): number {
  // check how many points the taker obtains for the Excuse
  const takerPos: number = parseInt(takerId);
  let T: ITrick;
  let T_excusePos: number;
  let T_takerPos: number;
  for (let i = 0; i < tricks.length; i++) {
    T = tricks[i];
    T_excusePos = T.cards.findIndex((c) => c.color == CardColor.Excuse);
    if (T_excusePos == -1) continue;
    // full 4.5 points if Excuse is in the kitty
    if (i == 0) return 4.5;
    T_takerPos = util.mod(takerPos - parseInt(T.leader.id), T.cards.length);
    // regular case: before last trick
    if (i < tricks.length - 1) {
      return T.winner.isTaker ? 0.5 : T_excusePos == T_takerPos ? 4 : 0;
    }
    // rare case: Excuse in last trick
    return T.winner.isTaker ? 4.5 : T_excusePos == T_takerPos ? 0 : 4;
  }
  // this should never happen, but in test runs, we might play with
  // an incomplete deck (without Excuse)
  return 0;
}

function countTakerPoints(tricks: ITrick[], takerId: string): number {
  return (
    excusePoints(tricks, takerId) +
    tricks
      .filter((T) => T.winner.isTaker)
      .reduce((a, b) => a.concat(b.cards), [])
      .map(cardPoints)
      .reduce((a, b) => a + b, 0)
  );
}

function cardPoints(card: ICard): number {
  // the Excuse is counted as 0 (it depends on the situation in the game)
  if (card.color == CardColor.Excuse) return 0;
  if (card.color == CardColor.Trumps) {
    return [1, 21].indexOf(card.value) == -1 ? 0.5 : 4.5;
  }
  return 0.5 + Math.max(0, card.value - 10);
}

export function roundAwayFrom0(x: number): number {
  return Math.sign(x) * Math.round(Math.abs(x));
}
