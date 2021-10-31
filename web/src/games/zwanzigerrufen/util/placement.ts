import { Contract, IG } from '../types';
import * as util from './misc';

export function selectableCards(G: IG, playerId: string): boolean[] {
  const player = util.getPlayerById(G, playerId);
  if (player.hand.length == 1) {
    return player.hand.map(() => true);
  }
  const is_trump = player.hand.map((C) => util.isTrump(C));
  if (G.trick.cards.length == 0) {
    const has_color = is_trump.some((v) => !v);
    if (G.contract != Contract.SoloSuit || !has_color) return player.hand.map(() => true);
    return is_trump.map((v) => !v);
  }
  const has_trump = is_trump.some((v) => v);
  const lead_is_trump = util.isTrump(G.trick.cards[0]);
  const lead_color = G.trick.cards[0].color;
  const is_lead_color = lead_is_trump ? is_trump : player.hand.map((C) => C.color == lead_color);
  const can_follow_suit = is_lead_color.some((v) => v);
  return can_follow_suit ? is_lead_color : has_trump ? is_trump : player.hand.map(() => true);
}
