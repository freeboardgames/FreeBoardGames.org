import { IG } from '../../interfaces';
import { Ctx } from 'boardgame.io';

export function moveVoteYes(G: IG, ctx: Ctx, me: number): IG {
  ctx.playerID;

  return {
    ...G,
    votesYes: G.votesYes.map((a: boolean, ind: number) => {
      return ind == parseInt(ctx.playerID) ? true : a;
    }),
    log: [...G.log, 'Player ' + me.toString() + ' moveVoteYes '],
  };
}

export function moveVoteNo(G: IG, ctx: Ctx, me: number): IG {
  ctx.playerID;

  return {
    ...G,
    votesNo: G.votesNo.map((a: boolean, ind: number) => {
      return ind == parseInt(ctx.playerID) ? true : a;
    }),
    log: [...G.log, 'Player ' + me.toString() + ' moveVoteNo'],
  };
}

export function moveOKVote(G: IG, ctx: Ctx, me: number): IG {
  let myId = parseInt(ctx.playerID);

  return {
    ...G,
    voteOks: [...G.voteOks.slice(0, myId), true, ...G.voteOks.slice(myId + 1, ctx.numPlayers)],
    log: [...G.log, 'Player ' + me.toString() + ' moveOKVote '],
  };
}
