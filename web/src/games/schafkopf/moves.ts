import { INVALID_MOVE } from 'boardgame.io/core';
import { Ctx } from 'boardgame.io';

import { Contract, Phases, Stages, IG, ICard, CardColor } from './types';
import * as util from './util/misc';

export const Moves = {
  MakeBid(G: IG, ctx: Ctx, value: number) {
    const player = util.getPlayerById(G, ctx.currentPlayer);
    player.bid = value;
    return G;
  },

  Discard(G: IG, ctx: Ctx) {
    const player = util.getPlayerById(G, ctx.currentPlayer);
    const discard_num = util.kittySize(ctx.numPlayers);

    if (discard_num > 0) {
      if (!player.discardSelection || player.discardSelection.length != discard_num || !player.isTaker) {
        return INVALID_MOVE;
      }

      G.resolvedTricks.push({
        // make sure we splice from right to left so that indices remain valid
        cards: player.discardSelection
          .sort((a, b) => b - a)
          .map((i) => player.hand.splice(i, 1)[0])
          .reverse(),
        winner: player,
      });
      delete player.discardSelection;
      G.kitty = [];
    }

    if (G.contract == Contract.Solo) {
      ctx.events.setStage(Stages.select_trump);
    } else if (G.contract == Contract.Ace) {
      ctx.events.setStage(Stages.call_card);
    } else {
      ctx.events.endPhase();
    }

    return G;
  },

  Call(G: IG, ctx: Ctx, card: ICard) {
    G.calledCard = card;
    ctx.events.endStage();
    ctx.events.endPhase();
    return G;
  },

  SelectTrumpSuit(G: IG, ctx: Ctx, suit: CardColor) {
    G.trumpSuit = suit;
    ctx.events.endStage();
    ctx.events.endPhase();
    return G;
  },

  SelectCards(G: IG, ctx: Ctx, handIndex: number[]) {
    const player = util.getPlayerById(G, ctx.currentPlayer);
    if (ctx.phase == Phases.discard) {
      const discard_num = util.kittySize(ctx.numPlayers);
      if (handIndex.length > discard_num) {
        return INVALID_MOVE;
      }
      player.discardSelection = [...handIndex];
    } else {
      if (handIndex.length == 0) {
        return INVALID_MOVE;
      }
      G.trick.cards.push(player.hand.splice(handIndex[0], 1)[0]);
    }
    return G;
  },

  Finish(G: IG, ctx: Ctx, quit: boolean) {
    const player = util.getPlayerById(G, ctx.playerID);
    player.isReady = true;
    ctx.events.endStage();
    ctx.events.endTurn();
    if (quit) ctx.events.endGame({ winner: 2 });
    return G;
  },
};
