import { Client } from 'boardgame.io/client';
import { ZooParadeGame } from './game';
import { card } from './testing';

it('End to End - 1', () => {
  // set up a specific board scenario
  const ZooParadeCustomScenario = {
    ...ZooParadeGame,
    setup: () => ({
      movelog: [],
      deck: [
        card(33, 3, 1),
        card(19, 1, 4),
        card(17, 1, 3),
        card(13, 1, 1),
        card(24, 2, 1),
        card(10, 1, 0),
        card(47, 4, 3),
        card(7, 0, 3),
        card(44, 4, 1),
        card(11, 1, 0),
        card(21, 2, 0),
        card(30, 3, 0),
        card(4, 0, 1),
        card(3, 0, 1),
        card(32, 3, 0),
        card(28, 2, 3),
        card(45, 4, 2),
        card(2, 0, 0),
        card(27, 2, 3),
        card(23, 2, 1),
        card(26, 2, 2),
        card(43, 4, 1),
        card(39, 3, 4),
        card(16, 1, 2),
        card(0, 0, 0),
        card(12, 1, 0),
        card(14, 1, 1),
        card(25, 2, 2),
        card(22, 2, 0),
        card(36, 3, 2),
        card(40, 4, 0),
        card(15, 1, 2),
        card(38, 3, 3),
        card(9, 0, 4),
        card(35, 3, 2),
        card(42, 4, 0),
        card(18, 1, 3),
        card(1, 0, 0),
        card(8, 0, 3),
        card(5, 0, 2),
        card(20, 2, 0),
        card(46, 4, 2),
        card(31, 3, 0),
        card(37, 3, 3),
        card(34, 3, 1),
        card(48, 4, 3),
        card(29, 2, 4),
        card(41, 4, 0),
        card(49, 4, 4),
        card(6, 0, 2),
      ],
      deckindex: 39,
      trash: [],
      piles: [[], [], [], [], []],
      hands: [
        {
          player: 0,
          cards: [card(6, 0, 2), card(49, 4, 4), card(41, 4, 0), card(29, 2, 4), card(48, 4, 3)],
          hints: [
            {
              color: [0, 0, 0, 0, 0],
              value: [0, 0, 0, 0, 0],
            },
            {
              color: [0, 0, 0, 0, 0],
              value: [0, 0, 0, 0, 0],
            },
            {
              color: [0, 0, 0, 0, 0],
              value: [0, 0, 0, 0, 0],
            },
            {
              color: [0, 0, 0, 0, 0],
              value: [0, 0, 0, 0, 0],
            },
            {
              color: [0, 0, 0, 0, 0],
              value: [0, 0, 0, 0, 0],
            },
          ],
        },
        {
          player: 1,
          cards: [card(34, 3, 1), card(37, 3, 3), card(31, 3, 0), card(46, 4, 2), card(20, 2, 0)],
          hints: [
            {
              color: [0, 0, 0, 0, 0],
              value: [0, 0, 0, 0, 0],
            },
            {
              color: [0, 0, 0, 0, 0],
              value: [0, 0, 0, 0, 0],
            },
            {
              color: [0, 0, 0, 0, 0],
              value: [0, 0, 0, 0, 0],
            },
            {
              color: [0, 0, 0, 0, 0],
              value: [0, 0, 0, 0, 0],
            },
            {
              color: [0, 0, 0, 0, 0],
              value: [0, 0, 0, 0, 0],
            },
          ],
        },
      ],
      countdown: 3,
      treats: 8,
    }),
  };
  const client = Client({
    game: ZooParadeCustomScenario,
  });

  client.moves.movePlay(2);
  client.moves.moveDiscard(1);
  client.moves.movePlay(4);
  client.moves.moveHintColor(0, 4);
  client.moves.movePlay(4);
  client.moves.moveHintColor(0, 3);
  client.moves.moveDiscard(1);
  client.moves.moveHintValue(0, 4);
  client.moves.movePlay(2);
  client.moves.moveDiscard(0);
  client.moves.movePlay(2);

  // get the latest game state
  const { G, ctx } = client.store.getState();
  // the board should look like this now
  delete G.movelog;

  expect(G).toEqual({
    deck: [
      card(33, 3, 1),
      card(19, 1, 4),
      card(17, 1, 3),
      card(13, 1, 1),
      card(24, 2, 1),
      card(10, 1, 0),
      card(47, 4, 3),
      card(7, 0, 3),
      card(44, 4, 1),
      card(11, 1, 0),
      card(21, 2, 0),
      card(30, 3, 0),
      card(4, 0, 1),
      card(3, 0, 1),
      card(32, 3, 0),
      card(28, 2, 3),
      card(45, 4, 2),
      card(2, 0, 0),
      card(27, 2, 3),
      card(23, 2, 1),
      card(26, 2, 2),
      card(43, 4, 1),
      card(39, 3, 4),
      card(16, 1, 2),
      card(0, 0, 0),
      card(12, 1, 0),
      card(14, 1, 1),
      card(25, 2, 2),
      card(22, 2, 0),
      card(36, 3, 2),
      card(40, 4, 0),
      card(15, 1, 2),
      card(38, 3, 3),
      card(9, 0, 4),
      card(35, 3, 2),
      card(42, 4, 0),
      card(18, 1, 3),
      card(1, 0, 0),
      card(8, 0, 3),
      card(5, 0, 2),
      card(20, 2, 0),
      card(46, 4, 2),
      card(31, 3, 0),
      card(37, 3, 3),
      card(34, 3, 1),
      card(48, 4, 3),
      card(29, 2, 4),
      card(41, 4, 0),
      card(49, 4, 4),
      card(6, 0, 2),
    ],
    deckindex: 31,
    trash: [card(37, 3, 3), card(48, 4, 3), card(49, 4, 4), card(5, 0, 2), card(34, 3, 1), card(35, 3, 2)],
    piles: [[card(1, 0, 0)], [], [], [], [card(41, 4, 0)]],
    hands: [
      {
        player: 0,
        cards: [card(6, 0, 2), card(42, 4, 0), card(38, 3, 3), card(29, 2, 4), card(18, 1, 3)],
        hints: [
          {
            value: [0, 0, 0, 0, -1],
            color: [0, 0, 0, -1, -1],
          },
          {
            value: [0, 0, 0, 0, -1],
            color: [0, 0, 0, 0, 0],
          },
          {
            color: [0, 0, 0, 0, 0],
            value: [0, 0, 0, 0, 0],
          },
          {
            value: [-1, -1, -1, -1, 1],
            color: [0, 0, 0, -1, -1],
          },
          {
            value: [0, 0, 0, 0, -1],
            color: [0, 0, 0, -1, 0],
          },
        ],
      },
      {
        player: 1,
        cards: [card(9, 0, 4), card(8, 0, 3), card(31, 3, 0), card(46, 4, 2), card(20, 2, 0)],
        hints: [
          {
            color: [0, 0, 0, 0, 0],
            value: [0, 0, 0, 0, 0],
          },
          {
            color: [0, 0, 0, 0, 0],
            value: [0, 0, 0, 0, 0],
          },
          {
            color: [0, 0, 0, 0, 0],
            value: [0, 0, 0, 0, 0],
          },
          {
            color: [0, 0, 0, 0, 0],
            value: [0, 0, 0, 0, 0],
          },
          {
            color: [0, 0, 0, 0, 0],
            value: [0, 0, 0, 0, 0],
          },
        ],
      },
    ],
    countdown: 0,
    treats: 7,
  });

  expect(ctx.gameover).toEqual({
    draw: true,
  });
});

it('End to End - 2', () => {
  // set up a specific board scenario
  const ZooParadeCustomScenario = {
    ...ZooParadeGame,
    setup: () => ({
      movelog: [],
      deck: [
        card(45, 4, 2),
        card(18, 1, 3),
        card(7, 0, 3),
        card(10, 1, 0),
        card(19, 1, 4),
        card(11, 1, 0),
        card(1, 0, 0),
        card(39, 3, 4),
        card(0, 0, 0),
        card(27, 2, 3),
        card(46, 4, 2),
        card(25, 2, 2),
        card(49, 4, 4),
        card(2, 0, 0),
        card(32, 3, 0),
        card(8, 0, 3),
        card(6, 0, 2),
        card(38, 3, 3),
        card(41, 4, 0),
        card(31, 3, 0),
        card(34, 3, 1),
        card(28, 2, 3),
        card(5, 0, 2),
        card(13, 1, 1),
        card(36, 3, 2),
        card(43, 4, 1),
        card(15, 1, 2),
        card(35, 3, 2),
        card(22, 2, 0),
        card(26, 2, 2),
        card(21, 2, 0),
        card(4, 0, 1),
        card(3, 0, 1),
        card(40, 4, 0),
        card(42, 4, 0),
        card(48, 4, 3),
        card(9, 0, 4),
        card(30, 3, 0),
        card(33, 3, 1),
        card(44, 4, 1),
        card(24, 2, 1),
        card(29, 2, 4),
        card(23, 2, 1),
        card(12, 1, 0),
        card(14, 1, 1),
        card(17, 1, 3),
        card(16, 1, 2),
        card(47, 4, 3),
        card(37, 3, 3),
        card(20, 2, 0),
      ],
      deckindex: 39,
      trash: [],
      piles: [[], [], [], [], []],
      hands: [
        {
          player: 0,
          cards: [card(20, 2, 0), card(37, 3, 3), card(47, 4, 3), card(16, 1, 2), card(17, 1, 3)],
          hints: [
            {
              color: [0, 0, 0, 0, 0],
              value: [0, 0, 0, 0, 0],
            },
            {
              color: [0, 0, 0, 0, 0],
              value: [0, 0, 0, 0, 0],
            },
            {
              color: [0, 0, 0, 0, 0],
              value: [0, 0, 0, 0, 0],
            },
            {
              color: [0, 0, 0, 0, 0],
              value: [0, 0, 0, 0, 0],
            },
            {
              color: [0, 0, 0, 0, 0],
              value: [0, 0, 0, 0, 0],
            },
          ],
        },
        {
          player: 1,
          cards: [card(14, 1, 1), card(12, 1, 0), card(23, 2, 1), card(29, 2, 4), card(24, 2, 1)],
          hints: [
            {
              color: [0, 0, 0, 0, 0],
              value: [0, 0, 0, 0, 0],
            },
            {
              color: [0, 0, 0, 0, 0],
              value: [0, 0, 0, 0, 0],
            },
            {
              color: [0, 0, 0, 0, 0],
              value: [0, 0, 0, 0, 0],
            },
            {
              color: [0, 0, 0, 0, 0],
              value: [0, 0, 0, 0, 0],
            },
            {
              color: [0, 0, 0, 0, 0],
              value: [0, 0, 0, 0, 0],
            },
          ],
        },
      ],
      countdown: 3,
      treats: 8,
    }),
  };
  const client = Client({
    game: ZooParadeCustomScenario,
  });
  client.moves.movePlay(0);
  client.moves.movePlay(1);
  client.moves.moveHintColor(1, 1);
  client.moves.movePlay(0);
  client.moves.moveDiscard(0);

  client.moves.movePlay(0);
  client.moves.movePlay(3);
  client.moves.movePlay(1);
  client.moves.movePlay(3);
  client.moves.movePlay(2);

  client.moves.movePlay(4);
  client.moves.moveDiscard(1);
  client.moves.movePlay(4);
  client.moves.movePlay(1);
  client.moves.moveHintColor(1, 1);

  client.moves.movePlay(1);
  client.moves.movePlay(1);
  client.moves.moveDiscard(4);
  client.moves.moveDiscard(4);
  client.moves.moveDiscard(4);

  client.moves.movePlay(1);
  client.moves.moveDiscard(1);
  client.moves.moveDiscard(4);
  client.moves.moveDiscard(1);
  client.moves.moveDiscard(4);

  client.moves.moveDiscard(1);
  client.moves.moveDiscard(4);
  client.moves.moveDiscard(1);
  client.moves.movePlay(1);
  client.moves.movePlay(3);

  client.moves.movePlay(1);
  client.moves.movePlay(2);
  client.moves.moveDiscard(1);
  client.moves.movePlay(4);
  client.moves.movePlay(4);

  client.moves.movePlay(2);
  client.moves.movePlay(2);
  client.moves.movePlay(3);
  client.moves.movePlay(4);
  client.moves.movePlay(3);

  client.moves.movePlay(0);
  const { G } = client.store.getState();
  // the board should look like this now
  delete G.movelog;

  expect(G).toEqual({
    deck: [
      card(45, 4, 2),
      card(18, 1, 3),
      card(7, 0, 3),
      card(10, 1, 0),
      card(19, 1, 4),
      card(11, 1, 0),
      card(1, 0, 0),
      card(39, 3, 4),
      card(0, 0, 0),
      card(27, 2, 3),
      card(46, 4, 2),
      card(25, 2, 2),
      card(49, 4, 4),
      card(2, 0, 0),
      card(32, 3, 0),
      card(8, 0, 3),
      card(6, 0, 2),
      card(38, 3, 3),
      card(41, 4, 0),
      card(31, 3, 0),
      card(34, 3, 1),
      card(28, 2, 3),
      card(5, 0, 2),
      card(13, 1, 1),
      card(36, 3, 2),
      card(43, 4, 1),
      card(15, 1, 2),
      card(35, 3, 2),
      card(22, 2, 0),
      card(26, 2, 2),
      card(21, 2, 0),
      card(4, 0, 1),
      card(3, 0, 1),
      card(40, 4, 0),
      card(42, 4, 0),
      card(48, 4, 3),
      card(9, 0, 4),
      card(30, 3, 0),
      card(33, 3, 1),
      card(44, 4, 1),
      card(24, 2, 1),
      card(29, 2, 4),
      card(23, 2, 1),
      card(12, 1, 0),
      card(14, 1, 1),
      card(17, 1, 3),
      card(16, 1, 2),
      card(47, 4, 3),
      card(37, 3, 3),
      card(20, 2, 0),
    ],
    deckindex: 0,
    trash: [
      card(44, 4, 1),
      card(40, 4, 0),
      card(21, 2, 0),
      card(24, 2, 1),
      card(22, 2, 0),
      card(36, 3, 2),
      card(15, 1, 2),
      card(13, 1, 1),
      card(34, 3, 1),
      card(31, 3, 0),
      card(41, 4, 0),
      card(38, 3, 3),
      card(6, 0, 2),
      card(25, 2, 2),
    ],
    piles: [
      [card(2, 0, 0), card(4, 0, 1), card(5, 0, 2), card(8, 0, 3), card(9, 0, 4)],
      [card(12, 1, 0), card(14, 1, 1), card(16, 1, 2), card(17, 1, 3), card(19, 1, 4)],
      [card(20, 2, 0), card(23, 2, 1), card(26, 2, 2), card(28, 2, 3), card(29, 2, 4)],
      [card(30, 3, 0), card(33, 3, 1), card(35, 3, 2), card(37, 3, 3), card(39, 3, 4)],
      [card(42, 4, 0), card(43, 4, 1), card(46, 4, 2), card(47, 4, 3), card(49, 4, 4)],
    ],
    hands: [
      {
        player: 0,
        cards: [card(18, 1, 3), card(27, 2, 3), card(11, 1, 0), card(3, 0, 1), card(10, 1, 0)],
        hints: [
          {
            color: [0, 0, 0, 0, 0],
            value: [0, 0, 0, 0, 0],
          },
          {
            color: [0, 0, 0, 0, 0],
            value: [0, 0, 0, 0, 0],
          },
          {
            color: [0, 0, 0, 0, 0],
            value: [0, 0, 0, 0, 0],
          },
          {
            color: [0, 0, 0, 0, 0],
            value: [0, 0, 0, 0, 0],
          },
          {
            color: [0, 0, 0, 0, 0],
            value: [0, 0, 0, 0, 0],
          },
        ],
      },
      {
        player: 1,
        cards: [card(48, 4, 3), card(32, 3, 0), card(1, 0, 0), card(7, 0, 3), card(0, 0, 0)],
        hints: [
          {
            color: [0, -1, 0, 0, 0],
            value: [0, 0, 0, 0, 0],
          },
          {
            color: [0, 0, 0, 0, 0],
            value: [0, 0, 0, 0, 0],
          },
          {
            color: [0, 0, 0, 0, 0],
            value: [0, 0, 0, 0, 0],
          },
          {
            color: [0, 0, 0, 0, 0],
            value: [0, 0, 0, 0, 0],
          },
          {
            color: [0, 0, 0, 0, 0],
            value: [0, 0, 0, 0, 0],
          },
        ],
      },
    ],
    countdown: 2,
    treats: 8,
  });
});
