import { IGameFlowPhase, IGameCtx, INVALID_MOVE } from '@freeboardgame.org/boardgame.io/core';
import { IG, isValidBuildingPosition, isAnyOwnRoadConnected, Building, isRoadConnectedToOwned } from '../game';
import { buildingRecipes } from '../buildingRecipes';
import { Phase } from './index';

export const gamePhase: IGameFlowPhase = {
  allowedMoves: ['build'],
  // Little hack to for https://github.com/nicolodavis/boardgame.io/issues/394
  onPhaseBegin: (_, ctx) => {
    ctx.events.endTurn({ next: ctx.currentPlayer });
  },
  onTurnBegin: (G: IG, ctx): IG => {
    const roll = ctx.random.D6() + ctx.random.D6();
    console.log(roll);
    // Normal round
    if (roll !== 7) {
      const players = new Array(ctx.numPlayers).fill(0).map(() => new Array(5).fill(0));
      G.tiles
        // Check if tile isn't occupied with robber
        .filter(tile => tile.number === roll && tile.index !== G.robber)
        .forEach(tile =>
          tile.buildings
            .filter(ref => G.buildings[ref].owner !== null)
            .forEach(
              ref =>
                (players[G.buildings[ref].owner as any][tile.type] +=
                  G.buildings[ref].type === Building.Settlement ? 1 : 2),
            ),
        );

      return {
        ...G,
        players: G.players.map((player, i) => ({
          ...player,
          resources: player.resources.map((resource, j) => resource + players[i][j]),
        })),
      };
      // Robber round
    } else {
      ctx.events.endPhase({ next: Phase.Robber });
    }
  },
};

export function build(G: IG, ctx: IGameCtx, type: Building, index?: number): IG | string {
  const newResources = buildingRecipes[type].requirements.map(
    (resource, i) => G.players[ctx.playerID as any].resources[i] - resource,
  );

  // Check if player has enough resources
  if (newResources.some(resource => resource < 0)) {
    return INVALID_MOVE;
  }

  const newG: IG = {
    ...G,
    players: G.players.map(player =>
      player.id === ctx.playerID
        ? {
            ...G.players[ctx.playerID as any],
            resources: newResources,
            score:
              type === Building.Settlement || type === Building.City
                ? G.players[ctx.playerID as any].score + 1
                : G.players[ctx.playerID as any].score,
          }
        : player,
    ),
  };

  switch (type) {
    case Building.Settlement:
      // Check distance rule and if road is connected to new settlement
      if (!isValidBuildingPosition(G, index) || !isAnyOwnRoadConnected(G, ctx.playerID, index)) {
        return INVALID_MOVE;
      }

      //TODO: Check if road has been broken

      return {
        ...newG,
        buildings: G.buildings.map((building, i) =>
          index === i
            ? {
                ...building,
                type: Building.Settlement,
                owner: ctx.playerID,
              }
            : building,
        ),
      };
    case Building.City:
      // Check if player owns the settlement
      if (G.buildings[index].owner !== ctx.playerID || G.buildings[index].type !== Building.Settlement) {
        return INVALID_MOVE;
      }

      return {
        ...newG,
        buildings: G.buildings.map((building, i) =>
          index === i
            ? {
                ...building,
                type: Building.City,
              }
            : building,
        ),
      };
    case Building.Road:
      // Check if road is connected to anything that player owns
      if (G.roads[index].owner !== null || !isRoadConnectedToOwned(G, ctx.playerID, index)) {
        return INVALID_MOVE;
      }

      //TODO: Check for longest road

      return {
        ...newG,
        roads: G.roads.map((road, i) =>
          index === i
            ? {
                ...road,
                owner: ctx.playerID,
              }
            : road,
        ),
      };
    case Building.Development:

    default:
      return INVALID_MOVE;
  }
}
