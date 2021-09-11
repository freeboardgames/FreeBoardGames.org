import { Contract, IG, ICard, ITrick, IRoundSummary } from '../types';

export function getRoundSummary(G: IG): IRoundSummary {
  if (G.contract == Contract.Ace) {
    // called player counts as taker (this is secret during the game)
    G.players[+G.calledTakerId].isTaker = true;
    G.resolvedTricks
      .filter((T) => T.winner.id == G.calledTakerId)
      .forEach((T) => {
        T.winner.isTaker = true;
      });
  }

  const takers = G.calledTakerId ? [G.takerId, G.calledTakerId] : [G.takerId];
  let takerPointsRequired = 61;
  let roundValue = 0;
  let schneider = 0;
  let takerPoints = 0;
  if (G.contract == Contract.Bettel) {
    takerPointsRequired = 0;
    roundValue = G.resolvedTricks.some((T) => T.winner.isTaker) ? -3 : 3;
  } else {
    takerPoints = countTakerPoints(G.resolvedTricks);
    const sign = takerPoints >= takerPointsRequired ? 1 : -1;
    roundValue = sign * (G.contract == Contract.Ace ? 1 : 5);
    schneider = takerPoints <= 30 ? -1 : takerPoints > 90 ? 1 : 0;
    roundValue += schneider;
  }

  const takerFactor = (G.players.length - takers.length) / takers.length;
  const scoring = G.players.map((p) => (p.isTaker ? takerFactor : -1) * roundValue);

  return {
    takerId: G.takerId,
    calledTakerId: G.calledTakerId,
    takerPointsRequired: takerPointsRequired,
    takerPoints: takerPoints,
    schneider: schneider,
    scoring: scoring,
  };
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