import { IG } from '../types';
import * as util from './misc';

export function selectableCards(G: IG, playerId: string): boolean[] {
  const player = util.getPlayerById(G, playerId);
  if (G.trick.cards.length == 0 || player.hand.length == 1) {
    return player.hand.map(() => true);
  }
  const is_trump = player.hand.map((C) => util.isTrump(G, C));
  const lead_is_trump = util.isTrump(G, G.trick.cards[0]);
  const lead_suit = G.trick.cards[0].suit;
  const is_lead_suit = lead_is_trump ? is_trump : player.hand.map((C, i) => C.suit == lead_suit && !is_trump[i]);
  const can_follow_suit = is_lead_suit.some((v) => v);
  return player.hand.map((_, i) => !can_follow_suit || is_lead_suit[i]);
}
