import { IG } from './interfaces';
import { Ctx } from 'boardgame.io';

// End Conditions
export function isWin(G: IG) {
  for (var i = 0; i < 5; i++) {
    if (G.piles[i] === null) {
      return false;
    }
    if (!(G.piles[i].length === 5)) {
      return false;
    }
    if (i === 4) {
      return true;
    }
  }
}

export function isLose(G: IG) {
  if (G.countdown === 0) {
    return true;
  }
}

export function isEnd(G: IG, ctx: Ctx) {
  if (G.deckindex === -1 - ctx.numPlayers) {
    return true;
    // Every player has made a move after the deck turned empty
  }
}
