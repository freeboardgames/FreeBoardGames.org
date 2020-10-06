import { IG } from '../../interfaces';
import { Ctx } from 'boardgame.io';

export function moveVoteYes(G: IG, ctx: Ctx): IG {
    ctx.playerID
    
    return {
        ...G,
        votesYes: G.votesYes.map((a: boolean,ind:number) => { return ind == parseInt(ctx.playerID) ? true : a})
    }
}

export function moveVoteNo(G: IG, ctx: Ctx): IG {
    ctx.playerID
    
    return {
        ...G,
        votesNo: G.votesNo.map((a: boolean,ind:number) => { return ind == parseInt(ctx.playerID) ? true : a})
    }
}