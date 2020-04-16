import { IG, Stages, TeamColor, Team, CardColor, Card } from './definitions';
import { Stage, IGameCtx, INVALID_MOVE } from 'boardgame.io/core';

export function switchTeam(G: IG, ctx: IGameCtx, teamID: number) {
  const player = getPlayer(G, ctx);
  if (player.teamID === teamID) return;

  const newTeam = G.teams[teamID];
  const oldTeam = G.teams[(teamID + 1) % 2];

  if (player.isSpymaster) {
    player.isSpymaster = false;
    oldTeam.spymaster = null;
  }

  oldTeam.players = oldTeam.players.filter((p) => p.playerID !== player.playerID);

  newTeam.players.push(player);
  player.teamID = teamID;
}

export function clueGiven(G: IG, ctx: IGameCtx) {
  ctx.events.endStage();
  ctx.events.setActivePlayers(
    (function (G: IG, ctx: IGameCtx) {
      if (G.players.length === 2 || getCurrentTeam(G, ctx).players.length === 1)
        return {
          currentPlayer: Stages.guess,
        };

      return {
        currentPlayer: Stage.NULL,
        value: getCurrentTeam(G, ctx).players.reduce((acc, player) => {
          if (player.isSpymaster) return acc;

          acc[player.playerID.toString()] = Stages.guess;
          return acc;
        }, {}),
      };
    })(G, ctx),
  );
}

export function getTeamByColor(G: IG, teamColor: TeamColor): Team | undefined {
  return G.teams.find((t) => t.color === teamColor);
}

export function makeSpymaster(G: IG, ctx: IGameCtx, teamColor: TeamColor, playerID: number) {
  const team = getTeamByColor(G, teamColor);
  if (ctx.playerID !== '0' || playerID < 0 || playerID >= ctx.numPlayers || !team) {
    return INVALID_MOVE;
  }

  team.spymasterID = playerID;
}

export function getPlayerTeam(G: IG, playerID: number): Team | undefined {
  return G.teams.find((team) => team.playersID.includes(playerID));
}

export function makeCard(word: string): Card {
  return { word, color: CardColor.civilian, revealed: false };
}

export function makeTeam(color: TeamColor): Team {
  return { color, playersID: [], spymasterID: null, start: false };
}

export function chooseCard(G: IG, ctx: IGameCtx, cardIndex: number) {
  G.cards[cardIndex].revealed = true;

  const color = getCurrentPlayer(G, ctx).teamID ? CardColor.red : CardColor.blue;

  if (G.cards[cardIndex].color !== color) {
    ctx.events.endTurn();
  }
}
