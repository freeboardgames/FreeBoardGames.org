import { Ctx, Game } from 'boardgame.io';
import { INVALID_MOVE, TurnOrder } from 'boardgame.io/core';

import IPlayer from './player';
import { CardType } from './cardType';
import { CardStyle } from './CardComponent';

export enum Phases {
  initial_placement = 'initial_placement',
  place_or_bet = 'place_or_bet',
  bet = 'bet',
  reveal = 'reveal',
  penalty = 'penalty',
  result = 'result',
}

const BetPhases = [Phases.place_or_bet, Phases.bet];
const PlacementPhases = [Phases.initial_placement, Phases.place_or_bet];
export const MaxPlayers = 6;

export enum Stages {
  select_card = 'select_card',
}

export interface IG {
  players: IPlayer[];
  minBet: number;
  maxBet: number;
  currentBet: number;
  bombPlayerId: string | null;
  failedRevealPlayerId: string | null;
  discardPile: CardStyle[];
}

export function canPlaceCard(ctx: Ctx, playerId: string): boolean {
  return isCurrentPlayer(ctx, playerId) && PlacementPhases.map((p) => p.toString()).includes(ctx.phase);
}

export function canBet(G: IG, ctx: Ctx, playerId: string): boolean {
  return (
    isCurrentPlayer(ctx, playerId) &&
    BetPhases.map((x) => x.toString()).includes(ctx.phase) &&
    G.maxBet >= G.minBet &&
    G.minBet > 0
  );
}

export function canSkipBet(G: IG, ctx: Ctx, playerId: string): boolean {
  return isCurrentPlayer(ctx, playerId) && G.currentBet > 0 && canBet(G, ctx, playerId);
}

export function isRevealing(ctx: Ctx): boolean {
  return ctx.phase === Phases.reveal.toString();
}

export function isBetting(ctx: Ctx): boolean {
  return ctx.phase === Phases.bet;
}

export function canRevealTargetStack(G: IG, ctx: Ctx, targetPlayerId: string) {
  var currentPlayer = getPlayerById(G, ctx.currentPlayer);
  var targetPlayer = getPlayerById(G, targetPlayerId);
  return (
    isRevealing(ctx) &&
    ((currentPlayer.id === targetPlayer.id && currentPlayer.stack.length > 0) ||
      (currentPlayer.stack.length === 0 && targetPlayer.stack.length > 0))
  );
}

export function canDiscard(G: IG, playerId: string): boolean {
  return G.bombPlayerId !== null && G.bombPlayerId === playerId;
}

export function getPlayerById(G: IG, playerId: string): IPlayer {
  return G.players.find((p) => p.id === playerId);
}

export function getMaxPossibleBet(G: IG) {
  return G.players.map((p) => p.stack.length).reduce((a, b) => a + b);
}

export function getMaxPlayerBet(players: IPlayer[]) {
  var playerBets = players.map((p) => p.bet).filter((b) => b !== null);

  return [...playerBets, 0].reduce((a, b) => (a >= b ? a : b));
}

export function getRevealCount(players: IPlayer[]) {
  var playerRevealCounts = players.map((p) => p.revealedStack.length);

  return [...playerRevealCounts, 0].reduce((a, b) => a + b);
}

function isCurrentPlayer(ctx: Ctx, playerId: string): boolean {
  return ctx.currentPlayer == playerId;
}

function getPlayerWithMaxBet(G: IG): IPlayer {
  return G.players.reduce((a, b) => (a.bet >= b.bet ? a : b));
}

function getCurrentPlayerIndex(ctx: Ctx) {
  return ctx.playOrderPos;
}

function hasEveryOtherPlayerSkippedBet(G: IG) {
  return G.players.filter((p) => p.betSkipped).length === G.players.length - 1;
}

function hasInitialPlacementFinished(G: IG) {
  return G.players.every((p) => p.stack.length === 1);
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

    var maxBet = getMaxPossibleBet(G);

    if (bet === maxBet) {
      ctx.events.endPhase();
    }

    return G;
  },

  SkipBet: (G: IG, ctx: Ctx) => {
    var playerIndex = getCurrentPlayerIndex(ctx);
    if (!(playerIndex in G.players)) {
      return INVALID_MOVE;
    }

    var player = G.players[playerIndex];
    player.betSkipped = true;

    var oneBetRemaining = hasEveryOtherPlayerSkippedBet(G);
    if (oneBetRemaining) {
      ctx.events.endTurn({ next: getPlayerWithMaxBet(G).id });
      ctx.events.endPhase();
    }

    return G;
  },

  Reveal: (G: IG, ctx: Ctx, targetPlayerId: string) => {
    var currentPlayer = getPlayerById(G, ctx.currentPlayer);
    var targetPlayer = getPlayerById(G, targetPlayerId);

    if (targetPlayer.stack.length <= 0 || (currentPlayer.stack.length > 0 && targetPlayerId !== currentPlayer.id)) {
      return INVALID_MOVE;
    }

    var revealedCard = targetPlayer.stack.splice(targetPlayer.stack.length - 1, 1)[0];
    targetPlayer.revealedStack.push(revealedCard);

    if (revealedCard === CardType.Bomb) {
      G.bombPlayerId = targetPlayer.id;
      G.failedRevealPlayerId = ctx.currentPlayer;

      ctx.events.endTurn({ next: G.bombPlayerId });
      ctx.events.setPhase(Phases.penalty);
    }

    var revealed = getAllRevealedCards(G);
    if (revealed.length === currentPlayer.bet) {
      currentPlayer.wins++;
      ctx.events.endTurn();
      ctx.events.setPhase(Phases.initial_placement);
    }

    return G;
  },

  Discard: (G: IG, ctx: Ctx, targetPlayerId: string, handIndex: number) => {
    if (
      !G.failedRevealPlayerId &&
      !G.bombPlayerId &&
      ctx.currentPlayer === G.bombPlayerId &&
      targetPlayerId === G.failedRevealPlayerId
    ) {
      return INVALID_MOVE;
    }

    var targetPlayer = getPlayerById(G, targetPlayerId);
    targetPlayer.hand.splice(handIndex, 1);

    G.discardPile.push(targetPlayer.cardStyle);

    G.bombPlayerId = null;
    G.failedRevealPlayerId = null;

    ctx.events.endTurn({ next: ctx.currentPlayer });
    ctx.events.endPhase();

    return G;
  },
};

export const BombsAndBunniesGame: Game<IG> = {
  name: 'bombsAndBunnies',

  moves: {
    GameStart: Moves.GameStart,
  },

  phases: {
    initial_placement: {
      turn: {
        moveLimit: 1,
        order: TurnOrder.CONTINUE,
      },
      moves: {
        MovePlaceCard: Moves.PlaceCard,
      },
      next: Phases.place_or_bet,

      endIf: (G: IG) => hasInitialPlacementFinished(G),
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
          return {
            next: isMaxBet ? Phases.reveal : Phases.bet,
          };
        }
      },
    },

    bet: {
      turn: {
        moveLimit: 1,
        order: TurnOrder.DEFAULT,
      },

      moves: {
        MoveBet: Moves.Bet,
        MoveSkipBet: Moves.SkipBet,
      },

      next: Phases.reveal,
    },

    reveal: {
      turn: {
        order: TurnOrder.CONTINUE,
      },

      moves: {
        MoveReveal: Moves.Reveal,
      },

      next: Phases.initial_placement,

      onEnd: (G: IG) => {
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

      next: Phases.initial_placement,
    },
  },

  endIf: (G: IG) => {
    var winner = G.players.find((p) => p.wins === 2);
    if (winner !== undefined) {
      return { winner: winner.id };
    }
  },

  setup: (ctx: Ctx): IG => {
    let players: IPlayer[] = new Array(ctx.numPlayers).fill(0).map((_, i) => ({
      id: i.toString(),
      cardStyle: <CardStyle>i,
      bet: null,
      betSkipped: false,
      hand: [CardType.Bunny, CardType.Bunny, CardType.Bunny, CardType.Bomb],
      stack: [],
      revealedStack: [],
      wins: 0,
    }));

    return {
      players: players,
      minBet: 1,
      maxBet: 0,
      currentBet: 0,
      bombPlayerId: null,
      failedRevealPlayerId: null,
      discardPile: [],
    };
  },
};
