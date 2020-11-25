import { IG } from './interfaces';
import { Ctx } from 'boardgame.io';

export function isWin(G: IG) {
  if (G.deadIDs.includes(G.draculaID)) {
    return true; // Dracula is dead
  }
  if (G.policyBoardHuman[4] != null) {
    return true; // 5 Human Policies were played
  }

  return false;
}

export function isLose(G: IG, ctx: Ctx) {
  if (!G.voting && G.draculaID == G.priestID) {
    if ((G.policyBoardVampire[2] != null) && (ctx.phase == 'phaseDiscardMayor' )){
      return true; // Dracula is mayor
    }
  }
  if (G.policyBoardVampire[5] != null) {
    return true; // 6 Vampire Policies were played
  }
  return false;
}
