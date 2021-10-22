import { INVALID_MOVE } from 'boardgame.io/core';
import { Ctx } from 'boardgame.io';

import { Contract, Announcement, IG } from './types';
import * as util from './util/misc';

export const Moves = {
  MakeBid(G: IG, ctx: Ctx, contract: Contract) {
    const player = util.getPlayerById(G, ctx.currentPlayer);
    player.bid = contract;
    if (contract == Contract.Normal) {
      G.calledCard = util.getCallCard(player.hand);
    }
    return G;
  },

  Announce(G: IG, ctx: Ctx, announcement: Announcement, contra: boolean) {
    const player = util.getPlayerById(G, ctx.currentPlayer);
    const isTaker = player.isTaker || player.id == G.partnerId;
    if (announcement == Announcement.None) {
      player.bid = Contract.Pass;
      return G;
    }
    player.bid = Contract.None;
    const name = Announcement[announcement];
    const announcements = isTaker != contra ? G.announcementsRe : G.announcementsContra;
    const level = announcements[name];
    announcements[name] = level == 0 ? 1 : 2 * level;
    if (G.contract == Contract.Normal && isTaker) {
      player.isTaker = true;
    }
    if (announcement == Announcement.Valat && !contra) {
      G.announcementsRe.Absolut = 0;
      G.announcementsRe.Pagat = 0;
      G.announcementsContra.Absolut = 0;
      G.announcementsContra.Pagat = 0;
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
    if (G.contract == Contract.Normal && card.color == G.calledCard.color && card.value == G.calledCard.value) {
      player.isTaker = true;
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
