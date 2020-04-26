import { IG, Stages, TeamColor, Team, CardColor, Card } from './definitions';
import { Stage, INVALID_MOVE } from 'boardgame.io/core';
import { Ctx } from 'boardgame.io';

export function switchTeam(G: IG, ctx: Ctx, teamColor: TeamColor) {
  const oldTeam = getPlayerTeam(G, ctx.playerID);
  const newTeam = getTeamByColor(G, teamColor);

  if (typeof oldTeam !== 'undefined') {
    if (oldTeam.color === teamColor) return;

    if (oldTeam.spymasterID === ctx.playerID) {
      oldTeam.spymasterID = null;
    }

    oldTeam.playersID = oldTeam.playersID.filter((id) => id !== ctx.playerID);
  }

  newTeam.playersID.push(ctx.playerID);
}

export function makeSpymaster(G: IG, ctx: Ctx, playerID: string) {
  const team = getPlayerTeam(G, playerID);
  const pID = parseInt(playerID);
  if (ctx.playerID !== '0' || pID < 0 || pID >= ctx.numPlayers || !team) {
    return INVALID_MOVE;
  }

  team.spymasterID = playerID;
}

export function clueGiven(G: IG, ctx: Ctx) {
  const team = getCurrentTeam(G);
  ctx.events.endPhase();
  if (ctx.numPlayers > 2) {
    const activePlayers = { value: {} };
    for (const player of getActivePlayersWithoutSpymaster(team, ctx)) {
      activePlayers.value[player] = null;
    }
    ctx.events.setActivePlayers(activePlayers);
  }
}

export function getActivePlayersWithoutSpymaster(team: Team, ctx: IGameCtx): string[] {
  if (ctx.numPlayers > 2) {
    return team.playersID.filter((p) => p !== team.spymasterID);
  } else {
    return [team.spymasterID];
  }
}

export function getCurrentTeam(G: IG): Team {
  return G.teams[G.currentTeamIndex];
}

export function gameCanStart(G: IG, ctx: Ctx) {
  G.cards[cardIndex].revealed = true;

  const team = getPlayerTeam(G, ctx.currentPlayer);
  const color = getCardColorByTeamColor(team.color);

  if (G.cards[cardIndex].color !== color) {
    pass(G, ctx);
  }
}

export function getTeamByColor(G: IG, teamColor: TeamColor): Team | undefined {
  return G.teams.find((t) => t.color === teamColor);
}

export function getPlayerTeam(G: IG, playerID: string): Team | undefined {
  return G.teams.find((team) => team.playersID.includes(playerID));
}

export function getOtherTeam(G: IG, team: Team): Team | undefined {
  return G.teams.find((t) => t.color !== team.color);
}

export function makeCard(word: string): Card {
  return { word, color: CardColor.civilian, revealed: false };
}

export function makeTeam(color: TeamColor): Team {
  return { color, playersID: [], spymasterID: null };
}

export function getCardColorByTeamColor(color: TeamColor): CardColor {
  const colors = {
    [TeamColor.Blue]: CardColor.blue,
    [TeamColor.Red]: CardColor.red,
  };

  return colors[color];
}

export function isPlayerSpymaster(G: IG, playerID: string): boolean {
  const team = getPlayerTeam(G, playerID);

  return team?.spymasterID === playerID;
}
