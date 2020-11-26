import { IG } from './interfaces';

export function isWin(G: IG) {
  if (G.deadIDs.includes(G.draculaID)) {
    return true; // Dracula is dead
  }
  if (G.policyBoardHuman[4] != null) {
    return true; // 5 Human Policies were played
  }

  return false;
}

export function isLose(G: IG) {
  if (!G.voting && G.draculaID == G.priestID) {
    if (G.policyBoardVampire[3] != null) {
      return true; // Dracula is mayor
    }
  }
  if (G.policyBoardVampire[5] != null) {
    return true; // 6 Vampire Policies were played
  }
  return false;
}
