import { IG, Stages, TeamColor, Team, CardColor, Card } from './definitions';
import { Stage, IGameCtx, INVALID_MOVE } from 'boardgame.io/core';

export function switchTeam(G: IG, ctx: IGameCtx, teamColor: TeamColor) {
  const oldTeam = getPlayerTeam(G, ctx.playerID);
  const newTeam = getTeamByColor(G, teamColor);

  if(typeof oldTeam !== 'undefined') {
    if (oldTeam.color === teamColor) return;


    if(oldTeam.spymasterID === ctx.playerID) {
      oldTeam.spymasterID = null;
    }

    oldTeam.playersID = oldTeam.playersID.filter(id => id !== ctx.playerID);
  }

  newTeam.playersID.push(ctx.playerID);
}

export function makeSpymaster(G: IG, ctx: IGameCtx, playerID: string) {
  const team = getPlayerTeam(G, playerID);
  const pID = parseInt(playerID);
  if (ctx.playerID !== '0' || pID < 0 || pID >= ctx.numPlayers || !team) {
    return INVALID_MOVE;
  }

  team.spymasterID = playerID;
}

export function clueGiven(G: IG, ctx: IGameCtx) {
  ctx.events.endStage();
  ctx.events.setActivePlayers(
    (function (G: IG, ctx: IGameCtx) {
      const team = getPlayerTeam(G, ctx.playerID);
      if (ctx.numPlayers === 2 || team.playersID.length === 1) {
        return {
          currentPlayer: Stages.guess,
        };
      }

      return {
        currentPlayer: Stage.NULL,
        value: team.playersID.reduce((acc, playerID) => {
          if (playerID === team.spymasterID) return acc;

          acc[playerID] = Stages.guess;
          return acc;
        }, {}),
      };
    })(G, ctx),
  );
}

export function chooseCard(G: IG, ctx: IGameCtx, cardIndex: number) {
  G.cards[cardIndex].revealed = true;

  const team = getPlayerTeam(G, ctx.currentPlayer);
  const color = getCardColorByTeamColor(team.color);

  if (G.cards[cardIndex].color !== color) {
    ctx.events.endTurn();
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
  return { color, playersID: [], spymasterID: null, start: false };
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
