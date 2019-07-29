import { IGameFlowPhase, IGameCtx, INVALID_MOVE } from '@freeboardgame.org/boardgame.io/core';
import { Phase } from '.';
import { IG } from '../game';

export const discardPhase: IGameFlowPhase = {
  next: Phase.Game,
  allowedMoves: ['discardResources'],
  turnOrder: {
    first: (_, ctx) => ctx.playOrderPos,
    next: (_, ctx) => ctx.playOrderPos,
    actionPlayers: {
      value: (G: IG) =>
        G.players
          .filter(player => player.resources.reduce((acc, resource) => acc + resource, 0) >= 7)
          .map(player => player.id),
      all: false,
      others: false,
      once: true,
    },
  },
  endPhaseIf: (_, ctx) => ctx.actionPlayers.length === 0,
};

export function discardResources(G: IG, ctx: IGameCtx, resources: number[]): IG | string {
  const newResources = G.players[ctx.playerID as any].resources.map((resource, i) => resource - resources[i]);

  if (
    newResources.some(resource => resource < 0) ||
    newResources.reduce((acc, resource) => acc + resource, 0) !==
      Math.ceil(G.players[ctx.playerID as any].resources.reduce((acc, resource) => acc + resource, 0) / 2)
  ) {
    return INVALID_MOVE;
  }

  return {
    ...G,
    players: G.players.map(player =>
      player.id === ctx.playerID
        ? {
            ...G.players[ctx.playerID as any],
            resources: newResources,
          }
        : player,
    ),
  };
}
