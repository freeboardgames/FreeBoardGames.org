import { Phases } from '../engine/interfaces';
import { BombsAndBunniesGame } from '../game';
import { Client } from 'boardgame.io/client';
import { Local } from 'boardgame.io/multiplayer';
import { _ClientImpl } from 'boardgame.io/dist/types/src/client/client';
import { getTypedMoves, getTypedState } from './utilities';

let _matchId = 0;

function setup(): _ClientImpl<any>[] {
  const matchId = (_matchId++).toString();
  const spec = {
    game: BombsAndBunniesGame,
    numPlayers: 2,
    multiplayer: Local(),
  };

  const players = [0, 1].map((value) => {
    return Client({ ...spec, playerID: value.toString() } as any);
  });

  players.forEach((p) => {
    p.updateMatchID(matchId);
    p.start();
  });

  return players;
}

it('p1 consecutive wins with early betting', () => {
  const [p1, p2] = setup();

  getTypedMoves(p1).PlaceCard(0);
  getTypedMoves(p2).PlaceCard(0);

  getTypedMoves(p1).Bet(1);
  getTypedMoves(p2).SkipBet();

  getTypedMoves(p1).Reveal(p1.playerID);

  var { G, ctx } = getTypedState(p1);

  expect(G.players[0].wins).toEqual(1);
  expect(ctx.phase).toEqual(Phases.initial_placement);
  expect(ctx.currentPlayer).toEqual(p2.playerID);

  getTypedMoves(p2).PlaceCard(0);
  getTypedMoves(p1).PlaceCard(0);

  getTypedMoves(p2).Bet(1);
  getTypedMoves(p1).Bet(2);

  getTypedMoves(p1).Reveal(p1.playerID);
  getTypedMoves(p1).Reveal(p2.playerID);

  var { G, ctx } = getTypedState(p1);
  expect(G.players[0].wins).toEqual(2);
  expect(ctx.gameover).toEqual({ winner: p1.playerID });
  return;
});

it('p2 consecutive wins with early betting', () => {
  const [p1, p2] = setup();

  getTypedMoves(p1).PlaceCard(0);
  getTypedMoves(p2).PlaceCard(0);

  getTypedMoves(p1).Bet(1);
  getTypedMoves(p2).Bet(2);

  getTypedMoves(p2).Reveal(p2.playerID);
  getTypedMoves(p2).Reveal(p1.playerID);

  var { G, ctx } = getTypedState(p2);

  expect(G.players[1].wins).toEqual(1);
  expect(ctx.phase).toEqual(Phases.initial_placement);
  expect(ctx.currentPlayer).toEqual(p1.playerID);

  getTypedMoves(p1).PlaceCard(0);
  getTypedMoves(p2).PlaceCard(0);

  getTypedMoves(p1).Bet(1);
  getTypedMoves(p2).Bet(2);

  getTypedMoves(p2).Reveal(p2.playerID);
  getTypedMoves(p2).Reveal(p1.playerID);

  var { G, ctx } = getTypedState(p2);
  expect(G.players[1].wins).toEqual(2);
  expect(ctx.gameover).toEqual({ winner: p2.playerID });
  return;
});
