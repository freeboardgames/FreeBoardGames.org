import { IG } from '../types';
import * as util from './misc';

export function selectableCards(G: IG, playerId: string): boolean[] {
  const player = util.getPlayerById(G, playerId);
  const discard_num = 2;
  if (player.discardSelection === undefined) {
    return player.hand.map(() => false);
  }
  return player.hand.map((c, i) => {
    if (player.discardSelection.length == discard_num) {
      return player.discardSelection.includes(i);
    }
    return true;
  });
}
