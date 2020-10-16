import { INVALID_MOVE } from 'boardgame.io/core';
import { IG, IPolicy } from '../../interfaces';
import { Ctx } from 'boardgame.io';

export function moveWantVetoPriest(G: IG, ctx: Ctx, want: boolean, me: number): IG | 'INVALID_MOVE' {

    return {
        ...G,
        wantVeto: true,
        log: [...G.log, "Player " + me.toString() + "moveWantVetoPriest"]
    }
}

export function moveWantVetoMayor(G: IG, ctx: Ctx, want: boolean, me: number): IG | 'INVALID_MOVE' {
    if (want == undefined) {
        return INVALID_MOVE
    }

    return {
        ...G,
        wantVeto: want,
        log: [...G.log, "Player " + me.toString() + "moveWantVetoMayor"]
    }
}