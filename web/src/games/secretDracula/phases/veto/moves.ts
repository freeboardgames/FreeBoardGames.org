import { INVALID_MOVE } from 'boardgame.io/core';
import { IG, IPolicy } from '../../interfaces';
import { Ctx } from 'boardgame.io';

export function moveWantVetoPriest(G: IG, ctx: Ctx): IG | 'INVALID_MOVE' {

    return {
        ...G,
        wantVeto: true,
    }
}

export function moveWantVetoMayor(G: IG, ctx: Ctx, want: boolean): IG | 'INVALID_MOVE' {
    if (want == undefined) {
        return INVALID_MOVE
    }

    return {
        ...G,
        wantVeto: want,
    }
}