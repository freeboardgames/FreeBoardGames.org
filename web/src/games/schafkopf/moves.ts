import { INVALID_MOVE } from 'boardgame.io/core';
import { Ctx } from 'boardgame.io';
import { ICard, CardColor } from 'gamesShared/definitions/cards';

import { Stages, IG } from './types';
import * as util from './util/misc';

export const Moves = {
  MakeBid(G: IG, ctx: Ctx, value: number) {
    const player = util.getPlayerById(G, ctx.currentPlayer);
    player.bid = value;
    return G;
  },

  Call(G: IG, ctx: Ctx, card: ICard) {
    G.calledCard = card;
    ctx.events.endStage();
    ctx.events.endPhase();
    return G;
  },

  SelectTrumpSuit(G: IG, ctx: Ctx, suit: CardColor) {
    const player = util.getPlayerById(G, ctx.currentPlayer);
    G.trumpSuit = suit;
    ctx.events.endStage();
    if (player.hand.some((C) => C.color == CardColor.Eichel && C.value == 12)) {
      ctx.events.setStage(Stages.announce_tout);
    } else {
      ctx.events.endPhase();
    }
    return G;
  },

  AnnounceTout(G: IG, ctx: Ctx, announce: boolean) {
    G.announcedTout = announce;
    ctx.events.endStage();
    ctx.events.endPhase();
    return G;
  },

  GiveContra(G: IG, ctx: Ctx) {
    const player = util.getPlayerById(G, ctx.playerID);
    const isTaker = player.isTaker || player.id == G.calledTakerId;
    if (G.resolvedTricks.length > 0 || G.trick.cards.length > 1) {
      return INVALID_MOVE;
    }
    if ((G.contra == 1 && isTaker) || (G.contra == 2 && !isTaker) || G.contra == 4) {
      return INVALID_MOVE;
    }
    G.contra *= 2;
    if (player.id == G.calledTakerId) {
      player.isTaker = true;
    }
    return G;
  },

  SelectCards(G: IG, ctx: Ctx, handIndex: number[]) {
    const player = util.getPlayerById(G, ctx.currentPlayer);
    if (handIndex.length == 0) {
      return INVALID_MOVE;
    }
    G.trick.cards.push(player.hand.splice(handIndex[0], 1)[0]);
    ctx.events.endTurn();
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
