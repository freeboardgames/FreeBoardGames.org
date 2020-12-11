import { Client } from 'boardgame.io/client';
import { SecretDraculaGame, _setup } from './game';
import { Ctx } from 'boardgame.io';
import { Local } from 'boardgame.io/multiplayer';

it('end2end - 5 player execute drac', () => {
  // set up a specific board scenario
  const SecretDraculaCustomScenario = {
    ...SecretDraculaGame,
    numPlayers: 5,
    setup: (ctx: Ctx) => {
      return {
        ..._setup(ctx, false, false),
      };
    },
  };

  const spec = {
    game: SecretDraculaCustomScenario,
    numPlayers: 5,
    multiplayer: Local(),
  };

  const players = [0, 1, 2, 3, 4].map((value) => {
    return Client({ ...spec, playerID: value.toString() } as any);
  });

  players.map((p) => p.start());

  players[0].moves.moveChosePriest(3, 0);
  players.map((p, i) => p.moves.moveVoteYes(i));
  players.map((p, i) => p.moves.moveOKVote(i));
  players[0].moves.moveDiscardMayor(0, 0);
  players[3].moves.moveDiscardPriest(0, 3); // -- play blood 1

  players[1].moves.moveChosePriest(3, 1); // -- fail
  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseChosePriest');
  players[1].moves.moveChosePriest(2, 1);
  players.map((p, i) => p.moves.moveVoteYes(i));
  players.map((p, i) => p.moves.moveOKVote(i));
  players[1].moves.moveDiscardMayor(0, 1);
  players[2].moves.moveDiscardPriest(0, 2); // -- play blood 2

  players[2].moves.moveChosePriest(0, 2);
  players.map((p, i) => p.moves.moveVoteYes(i));
  players.map((p, i) => p.moves.moveOKVote(i));
  players[2].moves.moveDiscardMayor(2, 2);
  players[0].moves.moveDiscardPriest(1, 0); // -- play blood 3

  players[2].moves.moveOK(2); // -- OK for Peek Policy
  var { G, ctx } = players[0].getState();

  players[3].moves.moveChosePriest(3, 3); // -- can't chose self
  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseChosePriest');
  players[3].moves.moveChosePriest(4, 3);
  players.map((p, i) => p.moves.moveVoteNo(i));
  players.map((p, i) => p.moves.moveOKVote(i));
  var { G, ctx } = players[0].getState();
  expect(G.electionTracker).toEqual(1);
  players[4].moves.moveChosePriest(3, 4);
  players.map((p, i) => p.moves.moveVoteNo(i));
  players.map((p, i) => p.moves.moveOKVote(i));
  var { G, ctx } = players[0].getState();
  expect(G.electionTracker).toEqual(2);
  expect(ctx.phase).toEqual('phaseChosePriest');
  players[0].moves.moveChosePriest(3, 0);
  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseVotePriest');
  players.map((p, i) => p.moves.moveVoteNo(i));
  players.map((p, i) => p.moves.moveOKVote(i));

  var { G, ctx } = players[0].getState();
  //    and play blood

  expect(G.electionTracker).toEqual(0);
  expect(ctx.phase).toEqual('phaseChosePriest');
  expect(G.policyBoardVampire.length).toEqual(4);

  players[1].moves.moveChosePriest(0, 1); // -- last priest,
  //    but after election tracker should be ok again
  players.map((p, i) => p.moves.moveVoteYes(i));
  players.map((p, i) => p.moves.moveOKVote(i));
  players[1].moves.moveDiscardMayor(2, 1);
  players[0].moves.moveDiscardPriest(1, 0); // -- play blood

  players[1].moves.moveExecute(0, 1);

  var { G, ctx } = players[0].getState();
  expect(ctx.gameover).toEqual({ lose: true });
});

it('end2end - 6 player finish vampire', () => {
  // set up a specific board scenario
  const SecretDraculaCustomScenario = {
    ...SecretDraculaGame,
    numPlayers: 6,
    setup: (ctx: Ctx) => {
      return {
        ..._setup(ctx, false, false),
      };
    },
  };

  const spec = {
    game: SecretDraculaCustomScenario,
    numPlayers: 6,
    multiplayer: Local(),
  };

  const players = [0, 1, 2, 3, 4, 5].map((value) => {
    return Client({ ...spec, playerID: value.toString() } as any);
  });

  players.map((p) => p.start());

  players[0].moves.moveChosePriest(3, 0);
  players.map((p, i) => p.moves.moveVoteYes(i));
  players.map((p, i) => p.moves.moveOKVote(i));
  players[0].moves.moveDiscardMayor(0, 0);
  players[3].moves.moveDiscardPriest(0, 3); // -- play blood

  players[1].moves.moveChosePriest(3, 1); // -- fail
  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseChosePriest');
  players[1].moves.moveChosePriest(2, 1);
  players.map((p, i) => p.moves.moveVoteYes(i));
  players.map((p, i) => p.moves.moveOKVote(i));
  players[1].moves.moveDiscardMayor(0, 1);
  players[2].moves.moveDiscardPriest(0, 2); // -- play blood

  players[2].moves.moveChosePriest(0, 2);
  players.map((p, i) => p.moves.moveVoteYes(i));
  players.map((p, i) => p.moves.moveOKVote(i));
  players[2].moves.moveDiscardMayor(2, 2);
  players[0].moves.moveDiscardPriest(1, 0); // -- play blood

  var { G, ctx } = players[0].getState();
  players[2].moves.moveOK(2); // -- OK for Peek Policy
  var { G, ctx } = players[0].getState();

  players[3].moves.moveChosePriest(3, 3); // -- can't chose self
  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseChosePriest');
  players[3].moves.moveChosePriest(2, 3); // -- can't chose old Mayor (since 6 alive)
  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseChosePriest');
  players[3].moves.moveChosePriest(4, 3);
  players.map((p, i) => p.moves.moveVoteNo(i));
  players.map((p, i) => p.moves.moveOKVote(i));
  var { G, ctx } = players[0].getState();
  expect(G.electionTracker).toEqual(1);
  players[4].moves.moveChosePriest(3, 4);
  players.map((p, i) => p.moves.moveVoteYes(i));
  players.map((p, i) => p.moves.moveOKVote(i));
  players[4].moves.moveDiscardMayor(2, 4);
  players[3].moves.moveDiscardPriest(1, 3); // -- play blood
  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseExecution');
  players[4].moves.moveExecute(1, 4); // -- execute some guy

  players[5].moves.moveChosePriest(1, 5); // -- try to chose dead guy as priest
  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseChosePriest');
  players[5].moves.moveChosePriest(4, 5); // -- chosing old mayor is ok since 5 alive
  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseVotePriest');
  var { G, ctx } = players[0].getState();
  expect(ctx.activePlayers[0]).toEqual('phaseVotePriest');
  expect(ctx.activePlayers[1]).toEqual(undefined);
  expect(ctx.activePlayers[2]).toEqual('phaseVotePriest');
  expect(ctx.activePlayers[3]).toEqual('phaseVotePriest');
  expect(ctx.activePlayers[4]).toEqual('phaseVotePriest');
  expect(ctx.activePlayers[5]).toEqual('phaseVotePriest');
  players.map((p, i) => p.moves.moveVoteYes(i));
  var { G, ctx } = players[0].getState();
  expect(ctx.activePlayers[0]).toEqual('phaseEndVotePriest');
  expect(ctx.activePlayers[1]).toEqual(undefined);
  expect(ctx.activePlayers[2]).toEqual('phaseEndVotePriest');
  expect(ctx.activePlayers[3]).toEqual('phaseEndVotePriest');
  expect(ctx.activePlayers[4]).toEqual('phaseEndVotePriest');
  expect(ctx.activePlayers[5]).toEqual('phaseEndVotePriest');
  players.map((p, i) => p.moves.moveOKVote(i));
  players[5].moves.moveDiscardMayor(2, 5);
  players[4].moves.moveDiscardPriest(1, 4); // -- play holywater

  players[0].moves.moveChosePriest(2, 0); //
  players.map((p, i) => p.moves.moveVoteYes(i));
  players.map((p, i) => p.moves.moveOKVote(i));
  players[0].moves.moveDiscardMayor(1, 0);
  players[2].moves.moveDiscardPriest(0, 2); // -- play blood
  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseExecution');
  players[0].moves.moveExecute(0, 0); // -- execute self
  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseExecution');
  players[0].moves.moveExecute(2, 0);

  players[3].moves.moveChosePriest(4, 3); //  --
  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseVotePriest');
  players.map((p, i) => p.moves.moveVoteYes(i));
  players.map((p, i) => p.moves.moveOKVote(i));
  players[3].moves.moveDiscardMayor(0, 3);
  players[4].moves.moveDiscardPriest(0, 4); // -- play 6th blood

  var { G, ctx } = players[0].getState();
  expect(ctx.gameover).toEqual({ lose: true });
  return;
});

it('end2end - 7 player veto and finish human', () => {
  // set up a specific board scenario
  const SecretDraculaCustomScenario = {
    ...SecretDraculaGame,
    numPlayers: 7,
    setup: (ctx: Ctx) => {
      return {
        ..._setup(ctx, false, false),
      };
    },
  };

  const spec = {
    game: SecretDraculaCustomScenario,
    numPlayers: 7,
    multiplayer: Local(),
  };

  const players = [0, 1, 2, 3, 4, 5, 6].map((value) => {
    return Client({ ...spec, playerID: value.toString() } as any);
  });

  players.map((p) => p.start());

  players[0].moves.moveChosePriest(3, 0);
  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseVotePriest');
  players.map((p, i) => p.moves.moveVoteYes(i));
  players.map((p, i) => p.moves.moveOKVote(i));
  players[0].moves.moveDiscardMayor(0, 0);
  players[3].moves.moveDiscardPriest(0, 3); // -- play blood 1

  players[1].moves.moveChosePriest(3, 1); // -- fail
  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseChosePriest');
  players[1].moves.moveChosePriest(2, 1);
  players.map((p, i) => p.moves.moveVoteYes(i));
  players.map((p, i) => p.moves.moveOKVote(i));
  players[1].moves.moveDiscardMayor(0, 1);
  players[2].moves.moveDiscardPriest(0, 2); // -- play blood 2

  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseInvestigate1');
  players[1].moves.moveInvestigateStart(1, 1); // -- Can't Investigate Self
  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseInvestigate1');
  players[1].moves.moveInvestigateStart(3, 1); //
  var { G, ctx } = players[1].getState();
  expect(G.investigate).toEqual(-1);
  expect(G.investigateID).toEqual(3);
  expect(ctx.phase).toEqual('phaseInvestigate2');
  players[1].moves.moveInvestigateEnd(1); //
  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseChosePriest');

  players[2].moves.moveChosePriest(0, 2);
  players.map((p, i) => p.moves.moveVoteYes(i));
  players.map((p, i) => p.moves.moveOKVote(i));
  players[2].moves.moveDiscardMayor(2, 2);
  players[0].moves.moveDiscardPriest(1, 0); // -- play blood 3

  //Mayor = 2
  //Priest = 0

  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseSpecialElection');
  players[2].moves.movePickMayor(2, 2); // -- Can't Pick self for special Mayor
  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseSpecialElection');
  players[2].moves.movePickMayor(0, 2); // -- Can chose last Priest
  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseChosePriest');

  //Mayor = 2
  //Priest = 0
  //Special Mayor = 0
  //SpecialPriest = 1
  players[0].moves.moveChosePriest(2, 0); // -- Cannot chose last Mayor
  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseChosePriest');
  players[0].moves.moveChosePriest(0, 0); // -- Cannot chose last Priest == Self
  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseChosePriest');
  players[0].moves.moveChosePriest(1, 0); // -- Can chose some else
  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseVotePriest');
  players.map((p, i) => p.moves.moveVoteYes(i));
  players.map((p, i) => p.moves.moveOKVote(i));
  players[0].moves.moveDiscardMayor(2, 0);
  players[1].moves.moveDiscardPriest(1, 1); // -- play blood 4
  var { G, ctx } = players[0].getState();

  expect(ctx.phase).toEqual('phaseExecution');
  players[0].moves.moveExecute(5, 0); // -- execute some guy

  players[3].moves.moveChosePriest(0, 3); // -- continue with next Mayor, as if no Special El.
  // -- cannot chose priest/maoyr from special E
  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseChosePriest');
  players[3].moves.moveChosePriest(1, 3); // -- continue with next Mayor, as if no Special El.
  // -- cannot chose priest/maoyr from special E
  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseChosePriest');
  players[3].moves.moveChosePriest(2, 3); // -- can chose mayor from before SE
  players.map((p, i) => p.moves.moveVoteNo(i));
  players.map((p, i) => p.moves.moveOKVote(i));
  var { G, ctx } = players[0].getState();
  expect(G.electionTracker).toEqual(1);
  players[4].moves.moveChosePriest(3, 4);
  players.map((p, i) => p.moves.moveVoteYes(i));
  players.map((p, i) => p.moves.moveOKVote(i));
  players[4].moves.moveDiscardMayor(0, 4);
  players[3].moves.moveDiscardPriest(0, 3); // -- play holywater 1
  var { G, ctx } = players[0].getState();

  // player 5 dead
  players[6].moves.moveChosePriest(5, 6); // -- try to chose dead guy as priest
  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseChosePriest');
  players[6].moves.moveChosePriest(2, 6);
  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseVotePriest');
  var { G, ctx } = players[0].getState();
  players.map((p, i) => p.moves.moveVoteYes(i));
  players.map((p, i) => p.moves.moveOKVote(i));
  players[6].moves.moveDiscardMayor(0, 6);
  players[2].moves.moveDiscardPriest(1, 2); // -- play holywater 2

  players[0].moves.moveChosePriest(4, 0);
  players.map((p, i) => p.moves.moveVoteYes(i));
  players.map((p, i) => p.moves.moveOKVote(i));
  players[0].moves.moveDiscardMayor(0, 0);
  players[4].moves.moveDiscardPriest(1, 4); // -- play blood 5

  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseExecution');
  players[0].moves.moveExecute(6, 0); // -- execute some guy

  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseChosePriest');
  players[1].moves.moveChosePriest(3, 1);
  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseVotePriest');
  players.map((p, i) => p.moves.moveVoteYes(i));
  players.map((p, i) => p.moves.moveOKVote(i));
  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseDiscardMayor');
  players[1].moves.moveDiscardMayor(0, 1);
  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseDiscardPriestVeto');
  players[3].moves.moveWantVetoPriest(true, 3);
  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseVetoMayor');
  players[1].moves.moveWantVetoMayor(true, 1);

  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseChosePriest');
  players[2].moves.moveChosePriest(4, 2);
  players.map((p, i) => p.moves.moveVoteYes(i));
  players.map((p, i) => p.moves.moveOKVote(i));
  players[2].moves.moveDiscardMayor(1, 2);

  players[4].moves.moveWantVetoPriest(true, 4);
  players[2].moves.moveWantVetoMayor(false, 2);
  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseDiscardPriest');
  players[4].moves.moveDiscardPriest(0, 4); // -- play holywater 3

  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseChosePriest');
  players[3].moves.moveChosePriest(1, 3);
  players.map((p, i) => p.moves.moveVoteYes(i));
  players.map((p, i) => p.moves.moveOKVote(i));
  players[3].moves.moveDiscardMayor(0, 3);
  players[1].moves.moveDiscardPriest(1, 1); // -- play holywater 4

  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseChosePriest');
  players[4].moves.moveChosePriest(2, 4);
  players.map((p, i) => p.moves.moveVoteYes(i));
  players.map((p, i) => p.moves.moveOKVote(i));
  players[4].moves.moveDiscardMayor(1, 4);
  players[2].moves.moveWantVetoPriest(true, 2);
  players[4].moves.moveWantVetoMayor(true, 4);

  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseChosePriest');
  players[0].moves.moveChosePriest(3, 0);
  players.map((p, i) => p.moves.moveVoteYes(i));
  players.map((p, i) => p.moves.moveOKVote(i));
  players[0].moves.moveDiscardMayor(1, 0);
  players[3].moves.moveDiscardPriest(1, 3); // -- play holywater 5

  var { G, ctx } = players[0].getState();
  expect(G.policyBoardHuman.length).toEqual(5);

  var { G, ctx } = players[0].getState();
  expect(ctx.gameover).toEqual({ win: true });
});

it('end2end - 7 player different special election', () => {
  // set up a specific board scenario
  const SecretDraculaCustomScenario = {
    ...SecretDraculaGame,
    numPlayers: 7,
    setup: (ctx: Ctx) => {
      return {
        ..._setup(ctx, false, false),
      };
    },
  };

  const spec = {
    game: SecretDraculaCustomScenario,
    numPlayers: 7,
    multiplayer: Local(),
  };

  const players = [0, 1, 2, 3, 4, 5, 6].map((value) => {
    return Client({ ...spec, playerID: value.toString() } as any);
  });

  players.map((p) => p.start());

  players[0].moves.moveChosePriest(3, 0);
  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseVotePriest');
  players.map((p, i) => p.moves.moveVoteYes(i));
  players.map((p, i) => p.moves.moveOKVote(i));
  players[0].moves.moveDiscardMayor(0, 0);
  players[3].moves.moveDiscardPriest(0, 3); // -- play blood 1

  players[1].moves.moveChosePriest(3, 1); // -- fail
  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseChosePriest');
  players[1].moves.moveChosePriest(2, 1);
  players.map((p, i) => p.moves.moveVoteYes(i));
  players.map((p, i) => p.moves.moveOKVote(i));
  players[1].moves.moveDiscardMayor(0, 1);
  players[2].moves.moveDiscardPriest(0, 2); // -- play blood 2

  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseInvestigate1');
  players[1].moves.moveInvestigateStart(1, 1); // -- Can't Investigate Self
  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseInvestigate1');
  players[1].moves.moveInvestigateStart(3, 1); //
  var { G, ctx } = players[1].getState();
  expect(G.investigate).toEqual(-1);
  expect(G.investigateID).toEqual(3);
  expect(ctx.phase).toEqual('phaseInvestigate2');
  players[1].moves.moveInvestigateEnd(1); //
  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseChosePriest');

  players[2].moves.moveChosePriest(0, 2);
  players.map((p, i) => p.moves.moveVoteYes(i));
  players.map((p, i) => p.moves.moveOKVote(i));
  players[2].moves.moveDiscardMayor(2, 2);
  players[0].moves.moveDiscardPriest(1, 0); // -- play blood 3

  // Player 2 Mayor
  // Player 0 Priest

  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseSpecialElection');
  players[2].moves.movePickMayor(3, 2); // -- Can chose last Priest
  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseChosePriest');
  players[3].moves.moveChosePriest(4, 3); // -- Can chose last Mayor
  var { G, ctx } = players[0].getState();

  // Player 2 Mayor
  // Player 0 Priest
  // Player 3 SpecialMayor
  // Player 4 SpecialPriest

  expect(ctx.phase).toEqual('phaseVotePriest');
  players.map((p, i) => p.moves.moveVoteYes(i));
  players.map((p, i) => p.moves.moveOKVote(i));

  players[3].moves.moveDiscardMayor(0, 3);
  players[4].moves.moveDiscardPriest(0, 4); // -- play holy water

  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseChosePriest'); // -- same Mayor again, becuase it was special
  expect(ctx.activePlayers).toEqual({ '3': 'phaseChosePriest' });

  players[3].moves.moveChosePriest(4, 3); // -- Cannot chose Priest from Special Election
  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseChosePriest');
  players[3].moves.moveChosePriest(0, 3); // --Can chose previos Priest
  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseVotePriest');

  // Game is not over, but test stops here

  return;
});

it('end2end - 10 player dracula winner', () => {
  // set up a specific board scenario
  const SecretDraculaCustomScenario = {
    ...SecretDraculaGame,
    numPlayers: 10,
    setup: (ctx: Ctx) => {
      return {
        ..._setup(ctx, false, false),
      };
    },
  };

  const spec = {
    game: SecretDraculaCustomScenario,
    numPlayers: 10,
    multiplayer: Local(),
  };

  const players = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) => {
    return Client({ ...spec, playerID: value.toString() } as any);
  });

  players.map((p) => p.start());

  players[0].moves.moveChosePriest(3, 0);
  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseVotePriest');
  players.map((p, i) => p.moves.moveVoteYes(i));
  players.map((p, i) => p.moves.moveOKVote(i));
  players[0].moves.moveDiscardMayor(0, 0);
  players[3].moves.moveDiscardPriest(0, 3); // -- play blood 1

  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseInvestigate1');
  players[0].moves.moveInvestigateStart(0, 0); // -- Can't Investigate Self
  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseInvestigate1');
  players[0].moves.moveInvestigateStart(3, 0); //
  var { G, ctx } = players[0].getState();
  expect(G.investigate).toEqual(1);
  expect(G.investigateID).toEqual(3);
  var { G, ctx } = players[1].getState();
  expect(G.investigate).toEqual(0); // Non-Investigating Player should not know
  expect(G.investigateID).toEqual(3);
  expect(ctx.phase).toEqual('phaseInvestigate2');
  players[0].moves.moveInvestigateEnd(0); //
  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseChosePriest');

  players[1].moves.moveChosePriest(3, 1); // -- fail
  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseChosePriest');
  players[1].moves.moveChosePriest(2, 1);
  players.map((p, i) => p.moves.moveVoteYes(i));
  players.map((p, i) => p.moves.moveOKVote(i));
  players[1].moves.moveDiscardMayor(0, 1);
  players[2].moves.moveDiscardPriest(0, 2); // -- play blood 2

  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseInvestigate1');
  players[1].moves.moveInvestigateStart(1, 1); // -- Can't Investigate Self
  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseInvestigate1');
  players[1].moves.moveInvestigateStart(6, 1); //
  var { G, ctx } = players[1].getState();
  expect(G.investigate).toEqual(-1);
  expect(G.investigateID).toEqual(6);
  expect(ctx.phase).toEqual('phaseInvestigate2');
  players[1].moves.moveInvestigateEnd(1); //
  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseChosePriest');

  players[2].moves.moveChosePriest(0, 2);
  players.map((p, i) => p.moves.moveVoteYes(i));
  players.map((p, i) => p.moves.moveOKVote(i));
  players[2].moves.moveDiscardMayor(2, 2);
  players[0].moves.moveDiscardPriest(1, 0); // -- play blood 3

  // Player 2 Mayor
  // Player 0 Priest

  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseSpecialElection');
  players[2].moves.movePickMayor(7, 2); // -- Can chose last Priest
  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseChosePriest');
  players[7].moves.moveChosePriest(1, 7);

  // Player 2 Mayor
  // Player 0 Priest
  // Player 7 SpecialMayor
  // Player 1 SpecialPriest

  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseVotePriest');
  players.map((p, i) => p.moves.moveVoteNo(i));
  players.map((p, i) => p.moves.moveOKVote(i));

  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseChosePriest'); // -- next mayor is 3
  expect(ctx.activePlayers).toEqual({ '3': 'phaseChosePriest' });
  players[3].moves.moveChosePriest(1, 3);
  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseVotePriest');
  players.map((p, i) => p.moves.moveVoteNo(i));
  players.map((p, i) => p.moves.moveOKVote(i));

  var { G, ctx } = players[0].getState();
  expect(ctx.activePlayers).toEqual({ '4': 'phaseChosePriest' });
  players[4].moves.moveChosePriest(1, 4);
  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseVotePriest');
  players.map((p, i) => p.moves.moveVoteNo(i));
  players.map((p, i) => p.moves.moveOKVote(i)); // -- third NO

  var { G, ctx } = players[0].getState();
  expect(G.policyBoardVampire.length).toEqual(4); // auto played 4th, but skipped action
  expect(G.electionTracker).toEqual(0);
  expect(ctx.activePlayers).toEqual({ '5': 'phaseChosePriest' });
  players[5].moves.moveChosePriest(2, 5); // can chose old elected mayor, because of electionCounter reset
  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseVotePriest');
  players.map((p, i) => p.moves.moveVoteYes(i));
  players.map((p, i) => p.moves.moveOKVote(i));
  players[5].moves.moveDiscardMayor(2, 5);
  players[2].moves.moveDiscardPriest(1, 2); // -- play blood 5

  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseExecution');
  players[5].moves.moveExecute(4, 5); // -- execute some guy

  var { G, ctx } = players[0].getState();
  expect(ctx.activePlayers).toEqual({ '6': 'phaseChosePriest' });
  expect(G.vetoPower).toEqual(true);
  players[6].moves.moveChosePriest(0, 6); // chose Dracula
  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseVotePriest');
  players.map((p, i) => p.moves.moveVoteYes(i));
  players.map((p, i) => p.moves.moveOKVote(i));

  var { G, ctx } = players[0].getState();

  expect(ctx.gameover).toEqual({ lose: true });

  return;
});

it('end2end - 10 player dracula dead', () => {
  // set up a specific board scenario
  const SecretDraculaCustomScenario = {
    ...SecretDraculaGame,
    numPlayers: 10,
    setup: (ctx: Ctx) => {
      return {
        ..._setup(ctx, false, false),
      };
    },
  };

  const spec = {
    game: SecretDraculaCustomScenario,
    numPlayers: 10,
    multiplayer: Local(),
  };

  const players = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) => {
    return Client({ ...spec, playerID: value.toString() } as any);
  });

  players.map((p) => p.start());

  players[0].moves.moveChosePriest(3, 0);
  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseVotePriest');
  players.map((p, i) => p.moves.moveVoteYes(i));
  players.map((p, i) => p.moves.moveOKVote(i));
  players[0].moves.moveDiscardMayor(0, 0);
  players[3].moves.moveDiscardPriest(0, 3); // -- play blood 1

  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseInvestigate1');
  players[0].moves.moveInvestigateStart(0, 0); // -- Can't Investigate Self
  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseInvestigate1');
  players[0].moves.moveInvestigateStart(3, 0); //
  var { G, ctx } = players[0].getState();
  expect(G.investigate).toEqual(1);
  expect(G.investigateID).toEqual(3);
  expect(ctx.phase).toEqual('phaseInvestigate2');
  players[0].moves.moveInvestigateEnd(0); //
  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseChosePriest');

  players[1].moves.moveChosePriest(3, 1); // -- fail
  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseChosePriest');
  players[1].moves.moveChosePriest(2, 1);
  players.map((p, i) => p.moves.moveVoteYes(i));
  players.map((p, i) => p.moves.moveOKVote(i));
  players[1].moves.moveDiscardMayor(0, 1);
  players[2].moves.moveDiscardPriest(0, 2); // -- play blood 2

  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseInvestigate1');
  players[1].moves.moveInvestigateStart(1, 1); // -- Can't Investigate Self
  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseInvestigate1');
  players[1].moves.moveInvestigateStart(6, 1); //
  var { G, ctx } = players[1].getState();
  expect(G.investigate).toEqual(-1);
  expect(G.investigateID).toEqual(6);
  expect(ctx.phase).toEqual('phaseInvestigate2');
  players[1].moves.moveInvestigateEnd(1); //
  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseChosePriest');

  players[2].moves.moveChosePriest(0, 2);
  players.map((p, i) => p.moves.moveVoteYes(i));
  players.map((p, i) => p.moves.moveOKVote(i));
  players[2].moves.moveDiscardMayor(2, 2);
  players[0].moves.moveDiscardPriest(1, 0); // -- play blood 3

  // Player 2 Mayor
  // Player 0 Priest

  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseSpecialElection');
  players[2].moves.movePickMayor(7, 2); // -- Can chose last Priest
  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseChosePriest');
  players[7].moves.moveChosePriest(1, 7);

  // Player 2 Mayor
  // Player 0 Priest
  // Player 7 SpecialMayor
  // Player 1 SpecialPriest

  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseVotePriest');
  players.map((p, i) => p.moves.moveVoteNo(i));
  players.map((p, i) => p.moves.moveOKVote(i));

  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseChosePriest'); // -- next mayor is 3
  expect(ctx.activePlayers).toEqual({ '3': 'phaseChosePriest' });
  players[3].moves.moveChosePriest(1, 3);
  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseVotePriest');
  players.map((p, i) => p.moves.moveVoteNo(i));
  players.map((p, i) => p.moves.moveOKVote(i));

  var { G, ctx } = players[0].getState();
  expect(ctx.activePlayers).toEqual({ '4': 'phaseChosePriest' });
  players[4].moves.moveChosePriest(1, 4);
  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseVotePriest');
  players.map((p, i) => p.moves.moveVoteNo(i));
  players.map((p, i) => p.moves.moveOKVote(i)); // -- third NO

  var { G, ctx } = players[0].getState();
  expect(G.policyBoardVampire.length).toEqual(4); // auto played 4th, but skipped action
  expect(G.electionTracker).toEqual(0);
  expect(ctx.activePlayers).toEqual({ '5': 'phaseChosePriest' });
  players[5].moves.moveChosePriest(2, 5); // can chose old elected mayor, because of electionCounter reset
  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseVotePriest');
  players.map((p, i) => p.moves.moveVoteYes(i));
  players.map((p, i) => p.moves.moveOKVote(i));
  players[5].moves.moveDiscardMayor(2, 5);
  players[2].moves.moveDiscardPriest(1, 2); // -- play blood 5

  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseExecution');
  players[5].moves.moveExecute(0, 5); // -- execute Dracula

  var { G, ctx } = players[0].getState();
  // TODO Dracula is dead

  var { G, ctx } = players[0].getState();
  expect(ctx.gameover).toEqual({ win: true });
  return;
});

it('end2end - 10 player dracula priest on 3 blood', () => {
  // set up a specific board scenario
  const SecretDraculaCustomScenario = {
    ...SecretDraculaGame,
    numPlayers: 10,
    setup: (ctx: Ctx) => {
      return {
        ..._setup(ctx, false, false),
      };
    },
  };

  const spec = {
    game: SecretDraculaCustomScenario,
    numPlayers: 10,
    multiplayer: Local(),
  };

  const players = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) => {
    return Client({ ...spec, playerID: value.toString() } as any);
  });

  players.map((p) => p.start());

  players[0].moves.moveChosePriest(3, 0);
  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseVotePriest');
  players.map((p, i) => p.moves.moveVoteYes(i));
  players.map((p, i) => p.moves.moveOKVote(i));
  players[0].moves.moveDiscardMayor(0, 0);
  players[3].moves.moveDiscardPriest(0, 3); // -- play blood 1

  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseInvestigate1');
  players[0].moves.moveInvestigateStart(0, 0); // -- Can't Investigate Self
  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseInvestigate1');
  players[0].moves.moveInvestigateStart(3, 0); //
  var { G, ctx } = players[0].getState();
  expect(G.investigate).toEqual(1);
  expect(G.investigateID).toEqual(3);
  var { G, ctx } = players[1].getState();
  expect(G.investigate).toEqual(0); // Non-Investigating Player should not know
  expect(G.investigateID).toEqual(3);
  expect(ctx.phase).toEqual('phaseInvestigate2');
  players[0].moves.moveInvestigateEnd(0); //
  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseChosePriest');

  players[1].moves.moveChosePriest(3, 1); // -- fail
  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseChosePriest');
  players[1].moves.moveChosePriest(2, 1);
  players.map((p, i) => p.moves.moveVoteYes(i));
  players.map((p, i) => p.moves.moveOKVote(i));
  players[1].moves.moveDiscardMayor(0, 1);
  players[2].moves.moveDiscardPriest(0, 2); // -- play blood 2

  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseInvestigate1');
  players[1].moves.moveInvestigateStart(1, 1); // -- Can't Investigate Self
  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseInvestigate1');
  players[1].moves.moveInvestigateStart(6, 1); //
  var { G, ctx } = players[1].getState();
  expect(G.investigate).toEqual(-1);
  expect(G.investigateID).toEqual(6);
  expect(ctx.phase).toEqual('phaseInvestigate2');
  players[1].moves.moveInvestigateEnd(1); //
  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseChosePriest');

  players[2].moves.moveChosePriest(5, 2);
  players.map((p, i) => p.moves.moveVoteYes(i));
  players.map((p, i) => p.moves.moveOKVote(i));
  players[2].moves.moveDiscardMayor(2, 2);
  players[5].moves.moveDiscardPriest(1, 5); // -- play blood 3

  // Player 2 Mayor
  // Player 5 Priest

  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseSpecialElection');
  players[2].moves.movePickMayor(7, 2); // -- Can chose last Priest
  var { G, ctx } = players[0].getState();
  expect(ctx.phase).toEqual('phaseChosePriest');
  players[7].moves.moveChosePriest(0, 7); // -- Chose Dracula as Priest

  players.map((p, i) => p.moves.moveVoteYes(i));
  players.map((p, i) => p.moves.moveOKVote(i));

  var { G, ctx } = players[7].getState();

  expect(ctx.gameover).toEqual({ lose: true });
  return;
});
