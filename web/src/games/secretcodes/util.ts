import { IG, TeamColor, Team, CardColor, Card } from './definitions';
import { INVALID_MOVE } from 'boardgame.io/core';
import { Ctx } from 'boardgame.io';
import { IPlayerInRoom } from 'gamesShared/definitions/player';

export function switchTeam(G: IG, ctx: Ctx, teamColor: TeamColor) {
  movePlayerToTeam(G, ctx, ctx.playerID, teamColor);
}

function movePlayerToTeam(G: IG, ctx: Ctx, playerID: string, teamColor: TeamColor) {
  const oldTeam = getPlayerTeam(G, playerID);
  const newTeam = getTeamByColor(G, teamColor);

  if (typeof oldTeam !== 'undefined') {
    if (oldTeam.color === teamColor) return;

    if (oldTeam.spymasterID === ctx.playerID) {
      oldTeam.spymasterID = null;
    }

    oldTeam.playersID = oldTeam.playersID.filter((id) => id !== ctx.playerID);
  }

  newTeam.playersID.push(playerID);
}

export function makeSpymaster(G: IG, ctx: Ctx, playerID: string) {
  const team = getPlayerTeam(G, playerID);
  const pID = parseInt(playerID);
  if (ctx.playerID !== '0' || pID < 0 || pID >= ctx.numPlayers || !team) {
    return INVALID_MOVE;
  }

  team.spymasterID = playerID;
}

export function distributePlayers(G: IG, ctx: Ctx, players: IPlayerInRoom[]) {
  for (const player of ctx.random.Shuffle(players)) {
    const smallestTeamIndex = G.teams[1].playersID.length < G.teams[0].playersID.length ? 1 : 0;
    const teamColor = G.teams[smallestTeamIndex].color;
    movePlayerToTeam(G, ctx, String(player.playerID), teamColor);
  }
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

export function getActivePlayersWithoutSpymaster(team: Team, ctx: Ctx): string[] {
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
  const { numPlayers } = ctx;
  if (G.teams[0].spymasterID === null || G.teams[1].spymasterID === null) return false;
  return G.teams.reduce((sum, t) => sum + t.playersID.length, 0) >= numPlayers;
}

export function startGame(G: IG, ctx: Ctx) {
  if (!gameCanStart(G, ctx)) {
    return INVALID_MOVE;
  }

  G.teams = ctx.random.Shuffle(G.teams);
  G.currentTeamIndex = 0;

  const key = ctx.random.Shuffle(G.cards).slice(0, 18) as Card[];
  key.map((card, index) => {
    if (index === 0) card.color = CardColor.assassin;
    else if (index <= 8) card.color = CardColor.blue;
    else if (index <= 16) card.color = CardColor.red;
    else card.color = getCardColorByTeamColor(getCurrentTeam(G).color);
  });
  ctx.events.endPhase();
  return G;
}

export function pass(G: IG, ctx: Ctx) {
  G.currentTeamIndex = (G.currentTeamIndex + 1) % 2;
  ctx.events.endPhase();
}

export function chooseCard(G: IG, ctx: Ctx, cardIndex: number) {
  const newCards = [...G.cards];
  newCards[cardIndex] = { ...newCards[cardIndex], revealed: true };
  G.cards = newCards;
  G.lastSelectedCardIndex = cardIndex;

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
