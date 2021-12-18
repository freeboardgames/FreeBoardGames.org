import { ITrick, ICard } from 'gamesShared/definitions/cards';

import { IG, IRoundSummary } from '../types';

export function getRoundSummary(G: IG): IRoundSummary {
  let points = countPoints(
    G.resolvedTricks,
    G.players.map((P) => P.id),
  );
  let scoring = G.players.map(() => 0);
  let schneider = NaN;
  let schwarz = NaN;
  let againstClose = NaN;
  let againstOut = NaN;

  let closerId = getCloser(G);

  G.players.forEach((P, i) => {
    if (!G.resolvedTricks.some((T) => T.winnerId == P.id)) return;
    points[i] += P.melds.map((S) => (S == G.trumpSuit ? 40 : 20)).reduce((a, b) => a + b, 0);
  });

  let roundWinnerId: string = null;
  if (G.stock.length == 0 && G.players[0].hand.length == 0) {
    const lastTrick = G.resolvedTricks[G.resolvedTricks.length - 1];
    points[+lastTrick.winnerId] += 10;
    if (points[0] != points[1]) {
      roundWinnerId = points[0] > points[1] ? '0' : '1';
    }
  } else if (G.out !== null) {
    roundWinnerId = points[+G.out] >= 66 ? G.out : otherPlayer(G.out);
  } else {
    roundWinnerId = points[+closerId] >= 66 ? closerId : otherPlayer(closerId);
  }

  if (roundWinnerId !== null) {
    scoring[+roundWinnerId] = 1;
    if (closerId !== null && closerId != roundWinnerId) {
      const tricksWonBeforeClose = getTricksBeforeClose(G).filter((T) => T.winnerId == roundWinnerId);
      againstClose = tricksWonBeforeClose.length > 0 ? 1 : 2;
      scoring[+roundWinnerId] += againstClose;
    } else if (G.out !== null && G.out != roundWinnerId) {
      againstOut = 1;
      scoring[+roundWinnerId] += 1;
    } else {
      const loserId = otherPlayer(roundWinnerId);
      if (points[+loserId] < 33) {
        schneider = 1;
        scoring[+roundWinnerId] += 1;
      }
      if (G.resolvedTricks.every((T) => T.winnerId == roundWinnerId)) {
        schwarz = 1;
        scoring[+roundWinnerId] += 1;
      }
    }
  }

  return {
    winnerId: roundWinnerId,
    points: points,
    schneider: schneider,
    schwarz: schwarz,
    againstClose: againstClose,
    againstOut: againstOut,
    scoring: scoring,
  };
}

function countPoints(tricks: ITrick[], players: string[]): number[] {
  return players.map((p_id) =>
    tricks
      .filter((T) => T.winnerId == p_id)
      .reduce((a, b) => a.concat(b.cards), [])
      .map(cardPoints)
      .reduce((a, b) => a + b, 0),
  );
}

function getCloser(G: IG): string {
  if (!G.closed || G.stock.length == 0) return null;
  const T = getTricksBeforeClose(G);
  return T.length > 0 ? T[T.length - 1].winnerId : G.resolvedTricks[0].leaderId;
}

function getTricksBeforeClose(G: IG): ITrick[] {
  const numTricks = G.resolvedTricks.length;
  const numTricksBeforeClose = numTricks - 6 + G.players[0].hand.length;
  return G.resolvedTricks.slice(0, numTricksBeforeClose);
}

function cardPoints(card: ICard): number {
  return [0, 10, 2, 3, 4, 11][Math.max(0, card.value - 9)];
}

function otherPlayer(p_id: string): string {
  return p_id == '0' ? '1' : '0';
}
