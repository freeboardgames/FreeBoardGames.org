import { Client } from 'boardgame.io/client';
import { SecretDraculaGame, _setup } from '../../game';
import { Ctx } from 'boardgame.io';
import { IG } from '../../interfaces'
import { Local } from 'boardgame.io/multiplayer';
import { INVALID_MOVE } from 'boardgame.io/core';

it('special election - not ok to vote self', () => {
    // set up a specific board scenario
    const SecretDraculaCustomScenario = {
        ...SecretDraculaGame,
        numPlayers: 7,
        setup: (ctx: Ctx) => {return {
            ..._setup(ctx, false, false),
            mayorID: 0,
            lastMayorID: 3,
            lastPriestID: 2,
            specialElection: 3, // last mayor was this.
          }
      }
    }
  
    const spec = {
        game: SecretDraculaCustomScenario,
        numPlayers: 7,
        multiplayer: Local(),
    }
  
    const players = [0,1,2,3,4,5,6].map((value) => {
        return Client({...spec, playerID: value.toString()} as any)
    });
  
    players.map((p) => p.start())
  
    var {G, ctx} =players[0].getState();
    // the board should look like this now
    let G2 = <IG>G
    let ctx2 = <Ctx>ctx
  
    players[0].moves.moveChosePriest(0,0)
  
    var {G, ctx} = players[0].getState();
    // the board should look like this now
    let G3 = <IG>G
    let ctx3 = <Ctx>ctx
  
    expect(ctx.phase).toEqual('phaseChosePriest')
    // expect({ ...G, movelog: undefined }).toEqual({
  });
  
it('special election - ok to old priest', () => {
    // set up a specific board scenario
    const SecretDraculaCustomScenario = {
        ...SecretDraculaGame,
        numPlayers: 7,
        setup: (ctx: Ctx) => {return {
            ..._setup(ctx, false, false),
            mayorID: 0,
            lastMayorID: 3,
            lastPriestID: 2,
            specialElection: 3, // last mayor was this.
          }
      }
    }
  
    const spec = {
        game: SecretDraculaCustomScenario,
        numPlayers: 7,
        multiplayer: Local(),
    }
  
    const players = [0,1,2,3,4,5,6].map((value) => {
        return Client({...spec, playerID: value.toString()} as any)
    });
  
    players.map((p) => p.start())
  
    var {G, ctx} =players[0].getState();
    // the board should look like this now
    let G2 = <IG>G
    let ctx2 = <Ctx>ctx
  
    players[0].moves.moveChosePriest(2,0)
  
    var {G, ctx} = players[0].getState();
    // the board should look like this now
    let G3 = <IG>G
    let ctx3 = <Ctx>ctx

    expect(ctx.phase).toEqual('phaseVotePriest')
    // expect({ ...G, movelog: undefined }).toEqual({
  });
  
it('special election - ok to old mayor', () => {
    // set up a specific board scenario
    const SecretDraculaCustomScenario = {
        ...SecretDraculaGame,
        numPlayers: 7,
        setup: (ctx: Ctx) => {return {
            ..._setup(ctx, false, false),
            mayorID: 0,
            lastMayorID: 3,
            lastPriestID: 2,
            specialElection: 3, // last mayor was this.
          }
      }
    }
  
    const spec = {
        game: SecretDraculaCustomScenario,
        numPlayers: 7,
        multiplayer: Local(),
    }
  
    const players = [0,1,2,3,4,5,6].map((value) => {
        return Client({...spec, playerID: value.toString()} as any)
    });
  
    players.map((p) => p.start())
  
    var {G, ctx} =players[0].getState();
    // the board should look like this now
    let G2 = <IG>G
    let ctx2 = <Ctx>ctx
  
    players[0].moves.moveChosePriest(3,0)
  
    var {G, ctx} = players[0].getState();
    // the board should look like this now
    let G3 = <IG>G
    let ctx3 = <Ctx>ctx

    expect(ctx.phase).toEqual('phaseVotePriest')
    // expect({ ...G, movelog: undefined }).toEqual({
  });