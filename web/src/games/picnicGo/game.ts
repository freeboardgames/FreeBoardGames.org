import { Ctx } from 'boardgame.io';
import { ActivePlayers, INVALID_MOVE, Stage } from 'boardgame.io/core';
import { IG, cardEnum } from './types';
import { defaultDeck, cardFunctions } from './cards';

export function setupRound(g: IG, ctx: Ctx) {
  g.round++;

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
      unshuffledDeck.findIndex((e) => e === cardEnum.cake),
      1,
    );
  }

  let deck = ctx.random.Shuffle(unshuffledDeck);

  g.hands = new Array(ctx.numPlayers).fill(0).map((_, i) => ({
    currentOwner: i,
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

  if (g.round === 3) scoreGameEnd(g, ctx);
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
}

export const PicnicGoGame = {
  name: 'picnicGo',

  setup: (ctx) => {
    const baseState = {
      players: new Array(ctx.numPlayers).fill({
        playedCards: [],
        score: 0,
        dessertsCount: 0,
        chipsCount: 0,
        unusedMayo: 0,
        unusedForks: 0,
        forkUsed: false,
      }),
      hands: [{ currentOwner: 0, hand: [], selected: null }],
      round: 0,
      gameOver: false,
    };

    return setupRound(baseState, ctx);
  },

  moves: {
    selectCard: (g, ctx, index) => {
      if (index === undefined) return INVALID_MOVE;
      const idx = g.hands.findIndex((e) => e.currentOwner === parseInt(ctx.playerID, 10));
      if (index < 0 || index >= g.hands[idx].hand.length) return INVALID_MOVE;
      g.hands[idx].selected = index;
    },
    useFork: (g, ctx) => {
      if (g.player[ctx.playerID].forkUsed || g.player[ctx.playerID].unusedForks === 0) return INVALID_MOVE;
      g.player[ctx.playerID].forkUsed = true;
      g.player[ctx.playerID].unusedForks--;

      ctx.events.setStage({ stage: Stage.NULL, moveLimit: 2 });
    },
  },

  turn: {
    activePlayers: ActivePlayers.ALL_ONCE,
    endIf: (_, ctx) => ctx.activePlayers === null,
    onEnd: (g, ctx) => {
      for (let i = 0; i < ctx.numPlayers; i++) {
        const h = g.hands[i];
        g.players[h.currentOwner].playedCards.push(h.hand[h.selected]);

        g.players[h.currentOwner] = cardFunctions[h.hand[h.selected]](g.players[h.currentOwner]);

        g.hands[i].hand.splice(h.selected, 1);
        g.hands[i].selected = null;
        g.hands[i].currentOwner = (h.currentOwner + 1) % ctx.numPlayers;

        if (g.players[h.currentOwner].forkUsed) {
          g.hands[i].push(cardEnum.fork);
          g.players[h.currentOwner].forkUsed = false;
        }
      }

      // Hands are empty, end of round
      if (g.hands[0].hand.length === 0) {
        scoreRoundEnd(g, ctx);

        if (g.round < 3) setupRound(g, ctx);
        else g.gameOver = true;
      }
    },
  },

  endIf: (g, ctx) => {
    if (g.gameOver) {
      let winner = '0';
      let winningScore = 0;

      for (let i = 0; i < ctx.numPlayers; i++) {
        if (g.players[i].score > winningScore) {
          winner = i.toString();
          winningScore = g.players[i].score;
        }
      }

      return { winner };
    }
  },
};
