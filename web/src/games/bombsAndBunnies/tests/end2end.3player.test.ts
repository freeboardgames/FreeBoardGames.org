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

  Utilities.getTypedMoves(p1).Bet(1);
  Utilities.getTypedMoves(p2).SkipBet();
  Utilities.getTypedMoves(p3).SkipBet();

  Utilities.getTypedMoves(p1).Reveal(p1.playerID);

  var { G, ctx } = Utilities.getTypedState(p1);

  expect(G.players[0].wins).toEqual(1);
  expect(ctx.phase).toEqual(Phases.initial_placement);
  expect(ctx.currentPlayer).toEqual(p2.playerID);

  Utilities.PlaceBunnyCard(p2);
  Utilities.PlaceBunnyCard(p3);
  Utilities.PlaceBunnyCard(p1);

  Utilities.PlaceBunnyCard(p2);
  Utilities.PlaceBunnyCard(p3);

  Utilities.getTypedMoves(p1).Bet(1);
  Utilities.getTypedMoves(p2).SkipBet();
  Utilities.getTypedMoves(p3).SkipBet();

  Utilities.getTypedMoves(p1).Reveal(p1.playerID);

  var { G, ctx } = Utilities.getTypedState(p1);
  expect(G.players[0].wins).toEqual(2);
  expect(ctx.gameover).toEqual({ winner: p1.playerID });
});

it('p1 gets knocked out and p2 wins with early betting against p3', () => {
  const [p1, p2, p3] = setup();

  Utilities.PlaceBombCard(p1);
  Utilities.PlaceBunnyCard(p2);
  Utilities.PlaceBunnyCard(p3);
  Utilities.getTypedMoves(p1).Bet(1);
  Utilities.getTypedMoves(p2).SkipBet();
  Utilities.getTypedMoves(p3).SkipBet();
  Utilities.getTypedMoves(p1).Reveal(p1.playerID);
  Utilities.DiscardOwnBunnyCard(p1);

  Utilities.PlaceBombCard(p1);
  Utilities.PlaceBunnyCard(p2);
  Utilities.PlaceBunnyCard(p3);
  Utilities.getTypedMoves(p1).Bet(1);
  Utilities.getTypedMoves(p2).SkipBet();
  Utilities.getTypedMoves(p3).SkipBet();
  Utilities.getTypedMoves(p1).Reveal(p1.playerID);
  Utilities.DiscardOwnBunnyCard(p1);

  Utilities.PlaceBombCard(p1);
  Utilities.PlaceBunnyCard(p2);
  Utilities.PlaceBunnyCard(p3);
  Utilities.getTypedMoves(p1).Bet(1);
  Utilities.getTypedMoves(p2).SkipBet();
  Utilities.getTypedMoves(p3).SkipBet();
  Utilities.getTypedMoves(p1).Reveal(p1.playerID);
  Utilities.DiscardOwnBunnyCard(p1);

  Utilities.PlaceBombCard(p1);
  Utilities.PlaceBunnyCard(p2);
  Utilities.PlaceBunnyCard(p3);
  Utilities.getTypedMoves(p1).Bet(1);
  Utilities.getTypedMoves(p2).SkipBet();
  Utilities.getTypedMoves(p3).SkipBet();
  Utilities.getTypedMoves(p1).Reveal(p1.playerID);
  Utilities.DiscardOwnBombCard(p1);

  var { G, ctx } = Utilities.getTypedState(p1);
  expect(G.players[0].isOut).toEqual(true);

  // game continues with only p2 and p3 allowed to move

  Utilities.PlaceBunnyCard(p2);
  Utilities.PlaceBunnyCard(p3);
  Utilities.getTypedMoves(p2).Bet(1);
  Utilities.getTypedMoves(p3).SkipBet();
  Utilities.getTypedMoves(p2).Reveal(p2.playerID);

  Utilities.PlaceBunnyCard(p3);
  Utilities.PlaceBunnyCard(p2);
  Utilities.PlaceBunnyCard(p3);
  Utilities.getTypedMoves(p2).Bet(1);
  Utilities.getTypedMoves(p3).SkipBet();
  Utilities.getTypedMoves(p2).Reveal(p2.playerID);

  var { G, ctx } = Utilities.getTypedState(p1);
  expect(G.players[1].wins).toEqual(2);
  expect(ctx.gameover).toEqual({ winner: p2.playerID });
});
