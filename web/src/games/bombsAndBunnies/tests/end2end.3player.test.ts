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

it('p1 continues play after p2 is knocked out after repeatedly picking p1 skull', () => {
  const [p1, p2, p3] = setup();

  Utilities.PlaceBunnyCard(p1);
  Utilities.PlaceBombCard(p2);
  Utilities.PlaceBunnyCard(p3);
  Utilities.PlaceBunnyCard(p1);
  Utilities.getTypedMoves(p2).Bet(1);
  Utilities.getTypedMoves(p3).SkipBet();
  Utilities.getTypedMoves(p1).SkipBet();
  Utilities.getTypedMoves(p2).Reveal(p2.playerID);
  Utilities.DiscardOwnBombCard(p2); // p2 loses and discards own bomb so only bunnies remain

  Utilities.PlaceBunnyCard(p2);
  Utilities.PlaceBunnyCard(p3);
  Utilities.PlaceBombCard(p1);
  Utilities.getTypedMoves(p2).Bet(2);
  Utilities.getTypedMoves(p3).SkipBet();
  Utilities.getTypedMoves(p1).SkipBet();
  Utilities.getTypedMoves(p2).Reveal(p2.playerID);
  Utilities.getTypedMoves(p2).Reveal(p1.playerID);
  Utilities.getTypedMoves(p1).Discard(p2.playerID, 0); // 2 cards left

  Utilities.PlaceBombCard(p1);
  Utilities.PlaceBunnyCard(p2);
  Utilities.PlaceBunnyCard(p3);
  Utilities.getTypedMoves(p1).Bet(1);
  Utilities.getTypedMoves(p2).Bet(2);
  Utilities.getTypedMoves(p3).SkipBet();
  Utilities.getTypedMoves(p1).SkipBet();
  Utilities.getTypedMoves(p2).Reveal(p2.playerID);
  Utilities.getTypedMoves(p2).Reveal(p1.playerID);
  Utilities.getTypedMoves(p1).Discard(p2.playerID, 0); // 1 card left

  Utilities.PlaceBombCard(p1);
  Utilities.PlaceBunnyCard(p2);
  Utilities.PlaceBunnyCard(p3);
  Utilities.getTypedMoves(p1).Bet(1);
  Utilities.getTypedMoves(p2).Bet(2);
  Utilities.getTypedMoves(p3).SkipBet();
  Utilities.getTypedMoves(p1).SkipBet();
  Utilities.getTypedMoves(p2).Reveal(p2.playerID);
  Utilities.getTypedMoves(p2).Reveal(p1.playerID);
  Utilities.getTypedMoves(p1).Discard(p2.playerID, 0); // p2 is knocked out

  var { G, ctx } = Utilities.getTypedState(p1);
  expect(G.players[1].isOut).toEqual(true);
  expect(ctx.currentPlayer).toEqual(p1.playerID);

  // game continues with only p1 and p3 allowed to move

  Utilities.PlaceBunnyCard(p1);
  Utilities.PlaceBunnyCard(p3);
});

it('p3 continues play after p2 is knocked out after repeatedly picking p3 skull', () => {
  const [p1, p2, p3] = setup();

  Utilities.PlaceBunnyCard(p1);
  Utilities.PlaceBombCard(p2);
  Utilities.PlaceBunnyCard(p3);
  Utilities.PlaceBunnyCard(p1);
  Utilities.getTypedMoves(p2).Bet(1);
  Utilities.getTypedMoves(p3).SkipBet();
  Utilities.getTypedMoves(p1).SkipBet();
  Utilities.getTypedMoves(p2).Reveal(p2.playerID);
  Utilities.DiscardOwnBombCard(p2); // p2 loses and discards own bomb so only bunnies remain

  Utilities.PlaceBunnyCard(p2);
  Utilities.PlaceBombCard(p3);
  Utilities.PlaceBunnyCard(p1);
  Utilities.getTypedMoves(p2).Bet(2);
  Utilities.getTypedMoves(p3).SkipBet();
  Utilities.getTypedMoves(p1).SkipBet();
  Utilities.getTypedMoves(p2).Reveal(p2.playerID);
  Utilities.getTypedMoves(p2).Reveal(p3.playerID);
  Utilities.getTypedMoves(p3).Discard(p2.playerID, 0); // 2 cards left

  Utilities.PlaceBombCard(p3);
  Utilities.PlaceBunnyCard(p1);
  Utilities.PlaceBunnyCard(p2);
  Utilities.getTypedMoves(p3).Bet(1);
  Utilities.getTypedMoves(p1).SkipBet();
  Utilities.getTypedMoves(p2).Bet(2);
  Utilities.getTypedMoves(p3).SkipBet();
  Utilities.getTypedMoves(p2).Reveal(p2.playerID);
  Utilities.getTypedMoves(p2).Reveal(p3.playerID);
  Utilities.getTypedMoves(p3).Discard(p2.playerID, 0); // 1 cards left

  Utilities.PlaceBombCard(p3);
  Utilities.PlaceBunnyCard(p1);
  Utilities.PlaceBunnyCard(p2);
  Utilities.getTypedMoves(p3).Bet(1);
  Utilities.getTypedMoves(p1).SkipBet();
  Utilities.getTypedMoves(p2).Bet(2);
  Utilities.getTypedMoves(p3).SkipBet();
  Utilities.getTypedMoves(p2).Reveal(p2.playerID);
  Utilities.getTypedMoves(p2).Reveal(p3.playerID);
  Utilities.getTypedMoves(p3).Discard(p2.playerID, 0); // p2 is knocked out

  var { G, ctx } = Utilities.getTypedState(p1);
  expect(G.players[1].isOut).toEqual(true);
  expect(ctx.currentPlayer).toEqual(p3.playerID);

  // game continues with only p1 and p3 allowed to move

  Utilities.PlaceBunnyCard(p3);
  Utilities.PlaceBunnyCard(p1);
});

it('p1 continues play after p3 knocks themself out by repeatedly revealing their own bomb', () => {
  const [p1, p2, p3] = setup();

  Utilities.PlaceBunnyCard(p1);
  Utilities.PlaceBunnyCard(p2);
  Utilities.PlaceBombCard(p3);
  Utilities.PlaceBunnyCard(p1);
  Utilities.PlaceBunnyCard(p2);
  Utilities.getTypedMoves(p3).Bet(1);
  Utilities.getTypedMoves(p1).SkipBet();
  Utilities.getTypedMoves(p2).SkipBet();
  Utilities.getTypedMoves(p3).Reveal(p3.playerID);
  Utilities.DiscardOwnBunnyCard(p3); // 3 cards left

  Utilities.PlaceBombCard(p3);
  Utilities.PlaceBunnyCard(p1);
  Utilities.PlaceBunnyCard(p2);
  Utilities.getTypedMoves(p3).Bet(1);
  Utilities.getTypedMoves(p1).SkipBet();
  Utilities.getTypedMoves(p2).SkipBet();
  Utilities.getTypedMoves(p3).Reveal(p3.playerID);
  Utilities.DiscardOwnBunnyCard(p3); // 2 cards left

  Utilities.PlaceBombCard(p3);
  Utilities.PlaceBunnyCard(p1);
  Utilities.PlaceBunnyCard(p2);
  Utilities.getTypedMoves(p3).Bet(1);
  Utilities.getTypedMoves(p1).SkipBet();
  Utilities.getTypedMoves(p2).SkipBet();
  Utilities.getTypedMoves(p3).Reveal(p3.playerID);
  Utilities.DiscardOwnBunnyCard(p3); // 1 cards left

  Utilities.PlaceBombCard(p3);
  Utilities.PlaceBunnyCard(p1);
  Utilities.PlaceBunnyCard(p2);
  Utilities.getTypedMoves(p3).Bet(1);
  Utilities.getTypedMoves(p1).SkipBet();
  Utilities.getTypedMoves(p2).SkipBet();
  Utilities.getTypedMoves(p3).Reveal(p3.playerID);
  Utilities.DiscardOwnBombCard(p3); // p3 is knocked out

  var { G, ctx } = Utilities.getTypedState(p1);
  expect(G.players[2].isOut).toEqual(true);
  expect(ctx.currentPlayer).toEqual(p1.playerID);

  // game continues with only p1 and p3 allowed to move

  Utilities.PlaceBunnyCard(p1);
  Utilities.PlaceBunnyCard(p2);
  Utilities.PlaceBunnyCard(p1);
});
