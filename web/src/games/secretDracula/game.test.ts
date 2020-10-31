import { Client } from 'boardgame.io/client';
import { SecretDraculaGame, _setup } from './game';
import { Ctx } from 'boardgame.io';
import { Local } from 'boardgame.io/multiplayer';
import { INVALID_MOVE } from 'boardgame.io/core';


it('end2end - ', () => {
    // set up a specific board scenario
    const SecretDraculaCustomScenario = {
        ...SecretDraculaGame,
        numPlayers: 5,
        setup: (ctx: Ctx) => {return {
            ..._setup(ctx, false, false),
          }
      }
    }
  
    const spec = {
        game: SecretDraculaCustomScenario,
        numPlayers: 5,
        multiplayer: Local(),
    }
  
    const players = [0,1,2,3,4].map((value) => {
        return Client({...spec, playerID: value.toString()} as any)
    });
  
    players.map((p) => p.start())
  
    players[0].moves.moveChosePriest(3,0)
    players.map((p, i) => p.moves.moveVoteYes(i))
    players.map((p, i) => p.moves.moveOKVote(i))
    players[0].moves.moveDiscardMayor(0,0)
    players[3].moves.moveDiscardPriest(0,3) // -- play blood
    
    players[1].moves.moveChosePriest(3,1) // -- fail
    var {G, ctx} = players[0].getState();
    expect(ctx.phase).toEqual('phaseChosePriest')
    players[1].moves.moveChosePriest(2,1)
    players.map((p, i) => p.moves.moveVoteYes(i))
    players.map((p, i) => p.moves.moveOKVote(i))
    players[1].moves.moveDiscardMayor(0,1)
    players[2].moves.moveDiscardPriest(0,2) // -- play blood

    players[2].moves.moveChosePriest(0,2)
    players.map((p, i) => p.moves.moveVoteYes(i))
    players.map((p, i) => p.moves.moveOKVote(i))
    players[2].moves.moveDiscardMayor(2,2)
    players[0].moves.moveDiscardPriest(1,0) // -- play blood

    players[2].moves.moveOK(2) // -- OK for Peek Policy
    var {G, ctx} = players[0].getState();

    players[3].moves.moveChosePriest(3,3) // -- can't chose self
    var {G, ctx} = players[0].getState();
    expect(ctx.phase).toEqual('phaseChosePriest')
    players[3].moves.moveChosePriest(4,3)
    players.map((p, i) => p.moves.moveVoteNo(i))
    players.map((p, i) => p.moves.moveOKVote(i))
    var {G, ctx} = players[0].getState();
    expect(G.electionTracker).toEqual(1)
    players[4].moves.moveChosePriest(3,4) 
    players.map((p, i) => p.moves.moveVoteNo(i))
    players.map((p, i) => p.moves.moveOKVote(i))
    var {G, ctx} = players[0].getState();
    expect(G.electionTracker).toEqual(2)

    players[0].moves.moveChosePriest(3,0)
    players.map((p, i) => p.moves.moveVoteNo(i))
    players.map((p, i) => p.moves.moveOKVote(i))

    var {G, ctx} = players[0].getState(); // -- skip the execution.
                                          //    and play blood
    expect(G.electionTracker).toEqual(0)
    expect(ctx.phase).toEqual('phaseChosePriest')
    expect(G.policyBoardVampire.length).toEqual(4)

  
    players[1].moves.moveChosePriest(0,1) // -- last priest, 
                                          //    but after election tracker should be ok again
    players.map((p, i) => p.moves.moveVoteYes(i))
    players.map((p, i) => p.moves.moveOKVote(i))
    players[1].moves.moveDiscardMayor(2,1)
    players[0].moves.moveDiscardPriest(1,0) // -- play blood

    players[1].moves.moveExecute(0,1)

    // var {G, ctx} = players[0].getState();
    // console.log(G)
    // console.log(ctx)
    // TODO: Now the game should be over, as Dracula is dead!
  });
  