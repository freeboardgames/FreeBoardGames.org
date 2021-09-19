import { Contract, IG, ICard, ITrick, IRoundSummary } from '../types';
import * as util from './misc';

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
  let takerPointsRequired = G.announcedTout ? 120 : 61;
  let basic = 0;
  let running = NaN;
  let schneider = NaN;
  let schwarz = NaN;
  let takerPoints = 0;
  let roundValue = 0;
  if (G.contract == Contract.Bettel) {
    takerPointsRequired = 0;
    basic = G.resolvedTricks.some((T) => T.winner.isTaker) ? -3 : 3;
    roundValue = G.contra * basic;
  } else {
    takerPoints = countTakerPoints(G.resolvedTricks);
    const sign = takerPoints >= takerPointsRequired ? 1 : -1;
    basic = sign * (G.contract == Contract.Ace ? 1 : G.announcedTout ? 10 : 5);
    running = countRunning(G, takers);
    const runningValue = Math.abs(running) >= 3 ? Math.sign(basic) * Math.abs(running) : 0;
    if (G.announcedTout) {
      roundValue = G.contra * (basic + runningValue);
    } else {
      schwarz = takerPoints == 0 ? -2 : takerPoints == 120 ? 2 : 0;
      if (schwarz == 0) {
        schneider = takerPoints <= 30 ? -1 : takerPoints > 90 ? 1 : 0;
        roundValue = G.contra * (basic + runningValue + schneider);
      } else {
        roundValue = G.contra * (basic + runningValue + schwarz);
      }
    }
  }

  const takerFactor = (G.players.length - takers.length) / takers.length;
  const scoring = G.players.map((p) => (p.isTaker ? takerFactor : -1) * roundValue);

  return {
    takerId: G.takerId,
    calledTakerId: G.calledTakerId,
    takerPointsRequired: takerPointsRequired,
    takerPoints: takerPoints,
    basic: basic,
    running: running,
    schneider: schneider,
    schwarz: schwarz,
    multiplier: G.contra,
    scoring: scoring,
  };
}

function countRunning(G: IG, takers: string[]) {
  const numPlayers = G.players.length;
  const handSize = util.handSize(numPlayers);
  const kittySize = util.kittySize(numPlayers);
  const all_trumps = G.contract == Contract.Wenz ? [1003, 1002, 1001, 1000] : [10003, 10002, 10001, 10000];
  const opponents = G.players.filter((P) => !P.isTaker).map((P) => P.id);
  const playerHands = G.players.map((_, i) => G.deck.slice(i * handSize, (i + 1) * handSize));
  const kitty = kittySize == 0 ? [] : G.deck.slice(-kittySize);
  const takerHands = takers.map((i) => playerHands[+i]);
  const opponentHands = opponents.map((i) => playerHands[+i]);
  const takerCards = Array.prototype.concat(kitty, ...takerHands);
  const opponentCards = Array.prototype.concat(...opponentHands);

  let ranks = takerCards.map((C) => util.cardRank(G.contract, G.trumpSuit, C)).sort((a, b) => b - a);
  let highest_trump = ranks[0];
  let sign = 1;
  if (highest_trump != all_trumps[0]) {
    sign = -1;
    ranks = opponentCards.map((C) => util.cardRank(G.contract, G.trumpSuit, C)).sort((a, b) => b - a);
  }
  let n_tops = 1;
  for (; all_trumps[n_tops] == ranks[n_tops]; n_tops++);
  return sign * n_tops;
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
