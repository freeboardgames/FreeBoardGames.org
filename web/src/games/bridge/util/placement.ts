import { IG } from '../types';
import * as util from './misc';

export function selectableCards(G: IG, playerId: string): boolean[] {
  const player = util.getPlayerById(G, playerId);
  if (player.hand.length == 1 || G.trick.cards.length == 0) {
    return player.hand.map(() => true);
  }
  const lead_suit = G.trick.cards[0].suit;
  const is_lead_suit = player.hand.map((C) => C.suit == lead_suit);
  const can_follow_suit = is_lead_suit.some((v) => v);
  return can_follow_suit ? is_lead_suit : player.hand.map(() => true);
}
