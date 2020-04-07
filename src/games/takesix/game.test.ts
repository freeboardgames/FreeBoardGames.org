import { INVALID_MOVE } from 'boardgame.io/core';
import { Client } from 'boardgame.io/client';
import { Local } from 'boardgame.io/multiplayer';
import { TakeSixGame, IG, selectCard, selectDeck } from './game';
import Card from './card';

// https://github.com/nicolodavis/boardgame.io/blob/master/docs/testing.md
it("should move player's card from his hand to selectedCard", () => {
  const card: Card = { number: 1, value: 1, owner: 0 };
  let G: IG = {
    players: [{ cards: [card], penaltyCards: [] }],
    cardOrder: [],
    decks: [],
    end: false,
  };
  G = selectCard(G, { playerID: '0' } as any, 0);
  expect(G.players[0].cards).toEqual([]);
  expect(G.players[0].selectedCard).toEqual(card);
});

it('should return INVALID_MOVE', () => {
  const card: Card = { number: 1, value: 1, owner: 0 };
  let G: IG = {
    players: [{ cards: [card], penaltyCards: [] }],
    cardOrder: [],
    decks: [],
    end: false,
  };
  G = selectCard(G, { playerID: '0' } as any, 1);
  expect(G).toEqual(INVALID_MOVE);
});

it('should return INVALID_MOVE', () => {
  const card: Card = { number: 104, value: 1, owner: 0 };
  let G: IG = {
    players: [{ cards: [], selectedCard: card, penaltyCards: [] }],
    cardOrder: [],
    decks: [
      [
        { number: 4, value: 1, owner: 0 },
        { number: 5, value: 1, owner: 0 },
        { number: 6, value: 1, owner: 0 },
        { number: 7, value: 1, owner: 0 },
        { number: 8, value: 1, owner: 0 },
      ],
      [{ number: 3, value: 1, owner: 0 }],
      [{ number: 2, value: 1, owner: 0 }],
      [{ number: 1, value: 1, owner: 0 }],
    ],
    end: false,
  };
  G = selectDeck(G, { playerID: '0' } as any, 1);
  expect(G).toEqual(INVALID_MOVE);
});

it("should move whole deck to player's hand as penaltyCards", () => {
  const card: Card = { number: 104, value: 1, owner: 0 };
  let G: IG = {
    players: [{ cards: [], selectedCard: card, penaltyCards: [] }],
    cardOrder: [],
    decks: [
      [
        { number: 4, value: 1, owner: 0 },
        { number: 5, value: 1, owner: 0 },
        { number: 6, value: 1, owner: 0 },
        { number: 7, value: 1, owner: 0 },
        { number: 8, value: 1, owner: 0 },
      ],
      [{ number: 3, value: 1, owner: 0 }],
      [{ number: 2, value: 1, owner: 0 }],
      [{ number: 1, value: 1, owner: 0 }],
    ],
    end: false,
  };
  G = selectDeck(G, { playerID: '0' } as any, 0);
  expect(G.decks[0]).toEqual([card]);
  expect(G.players[0].penaltyCards).toHaveLength(5);
});

it("should add penalty card(s) to player's deck", () => {
  const card: Card = { number: 1, value: 1, owner: 0 };
  const replaced: Card = { number: 101, value: 1, owner: 0 };
  let G: IG = {
    players: [{ cards: [], selectedCard: card, penaltyCards: [] }],
    cardOrder: [],
    decks: [
      [replaced],
      [
        { number: 102, value: 1, owner: 0 },
        { number: 103, value: 1, owner: 0 },
        { number: 104, value: 1, owner: 0 },
      ],
    ],
    end: false,
  };
  G = selectDeck(G, { playerID: '0' } as any, 0);
  expect(G.players[0].penaltyCards).toEqual([replaced]);
  expect(G.decks[0]).toEqual([card]);
});

it('should add card to a deck', () => {
  const card: Card = { number: 104, value: 1, owner: 0 };
  let G: IG = {
    players: [{ cards: [], selectedCard: card, penaltyCards: [] }],
    cardOrder: [],
    decks: [
      [
        { number: 5, value: 1, owner: 0 },
        { number: 6, value: 1, owner: 0 },
        { number: 7, value: 1, owner: 0 },
        { number: 8, value: 1, owner: 0 },
      ],
      [{ number: 3, value: 1, owner: 0 }],
      [{ number: 2, value: 1, owner: 0 }],
      [{ number: 1, value: 1, owner: 0 }],
    ],
    end: false,
  };
  G = selectDeck(G, { playerID: '0' } as any, 0);
  expect(G.decks[0]).toHaveLength(5);
});

it('should declare player 1 as the winner', () => {
  // set up a specific board scenario
  const TakesixCustomScenario = {
    ...TakeSixGame,
    seed: 'test',
  };

  const spec = {
    game: TakesixCustomScenario,
    multiplayer: Local(),
  };

  const p0 = Client({ ...spec, playerID: '0' } as any) as any;
  const p1 = Client({ ...spec, playerID: '1' } as any) as any;

  p0.start();
  p1.start();

  p0.moves.selectCard(0);
  p1.moves.selectCard(1);
  p0.moves.selectDeck(2);
  p1.moves.selectDeck(0);
  p1.moves.selectCard(1);
  p0.moves.selectCard(4);
  p1.moves.selectDeck(0);
  p0.moves.selectDeck(1);
  p0.moves.selectCard(1);
  p1.moves.selectCard(0);
  p1.moves.selectDeck(2);
  p0.moves.selectDeck(0);
  p0.moves.selectCard(2);
  p1.moves.selectCard(0);
  p1.moves.selectDeck(2);
  p0.moves.selectDeck(0);
  p0.moves.selectCard(2);
  p1.moves.selectCard(0);
  p0.moves.selectDeck(1);
  p1.moves.selectDeck(1);
  p1.moves.selectCard(1);
  p0.moves.selectCard(4);
  p1.moves.selectDeck(1);
  p0.moves.selectDeck(3);
  p0.moves.selectCard(2);
  p1.moves.selectCard(1);
  p0.moves.selectDeck(0);
  p1.moves.selectDeck(1);
  p1.moves.selectCard(0);
  p0.moves.selectCard(2);
  p0.moves.selectDeck(0);
  p1.moves.selectDeck(0);
  p1.moves.selectCard(0);
  p0.moves.selectCard(1);
  p0.moves.selectDeck(2);
  p1.moves.selectDeck(1);
  p1.moves.selectCard(0);
  p0.moves.selectCard(0);
  p0.moves.selectDeck(2);
  p1.moves.selectDeck(1);

  // player '1' should be declared the winner
  const { ctx } = p0.getState();
  expect(ctx.gameover).toEqual({ winner: '1' });
});
