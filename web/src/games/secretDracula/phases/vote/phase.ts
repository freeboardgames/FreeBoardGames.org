import { moveVoteYes, moveVoteNo, moveOKVote } from './moves';
import { IG } from './../../interfaces';
import { Ctx } from 'boardgame.io';
import { createTextChangeRange } from 'typescript';

export let phaseVotePriest = {
  onBegin: (G: IG, ctx: Ctx) => {
    //- console.log('starting phaseVotePriest');
    let activePlayers = {value: {}};
    for (let i = 0; i < ctx.numPlayers; i++){
      if (i in G.deadIDs){
        activePlayers.value[i] = 'waiting'
      } else {
        activePlayers.value[i] = 'phaseVotePriest'
      }
    }
    ctx.events.setActivePlayers(activePlayers);
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
};
export let phaseEndVotePriest = {
  onBegin: (G, ctx) => {
    ////- console.log('starting phaseEndVotePriest');
    G.voteOks = <boolean[]>Array(ctx.numPlayers).fill(false);
    let activePlayers = {value: {}};
    for (let i = 0; i < ctx.numPlayers; i++){
      if (i in G.deadIDs){
        activePlayers.value[i] = 'waiting'
      } else {
        activePlayers.value[i] = 'phaseEndVotePriest'
      }
    }
    return G;
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
      G.voteOks.reduce((prev: number, curr: boolean) => {
        return curr == true ? prev + 1 : prev;
      }, 0) 
      == 
      (ctx.numPlayers - G.deadIDs.reduce((prev: number, curr: number) => { return curr == -1 ? prev : prev + 1},0))
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
    if (G.voteCountYes > G.voteCountNo) {
      G.electionTracker = 0
    }
    G.voteCountYes = -1;
    G.voteCountNo = -1;
    return G;
  },
};
