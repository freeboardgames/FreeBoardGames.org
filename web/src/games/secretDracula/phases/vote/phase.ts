import { moveVoteYes, moveVoteNo, moveOKVote } from './moves';
import { IG } from './../../interfaces';
import { Ctx } from 'boardgame.io';

export let phaseVotePriest = {
  onBegin: (G ) => {
    //- console.log('starting phaseVotePriest');
    return G;
  },
  moves: {
    moveVoteYes: {
      move: moveVoteYes,
      client: false,
    },
    moveVoteNo: {
      move: moveVoteNo,
      client: false,
    },
  },
  endIf: (G: IG, ctx: Ctx) => {
    let yesVotes = G.votesYes.reduce((a, b) => {
      return b == true ? a + 1 : a;
    }, 0);
    let noVotes = G.votesNo.reduce((a, b) => {
      return b == true ? a + 1 : a;
    }, 0);
    if (yesVotes + noVotes == ctx.numPlayers) {
      // Successful Vote
      return { next: 'phaseEndVotePriest' };
    }
    return false;
  },
  onEnd: (G, ctx) => {
    //- console.log('ending phaseVotePriest');
    let yesVotes = G.votesYes.reduce((a, b) => {
      return b == true ? a + 1 : a;
    }, 0);
    let noVotes = G.votesNo.reduce((a, b) => {
      return b == true ? a + 1 : a;
    }, 0);

    G.voting = false;
    G.voteCountYes = yesVotes;
    G.voteCountNo = noVotes;
    G.voteOks = <boolean[]>Array(ctx.numPlayers).fill(false);
    G.votesYes = <boolean[]>Array(ctx.numPlayers).fill(false);
    G.votesNo = <boolean[]>Array(ctx.numPlayers).fill(false);
    return G;
  },
  turn: {
    activePlayers: { all: 'phaseVotePriest', moveLimit: 1 },
  },
};
export let phaseEndVotePriest = {
  onBegin: (G, ctx) => {
    ////- console.log('starting phaseEndVotePriest');
    G.voteOks = <boolean[]>Array(ctx.numPlayers).fill(false);
    return G;
  },
  turn: {
    activePlayers: { all: 'phaseEndVotePriest', moveLimit: 1 },
  },
  moves: {
    moveOKVote: {
      move: moveOKVote,
      client: false,
    },
  },
  endIf: (G: IG, ctx: Ctx) => {
    //- console.log('endIf phaseEndVotePriest');
    if (
      G.voteOks.reduce((prev: boolean, curr: boolean) => {
        return curr && prev;
      }, true) == false
    ) {
      // not everyone has pressed OK yet.
      return false;
    }
    if (G.voteCountYes > G.voteCountNo) {
      // Successful Vote
      return { next: 'phaseDiscardMayor' };
    } else {
      return { next: 'phaseCheckElectionCounter' };
    }
  },
  onEnd: (G: IG, ctx: Ctx) => {
    //- console.log('ending phaseEndVotePriest');
    G.voteOks = <boolean[]>Array(ctx.numPlayers).fill(false);
    G.voteCountYes = -1;
    G.voteCountNo = -1;
    return G;
  },
};
