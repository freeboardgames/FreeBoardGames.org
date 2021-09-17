import { Ctx } from 'boardgame.io';
import { ActivePlayers, INVALID_MOVE } from 'boardgame.io/core';
import { IG, cardEnum } from './types';
import { defaultDeck, cardFunctions, getCardTypeFromNumber } from './cards';

/* Much of this code was refactored based on the code snippet found here:
 * https://github.com/boardgameio/boardgame.io/issues/591 */

export function setupRound(g: IG, ctx: Ctx) {
  g.round++;
  g.confirmed = [];

  let dessertsPlayed = 0;

  for (let i = 0; i < ctx.numPlayers; i++) {
    g.players[i].playedCards = [];
    g.players[i].chipsCount = 0;
    g.players[i].unusedMayo = 0;
    g.players[i].unusedForks = 0;
    dessertsPlayed += g.players[i].dessertsCount;
  }

  let unshuffledDeck = defaultDeck;
  for (let i = 0; i < dessertsPlayed; i++) {
    unshuffledDeck.splice(
      unshuffledDeck.findIndex((e) => getCardTypeFromNumber(e) === cardEnum.cake),
      1,
    );
  }

  let deck = ctx.random.Shuffle(unshuffledDeck);

  g.hands = new Array(ctx.numPlayers).fill(0).map((_, i) => ({
    currentOwner: i.toString(),
    hand: new Array(12 - ctx.numPlayers).fill(0).map(() => {
      const card = deck.pop();
      return card;
    }),
    selected: null,
  }));

  return g;
}

export function scoreRoundEnd(g: IG, ctx: Ctx) {
  let chipsWinner = [];
  let chipsSecondPlace = [];
  let chipsWinnerScore = 0;
  let chipsSecondScore = 0;
  for (let i = 0; i < ctx.numPlayers; i++) {
    if (g.players[i].chipsCount === 0) continue;
    if (g.players[i].chipsCount > chipsWinnerScore) {
      chipsSecondPlace = chipsWinner;
      chipsWinner = [i];
      chipsSecondScore = chipsWinnerScore;
      chipsWinnerScore = g.players[i].chipsCount;
    } else if (g.players[i].chipsCount === chipsWinnerScore) {
      chipsWinner.push(i);
    } else if (g.players[i].chipsCount > chipsSecondScore) {
      chipsSecondPlace = [i];
      chipsSecondScore = g.players[i].chipsCount;
    } else if (g.players[i].chipsCount === chipsSecondScore) {
      chipsSecondPlace.push(i);
    }
  }

  if (chipsWinner.length === 1) {
    g.players[chipsWinner[0]].score += 6;
    const scr = Math.floor(3 / chipsSecondPlace.length);
    if (scr > 0) {
      for (let i = 0; i < chipsSecondPlace.length; i++) {
        g.players[chipsSecondPlace[i]].score += scr;
      }
    }
  } else if (chipsWinner.length > 1) {
    const scr = Math.floor(6 / chipsWinner.length);
    for (let i = 0; i < chipsWinner.length; i++) {
      g.players[chipsWinner[i]].score += scr;
    }
  }

  return g;
}

export function scoreGameEnd(g: IG, ctx: Ctx) {
  let mostCakes = [];
  let mostCakesCount = 0;
  let leastCakes = [];
  let leastCakesCount = 10;

  for (let i = 0; i < ctx.numPlayers; i++) {
    if (g.players[i].dessertsCount > mostCakesCount) {
      mostCakes = [i];
      mostCakesCount = g.players[i].dessertsCount;
    } else if (g.players[i].dessertsCount === mostCakesCount) {
      mostCakes.push(i);
    }

    if (g.players[i].dessertsCount < leastCakesCount) {
      leastCakes = [i];
      leastCakesCount = g.players[i].dessertsCount;
    } else if (g.players[i].dessertsCount === leastCakesCount) {
      leastCakes.push(i);
    }
  }

  if (mostCakesCount !== leastCakesCount) {
    const scrPlus = Math.floor(6 / mostCakes.length);
    for (let i = 0; i < mostCakes.length; i++) {
      g.players[mostCakes[i]].score += scrPlus;
    }

    if (ctx.numPlayers > 2) {
      const scrMinus = Math.floor(6 / leastCakes.length);
      for (let i = 0; i < leastCakes.length; i++) {
        g.players[leastCakes[i]].score -= scrMinus;
      }
    }
  }

  return g;
}

export function rotateAndScoreCards(g: IG, ctx: Ctx) {
  for (let i = 0; i < ctx.numPlayers; i++) {
    const h = g.hands[i];
    const ho = parseInt(h.currentOwner, 10);

    for (let j = 0; j < h.selected.length; j++) {
      g.players[ho].playedCards.push(h.hand[h.selected[j]]);

      g.players[ho] = cardFunctions[getCardTypeFromNumber(h.hand[h.selected[j]])](g.players[ho]);
    }

    g.hands[i].hand = g.hands[i].hand.filter((_, i) => !h.selected.includes(i));

    // Remove fork from hand if fork used
    if (g.players[h.currentOwner].forkUsed) {
      const forkIndex = g.players[h.currentOwner].playedCards.findIndex(
        (e) => getCardTypeFromNumber(e) === cardEnum.fork,
      );
      g.hands[i].hand.push(g.players[h.currentOwner].playedCards[forkIndex]);
      g.players[h.currentOwner].playedCards.splice(forkIndex, 1);
      g.players[h.currentOwner].forkUsed = false;
    }

    g.hands[i].selected = null;
    g.hands[i].currentOwner = ((ho + 1) % ctx.numPlayers).toString();

    g.players[h.currentOwner].turnsLeft = 1;
  }

  return g;
}

export function getScoreboard(g: IG) {
  return g.players
    .map((e, i) => ({
      playerID: i.toString(),
      score: e.score,
    }))
    .sort((a, b) => b.score - a.score);
}

export const basePlayer = {
  playedCards: [],
  score: 0,
  dessertsCount: 0,
  chipsCount: 0,
  unusedMayo: 0,
  unusedForks: 0,
  forkUsed: false,
  turnsLeft: 1,
};

// Moves
export function selectCard(g: IG, ctx: Ctx, index: number) {
  if (g.players[ctx.playerID].turnsLeft === 0) return INVALID_MOVE;
  if (index === undefined) return INVALID_MOVE;
  if (index < 0 || index >= g.hands[0].hand.length) return INVALID_MOVE;

  const idx = g.hands.findIndex((e) => e.currentOwner === ctx.playerID);
  if (g.hands[idx].selected === null) g.hands[idx].selected = [];
  if (g.hands[idx].selected.includes(index)) return INVALID_MOVE;
  g.hands[idx].selected.push(index);

  g.players[ctx.playerID].turnsLeft--;

  return g;
}

export function useFork(g: IG, ctx: Ctx) {
  if (g.players[ctx.playerID].turnsLeft === 0) return INVALID_MOVE;
  if (g.players[ctx.playerID].forkUsed || g.players[ctx.playerID].unusedForks === 0) return INVALID_MOVE;
  if (g.hands[0].hand.length < 2) return INVALID_MOVE;

  g.players[ctx.playerID].forkUsed = true;
  g.players[ctx.playerID].unusedForks--;
  g.players[ctx.playerID].turnsLeft = 2;

  return g;
}

export function confirmScore(g: IG, ctx: Ctx) {
  if (g.confirmed.includes(ctx.playerID)) return INVALID_MOVE;
  g.confirmed.push(ctx.playerID);

  return g;
}

export const PicnicGoGame = {
  name: 'picnicGo',

  setup: (ctx) => {
    const baseState = {
      players: new Array(ctx.numPlayers).fill(basePlayer),
      hands: [],
      round: 0,
      gameOver: false,
      confirmed: [],
    };

    return setupRound(baseState, ctx);
  },

  phases: {
    play: {
      start: true,
      next: 'score',
      endIf: (g: IG) => g.hands[0].hand.length === 0,
      moves: {
        selectCard,
        useFork,
      },
      turn: {
        activePlayers: ActivePlayers.ALL,
        onMove: (g: IG, ctx: Ctx) => {
          const unfinishedPlayers = g.players.filter((e) => e.turnsLeft > 0);

          if (unfinishedPlayers.length === 0) {
            rotateAndScoreCards(g, ctx);
          }
        },
      },
    },
    score: {
      next: 'play',
      onEnd: (g: IG, ctx: Ctx) => {
        scoreRoundEnd(g, ctx);
        if (g.round === 3) {
          scoreGameEnd(g, ctx);
          g.gameOver = true;
        } else {
          setupRound(g, ctx);
        }
      },
      endIf: (g: IG, ctx: Ctx) => g.confirmed.length === ctx.numPlayers,
      moves: { confirmScore },
      turn: {
        activePlayers: ActivePlayers.ALL_ONCE,
      },
    },
  },

  endIf: (g: IG) => {
    if (g.gameOver) {
      return { scoreboard: getScoreboard(g) };
    }
  },
};
