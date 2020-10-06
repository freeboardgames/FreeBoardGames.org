import { INVALID_MOVE } from 'boardgame.io/core';
import { IG, IPolicy } from '../../interfaces';
import { Ctx } from 'boardgame.io';

export function movePickMayor(G: IG, ctx: Ctx, id: number): IG | 'INVALID_MOVE' {
    if (id == undefined) {
        return INVALID_MOVE
    }
    if (id < 0 || ctx.numPlayers > 2)  {
        return INVALID_MOVE
    }
    if (G.deadIDs.includes(id)){
        return INVALID_MOVE
    }
    if (id == parseInt(ctx.currentPlayer)){
        return INVALID_MOVE
    }

    return {
        ...G,
        mayorID: id,
        specialElection: G.mayorID,
    }
}

export function moveOK(G: IG, ctx: Ctx): IG {
    
    return {
        ...G,
        policyDraw: [...G.policyDraw, G.policyPeek[2], G.policyPeek[1], G.policyPeek[0]],
        policyPeek: <IPolicy[]>Array(0)
    }
}

export function moveExecute(G: IG, ctx: Ctx, id: number): IG | 'INVALID_MOVE' {
    console.log(id)
    if (id == undefined) {
        return INVALID_MOVE
    }

    if (G.deadIDs.includes(id)){
        return INVALID_MOVE
    }
    if (id == parseInt(ctx.currentPlayer)){
        return INVALID_MOVE
    }

    return {
        ...G,
        deadIDs: [...G.deadIDs, id]
    }
}

export function moveInvestigateStart(G: IG, ctx: Ctx, id: number): IG | 'INVALID_MOVE' {
    console.log(id)
    if (id == undefined) {
        return INVALID_MOVE
    }
    if (G.deadIDs.includes(id)){
        return INVALID_MOVE
    }
    if (id == parseInt(ctx.currentPlayer)){
        return INVALID_MOVE
    }

    return {
        ...G,
        investigate: G.vampireIDs.includes(id) ? 1 : -1
    }
}

export function moveInvestigateEnd(G: IG, ctx: Ctx): IG | 'INVALID_MOVE' {
    return {
        ...G,
        investigate: 0
    }
}
