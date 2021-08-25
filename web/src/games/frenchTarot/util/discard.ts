import { IG, IPlayer, CardColor } from '../types';
import * as util from './misc';

export function selectableCards(G: IG, playerId: string): boolean[] {
  const player = util.getPlayerById(G, playerId);
  const discard_num = util.kittySize(G.players.length);
  if (player.discardSelection === undefined) {
    return player.hand.map(() => false);
  }
  const trump_allowed = canDiscardTrump(G, player);
  return player.hand.map((c, i) => {
    if (player.discardSelection.length == discard_num) {
      return player.discardSelection.indexOf(i) != -1;
    }
    if (c.color == CardColor.Excuse) return false;
    if (c.color == CardColor.Trumps) {
      if ([1, 21].indexOf(c.value) != -1) return false;
      return player.discardSelection.indexOf(i) != -1 || trump_allowed;
    } else {
      return c.value < 14;
    }
  });
}

function canDiscardTrump(G: IG, player: IPlayer): boolean {
  const discard_num = util.kittySize(G.players.length);
  const num_color_cards = player.hand.filter(util.isColorCard).filter((C) => C.value < 14).length;
  const num_discarded_trumps = player.discardSelection.filter((i) => !util.isColorCard(player.hand[i])).length;
  return num_discarded_trumps < discard_num - num_color_cards;
}
