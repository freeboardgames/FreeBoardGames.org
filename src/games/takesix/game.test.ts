import { INVALID_MOVE } from '@freeboardgame.org/boardgame.io/core';
import { Client } from '@freeboardgame.org/boardgame.io/client';
import { TakeSixGame, IG, selectCard, selectDeck } from './game';
import Player from './player';
import Card from './card';
// https://github.com/nicolodavis/boardgame.io/blob/master/docs/testing.md
it("should move player's card from his hand to selectedCard", () => {
  const card = new Card(1, 1, 0);
  let G: IG = {
    players: [new Player([card], null)],
    cardOrder: [],
    decks: [],
    end: false,
  };
  G = selectCard(G, { playerID: '0' } as any, 0);
  expect(G.players[0].cards).toEqual([]);
  expect(G.players[0].selectedCard).toEqual(card);
});

it('should return INVALID_MOVE', () => {
  const card = new Card(1, 1, 0);
  let G: IG = {
    players: [new Player([card], null)],
    cardOrder: [],
    decks: [],
    end: false,
  };
  G = selectCard(G, { playerID: '0' } as any, 1);
  expect(G).toEqual(INVALID_MOVE);
});

it('should return INVALID_MOVE', () => {
  const card = new Card(104, 1, 0);
  let G: IG = {
    players: [new Player([], card)],
    cardOrder: [],
    decks: [
      [new Card(4, 1, 0), new Card(5, 1, 0), new Card(6, 1, 0), new Card(7, 1, 0), new Card(8, 1, 0)],
      [new Card(3, 1, 0)],
      [new Card(2, 1, 0)],
      [new Card(1, 1, 0)],
    ],
    end: false,
  };
  G = selectDeck(G, { playerID: '0' } as any, 1);
  expect(G).toEqual(INVALID_MOVE);
});

it("should move whole deck to player's hand as penaltyCards", () => {
  const card = new Card(104, 1, 0);
  let G: IG = {
    players: [new Player([], card)],
    cardOrder: [],
    decks: [
      [new Card(4, 1, 0), new Card(5, 1, 0), new Card(6, 1, 0), new Card(7, 1, 0), new Card(8, 1, 0)],
      [new Card(3, 1, 0)],
      [new Card(2, 1, 0)],
      [new Card(1, 1, 0)],
    ],
    end: false,
  };
  G = selectDeck(G, { playerID: '0' } as any, 0);
  expect(G.decks[0]).toEqual([card]);
  expect(G.players[0].penaltyCards).toHaveLength(5);
});

it("should add penalty card(s) to player's deck", () => {
  const card = new Card(1, 1, 0);
  const replaced = new Card(101, 1, 0);
  let G: IG = {
    players: [new Player([], card)],
    cardOrder: [],
    decks: [[replaced], [new Card(102, 1, 0)], [new Card(103, 1, 0)], [new Card(104, 1, 0)]],
    end: false,
  };
  G = selectDeck(G, { playerID: '0' } as any, 0);
  expect(G.players[0].penaltyCards).toEqual([replaced]);
  expect(G.decks[0]).toEqual([card]);
});

it('should add card to a deck', () => {
  const card = new Card(104, 1, 0);
  let G: IG = {
    players: [new Player([], card)],
    cardOrder: [],
    decks: [
      [new Card(5, 1, 0), new Card(6, 1, 0), new Card(7, 1, 0), new Card(8, 1, 0)],
      [new Card(3, 1, 0)],
      [new Card(2, 1, 0)],
      [new Card(1, 1, 0)],
    ],
    end: false,
  };
  G = selectDeck(G, { playerID: '0' } as any, 0);
  expect(G.decks[0]).toHaveLength(5);
});

it('should declare player 1 as the winner', () => {
  // set up a specific board scenario
  const TictactoeCustomScenario = {
    ...TakeSixGame,
    seed: 'deadbeef',
  };

  const spec = {
    game: TictactoeCustomScenario,
    multiplayer: { local: true },
  };

  const p0 = Client({ ...spec, playerID: '0' } as any) as any;
  const p1 = Client({ ...spec, playerID: '1' } as any) as any;

  p0.connect();
  p1.connect();

  p0.moves.selectCard(0);
  p1.moves.selectCard(0);
  p1.moves.selectDeck(0);
  p0.moves.selectDeck(2);
  p1.moves.selectCard(1);
  p0.moves.selectCard(2);
  p0.moves.selectDeck(3);
  p1.moves.selectDeck(3);
  p0.moves.selectCard(7);
  p1.moves.selectCard(7);
  p0.moves.selectDeck(0);
  p1.moves.selectDeck(1);
  p0.moves.selectCard(0);
  p1.moves.selectCard(0);
  p1.moves.selectDeck(0);
  p0.moves.selectDeck(3);
  p0.moves.selectCard(0);
  p1.moves.selectCard(0);
  p0.moves.selectDeck(2);
  p1.moves.selectDeck(1);
  p0.moves.selectCard(0);
  p1.moves.selectCard(0);
  p0.moves.selectDeck(2);
  p1.moves.selectDeck(3);
  p0.moves.selectCard(0);
  p1.moves.selectCard(0);
  p0.moves.selectDeck(2);
  p1.moves.selectDeck(2);
  p0.moves.selectCard(0);
  p1.moves.selectCard(0);
  p0.moves.selectDeck(0);
  p1.moves.selectDeck(0);
  p0.moves.selectCard(0);
  p1.moves.selectCard(0);
  p0.moves.selectDeck(2);
  p1.moves.selectDeck(2);
  p0.moves.selectCard(0);
  p1.moves.selectCard(0);
  p1.moves.selectDeck(3);
  p0.moves.selectDeck(1);

  // player '1' should be declared the winner
  const { G, ctx } = p0.getState();
  expect(ctx.gameover).toEqual({ winner: '1' });
});
