import { Phases } from '../engine/interfaces';
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

  Utilities.getTypedMoves(p1).PlaceCard(0);
  Utilities.getTypedMoves(p2).PlaceCard(0);

  Utilities.getTypedMoves(p1).Bet(1);
  Utilities.getTypedMoves(p2).SkipBet();

  Utilities.getTypedMoves(p1).Reveal(p1.playerID);

  var { G, ctx } = Utilities.getTypedState(p1);

  expect(G.players[0].wins).toEqual(1);
  expect(ctx.phase).toEqual(Phases.initial_placement);
  expect(ctx.currentPlayer).toEqual(p2.playerID);

  Utilities.getTypedMoves(p2).PlaceCard(0);
  Utilities.getTypedMoves(p1).PlaceCard(0);

  Utilities.getTypedMoves(p2).Bet(1);
  Utilities.getTypedMoves(p1).Bet(2);

  Utilities.getTypedMoves(p1).Reveal(p1.playerID);
  Utilities.getTypedMoves(p1).Reveal(p2.playerID);

  var { G, ctx } = Utilities.getTypedState(p1);
  expect(G.players[0].wins).toEqual(2);
  expect(ctx.gameover).toEqual({ winner: p1.playerID });
  return;
});

it('p2 consecutive wins with early betting', () => {
  const [p1, p2] = setup();

  Utilities.getTypedMoves(p1).PlaceCard(0);
  Utilities.getTypedMoves(p2).PlaceCard(0);

  Utilities.getTypedMoves(p1).Bet(1);
  Utilities.getTypedMoves(p2).Bet(2);

  Utilities.getTypedMoves(p2).Reveal(p2.playerID);
  Utilities.getTypedMoves(p2).Reveal(p1.playerID);

  var { G, ctx } = Utilities.getTypedState(p2);

  expect(G.players[1].wins).toEqual(1);
  expect(ctx.phase).toEqual(Phases.initial_placement);
  expect(ctx.currentPlayer).toEqual(p1.playerID);

  Utilities.getTypedMoves(p1).PlaceCard(0);
  Utilities.getTypedMoves(p2).PlaceCard(0);

  Utilities.getTypedMoves(p1).Bet(1);
  Utilities.getTypedMoves(p2).Bet(2);

  Utilities.getTypedMoves(p2).Reveal(p2.playerID);
  Utilities.getTypedMoves(p2).Reveal(p1.playerID);

  var { G, ctx } = Utilities.getTypedState(p2);
  expect(G.players[1].wins).toEqual(2);
  expect(ctx.gameover).toEqual({ winner: p2.playerID });
  return;
});

it('p2 wins by default after p1 picks their own bomb every time', () => {
  const [p1, p2] = setup();

  Utilities.PlaceBombCard(p1);
  Utilities.PlaceBombCard(p2);

  Utilities.getTypedMoves(p1).Bet(1);
  Utilities.getTypedMoves(p2).SkipBet();

  Utilities.getTypedMoves(p1).Reveal(p1.playerID);

  var { G, ctx } = Utilities.getTypedState(p1);

  expect(G.bombPlayerId).toEqual(p1.playerID);
  expect(G.failedRevealPlayerId).toEqual(p1.playerID);
  expect(ctx.phase).toEqual(Phases.penalty);
  expect(ctx.currentPlayer).toEqual(p1.playerID); // p1 chooses a card to discard

  Utilities.DiscardOwnBunnyCard(p1);

  // -- Round 2 ------------------------------------------
  var { G, ctx } = Utilities.getTypedState(p1);

  expect(ctx.phase).toEqual(Phases.initial_placement);
  expect(ctx.currentPlayer).toEqual(p1.playerID); // player who had the bomb starts

  Utilities.PlaceBombCard(p1);
  Utilities.PlaceBombCard(p2);

  Utilities.getTypedMoves(p1).Bet(1);
  Utilities.getTypedMoves(p2).SkipBet();

  Utilities.getTypedMoves(p1).Reveal(p1.playerID);

  var { G, ctx } = Utilities.getTypedState(p1);

  expect(G.bombPlayerId).toEqual(p1.playerID);
  expect(G.failedRevealPlayerId).toEqual(p1.playerID);
  expect(ctx.phase).toEqual(Phases.penalty);
  expect(ctx.currentPlayer).toEqual(p1.playerID); // p1 chooses a card to discard

  Utilities.DiscardOwnBunnyCard(p1);

  // -- Round 3 ------------------------------------------
  var { G, ctx } = Utilities.getTypedState(p1);

  expect(ctx.phase).toEqual(Phases.initial_placement);
  expect(ctx.currentPlayer).toEqual(p1.playerID); // player who had the bomb starts

  Utilities.PlaceBombCard(p1);
  Utilities.PlaceBombCard(p2);

  Utilities.getTypedMoves(p1).Bet(1);
  Utilities.getTypedMoves(p2).SkipBet();

  Utilities.getTypedMoves(p1).Reveal(p1.playerID);

  var { G, ctx } = Utilities.getTypedState(p1);

  expect(G.bombPlayerId).toEqual(p1.playerID);
  expect(G.failedRevealPlayerId).toEqual(p1.playerID);
  expect(ctx.phase).toEqual(Phases.penalty);
  expect(ctx.currentPlayer).toEqual(p1.playerID); // p1 chooses a card to discard

  Utilities.DiscardOwnBunnyCard(p1);

  // -- Round 4 ------------------------------------------
  var { G, ctx } = Utilities.getTypedState(p1);

  expect(ctx.phase).toEqual(Phases.initial_placement);
  expect(ctx.currentPlayer).toEqual(p1.playerID); // player who had the bomb starts

  Utilities.PlaceBombCard(p1);
  Utilities.PlaceBombCard(p2);

  Utilities.getTypedMoves(p1).Bet(1);
  Utilities.getTypedMoves(p2).SkipBet();

  Utilities.getTypedMoves(p1).Reveal(p1.playerID);

  var { G, ctx } = Utilities.getTypedState(p1);

  expect(G.bombPlayerId).toEqual(p1.playerID);
  expect(G.failedRevealPlayerId).toEqual(p1.playerID);
  expect(ctx.phase).toEqual(Phases.penalty);
  expect(ctx.currentPlayer).toEqual(p1.playerID); // p1 chooses a card to discard

  Utilities.DiscardOwnBombCard(p1); // discard's final card which will be the bomb.

  var { G, ctx } = Utilities.getTypedState(p1);
  expect(ctx.gameover).toEqual({ winner: p2.playerID });
  return;
});
