import { IG, Stages, Player, Team, CardColor, Card } from './definitions';
import { Stage, IGameCtx } from 'boardgame.io/core';

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

export function makeSpymaster(G: IG, ctx: IGameCtx, p: Player) {
  const player = G.players[p.playerID];
  const { teamID, playerID } = player;

  const spymaster = G.teams[teamID].spymaster;
  if (spymaster !== null) {
    if (spymaster.playerID === playerID) return;

    spymaster.isSpymaster = false;
  }

  G.teams[teamID].spymaster = player;
  G.players[playerID].isSpymaster = true;
}

export function getPlayer(G: IG, ctx: IGameCtx): Player {
  return G.players[parseInt(ctx.playerID)];
}

export function getCurrentPlayer(G: IG, ctx: IGameCtx): Player {
  return G.players[parseInt(ctx.currentPlayer)];
}

export function getCurrentTeam(G: IG, ctx: IGameCtx): Team {
  return G.teams[parseInt(ctx.currentPlayer)];
}

export function makeCard(word: string): Card {
  return { word, color: CardColor.civilian, revealed: false };
}

export function makeTeam(teamID: number): Team {
  return { teamID, players: [], spymaster: null, start: false };
}

export function makePlayer(playerID: number): Player {
  return { playerID, teamID: null, isSpymaster: false };
}

export function chooseCard(G: IG, ctx: IGameCtx, cardIndex: number) {
  G.cards[cardIndex].revealed = true;

  const color = getCurrentPlayer(G, ctx).teamID ? CardColor.red : CardColor.blue;

  if (G.cards[cardIndex].color !== color) {
    ctx.events.endTurn();
  }
}
