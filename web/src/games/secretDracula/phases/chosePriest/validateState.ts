import { IG, IPolicy } from '../../interfaces';
import { Ctx } from 'boardgame.io';

export function validateOnEntry(G: IG, ctx: Ctx): boolean {
  if (G.voting) {
    console.log('ValidateOnEntry error: G.voting == true, but should be false');
    return false;
  }

  return true;
}

export function validateEndIf(G: IG, ctx: Ctx): boolean {
  if (G.voting) {
    return true;
  }
  return false;
}

export function validateOnExit(G: IG, ctx: Ctx): boolean {
  if (!G.voting) {
    console.log('ValidateOnExit error: G.voting == false, but should be true');
    return false;
  }

  if (ctx.numPlayers == 5) {
    if (G.lastPriestID == G.priestID) {
      console.log('Cannot re-nominate! (only priest in 5er)');
      return false;
    }
  } else {
    if (G.lastMayorID == G.priestID || G.lastPriestID == G.priestID) {
      console.log('Cannot re-nominate!');
      return false;
    }
  }

  if (G.deadIDs.includes(G.mayorID)) {
    console.log('Cannot nominate dead Mayor!');
    return false;
  }
  if (G.deadIDs.includes(G.priestID)) {
    console.log('Cannot nominate dead Priest!');
    return false;
  }

  return true;
}
