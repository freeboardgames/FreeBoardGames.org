import { Contract, IG, ICard } from '../types';
import * as util from './misc';

export function selectableCards(G: IG, playerId: string): boolean[] {
  const player = util.getPlayerById(G, playerId);
  if (player.hand.length == 1) {
    return player.hand.map(() => true);
  }
  const is_trump = player.hand.map((C) => util.isTrump(G, C));
  const calledCard: ICard = G.contract == Contract.Ace ? G.calledCard : { color: null, value: 0 };
  const is_called_color = player.hand.map((C, i) => C.color == calledCard.color && !is_trump[i]);
  const has_called_card =
    G.contract == Contract.Ace && player.hand.some((C, i) => is_called_color[i] && C.value == calledCard.value);
  if (G.trick.cards.length == 0) {
    return player.hand.map((C, i) => {
      if (!has_called_card || G.calledMayRun != 0) {
        return true;
      }
      return !is_called_color[i] || C.value == calledCard.value;
    });
  }
  const lead_is_trump = util.isTrump(G, G.trick.cards[0]);
  const lead_color = G.trick.cards[0].color;
  const is_lead_color = lead_is_trump ? is_trump : player.hand.map((C, i) => C.color == lead_color && !is_trump[i]);
  const can_follow_suit = is_lead_color.some((v) => v);
  const called_has_run = G.calledMayRun < 0;
  return player.hand.map((C, i) => {
    if (!can_follow_suit) {
      return !has_called_card || called_has_run || !is_called_color[i] || C.value != calledCard.value;
    }
    if (!has_called_card || lead_is_trump || lead_color != calledCard.color) {
      return is_lead_color[i];
    }
    return called_has_run || C.value == calledCard.value;
  });
}
