import { INVALID_MOVE } from 'boardgame.io/core';
import { Ctx } from 'boardgame.io';

import { Stages, Contract, Announcement, IG, CardColor } from './types';
import * as util from './util/misc';

export const Moves = {
  MakeBid(G: IG, ctx: Ctx, contract: Contract) {
    const player = util.getPlayerById(G, ctx.currentPlayer);
    player.bid = contract;
    if (G.players.some((P) => P.bid == Contract.None)) {
      ctx.events.endTurn();
    } else if (G.players.every((P) => P.bid == Contract.Pass)) {
      G.contract = Contract.Normal;
      ctx.events.endPhase();
    } else if (contract > Contract.Some) {
      G.contract = contract;
      G.takerId = player.id;
      player.isTaker = true;
      if (contract == Contract.SoloTrump) {
        ctx.events.setStage(Stages.select_trump);
      } else {
        ctx.events.endPhase();
      }
    }
    return G;
  },

  SelectTrumpSuit(G: IG, ctx: Ctx, suit: CardColor) {
    G.trumpSuit = suit;
    ctx.events.endStage();
    ctx.events.endPhase();
    return G;
  },

  Announce(G: IG, ctx: Ctx, announcement: Announcement) {
    const player = util.getPlayerById(G, ctx.playerID);
    const isTaker = player.id == G.takerId || player.id == G.partnerId;
    if (isTaker) {
      G.announcementRe = announcement;
      player.isTaker = true;
    } else {
      G.announcementContra = announcement;
    }
    return G;
  },

  SelectCards(G: IG, ctx: Ctx, handIndex: number[]) {
    const player = util.getPlayerById(G, ctx.currentPlayer);
    if (handIndex.length == 0) {
      return INVALID_MOVE;
    }
    const card = player.hand.splice(handIndex[0], 1)[0];
    G.trick.cards.push(card);
    if (G.contract == Contract.Normal && util.isOld(card)) {
      if (!player.isTaker) {
        player.isTaker = true;
      } else if (!G.partnerId) {
        G.contract = Contract.SoloTrump;
      }
    }
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
