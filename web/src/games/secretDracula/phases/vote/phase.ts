import { moveVoteYes, moveVoteNo } from './moves';
import { IG } from './../../interfaces';
import { Ctx } from 'boardgame.io';

export let phaseVotePriest = {
    onBegin: (G, ctx) => {
      console.log('starting phaseVotePriest');
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
        if (yesVotes > noVotes) {
          // Successful Vote
          return { next: 'phaseDiscardMayor' };
        } else {
          return { next: 'phaseCheckElectionCounter' };
        }
      }
      return false;
    },
    onEnd: (G, ctx) => {
      console.log('ending phaseVotePriest');
      G.voting = false;
      G.votesYes = <boolean[]>Array(ctx.numPlayers).fill(null);
      G.votesNo = <boolean[]>Array(ctx.numPlayers).fill(null);
      return G;
    },
    turn: {
      activePlayers: { all: 'phaseVotePriest', moveLimit: 1 },
    },
  }