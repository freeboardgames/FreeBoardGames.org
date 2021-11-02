import { Ctx } from 'boardgame.io';
import { Suit, ICard } from 'gamesShared/definitions/cards';

import { IG } from '../types';
import * as util from './misc';

export function selectableCards(G: IG, playerId: string): boolean[] {
  const player = util.getPlayerById(G, playerId);
  const max_poignee_level = maxPoigneeLevel(player.hand, G.players.length);
  if (max_poignee_level == 0) return player.hand.map(() => false);
  const thresh = getPoigneeThresholds(G.players.length);
  const max_thresh = thresh[max_poignee_level - 1];
  if (player.discardSelection.length == max_thresh) {
    return player.hand.map((C, i) => player.discardSelection.includes(i));
  }
  const num_trumps = player.hand.filter((C) => C.suit == Suit.Trumps).length;
  return player.hand.map((C) => {
    if (C.suit == Suit.Trumps) return true;
    return C.suit == Suit.Excuse && num_trumps == max_thresh - 1 && player.discardSelection.length == max_thresh - 1;
  });
}

export function preselectPoignee(G: IG, ctx: Ctx) {
  const player = util.getPlayerById(G, ctx.currentPlayer);
  const max_poignee_level = maxPoigneeLevel(player.hand, ctx.numPlayers);
  if (max_poignee_level == 0) return;
  const thresh = getPoigneeThresholds(ctx.numPlayers)[max_poignee_level - 1];
  const excuse_pos = player.hand.findIndex((C) => C.suit == Suit.Excuse);
  const trumps_pos = player.hand.map((C, i) => (C.suit == Suit.Trumps ? i : -1)).filter((i) => i >= 0);
  player.discardSelection = trumps_pos.length >= thresh ? trumps_pos.slice(0, thresh) : trumps_pos.concat([excuse_pos]);
}

export function autoDeselectExcuse(G: IG, ctx: Ctx, sel: number[]): number[] {
  const player = util.getPlayerById(G, ctx.currentPlayer);
  const max_poignee_level = maxPoigneeLevel(player.hand, ctx.numPlayers);
  if (max_poignee_level == 0) return [];
  const thresh = getPoigneeThresholds(ctx.numPlayers)[max_poignee_level - 1];
  const excuse_pos = player.hand.findIndex((C) => C.suit == Suit.Excuse);
  const excuse_selpos = sel.indexOf(excuse_pos);
  if (excuse_selpos != -1 && sel.length < thresh) {
    sel.splice(excuse_selpos, 1);
  }
  return sel;
}

export function maxPoigneeLevel(hand: ICard[], numPlayers: number) {
  const num_trumps_in_hand = hand.filter((C) => [Suit.Trumps, Suit.Excuse].includes(C.suit)).length;
  const thresh = getPoigneeThresholds(numPlayers);
  let i = 0;
  for (; i < thresh.length && thresh[i] <= num_trumps_in_hand; i++);
  return i;
}

export function getPoigneeThresholds(numPlayers: number): number[] {
  return [
    [13, 15, 18],
    [10, 13, 15],
    [8, 10, 13],
  ][Math.max(0, numPlayers - 3)];
}
