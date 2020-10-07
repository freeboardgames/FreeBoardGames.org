import { INVALID_MOVE } from 'boardgame.io/core';
import { IG, IPolicy } from '../../interfaces';
import { Ctx } from 'boardgame.io';

export function moveDiscardPriest(G: IG, ctx: Ctx, id: number, me: number): IG | 'INVALID_MOVE' {
    console.log("Move Discard Priest: ", id.toString())
    console.log("Player ", me.toString())

    if (id == undefined) {
        return INVALID_MOVE
    }

    if (id < 0 || id > 1)  {
        return INVALID_MOVE
    }

    return {
        ...G,
        policyHand: id == 1 ? [...G.policyHand, G.policyHand[0]]:[...G.policyHand, G.policyHand[1]],
        // policyHand: id == 1 ? [G.policyHand[0]]:[G.policyHand[1]],
        policyDiscard: [...G.policyDiscard, G.policyHand[id]],
        log: [...G.log, "Player " + me.toString() + " moveDiscardPriest " + id.toString()],
    }
}