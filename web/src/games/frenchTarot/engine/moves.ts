import { INVALID_MOVE } from 'boardgame.io/core';
import { Ctx } from 'boardgame.io';

import { Phases, Stages, IG, ICard } from './types';
import * as util from './util';
import * as poignee from './poignee';

export const Moves = {
  MakeBid(G: IG, ctx: Ctx, value: number) {
    const player = util.getPlayerById(G, ctx.currentPlayer);
    player.bid = value;
    return G;
  },

  Call(G: IG, ctx: Ctx, card: ICard) {
    G.calledCard = card;
    return G;
  },

  Discard(G: IG, ctx: Ctx) {
    const player = util.getPlayerById(G, ctx.currentPlayer);
    const discard_num = util.kittySize(ctx.numPlayers);

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

    return G;
  },

  AnnounceSlam(G: IG, ctx: Ctx, announce: boolean) {
    const player = util.getPlayerById(G, ctx.currentPlayer);
    if (!player.isTaker) return INVALID_MOVE;
    G.announcedSlam = announce;
    if (announce) G.trick.leader = player;
    player.isReady = true;
    return G;
  },

  DeclarePoignee(G: IG, ctx: Ctx, declare: boolean) {
    const player = util.getPlayerById(G, ctx.currentPlayer);
    if (declare) {
      if (!player.discardSelection) return INVALID_MOVE;
      const poignee_thresholds = poignee.getPoigneeThresholds(ctx.numPlayers);
      const poignee_level = poignee_thresholds.indexOf(player.discardSelection.length);
      if (poignee_level == -1) return INVALID_MOVE;
      const isTaker = player.isTaker || util.isCalledTaker(player, G);
      G.poignee += (isTaker ? 1 : -1) * [20, 30, 40][poignee_level];
      G.kitty = player.discardSelection.sort((a, b) => a - b).map((i) => player.hand[i]);
      G.kittyRevealed = true;
    }
    delete player.discardSelection;
    ctx.events.endStage();
    return G;
  },

  SelectCards(G: IG, ctx: Ctx, handIndex: number[]) {
    const player = util.getPlayerById(G, ctx.currentPlayer);
    const stage = ctx.activePlayers && ctx.activePlayers[+player.id];
    if (stage == Stages.declare_poignee) {
      player.discardSelection = [...handIndex];
    } else if (ctx.phase == Phases.discard) {
      const discard_num = ctx.numPlayers == 5 ? 3 : 6;
      if (handIndex.length > discard_num) {
        return INVALID_MOVE;
      }
      player.discardSelection = [...handIndex];
    } else if (stage == Stages.place_card) {
      if (handIndex.length == 0) {
        return INVALID_MOVE;
      }
      G.trick.cards.push(player.hand.splice(handIndex[0], 1)[0]);
      G.kitty = [];
      G.kittyRevealed = false;
      ctx.events.endTurn();
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
