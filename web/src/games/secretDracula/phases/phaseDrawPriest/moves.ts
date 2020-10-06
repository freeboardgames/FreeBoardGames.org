import { INVALID_MOVE } from 'boardgame.io/core';
import { IG } from '../../interfaces';
import { Ctx } from 'boardgame.io';

export function moveDiscardPriest(G: IG, ctx: Ctx, id: number): IG | 'INVALID_MOVE' {
    if (id == undefined) {
        return INVALID_MOVE
    }
    if (id < 0 || id > 1)  {
        return INVALID_MOVE
    }

    return {
        ...G,
        policyHand: id == 1 ? [G.policyHand[0]]
                        :
                        [G.policyHand[1]],
        policyDiscard: [...G.policyDiscard, G.policyHand[id]]
    }
    }