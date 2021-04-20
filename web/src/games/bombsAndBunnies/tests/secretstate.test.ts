import { CardType } from '../engine/interfaces';
import { BombsAndBunniesGame } from '../game';
import { Client } from 'boardgame.io/client';
import { Local } from 'boardgame.io/multiplayer';
import { _ClientImpl } from 'boardgame.io/dist/types/src/client/client';
import * as Utilities from './utilities';

let _matchId = 0;

function setup(): _ClientImpl<any>[] {
  const matchId = (_matchId++).toString();
  const spec = {
    game: BombsAndBunniesGame,
    numPlayers: 3,
    multiplayer: Local(),
  };

  const players = [0, 1, 2].map((value) => {
    return Client({ ...spec, playerID: value.toString() } as any);
  });

  players.forEach((p) => {
    p.updateMatchID(matchId);
    p.start();
  });

  return players;
}

it('p1 consecutive wins with early betting and everyone else skips', () => {
  const [p1, p2, p3] = setup();

  Utilities.PlaceBunnyCard(p1);
  Utilities.PlaceBunnyCard(p2);
  Utilities.PlaceBunnyCard(p3);

  Utilities.PlaceBunnyCard(p1);
  Utilities.PlaceBunnyCard(p2);
  Utilities.PlaceBunnyCard(p3);

  Utilities.PlaceBombCard(p1);

  Utilities.getTypedMoves(p2).Bet(1);

  Utilities.getTypedMoves(p3).SkipBet();

  // I really don't know how javescript works :()
  var { G } = Utilities.getTypedState(p1);
  var G1 = G;
  var { G } = Utilities.getTypedState(p2);
  var G2 = G;
  var { G } = Utilities.getTypedState(p3);
  var G3 = G;

  expect(G1.players[0].hand).toEqual(<CardType[]>[CardType.Bunny]);
  expect(G2.players[0].hand).toEqual(<CardType[]>[CardType.Bunny]);

  expect(G1.players[1].hand).toEqual(<CardType[]>[CardType.Bunny, CardType.Bunny]);
  expect(G2.players[1].hand).toEqual(<CardType[]>[CardType.Bunny, CardType.Bomb]);
  expect(G3.players[1].hand).toEqual(<CardType[]>[CardType.Bunny, CardType.Bunny]);

  expect(G1.players[0].stack).toEqual(<CardType[]>[CardType.Bunny, CardType.Bunny, CardType.Bomb]);
  expect(G2.players[0].stack).toEqual(<CardType[]>[CardType.Bunny, CardType.Bunny, CardType.Bunny]);
  expect(G3.players[0].stack).toEqual(<CardType[]>[CardType.Bunny, CardType.Bunny, CardType.Bunny]);

  expect(G1.players[1].stack).toEqual(<CardType[]>[CardType.Bunny, CardType.Bunny]);
  expect(G2.players[1].stack).toEqual(<CardType[]>[CardType.Bunny, CardType.Bunny]);
  expect(G3.players[1].stack).toEqual(<CardType[]>[CardType.Bunny, CardType.Bunny]);
});
