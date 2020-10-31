import { Client } from 'boardgame.io/client';
import { SecretDraculaGame, _setup } from './../../game';
import { Ctx } from 'boardgame.io';
import { IG } from './../../interfaces'
import { Local } from 'boardgame.io/multiplayer';

it('should work', () => {
  // set up a specific board scenario
  const SecretDraculaCustomScenario = {
      ...SecretDraculaGame,
      numPlayers: 5,
      setup: (ctx: Ctx) => {return _setup(ctx, false, false)}
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
  players[0].moves.moveVoteYes(0)
  players[1].moves.moveVoteYes(1)
  players[2].moves.moveVoteYes(2)
  players[3].moves.moveVoteYes(3)
  players[4].moves.moveVoteYes(4)
  // let G: IG
  //let ctx: Ctx

  var {G, ctx} = players[0].getState();
  // the board should look like this now
  let G3 = <IG>G
  let ctx3 = <Ctx>ctx

  console.log(G3)

  expect(G3.priestID).toEqual(1)
  // expect({ ...G, movelog: undefined }).toEqual({
});