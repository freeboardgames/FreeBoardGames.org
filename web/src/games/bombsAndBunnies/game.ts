import { Ctx, Game } from 'boardgame.io';
import { INVALID_MOVE, TurnOrder } from 'boardgame.io/core';

import IPlayer from './player';
import { CardType } from './cardType';

export enum Phases {
  initial_placement = 'initial_placement',
  place_or_bet = 'place_or_bet',
  bet = 'bet',
  reveal = 'reveal',
  penalty = 'penalty',
  result = 'result',
}

export const PlacementPhases = [Phases.initial_placement, Phases.place_or_bet];
export const MaxPlayers = 6;

export enum Stages {
  select_card = 'select_card',
}

export interface IG {
  players: IPlayer[];
  minBet: number;
  maxBet: number;
  currentBet: number;
}

function getCurrentPlayerIndex(ctx: Ctx) {
  return ctx.playOrderPos;
}

export function getMaxPossibleBet(G: IG) {
  return G.players.map((p) => p.stack.length).reduce((a, b) => a + b);
}

export function getMaxPlayerBet(G: IG) {
  var playerBets = G.players.map((p) => p.bet).filter((b) => b !== null);

  return [...playerBets, 0].reduce((a, b) => (a >= b ? a : b));
}

function hasEveryOtherPlayerSkippedBet(G: IG) {
  return G.players.filter((p) => p.betSkipped).length === G.players.length - 1;
}

function pickUpHand(G: IG) {
  for (var i = 0; i < G.players.length; i++) {
    var player = G.players[i];
    player.hand = player.hand.concat(player.stack).concat(player.revealedStack);
    player.hand.sort();
    player.stack = [];
    player.revealedStack = [];
  }
}

function resetBets(G: IG) {
  G.minBet = 1;
  G.maxBet = 0;
  G.currentBet = 0;

  for (var i = 0; i < G.players.length; i++) {
    var player = G.players[i];
    player.betSkipped = false;
    player.bet = null;
  }
}

function getAllRevealedCards(G: IG) {
  return G.players.map((p) => p.revealedStack).reduce((a, b) => a.concat(b));
}

export const Moves = {
  GameStart: (G: IG, ctx: Ctx) => {
    ctx.events.setPhase(Phases.initial_placement);
  },

  PlaceCard: (G: IG, ctx: Ctx, handIndex: number) => {
    var playerIndex = getCurrentPlayerIndex(ctx);
    if (!(playerIndex in G.players)) {
      return INVALID_MOVE;
    }

    var player = G.players[playerIndex];
    var chosenCard = player.hand.splice(handIndex, 1)[0];
    player.stack.push(chosenCard);

    G.maxBet += 1;

    return G;
  },

  Bet: (G: IG, ctx: Ctx, bet: number) => {
    var playerIndex = getCurrentPlayerIndex(ctx);
    if (!(playerIndex in G.players)) {
      return INVALID_MOVE;
    }

    if (bet < G.minBet || bet > G.maxBet) {
      return INVALID_MOVE;
    }

    var player = G.players[playerIndex];
    player.bet = bet;
    G.minBet = bet + 1;
    G.currentBet = bet;

    return G;
  },

  SkipBet: (G: IG, ctx: Ctx) => {
    var playerIndex = getCurrentPlayerIndex(ctx);
    if (!(playerIndex in G.players)) {
      return INVALID_MOVE;
    }

    var player = G.players[playerIndex];
    player.betSkipped = true;

    return G;
  },

  Reveal: (G: IG, ctx: Ctx, targetPlayerIndex: number) => {
    var playerIndex = getCurrentPlayerIndex(ctx);
    if (!(playerIndex in G.players)) {
      return INVALID_MOVE;
    }

    var player = G.players[playerIndex];
    if (targetPlayerIndex !== playerIndex && player.stack.length > 0) {
      return INVALID_MOVE;
    }

    var targetPlayer = G.players[targetPlayerIndex];

    var revealedCard = targetPlayer.stack.splice(targetPlayer.stack.length - 1, 1)[0];
    targetPlayer.revealedStack.push(revealedCard);

    return G;
  },

  Discard: (G: IG, ctx: Ctx, targetPlayerIndex: number, handIndex: number) => {
    var playerIndex = getCurrentPlayerIndex(ctx);
    if (!(playerIndex in G.players)) {
      return INVALID_MOVE;
    }

    var targetPlayer = G.players[targetPlayerIndex];
    targetPlayer.hand.splice(handIndex, 1);

    return G;
  },
};

export const BombsAndBunniesGame: Game<IG> = {
  name: 'bombsAndBunnies',

  moves: {
    GameStart: Moves.GameStart,
  },

  turn: {
    moveLimit: 1,
    order: {
      first: () => 0,
      next: (G, ctx) => ctx.random.Die(ctx.numPlayers) - 1,
    },
  },

  phases: {
    initial_placement: {
      turn: {
        moveLimit: 1,
        order: TurnOrder.ONCE,
      },
      moves: {
        MovePlaceCard: Moves.PlaceCard,
      },
      next: Phases.place_or_bet,
    },

    place_or_bet: {
      turn: {
        moveLimit: 1,
        order: TurnOrder.DEFAULT,
      },

      moves: {
        MovePlaceCard: Moves.PlaceCard,
        MoveBet: Moves.Bet,
      },

      endIf: (G: IG, ctx: Ctx) => {
        var playerIndex = getCurrentPlayerIndex(ctx);
        var currentPlayerBet = G.players[playerIndex].bet;
        var endPhase = currentPlayerBet !== null;
        if (endPhase) {
          var isMaxBet = currentPlayerBet === getMaxPossibleBet(G);
          //console.log("place ir bet end", isMaxBet);
          return {
            next: isMaxBet ? Phases.reveal : Phases.bet,
          };
        }
      },
    },

    bet: {
      turn: {
        order: TurnOrder.DEFAULT,
      },

      moves: {
        MoveBet: Moves.Bet,
        MoveSkipBet: Moves.SkipBet,
      },

      next: Phases.reveal,

      endIf: (G: IG) => {
        var maxBet = getMaxPossibleBet(G);
        var maxPlayerBet = getMaxPlayerBet(G);
        var oneBetRemaining = hasEveryOtherPlayerSkippedBet(G);

        return maxPlayerBet === maxBet || oneBetRemaining;
      },
    },

    reveal: {
      turn: {
        order: TurnOrder.CONTINUE,
      },

      moves: {
        MoveReveal: Moves.Reveal,
      },

      endIf: (G: IG) => {
        var targetBet = G.currentBet;
        var revealed = getAllRevealedCards(G);

        if (revealed.some((x) => x === CardType.Bomb)) {
          return { next: Phases.penalty };
        }

        if (revealed.length === targetBet) {
          return { next: Phases.initial_placement };
        }
      },

      onEnd: (G: IG, ctx: Ctx) => {
        //console.log("reveal - onEnd", G, ctx);
        var revealed = getAllRevealedCards(G);
        if (revealed.length === G.currentBet && !revealed.some((x) => x === CardType.Bomb)) {
          G.players[getCurrentPlayerIndex(ctx)].wins++;
        }
        pickUpHand(G);
        resetBets(G);
      },
    },

    penalty: {
      turn: {
        order: TurnOrder.CONTINUE,
      },

      moves: {
        MoveDiscard: Moves.Discard,
      },

      endIf: () => true, // only allow one move
    },
  },

  endIf: (G: IG) => {
    var winner = G.players.find((p) => p.wins === 2);
    if (winner !== undefined) {
      return { winner: winner.id };
    }
  },

  setup: (ctx: Ctx): IG => {
    return {
      players: new Array(ctx.numPlayers).fill(0).map((_, i) => ({
        id: i.toString(),
        bet: null,
        betSkipped: false,
        hand: [CardType.Bunny, CardType.Bunny, CardType.Bunny, CardType.Bomb],
        stack: [],
        revealedStack: [],
        wins: 0,
      })),
      minBet: 1,
      maxBet: 0,
      currentBet: 0,
    };
  },
};
