import { IG, IPolicy } from './interfaces';
import { Ctx } from 'boardgame.io';


export function getTopN(G : IG, ctx: Ctx, n: number): [IG, IPolicy[]]  {
    var out = <IPolicy[]>Array(n).fill(null)

    for (var i = 0; i < n ; i++){
        var topdeck = G.policyDraw.reduce((prev, curr) => {return curr == null ? prev : curr}, null)
        if (topdeck == null){
            G.policyDraw = [...G.policyDiscard]
            G.policyDraw = ctx.random.Shuffle(G.policyDraw)
            G.policyDiscard = <IPolicy[]>Array(17).fill(null),
            topdeck = G.policyDraw.reduce((prev, curr) => {return curr == null ? prev : curr}, null)
        }
        out[i] = topdeck
    }

    return [G, out]


}