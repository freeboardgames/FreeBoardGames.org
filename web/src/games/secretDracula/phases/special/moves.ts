import { INVALID_MOVE } from 'boardgame.io/core';
import { IG, IPolicy } from '../../interfaces';
import { Ctx } from 'boardgame.io';

export function movePickMayor(G: IG, ctx: Ctx, id: number, me: number): IG | 'INVALID_MOVE' {
  if (id == undefined) {
    return INVALID_MOVE;
  }
  if (id < 0 || ctx.numPlayers > 2) {
    return INVALID_MOVE;
  }
  if (G.deadIDs.includes(id)) {
    return INVALID_MOVE;
  }
  if (id in ctx.activePlayers) { // can't chose self
    return INVALID_MOVE;
  }

  return {
    ...G,
    ok: true,
    mayorID: id,
    specialElection: G.mayorID, // to reset the oldMayor back to this.
    log: [...G.log, 'Player ' + me.toString() + ' movePickMayor' + id.toString()],
  };
}

export function moveOK(G: IG, ctx: Ctx, me: number): IG {
  return {
    ...G,
    ok: true,
    policyDraw: [...G.policyDraw, G.policyPeek[2], G.policyPeek[1], G.policyPeek[0]],
    policyPeek: <IPolicy[]>Array(0),
    log: [...G.log, 'Player ' + me.toString() + ' moveOK '],
  };
}

export function moveExecute(G: IG, ctx: Ctx, id: number, me: number): IG | 'INVALID_MOVE' {
  if (id == undefined) {
    return INVALID_MOVE;
  }

  if (G.deadIDs.includes(id)) {
    return INVALID_MOVE;
  }
  if (id in ctx.activePlayers) {
    return INVALID_MOVE;
  }

  return {
    ...G,
    ok: true,
    deadIDs: [...G.deadIDs, id],
    log: [...G.log, 'Player ' + me.toString() + ' moveOK ' + id.toString()],
  };
}

export function moveInvestigateStart(G: IG, ctx: Ctx, id: number, me: number): IG | 'INVALID_MOVE' {
  if (id == undefined) {
    return INVALID_MOVE;
  }
  if (G.deadIDs.includes(id)) {
    return INVALID_MOVE;
  }
  if (id in ctx.activePlayers) { // can't chose self
    return INVALID_MOVE;
  }

  return {
    ...G,
    ok: true,
    investigate: G.vampireIDs.includes(id) ? 1 : -1,
    investigateID: id,
    log: [...G.log, 'Player ' + me.toString() + ' moveInvestigateStart ' + id.toString()],
  };
}

export function moveInvestigateEnd(G: IG, ctx: Ctx, me: number): IG | 'INVALID_MOVE' {
  return {
    ...G,
    ok: true,
    investigate: 0,
    investigateID: -1,
    log: [...G.log, 'Player ' + me.toString() + ' moveInvestigateEnd '],
  };
}
