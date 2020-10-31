import { Client } from 'boardgame.io/client';
import { SecretDraculaGame, _setup } from './../../game';
import { Ctx } from 'boardgame.io';
import { IG } from './../../interfaces'
import { Local } from 'boardgame.io/multiplayer';
import { INVALID_MOVE } from 'boardgame.io/core';
import { moveChosePriest } from './moves'

it('never ok to nominate yourself', () => {
  // set up a specific board scenario
  const SecretDraculaCustomScenario = {
      ...SecretDraculaGame,
      numPlayers: 5,
      setup: (ctx: Ctx) => {return {
          ..._setup(ctx, false, false),
          lastMayorID: 1,
          lastPriestID: 2,
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

  var {G, ctx} =players[0].getState();
  // the board should look like this now
  let G2 = <IG>G
  let ctx2 = <Ctx>ctx

  players[0].moves.moveChosePriest(0,0)

  // let G: IG
  //let ctx: Ctx

  var {G, ctx} = players[0].getState();
  // the board should look like this now
  let G3 = <IG>G
  let ctx3 = <Ctx>ctx

  expect(ctx.phase).toEqual('phaseChosePriest')
});

it('with 5 players its ok to renominate Mayor', () => {
  // set up a specific board scenario
  const SecretDraculaCustomScenario = {
      ...SecretDraculaGame,
      numPlayers: 5,
      setup: (ctx: Ctx) => {return {
          ..._setup(ctx, false, false),
          lastMayorID: 1,
          lastPriestID: 2,
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

  var {G, ctx} =players[0].getState();
  // the board should look like this now
  let G2 = <IG>G
  let ctx2 = <Ctx>ctx

  players[0].moves.moveChosePriest(1,0)

  players.map((p, i) => p.moves.moveVoteYes(i))
  players.map((p, i) => p.moves.moveOKVote(i))

  // let G: IG
  //let ctx: Ctx

  var {G, ctx} = players[0].getState();
  // the board should look like this now
  let G3 = <IG>G
  let ctx3 = <Ctx>ctx

  expect(G3.priestID).toEqual(1)
  // expect({ ...G, movelog: undefined }).toEqual({
});

it('with 7 players its not ok renominate Mayor', () => {
  // set up a specific board scenario
  const SecretDraculaCustomScenario = {
      ...SecretDraculaGame,
      numPlayers: 7,
      setup: (ctx: Ctx) => {return {
          ..._setup(ctx, false, false),
          lastMayorID: 1,
          lastPriestID: 2,
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

  players[0].moves.moveChosePriest(1,0)

  var {G, ctx} = players[0].getState();
  // the board should look like this now
  let G3 = <IG>G
  let ctx3 = <Ctx>ctx

  expect(ctx.phase).toEqual('phaseChosePriest')
  // expect({ ...G, movelog: undefined }).toEqual({
});

it('never ok to renominate Priest', () => {
    // set up a specific board scenario
    const SecretDraculaCustomScenario = {
        ...SecretDraculaGame,
        numPlayers: 7,
        setup: (ctx: Ctx) => {return {
            ..._setup(ctx, false, false),
            lastMayorID: 1,
            lastPriestID: 2,
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
  