import { IG, ICard, CardColor, ITrick, IRoundSummary } from './types';
import * as util from './util';

export function getRoundSummary(G: IG): IRoundSummary {
  if (G.calledCard) {
    // called player counts as taker (this is secret during the game)
    G.players[+G.calledTakerId].isTaker = true;
    G.resolvedTricks
      .filter((T) => T.winner.id == G.calledTakerId)
      .forEach((T) => {
        T.winner.isTaker = true;
      });
  }

  const takers = G.calledTakerId ? [G.takerId, G.calledTakerId] : [G.takerId];

  const takerPointsRequired = util.pointsRequiredToWin(countTakerBouts(G.resolvedTricks, takers));

  const takerPoints = countTakerPoints(G.resolvedTricks, takers);

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
    takerId: G.takerId,
    calledTakerId: G.calledTakerId,
    takerPointsRequired: takerPointsRequired,
    takerPoints: takerPoints,
    petitAuBout: petitAuBout,
    multiplier: multiplier,
    poignee: G.poignee,
    slam: slam,
    scoring: scoring,
  };
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

function countTakerBouts(tricks: ITrick[], takers: string[]): number {
  return (
    (excusePoints(tricks, takers) > 0.5 ? 1 : 0) +
    tricks
      .filter((T) => T.winner.isTaker)
      .reduce((a, b) => a.concat(b.cards), [])
      .filter((C) => C.color == CardColor.Trumps)
      .filter((C) => [1, 21].indexOf(C.value) != -1).length
  );
}

function excusePoints(tricks: ITrick[], takers: string[]): number {
  // check how many points the taker obtains for the Excuse
  const takerPos = takers.map(Number);
  let points = 0;
  tricks.some((T, i) => {
    const T_excusePos = T.cards.findIndex((c) => c.color == CardColor.Excuse);
    if (T_excusePos == -1) return false;
    // full 4.5 points if Excuse is in the kitty
    if (i == 0) {
      points = 4.5;
      return true;
    }
    const T_takerPos = takerPos.map((pos) => relativePos(pos, T.leader.id, T.cards.length));
    // regular case: before last trick
    if (i < tricks.length - 1) {
      if (T_takerPos.indexOf(T_excusePos) != -1) {
        return T.winner.isTaker ? 4.5 : 4;
      }
      return T.winner.isTaker ? 0.5 : 0;
    }
    // rare case: Excuse in last trick
    if (T_takerPos.indexOf(T_excusePos) == -1) {
      return T.winner.isTaker ? 4.5 : 4;
    }
    // slam with Excuse leading in last trick
    return T_excusePos == 0 && T.winner.id == T.leader.id ? 4.5 : T.winner.isTaker ? 0.5 : 0;
  });
  return points;
}

function countTakerPoints(tricks: ITrick[], takers: string[]): number {
  return (
    excusePoints(tricks, takers) +
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

function relativePos(pos: string | number, ref: string | number, N: number): number {
  pos = typeof pos === 'string' ? +pos : pos;
  ref = typeof ref === 'string' ? +ref : ref;
  return util.mod(pos - ref, N);
}

function roundAwayFrom0(x: number): number {
  return Math.sign(x) * Math.round(Math.abs(x));
}
