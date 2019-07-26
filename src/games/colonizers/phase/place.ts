import { TurnOrder, IGameFlowPhase, IGameCtx, INVALID_MOVE } from '@freeboardgame.org/boardgame.io/core';
import { IG, isValidBuildingPosition, isRoadConnected, Building } from '../game';
import { Phase } from './index';

export const placePhase: IGameFlowPhase = {
  allowedMoves: ['placeInitial'],
  movesPerTurn: 1,
  turnOrder: TurnOrder.CUSTOM_FROM('initialTurnOrder'),
  endPhaseIf: (_, ctx) => ctx.turn === ctx.numPlayers * 2,
  next: Phase.Game,
};

// Place settlement and connected road
export function placeInitial(G: IG, ctx: IGameCtx, settlementIndex: number, roadIndex: number): IG | string {
  if (
    // Check "distance rule"
    !isValidBuildingPosition(G, settlementIndex) ||
    // Check if road is connected to the new settlement
    !isRoadConnected(G, settlementIndex, roadIndex)
  ) {
    return INVALID_MOVE;
  }

  return {
    ...G,
    buildings: G.buildings.map((building, i) =>
      settlementIndex === i
        ? {
            ...building,
            type: Building.Settlement,
            owner: ctx.playerID,
          }
        : building,
    ),
    roads: G.roads.map((road, i) =>
      roadIndex === i
        ? {
            ...road,
            owner: ctx.playerID,
          }
        : road,
    ),
    players: G.players.map(player =>
      ctx.playerID === player.id
        ? {
            ...G.players[ctx.playerID as any],
            score: G.players[ctx.playerID as any].score + 1,
          }
        : player,
    ),
  };
}
