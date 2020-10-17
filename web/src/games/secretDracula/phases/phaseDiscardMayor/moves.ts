import { INVALID_MOVE } from 'boardgame.io/core';
import { IG } from '../../interfaces';
import { Ctx } from 'boardgame.io';

export function moveDiscardMayor(G: IG, ctx: Ctx, id: number, me: number): IG | 'INVALID_MOVE' {
    console.log(id)
    if (id == undefined) {
        return INVALID_MOVE
    }
    if (id < 0 || id > 2)  {
        return INVALID_MOVE
    }
    
    return {
        ...G,
        policyHand: id == 2 ? [G.policyHand[0],G.policyHand[1]]
                    :
                        id == 1 ? [G.policyHand[0],G.policyHand[2]]
                        :
                        [G.policyHand[1],G.policyHand[2]],
        policyDiscard: [...G.policyDiscard, G.policyHand[id]],
        log: [...G.log, "Player " + me.toString() + " moveDiscardMayor " + id.toString()]
    }
}