import { Ctx } from 'boardgame.io';

import { IG, ICard, CardColor } from '../types';
import * as util from './misc';

export function selectableCards(G: IG, playerId: string): boolean[] {
  const player = util.getPlayerById(G, playerId);
  const max_poignee_level = maxPoigneeLevel(player.hand, G.players.length);
  if (max_poignee_level == 0) return player.hand.map(() => false);
  const thresh = getPoigneeThresholds(G.players.length);
  const max_thresh = thresh[max_poignee_level - 1];
  if (player.discardSelection.length == max_thresh) {
    return player.hand.map((C, i) => player.discardSelection.indexOf(i) != -1);
  }
  const num_trumps = player.hand.filter((C) => C.color == CardColor.Trumps).length;
  return player.hand.map((C) => {
    if (C.color == CardColor.Trumps) return true;
    return (
      C.color == CardColor.Excuse && num_trumps == max_thresh - 1 && player.discardSelection.length == max_thresh - 1
    );
  });
}

export function preselectPoignee(G: IG, ctx: Ctx) {
  const player = util.getPlayerById(G, ctx.currentPlayer);
  const max_poignee_level = maxPoigneeLevel(player.hand, ctx.numPlayers);
  if (max_poignee_level == 0) return;
  const thresh = getPoigneeThresholds(ctx.numPlayers)[max_poignee_level - 1];
  const excuse_pos = player.hand.findIndex((C) => C.color == CardColor.Excuse);
  const trumps_pos = player.hand.map((C, i) => (C.color == CardColor.Trumps ? i : -1)).filter((i) => i >= 0);
  player.discardSelection = trumps_pos.length >= thresh ? trumps_pos.slice(0, thresh) : trumps_pos.concat([excuse_pos]);
}

export function maxPoigneeLevel(hand: ICard[], numPlayers: number) {
  const num_trumps_in_hand = hand.filter((C) => [CardColor.Trumps, CardColor.Excuse].indexOf(C.color) != -1).length;
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
