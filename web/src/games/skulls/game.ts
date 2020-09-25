import { Ctx, Game } from 'boardgame.io';
import { INVALID_MOVE, TurnOrder } from 'boardgame.io/core';

import IPlayer from './player';
import { Token } from './Token';

export enum Phases {
  initial_placement = 'initial_placement',
  place_or_bet = 'place_or_bet',
  bet = 'bet',
  reveal = 'reveal',
  penalty = 'penalty',
  result = 'result',
}

export enum Stages {
  select_card = 'select_card',
}

export interface IG {
  winningPlayerID: null | string;
  players: IPlayer[];
}

function getCurrentPlayerIndex(ctx: Ctx) {
  return ctx.playOrderPos;
}

function getMaxPossibleBet(G: IG) {
  return G.players.map((p) => p.stack.length).reduce((a, b) => a + b);
}

function getMaxPlayerBet(G: IG) {
  return G.players
    .map((p) => p.bet)
    .filter((b) => b !== null)
    .reduce((a, b) => (a >= b ? a : b));
}

function hasEveryOtherPlayerSkippedBet(G: IG) {
  return G.players.filter((p) => p.betSkipped).length === G.players.length - 1;
}

export const Moves = {
  GameStart: (G: IG, ctx: Ctx) => {
    ctx.events.setPhase(Phases.initial_placement);
  },

  PlaceToken: (G: IG, ctx: Ctx, handIndex: number) => {
    var playerIndex = getCurrentPlayerIndex(ctx);
    if (!(playerIndex in G.players)) {
      return INVALID_MOVE;
    }

    var player = G.players[playerIndex];
    var chosenToken = player.hand.splice(handIndex, 1)[0];
    player.stack.push(chosenToken);

    return G;
  },

  Bet: (G: IG, ctx: Ctx, bet: number) => {
    var playerIndex = getCurrentPlayerIndex(ctx);
    if (!(playerIndex in G.players)) {
      return INVALID_MOVE;
    }

    var player = G.players[playerIndex];
    player.bet = bet;

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
};

export const FooBarGame: Game<IG> = {
  name: 'skulls',

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
        MovePlaceToken: Moves.PlaceToken,
      },
      next: Phases.place_or_bet,
    },

    place_or_bet: {
      turn: {
        moveLimit: 1,
      },

      moves: {
        MovePlaceToken: Moves.PlaceToken,
        MoveBet: Moves.Bet,
      },

      endIf: (G: IG, ctx: Ctx) => {
        var playerIndex = getCurrentPlayerIndex(ctx);
        var currentPlayerBet = G.players[playerIndex].bet;
        var endPhase = currentPlayerBet !== null;
        if (endPhase) {
          var isMaxBet = currentPlayerBet === getMaxPossibleBet(G);

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
  },

  endIf: (G: IG) => {
    var winner = G.winningPlayerID;
    if (winner !== null) {
      return { winner: winner };
    }
  },

  setup: (ctx: Ctx): IG => {
    return {
      winningPlayerID: null,
      players: new Array(ctx.numPlayers).fill(0).map(() => ({
        bet: null,
        betSkipped: false,
        hand: [Token.Flower, Token.Flower, Token.Flower, Token.Skull],
        stack: [],
        revealedStack: [],
        wins: 0,
      })),
    };
  },
};
