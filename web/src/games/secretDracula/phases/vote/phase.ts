import { moveVoteYes, moveVoteNo, moveOKVote } from './moves';
import { IG } from './../../interfaces';
import { Ctx } from 'boardgame.io';

/*
NOTE: The way that players are moved into phases is very bad/confusing.
The issue is that somehow the endIf function gets called before onBegin, and
sometimes I had issues with no active players. Therefore there is a lot
of explicit moving of players into phases.
*/

export let phaseVotePriest = {
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
  turn: {
    onBegin: (G: IG, ctx: Ctx) => {
      //- console.log('starting phaseVotePriest');
      let activePlayers = { value: {} };

      for (let i = 0; i < ctx.numPlayers; i++) {
        if (G.deadIDs.includes(i)) {
          continue;
        } else {
          activePlayers.value[i] = 'phaseVotePriest';
        }
      }

      ctx.events.setActivePlayers(activePlayers);
      return G;
    },
    onMove: (G: IG, ctx: Ctx) => {
      let activePlayers = { value: {} };
      let count = 0;
      for (let i = 0; i < ctx.numPlayers; i++) {
        if (G.deadIDs.includes(i)) {
          continue;
        } else if (G.votesYes[i] || G.votesNo[i]) {
          // already voted
          continue;
        } else {
          count += 1;
          activePlayers.value[i] = 'phaseVotePriest';
        }
      }

      if (count > 0) {
        // fix for not running into Issue with no active players
        ctx.events.setActivePlayers(activePlayers);
      }
    },
  },
  endIf: (G: IG, ctx: Ctx) => {
    let yesVotes = G.votesYes.reduce((a, b) => {
      return b == true ? a + 1 : a;
    }, 0);
    let noVotes = G.votesNo.reduce((a, b) => {
      return b == true ? a + 1 : a;
    }, 0);
    var deadCount = G.deadIDs.length;
    if (yesVotes + noVotes == ctx.numPlayers - deadCount) {
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
  turn: {
    activePlayers: { all: 'phaseEndVotePriest', maxMoves: 1 },
    onBegin: (G, ctx) => {
      let activePlayers = { value: {} };
      for (let i = 0; i < ctx.numPlayers; i++) {
        if (G.deadIDs.includes(i)) {
          continue;
        }
        if (G.voteOks[i] == true) {
          continue;
        }
        activePlayers.value[i] = 'phaseEndVotePriest';
      }

      ctx.events.setActivePlayers(activePlayers);
    },
  },
  onBegin: (G, ctx) => {
    ////- console.log('starting phaseEndVotePriest');
    G.voteOks = <boolean[]>Array(ctx.numPlayers).fill(false);
    return G;
  },
  moves: {
    moveOKVote: {
      move: moveOKVote,
      client: false,
    },
    onBegin: (G, ctx) => {
      // EXPLICIT SETTING
      let activePlayers = { value: {} };
      for (let i = 0; i < ctx.numPlayers; i++) {
        if (G.deadIDs.includes(i)) {
          continue;
        }
        if (G.voteOks[i] == true) {
          continue;
        }
        activePlayers.value[i] = 'phaseEndVotePriest';
      }
      ctx.events.setActivePlayers(activePlayers);
    },
  },
  endIf: (G: IG, ctx: Ctx) => {
    //- console.log('endIf phaseEndVotePriest');
    let alive_players = ctx.numPlayers - G.deadIDs.length;
    let ok_count = G.voteOks.reduce((prev: number, curr: boolean) => {
      return curr == true ? prev + 1 : prev;
    }, 0);

    if (alive_players != ok_count) {
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
      G.electionTracker = 0;
      G.lastMayorID = G.mayorID;
      G.lastPriestID = G.priestID;
    }
    G.voteCountYes = -1;
    G.voteCountNo = -1;

    return G;
  },
};
