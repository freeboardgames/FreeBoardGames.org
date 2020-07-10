import { Client } from 'boardgame.io/client';
import { ZooParadeGame } from './game';
import { UNKNOWN_MASK } from './constants';
import { IHintMask } from './interfaces';
import { card } from './testing';

// https://github.com/nicolodavis/boardgame.io/blob/master/docs/testing.md
it('play movePlays 1 - good', () => {
  // set up a specific board scenario
  const ZooParadeCustomScenario = {
    ...ZooParadeGame,
    setup: () => ({
      movelog: [],
      deck: [
        card(4, 0, 1),
        card(26, 2, 2),
        card(39, 3, 4),
        card(44, 4, 1),
        card(18, 1, 3),
        card(13, 1, 1),
        card(1, 0, 0),
        card(11, 1, 0),
        card(19, 1, 4),
        card(32, 3, 0),
        card(31, 3, 0),
        card(10, 1, 0),
        card(23, 2, 1),
        card(12, 1, 0),
        card(5, 0, 2),
        card(49, 4, 4),
        card(29, 2, 4),
        card(45, 4, 2),
        card(22, 2, 0),
        card(25, 2, 2),
        card(7, 0, 3),
        card(35, 3, 2),
        card(9, 0, 4),
        card(40, 4, 0),
        card(6, 0, 2),
        card(17, 1, 3),
        card(48, 4, 3),
        card(15, 1, 2),
        card(43, 4, 1),
        card(3, 0, 1),
        card(24, 2, 1),
        card(28, 2, 3),
        card(36, 3, 2),
        card(21, 2, 0),
        card(27, 2, 3),
        card(38, 3, 3),
        card(41, 4, 0),
        card(47, 4, 3),
        card(34, 3, 1),
        card(33, 3, 1),
        card(14, 1, 1),
        card(0, 0, 0),
        card(8, 0, 3),
        card(16, 1, 2),
        card(46, 4, 2),
        card(30, 3, 0),
        card(37, 3, 3),
        card(2, 0, 0),
        card(42, 4, 0),
        card(20, 2, 0),
      ],
      deckindex: 39,
      trash: [],
      piles: [[], [], [], [], []],
      hands: [
        {
          player: 0,
          cards: [card(20, 2, 0), card(42, 4, 0), card(2, 0, 0), card(37, 3, 3), card(30, 3, 0)],
          hints: [
            {
              color: [...UNKNOWN_MASK],
              value: [...UNKNOWN_MASK],
            },
            {
              color: [...UNKNOWN_MASK],
              value: [...UNKNOWN_MASK],
            },
            {
              color: [...UNKNOWN_MASK],
              value: [...UNKNOWN_MASK],
            },
            {
              color: [...UNKNOWN_MASK],
              value: [...UNKNOWN_MASK],
            },
            {
              color: [...UNKNOWN_MASK],
              value: [...UNKNOWN_MASK],
            },
          ],
        },
        {
          player: 1,
          cards: [card(46, 4, 2), card(16, 1, 2), card(8, 0, 3), card(0, 0, 0), card(14, 1, 1)],
          hints: [
            {
              color: [...UNKNOWN_MASK],
              value: [...UNKNOWN_MASK],
            },
            {
              color: [...UNKNOWN_MASK],
              value: [...UNKNOWN_MASK],
            },
            {
              color: [...UNKNOWN_MASK],
              value: [...UNKNOWN_MASK],
            },
            {
              color: [...UNKNOWN_MASK],
              value: [...UNKNOWN_MASK],
            },
            {
              color: [...UNKNOWN_MASK],
              value: [...UNKNOWN_MASK],
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

  client.moves.movePlay(0); // Player 0

  // get the latest game state
  const { G } = client.store.getState();

  // the board should look like this now
  delete G.movelog;
  expect(G).toEqual({
    deck: [
      card(4, 0, 1),
      card(26, 2, 2),
      card(39, 3, 4),
      card(44, 4, 1),
      card(18, 1, 3),
      card(13, 1, 1),
      card(1, 0, 0),
      card(11, 1, 0),
      card(19, 1, 4),
      card(32, 3, 0),
      card(31, 3, 0),
      card(10, 1, 0),
      card(23, 2, 1),
      card(12, 1, 0),
      card(5, 0, 2),
      card(49, 4, 4),
      card(29, 2, 4),
      card(45, 4, 2),
      card(22, 2, 0),
      card(25, 2, 2),
      card(7, 0, 3),
      card(35, 3, 2),
      card(9, 0, 4),
      card(40, 4, 0),
      card(6, 0, 2),
      card(17, 1, 3),
      card(48, 4, 3),
      card(15, 1, 2),
      card(43, 4, 1),
      card(3, 0, 1),
      card(24, 2, 1),
      card(28, 2, 3),
      card(36, 3, 2),
      card(21, 2, 0),
      card(27, 2, 3),
      card(38, 3, 3),
      card(41, 4, 0),
      card(47, 4, 3),
      card(34, 3, 1),
      card(33, 3, 1),
      card(14, 1, 1),
      card(0, 0, 0),
      card(8, 0, 3),
      card(16, 1, 2),
      card(46, 4, 2),
      card(30, 3, 0),
      card(37, 3, 3),
      card(2, 0, 0),
      card(42, 4, 0),
      card(20, 2, 0),
    ],
    deckindex: 38,
    trash: [],
    piles: [[], [], [card(20, 2, 0)], [], []],
    hands: [
      {
        player: 0,
        cards: [
          {
            id: 33,
            value: 1,
            color: 3,
          },
          card(42, 4, 0),
          card(2, 0, 0),
          card(37, 3, 3),
          card(30, 3, 0),
        ],
        hints: [
          {
            color: [...UNKNOWN_MASK],
            value: [...UNKNOWN_MASK],
          },
          {
            color: [...UNKNOWN_MASK],
            value: [...UNKNOWN_MASK],
          },
          {
            color: [...UNKNOWN_MASK],
            value: [...UNKNOWN_MASK],
          },
          {
            color: [...UNKNOWN_MASK],
            value: [...UNKNOWN_MASK],
          },
          {
            color: [...UNKNOWN_MASK],
            value: [...UNKNOWN_MASK],
          },
        ],
      },
      {
        player: 1,
        cards: [card(46, 4, 2), card(16, 1, 2), card(8, 0, 3), card(0, 0, 0), card(14, 1, 1)],
        hints: [
          {
            color: [...UNKNOWN_MASK],
            value: [...UNKNOWN_MASK],
          },
          {
            color: [...UNKNOWN_MASK],
            value: [...UNKNOWN_MASK],
          },
          {
            color: [...UNKNOWN_MASK],
            value: [...UNKNOWN_MASK],
          },
          {
            color: [...UNKNOWN_MASK],
            value: [...UNKNOWN_MASK],
          },
          {
            color: [...UNKNOWN_MASK],
            value: [...UNKNOWN_MASK],
          },
        ],
      },
    ],
    countdown: 3,
    treats: 8,
  });
});

it('play movePlays 2 - bad', () => {
  // set up a specific board scenario
  const ZooParadeCustomScenario = {
    ...ZooParadeGame,
    setup: () => ({
      movelog: [],
      deck: [
        card(8, 0, 3),
        card(33, 3, 1),
        card(12, 1, 0),
        card(31, 3, 0),
        card(20, 2, 0),
        card(23, 2, 1),
        card(10, 1, 0),
        card(24, 2, 1),
        card(42, 4, 0),
        card(25, 2, 2),
        card(32, 3, 0),
        card(15, 1, 2),
        card(4, 0, 1),
        card(13, 1, 1),
        card(11, 1, 0),
        card(17, 1, 3),
        card(34, 3, 1),
        card(6, 0, 2),
        card(9, 0, 4),
        card(40, 4, 0),
        card(19, 1, 4),
        card(35, 3, 2),
        card(22, 2, 0),
        card(39, 3, 4),
        card(48, 4, 3),
        card(1, 0, 0),
        card(21, 2, 0),
        card(30, 3, 0),
        card(45, 4, 2),
        card(27, 2, 3),
        card(36, 3, 2),
        card(38, 3, 3),
        card(26, 2, 2),
        card(0, 0, 0),
        card(41, 4, 0),
        card(29, 2, 4),
        card(46, 4, 2),
        card(49, 4, 4),
        card(18, 1, 3),
        card(5, 0, 2),
        card(7, 0, 3),
        card(2, 0, 0),
        card(28, 2, 3),
        card(44, 4, 1),
        card(3, 0, 1),
        card(43, 4, 1),
        card(14, 1, 1),
        card(47, 4, 3),
        card(37, 3, 3),
        card(16, 1, 2),
      ],
      deckindex: 39,
      trash: [],
      piles: [[], [], [], [], []],
      hands: [
        {
          player: 0,
          cards: [card(16, 1, 2), card(37, 3, 3), card(47, 4, 3), card(14, 1, 1), card(43, 4, 1)],
          hints: [
            {
              color: [...UNKNOWN_MASK],
              value: [...UNKNOWN_MASK],
            },
            {
              color: [...UNKNOWN_MASK],
              value: [...UNKNOWN_MASK],
            },
            {
              color: [...UNKNOWN_MASK],
              value: [...UNKNOWN_MASK],
            },
            {
              color: [...UNKNOWN_MASK],
              value: [...UNKNOWN_MASK],
            },
            {
              color: [...UNKNOWN_MASK],
              value: [...UNKNOWN_MASK],
            },
          ],
        },
        {
          player: 1,
          cards: [card(3, 0, 1), card(44, 4, 1), card(28, 2, 3), card(2, 0, 0), card(7, 0, 3)],
          hints: [
            {
              color: [...UNKNOWN_MASK],
              value: [...UNKNOWN_MASK],
            },
            {
              color: [...UNKNOWN_MASK],
              value: [...UNKNOWN_MASK],
            },
            {
              color: [...UNKNOWN_MASK],
              value: [...UNKNOWN_MASK],
            },
            {
              color: [...UNKNOWN_MASK],
              value: [...UNKNOWN_MASK],
            },
            {
              color: [...UNKNOWN_MASK],
              value: [...UNKNOWN_MASK],
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

  client.moves.movePlay(3); // Player 1

  // get the latest game state
  const { G } = client.store.getState();

  // the board should look like this now
  delete G.movelog;
  expect(G).toEqual({
    deck: [
      card(8, 0, 3),
      card(33, 3, 1),
      card(12, 1, 0),
      card(31, 3, 0),
      card(20, 2, 0),
      card(23, 2, 1),
      card(10, 1, 0),
      card(24, 2, 1),
      card(42, 4, 0),
      card(25, 2, 2),
      card(32, 3, 0),
      card(15, 1, 2),
      card(4, 0, 1),
      card(13, 1, 1),
      card(11, 1, 0),
      card(17, 1, 3),
      card(34, 3, 1),
      card(6, 0, 2),
      card(9, 0, 4),
      card(40, 4, 0),
      card(19, 1, 4),
      card(35, 3, 2),
      card(22, 2, 0),
      card(39, 3, 4),
      card(48, 4, 3),
      card(1, 0, 0),
      card(21, 2, 0),
      card(30, 3, 0),
      card(45, 4, 2),
      card(27, 2, 3),
      card(36, 3, 2),
      card(38, 3, 3),
      card(26, 2, 2),
      card(0, 0, 0),
      card(41, 4, 0),
      card(29, 2, 4),
      card(46, 4, 2),
      card(49, 4, 4),
      card(18, 1, 3),
      card(5, 0, 2),
      card(7, 0, 3),
      card(2, 0, 0),
      card(28, 2, 3),
      card(44, 4, 1),
      card(3, 0, 1),
      card(43, 4, 1),
      card(14, 1, 1),
      card(47, 4, 3),
      card(37, 3, 3),
      card(16, 1, 2),
    ],
    deckindex: 38,
    trash: [card(14, 1, 1)],
    piles: [[], [], [], [], []],
    hands: [
      {
        player: 0,
        cards: [
          card(16, 1, 2),
          card(37, 3, 3),
          card(47, 4, 3),
          {
            id: 5,
            value: 2,
            color: 0,
          },
          card(43, 4, 1),
        ],
        hints: [
          {
            color: [...UNKNOWN_MASK],
            value: [...UNKNOWN_MASK],
          },
          {
            color: [...UNKNOWN_MASK],
            value: [...UNKNOWN_MASK],
          },
          {
            color: [...UNKNOWN_MASK],
            value: [...UNKNOWN_MASK],
          },
          {
            color: [...UNKNOWN_MASK],
            value: [...UNKNOWN_MASK],
          },
          {
            color: [...UNKNOWN_MASK],
            value: [...UNKNOWN_MASK],
          },
        ],
      },
      {
        player: 1,
        cards: [card(3, 0, 1), card(44, 4, 1), card(28, 2, 3), card(2, 0, 0), card(7, 0, 3)],
        hints: [
          {
            color: [...UNKNOWN_MASK],
            value: [...UNKNOWN_MASK],
          },
          {
            color: [...UNKNOWN_MASK],
            value: [...UNKNOWN_MASK],
          },
          {
            color: [...UNKNOWN_MASK],
            value: [...UNKNOWN_MASK],
          },
          {
            color: [...UNKNOWN_MASK],
            value: [...UNKNOWN_MASK],
          },
          {
            color: [...UNKNOWN_MASK],
            value: [...UNKNOWN_MASK],
          },
        ],
      },
    ],
    countdown: 2,
    treats: 8,
  });
});

it('play movePlays 3 - play already played value/color', () => {
  // set up a specific board scenario
  const ZooParadeCustomScenario = {
    ...ZooParadeGame,
    setup: () => ({
      movelog: [],
      deck: [
        card(22, 2, 0),
        card(43, 4, 1),
        card(27, 2, 3),
        card(8, 0, 3),
        card(0, 0, 0),
        card(40, 4, 0),
        card(25, 2, 2),
        card(11, 1, 0),
        card(44, 4, 1),
        card(17, 1, 3),
        card(37, 3, 3),
        card(42, 4, 0),
        card(38, 3, 3),
        card(30, 3, 0),
        card(12, 1, 0),
        card(2, 0, 0),
        card(20, 2, 0),
        card(31, 3, 0),
        card(13, 1, 1),
        card(33, 3, 1),
        card(10, 1, 0),
        card(15, 1, 2),
        card(4, 0, 1),
        card(39, 3, 4),
        card(36, 3, 2),
        card(34, 3, 1),
        card(47, 4, 3),
        card(48, 4, 3),
        card(14, 1, 1),
        card(7, 0, 3),
        card(45, 4, 2),
        card(1, 0, 0),
        card(3, 0, 1),
        card(5, 0, 2),
        card(29, 2, 4),
        card(26, 2, 2),
        card(19, 1, 4),
        card(21, 2, 0),
        card(6, 0, 2),
        card(32, 3, 0),
        card(49, 4, 4),
        card(18, 1, 3),
        card(28, 2, 3),
        card(41, 4, 0),
        card(9, 0, 4),
        card(16, 1, 2),
        card(23, 2, 1),
        card(35, 3, 2),
        card(46, 4, 2),
        card(24, 2, 1),
      ],
      deckindex: 31,
      trash: [
        card(35, 3, 2),
        card(18, 1, 3),
        {
          id: 6,
          value: 2,
          color: 0,
        },
        {
          id: 29,
          value: 4,
          color: 2,
        },
      ],
      piles: [
        [],
        [],
        [
          {
            id: 21,
            value: 0,
            color: 2,
          },
          card(24, 2, 1),
        ],
        [
          {
            id: 32,
            value: 0,
            color: 3,
          },
        ],
        [card(41, 4, 0)],
      ],
      hands: [
        {
          player: 0,
          cards: [
            {
              id: 5,
              value: 2,
              color: 0,
            },
            card(46, 4, 2),
            {
              id: 26,
              value: 2,
              color: 2,
            },
            card(23, 2, 1),
            card(16, 1, 2),
          ],
          hints: [
            {
              color: [...UNKNOWN_MASK],
              value: [...UNKNOWN_MASK],
            },
            {
              color: [...UNKNOWN_MASK],
              value: [...UNKNOWN_MASK],
            },
            {
              color: [...UNKNOWN_MASK],
              value: [...UNKNOWN_MASK],
            },
            {
              color: [...UNKNOWN_MASK],
              value: [...UNKNOWN_MASK],
            },
            {
              color: [...UNKNOWN_MASK],
              value: [...UNKNOWN_MASK],
            },
          ],
        },
        {
          player: 1,
          cards: [
            card(9, 0, 4),
            {
              id: 3,
              value: 1,
              color: 0,
            },
            card(28, 2, 3),
            {
              id: 19,
              value: 4,
              color: 1,
            },
            card(49, 4, 4),
          ],
          hints: [
            {
              color: [...UNKNOWN_MASK],
              value: [...UNKNOWN_MASK],
            },
            {
              color: [...UNKNOWN_MASK],
              value: [...UNKNOWN_MASK],
            },
            {
              color: [...UNKNOWN_MASK],
              value: [...UNKNOWN_MASK],
            },
            {
              color: [...UNKNOWN_MASK],
              value: [...UNKNOWN_MASK],
            },
            {
              color: [...UNKNOWN_MASK],
              value: [...UNKNOWN_MASK],
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

  client.moves.movePlay(3); // Player 0

  // get the latest game state
  const { G } = client.store.getState();

  // the board should look like this now
  delete G.movelog;
  expect(G).toEqual({
    deck: [
      card(22, 2, 0),
      card(43, 4, 1),
      card(27, 2, 3),
      card(8, 0, 3),
      card(0, 0, 0),
      card(40, 4, 0),
      card(25, 2, 2),
      card(11, 1, 0),
      card(44, 4, 1),
      card(17, 1, 3),
      card(37, 3, 3),
      card(42, 4, 0),
      card(38, 3, 3),
      card(30, 3, 0),
      card(12, 1, 0),
      card(2, 0, 0),
      card(20, 2, 0),
      card(31, 3, 0),
      card(13, 1, 1),
      card(33, 3, 1),
      card(10, 1, 0),
      card(15, 1, 2),
      card(4, 0, 1),
      card(39, 3, 4),
      card(36, 3, 2),
      card(34, 3, 1),
      card(47, 4, 3),
      card(48, 4, 3),
      card(14, 1, 1),
      card(7, 0, 3),
      card(45, 4, 2),
      card(1, 0, 0),
      card(3, 0, 1),
      card(5, 0, 2),
      card(29, 2, 4),
      card(26, 2, 2),
      card(19, 1, 4),
      card(21, 2, 0),
      card(6, 0, 2),
      card(32, 3, 0),
      card(49, 4, 4),
      card(18, 1, 3),
      card(28, 2, 3),
      card(41, 4, 0),
      card(9, 0, 4),
      card(16, 1, 2),
      card(23, 2, 1),
      card(35, 3, 2),
      card(46, 4, 2),
      card(24, 2, 1),
    ],
    deckindex: 30,
    trash: [
      card(35, 3, 2),
      card(18, 1, 3),
      {
        id: 6,
        value: 2,
        color: 0,
      },
      {
        id: 29,
        value: 4,
        color: 2,
      },
      card(23, 2, 1),
    ],
    piles: [
      [],
      [],
      [
        {
          id: 21,
          value: 0,
          color: 2,
        },
        card(24, 2, 1),
      ],
      [
        {
          id: 32,
          value: 0,
          color: 3,
        },
      ],
      [card(41, 4, 0)],
    ],
    hands: [
      {
        player: 0,
        cards: [
          {
            id: 5,
            value: 2,
            color: 0,
          },
          card(46, 4, 2),
          {
            id: 26,
            value: 2,
            color: 2,
          },
          {
            id: 1,
            value: 0,
            color: 0,
          },
          card(16, 1, 2),
        ],
        hints: [
          {
            color: [...UNKNOWN_MASK],
            value: [...UNKNOWN_MASK],
          },
          {
            color: [...UNKNOWN_MASK],
            value: [...UNKNOWN_MASK],
          },
          {
            color: [...UNKNOWN_MASK],
            value: [...UNKNOWN_MASK],
          },
          {
            color: [...UNKNOWN_MASK],
            value: [...UNKNOWN_MASK],
          },
          {
            color: [...UNKNOWN_MASK],
            value: [...UNKNOWN_MASK],
          },
        ],
      },
      {
        player: 1,
        cards: [
          card(9, 0, 4),
          {
            id: 3,
            value: 1,
            color: 0,
          },
          card(28, 2, 3),
          {
            id: 19,
            value: 4,
            color: 1,
          },
          card(49, 4, 4),
        ],
        hints: [
          {
            color: [...UNKNOWN_MASK],
            value: [...UNKNOWN_MASK],
          },
          {
            color: [...UNKNOWN_MASK],
            value: [...UNKNOWN_MASK],
          },
          {
            color: [...UNKNOWN_MASK],
            value: [...UNKNOWN_MASK],
          },
          {
            color: [...UNKNOWN_MASK],
            value: [...UNKNOWN_MASK],
          },
          {
            color: [...UNKNOWN_MASK],
            value: [...UNKNOWN_MASK],
          },
        ],
      },
    ],
    countdown: 2,
    treats: 8,
  });
});

it('play movePlays 4 - finish a pile (gain treat)', () => {
  // set up a specific board scenario
  const ZooParadeCustomScenario = {
    ...ZooParadeGame,

    setup: () => ({
      movelog: [],
      deck: [
        card(28, 2, 3),
        card(23, 2, 1),
        card(27, 2, 3),
        card(44, 4, 1),
        card(36, 3, 2),
        card(11, 1, 0),
        card(49, 4, 4),
        card(8, 0, 3),
        card(31, 3, 0),
        card(42, 4, 0),
        card(26, 2, 2),
        card(7, 0, 3),
        card(3, 0, 1),
        card(25, 2, 2),
        card(15, 1, 2),
        card(13, 1, 1),
        card(40, 4, 0),
        card(4, 0, 1),
        card(12, 1, 0),
        card(47, 4, 3),
        card(41, 4, 0),
        card(19, 1, 4),
        card(16, 1, 2),
        card(18, 1, 3),
        card(20, 2, 0),
        card(22, 2, 0),
        card(37, 3, 3),
        card(2, 0, 0),
        card(10, 1, 0),
        card(30, 3, 0),
        card(43, 4, 1),
        card(39, 3, 4),
        card(45, 4, 2),
        card(9, 0, 4),
        card(38, 3, 3),
        card(48, 4, 3),
        card(32, 3, 0),
        card(29, 2, 4),
        card(35, 3, 2),
        card(46, 4, 2),
        card(1, 0, 0),
        card(0, 0, 0),
        card(14, 1, 1),
        card(5, 0, 2),
        card(34, 3, 1),
        card(17, 1, 3),
        card(24, 2, 1),
        card(6, 0, 2),
        card(21, 2, 0),
        card(33, 3, 1),
      ],
      deckindex: 29,
      trash: [card(0, 0, 0), card(6, 0, 2), card(17, 1, 3)],
      piles: [
        [card(1, 0, 0)],
        [],
        [card(21, 2, 0), card(24, 2, 1)],
        [
          {
            id: 32,
            value: 0,
            color: 3,
          },
          card(33, 3, 1),
          {
            id: 35,
            value: 2,
            color: 3,
          },
          {
            id: 38,
            value: 3,
            color: 3,
          },
        ],
        [],
      ],
      hands: [
        {
          player: 0,
          cards: [
            {
              id: 9,
              value: 4,
              color: 0,
            },
            {
              id: 46,
              value: 2,
              color: 4,
            },
            {
              id: 48,
              value: 3,
              color: 4,
            },
            {
              id: 29,
              value: 4,
              color: 2,
            },
            {
              id: 39,
              value: 4,
              color: 3,
            },
          ],
          hints: [
            {
              color: [IHintMask.UNKNOWN, IHintMask.NO, IHintMask.UNKNOWN, IHintMask.NO, IHintMask.UNKNOWN],
              value: [...UNKNOWN_MASK],
            },
            {
              color: [IHintMask.UNKNOWN, IHintMask.NO, IHintMask.UNKNOWN, IHintMask.NO, IHintMask.UNKNOWN],
              value: [...UNKNOWN_MASK],
            },
            {
              color: [IHintMask.UNKNOWN, IHintMask.NO, IHintMask.UNKNOWN, IHintMask.NO, IHintMask.UNKNOWN],
              value: [...UNKNOWN_MASK],
            },
            {
              color: [IHintMask.UNKNOWN, IHintMask.NO, IHintMask.UNKNOWN, IHintMask.NO, IHintMask.UNKNOWN],
              value: [...UNKNOWN_MASK],
            },
            {
              color: [IHintMask.UNKNOWN, IHintMask.NO, IHintMask.UNKNOWN, IHintMask.YES, IHintMask.UNKNOWN],
              value: [...UNKNOWN_MASK],
            },
          ],
        },
        {
          player: 1,
          cards: [
            card(34, 3, 1),
            card(5, 0, 2),
            card(14, 1, 1),
            {
              id: 43,
              value: 1,
              color: 4,
            },
            {
              id: 45,
              value: 2,
              color: 4,
            },
          ],
          hints: [
            {
              color: [IHintMask.UNKNOWN, IHintMask.NO, IHintMask.NO, IHintMask.UNKNOWN, IHintMask.UNKNOWN],
              value: [...UNKNOWN_MASK],
            },
            {
              color: [IHintMask.UNKNOWN, IHintMask.NO, IHintMask.NO, IHintMask.UNKNOWN, IHintMask.UNKNOWN],
              value: [...UNKNOWN_MASK],
            },
            {
              color: [IHintMask.UNKNOWN, IHintMask.YES, IHintMask.NO, IHintMask.UNKNOWN, IHintMask.UNKNOWN],
              value: [...UNKNOWN_MASK],
            },
            {
              color: [IHintMask.UNKNOWN, IHintMask.NO, IHintMask.NO, IHintMask.UNKNOWN, IHintMask.UNKNOWN],
              value: [...UNKNOWN_MASK],
            },
            {
              color: [IHintMask.UNKNOWN, IHintMask.NO, IHintMask.NO, IHintMask.UNKNOWN, IHintMask.UNKNOWN],
              value: [...UNKNOWN_MASK],
            },
          ],
        },
      ],
      countdown: 2,
      treats: 4,
    }),
  };

  const client = Client({
    game: ZooParadeCustomScenario,
  });

  client.moves.movePlay(4); // Player 0

  // get the latest game state
  const { G } = client.store.getState();

  // the board should look like this now
  delete G.movelog;
  expect(G).toEqual({
    deck: [
      card(28, 2, 3),
      card(23, 2, 1),
      card(27, 2, 3),
      card(44, 4, 1),
      card(36, 3, 2),
      card(11, 1, 0),
      card(49, 4, 4),
      card(8, 0, 3),
      card(31, 3, 0),
      card(42, 4, 0),
      card(26, 2, 2),
      card(7, 0, 3),
      card(3, 0, 1),
      card(25, 2, 2),
      card(15, 1, 2),
      card(13, 1, 1),
      card(40, 4, 0),
      card(4, 0, 1),
      card(12, 1, 0),
      card(47, 4, 3),
      card(41, 4, 0),
      card(19, 1, 4),
      card(16, 1, 2),
      card(18, 1, 3),
      card(20, 2, 0),
      card(22, 2, 0),
      card(37, 3, 3),
      card(2, 0, 0),
      card(10, 1, 0),
      card(30, 3, 0),
      card(43, 4, 1),
      card(39, 3, 4),
      card(45, 4, 2),
      card(9, 0, 4),
      card(38, 3, 3),
      card(48, 4, 3),
      card(32, 3, 0),
      card(29, 2, 4),
      card(35, 3, 2),
      card(46, 4, 2),
      card(1, 0, 0),
      card(0, 0, 0),
      card(14, 1, 1),
      card(5, 0, 2),
      card(34, 3, 1),
      card(17, 1, 3),
      card(24, 2, 1),
      card(6, 0, 2),
      card(21, 2, 0),
      card(33, 3, 1),
    ],
    deckindex: 28,
    trash: [card(0, 0, 0), card(6, 0, 2), card(17, 1, 3)],
    piles: [
      [card(1, 0, 0)],
      [],
      [card(21, 2, 0), card(24, 2, 1)],
      [
        {
          id: 32,
          value: 0,
          color: 3,
        },
        card(33, 3, 1),
        {
          id: 35,
          value: 2,
          color: 3,
        },
        {
          id: 38,
          value: 3,
          color: 3,
        },
        {
          id: 39,
          value: 4,
          color: 3,
        },
      ],
      [],
    ],
    hands: [
      {
        player: 0,
        cards: [
          {
            id: 9,
            value: 4,
            color: 0,
          },
          {
            id: 46,
            value: 2,
            color: 4,
          },
          {
            id: 48,
            value: 3,
            color: 4,
          },
          {
            id: 29,
            value: 4,
            color: 2,
          },
          {
            id: 30,
            value: 0,
            color: 3,
          },
        ],
        hints: [
          {
            color: [IHintMask.UNKNOWN, IHintMask.NO, IHintMask.UNKNOWN, IHintMask.NO, IHintMask.UNKNOWN],
            value: [...UNKNOWN_MASK],
          },
          {
            color: [IHintMask.UNKNOWN, IHintMask.NO, IHintMask.UNKNOWN, IHintMask.NO, IHintMask.UNKNOWN],
            value: [...UNKNOWN_MASK],
          },
          {
            color: [IHintMask.UNKNOWN, IHintMask.NO, IHintMask.UNKNOWN, IHintMask.NO, IHintMask.UNKNOWN],
            value: [...UNKNOWN_MASK],
          },
          {
            color: [IHintMask.UNKNOWN, IHintMask.NO, IHintMask.UNKNOWN, IHintMask.NO, IHintMask.UNKNOWN],
            value: [...UNKNOWN_MASK],
          },
          {
            color: [...UNKNOWN_MASK],
            value: [...UNKNOWN_MASK],
          },
        ],
      },
      {
        player: 1,
        cards: [
          card(34, 3, 1),
          card(5, 0, 2),
          card(14, 1, 1),
          {
            id: 43,
            value: 1,
            color: 4,
          },
          {
            id: 45,
            value: 2,
            color: 4,
          },
        ],
        hints: [
          {
            color: [IHintMask.UNKNOWN, IHintMask.NO, IHintMask.NO, IHintMask.UNKNOWN, IHintMask.UNKNOWN],
            value: [...UNKNOWN_MASK],
          },
          {
            color: [IHintMask.UNKNOWN, IHintMask.NO, IHintMask.NO, IHintMask.UNKNOWN, IHintMask.UNKNOWN],
            value: [...UNKNOWN_MASK],
          },
          {
            color: [IHintMask.UNKNOWN, IHintMask.YES, IHintMask.NO, IHintMask.UNKNOWN, IHintMask.UNKNOWN],
            value: [...UNKNOWN_MASK],
          },
          {
            color: [IHintMask.UNKNOWN, IHintMask.NO, IHintMask.NO, IHintMask.UNKNOWN, IHintMask.UNKNOWN],
            value: [...UNKNOWN_MASK],
          },
          {
            color: [IHintMask.UNKNOWN, IHintMask.NO, IHintMask.NO, IHintMask.UNKNOWN, IHintMask.UNKNOWN],
            value: [...UNKNOWN_MASK],
          },
        ],
      },
    ],
    countdown: 2,
    treats: 5,
  });
});

it('play movePlays 5 - finish a pile with full treats', () => {
  // set up a specific board scenario
  const ZooParadeCustomScenario = {
    ...ZooParadeGame,

    setup: () => ({
      deck: [
        card(6, 0, 2),
        card(5, 0, 2),
        card(11, 1, 0),
        card(14, 1, 1),
        card(10, 1, 0),
        card(13, 1, 1),
        card(18, 1, 3),
        card(35, 3, 2),
        card(2, 0, 0),
        card(17, 1, 3),
        card(27, 2, 3),
        card(33, 3, 1),
        card(38, 3, 3),
        card(7, 0, 3),
        card(25, 2, 2),
        card(37, 3, 3),
        card(3, 0, 1),
        card(39, 3, 4),
        card(45, 4, 2),
        card(24, 2, 1),
        card(29, 2, 4),
        card(30, 3, 0),
        card(23, 2, 1),
        card(15, 1, 2),
        card(44, 4, 1),
        card(31, 3, 0),
        card(32, 3, 0),
        card(28, 2, 3),
        card(41, 4, 0),
        card(49, 4, 4),
        card(9, 0, 4),
        card(47, 4, 3),
        card(40, 4, 0),
        card(34, 3, 1),
        card(46, 4, 2),
        card(48, 4, 3),
        card(43, 4, 1),
        card(16, 1, 2),
        card(1, 0, 0),
        card(26, 2, 2),
        card(8, 0, 3),
        card(42, 4, 0),
        card(36, 3, 2),
        card(12, 1, 0),
        card(21, 2, 0),
        card(22, 2, 0),
        card(0, 0, 0),
        card(20, 2, 0),
        card(19, 1, 4),
        card(4, 0, 1),
      ],
      deckindex: 27,
      trash: [
        card(20, 2, 0),
        card(21, 2, 0),
        {
          id: 34,
          value: 1,
          color: 3,
        },
        {
          id: 1,
          value: 0,
          color: 0,
        },
      ],
      piles: [
        [card(0, 0, 0), card(4, 0, 1)],
        [card(12, 1, 0)],
        [card(22, 2, 0)],
        [],
        [
          card(42, 4, 0),
          {
            id: 43,
            value: 1,
            color: 4,
          },
          {
            id: 46,
            value: 2,
            color: 4,
          },
          {
            id: 48,
            value: 3,
            color: 4,
          },
        ],
      ],
      hands: [
        {
          player: 0,
          cards: [
            {
              id: 49,
              value: 4,
              color: 4,
            },
            card(19, 1, 4),
            {
              id: 47,
              value: 3,
              color: 4,
            },
            {
              id: 16,
              value: 2,
              color: 1,
            },
            {
              id: 26,
              value: 2,
              color: 2,
            },
          ],
          hints: [
            {
              color: [...UNKNOWN_MASK],
              value: [...UNKNOWN_MASK],
            },
            {
              color: [...UNKNOWN_MASK],
              value: [...UNKNOWN_MASK],
            },
            {
              color: [...UNKNOWN_MASK],
              value: [...UNKNOWN_MASK],
            },
            {
              color: [...UNKNOWN_MASK],
              value: [...UNKNOWN_MASK],
            },
            {
              color: [...UNKNOWN_MASK],
              value: [...UNKNOWN_MASK],
            },
          ],
        },
        {
          player: 1,
          cards: [
            {
              id: 40,
              value: 0,
              color: 4,
            },
            {
              id: 9,
              value: 4,
              color: 0,
            },
            card(36, 3, 2),
            {
              id: 41,
              value: 0,
              color: 4,
            },
            card(8, 0, 3),
          ],
          hints: [
            {
              color: [...UNKNOWN_MASK],
              value: [...UNKNOWN_MASK],
            },
            {
              color: [...UNKNOWN_MASK],
              value: [...UNKNOWN_MASK],
            },
            {
              color: [...UNKNOWN_MASK],
              value: [...UNKNOWN_MASK],
            },
            {
              color: [...UNKNOWN_MASK],
              value: [...UNKNOWN_MASK],
            },
            {
              color: [...UNKNOWN_MASK],
              value: [...UNKNOWN_MASK],
            },
          ],
        },
      ],
      countdown: 3,
      treats: 8,
      movelog: [],
    }),
  };

  const client = Client({
    game: ZooParadeCustomScenario,
  });

  client.moves.movePlay(0); // Player 1

  // get the latest game state
  const { G } = client.store.getState();

  // the board should look like this now
  delete G.movelog;
  expect(G).toEqual({
    deck: [
      card(6, 0, 2),
      card(5, 0, 2),
      card(11, 1, 0),
      card(14, 1, 1),
      card(10, 1, 0),
      card(13, 1, 1),
      card(18, 1, 3),
      card(35, 3, 2),
      card(2, 0, 0),
      card(17, 1, 3),
      card(27, 2, 3),
      card(33, 3, 1),
      card(38, 3, 3),
      card(7, 0, 3),
      card(25, 2, 2),
      card(37, 3, 3),
      card(3, 0, 1),
      card(39, 3, 4),
      card(45, 4, 2),
      card(24, 2, 1),
      card(29, 2, 4),
      card(30, 3, 0),
      card(23, 2, 1),
      card(15, 1, 2),
      card(44, 4, 1),
      card(31, 3, 0),
      card(32, 3, 0),
      card(28, 2, 3),
      card(41, 4, 0),
      card(49, 4, 4),
      card(9, 0, 4),
      card(47, 4, 3),
      card(40, 4, 0),
      card(34, 3, 1),
      card(46, 4, 2),
      card(48, 4, 3),
      card(43, 4, 1),
      card(16, 1, 2),
      card(1, 0, 0),
      card(26, 2, 2),
      card(8, 0, 3),
      card(42, 4, 0),
      card(36, 3, 2),
      card(12, 1, 0),
      card(21, 2, 0),
      card(22, 2, 0),
      card(0, 0, 0),
      card(20, 2, 0),
      card(19, 1, 4),
      card(4, 0, 1),
    ],
    deckindex: 26,
    trash: [
      card(20, 2, 0),
      card(21, 2, 0),
      {
        id: 34,
        value: 1,
        color: 3,
      },
      {
        id: 1,
        value: 0,
        color: 0,
      },
    ],
    piles: [
      [card(0, 0, 0), card(4, 0, 1)],
      [card(12, 1, 0)],
      [card(22, 2, 0)],
      [],
      [
        card(42, 4, 0),
        {
          id: 43,
          value: 1,
          color: 4,
        },
        {
          id: 46,
          value: 2,
          color: 4,
        },
        {
          id: 48,
          value: 3,
          color: 4,
        },
        {
          id: 49,
          value: 4,
          color: 4,
        },
      ],
    ],
    hands: [
      {
        player: 0,
        cards: [
          {
            id: 28,
            value: 3,
            color: 2,
          },
          card(19, 1, 4),
          {
            id: 47,
            value: 3,
            color: 4,
          },
          {
            id: 16,
            value: 2,
            color: 1,
          },
          {
            id: 26,
            value: 2,
            color: 2,
          },
        ],
        hints: [
          {
            color: [...UNKNOWN_MASK],
            value: [...UNKNOWN_MASK],
          },
          {
            color: [...UNKNOWN_MASK],
            value: [...UNKNOWN_MASK],
          },
          {
            color: [...UNKNOWN_MASK],
            value: [...UNKNOWN_MASK],
          },
          {
            color: [...UNKNOWN_MASK],
            value: [...UNKNOWN_MASK],
          },
          {
            color: [...UNKNOWN_MASK],
            value: [...UNKNOWN_MASK],
          },
        ],
      },
      {
        player: 1,
        cards: [
          {
            id: 40,
            value: 0,
            color: 4,
          },
          {
            id: 9,
            value: 4,
            color: 0,
          },
          card(36, 3, 2),
          {
            id: 41,
            value: 0,
            color: 4,
          },
          card(8, 0, 3),
        ],
        hints: [
          {
            color: [...UNKNOWN_MASK],
            value: [...UNKNOWN_MASK],
          },
          {
            color: [...UNKNOWN_MASK],
            value: [...UNKNOWN_MASK],
          },
          {
            color: [...UNKNOWN_MASK],
            value: [...UNKNOWN_MASK],
          },
          {
            color: [...UNKNOWN_MASK],
            value: [...UNKNOWN_MASK],
          },
          {
            color: [...UNKNOWN_MASK],
            value: [...UNKNOWN_MASK],
          },
        ],
      },
    ],
    countdown: 3,
    treats: 8,
  });
});

//TODO
it('play movePlays 6 - play when no more cards on deck', () => {
  // set up a specifc board scenario
  const ZooParadeCustomScenario = {
    ...ZooParadeGame,

    setup: () => ({
      deck: [
        card(8, 0, 3),
        card(28, 2, 3),
        card(18, 1, 3),
        card(23, 2, 1),
        card(30, 3, 0),
        card(22, 2, 0),
        card(48, 4, 3),
        card(44, 4, 1),
        card(6, 0, 2),
        card(36, 3, 2),
        card(16, 1, 2),
        card(32, 3, 0),
        card(26, 2, 2),
        card(39, 3, 4),
        card(5, 0, 2),
        card(14, 1, 1),
        card(20, 2, 0),
        card(47, 4, 3),
        card(3, 0, 1),
        card(15, 1, 2),
        card(49, 4, 4),
        card(4, 0, 1),
        card(11, 1, 0),
        card(21, 2, 0),
        card(24, 2, 1),
        card(19, 1, 4),
        card(42, 4, 0),
        card(29, 2, 4),
        card(2, 0, 0),
        card(31, 3, 0),
        card(9, 0, 4),
        card(25, 2, 2),
        card(12, 1, 0),
        card(41, 4, 0),
        card(43, 4, 1),
        card(27, 2, 3),
        card(17, 1, 3),
        card(34, 3, 1),
        card(13, 1, 1),
        card(0, 0, 0),
        card(10, 1, 0),
        card(40, 4, 0),
        card(35, 3, 2),
        card(33, 3, 1),
        card(7, 0, 3),
        card(37, 3, 3),
        card(46, 4, 2),
        card(1, 0, 0),
        card(38, 3, 3),
        card(45, 4, 2),
      ],
      deckindex: -1,
      trash: [
        {
          id: 0,
          value: 0,
          color: 0,
        },
        card(45, 4, 2),
        card(38, 3, 3),
        {
          id: 12,
          value: 0,
          color: 1,
        },
        {
          id: 41,
          value: 0,
          color: 4,
        },
        card(33, 3, 1),
        {
          id: 2,
          value: 0,
          color: 0,
        },
        {
          id: 42,
          value: 0,
          color: 4,
        },
        {
          id: 19,
          value: 4,
          color: 1,
        },
        {
          id: 49,
          value: 4,
          color: 4,
        },
        {
          id: 15,
          value: 2,
          color: 1,
        },
        {
          id: 11,
          value: 0,
          color: 1,
        },
        {
          id: 47,
          value: 3,
          color: 4,
        },
        {
          id: 3,
          value: 1,
          color: 0,
        },
        {
          id: 4,
          value: 1,
          color: 0,
        },
        {
          id: 17,
          value: 3,
          color: 1,
        },
        {
          id: 39,
          value: 4,
          color: 3,
        },
        {
          id: 26,
          value: 2,
          color: 2,
        },
        {
          id: 32,
          value: 0,
          color: 3,
        },
        {
          id: 16,
          value: 2,
          color: 1,
        },
        {
          id: 36,
          value: 2,
          color: 3,
        },
        {
          id: 6,
          value: 2,
          color: 0,
        },
        {
          id: 44,
          value: 1,
          color: 4,
        },
        {
          id: 48,
          value: 3,
          color: 4,
        },
        {
          id: 22,
          value: 0,
          color: 2,
        },
        {
          id: 30,
          value: 0,
          color: 3,
        },
        {
          id: 23,
          value: 1,
          color: 2,
        },
        {
          id: 5,
          value: 2,
          color: 0,
        },
      ],
      piles: [
        [card(1, 0, 0)],
        [
          card(10, 1, 0),
          {
            id: 13,
            value: 1,
            color: 1,
          },
        ],
        [
          {
            id: 21,
            value: 0,
            color: 2,
          },
          {
            id: 24,
            value: 1,
            color: 2,
          },
        ],
        [
          {
            id: 31,
            value: 0,
            color: 3,
          },
          {
            id: 34,
            value: 1,
            color: 3,
          },
          card(35, 3, 2),
          card(37, 3, 3),
        ],
        [
          card(40, 4, 0),
          {
            id: 43,
            value: 1,
            color: 4,
          },
          card(46, 4, 2),
        ],
      ],
      hands: [
        {
          player: 0,
          cards: [
            {
              id: 27,
              value: 3,
              color: 2,
            },
            {
              id: 29,
              value: 4,
              color: 2,
            },
            {
              id: 14,
              value: 1,
              color: 1,
            },
            {
              id: 25,
              value: 2,
              color: 2,
            },
            {
              id: 28,
              value: 3,
              color: 2,
            },
          ],
          hints: [
            {
              value: [IHintMask.UNKNOWN, IHintMask.UNKNOWN, IHintMask.NO, IHintMask.UNKNOWN, IHintMask.UNKNOWN],
              color: [...UNKNOWN_MASK],
            },
            {
              value: [IHintMask.UNKNOWN, IHintMask.UNKNOWN, IHintMask.NO, IHintMask.UNKNOWN, IHintMask.UNKNOWN],
              color: [...UNKNOWN_MASK],
            },
            {
              color: [...UNKNOWN_MASK],
              value: [...UNKNOWN_MASK],
            },
            {
              value: [IHintMask.UNKNOWN, IHintMask.UNKNOWN, IHintMask.YES, IHintMask.UNKNOWN, IHintMask.UNKNOWN],
              color: [...UNKNOWN_MASK],
            },
            {
              color: [...UNKNOWN_MASK],
              value: [...UNKNOWN_MASK],
            },
          ],
        },
        {
          player: 1,
          cards: [
            card(7, 0, 3),
            {
              id: 20,
              value: 0,
              color: 2,
            },
            {
              id: 8,
              value: 3,
              color: 0,
            },
            {
              id: 9,
              value: 4,
              color: 0,
            },
            {
              id: 18,
              value: 3,
              color: 1,
            },
          ],
          hints: [
            {
              value: [IHintMask.UNKNOWN, IHintMask.UNKNOWN, IHintMask.NO, IHintMask.UNKNOWN, IHintMask.UNKNOWN],
              color: [...UNKNOWN_MASK],
            },
            {
              color: [...UNKNOWN_MASK],
              value: [...UNKNOWN_MASK],
            },
            {
              color: [...UNKNOWN_MASK],
              value: [...UNKNOWN_MASK],
            },
            {
              value: [IHintMask.UNKNOWN, IHintMask.UNKNOWN, IHintMask.NO, IHintMask.UNKNOWN, IHintMask.UNKNOWN],
              color: [...UNKNOWN_MASK],
            },
            {
              color: [...UNKNOWN_MASK],
              value: [...UNKNOWN_MASK],
            },
          ],
        },
      ],
      countdown: 3,
      treats: 8,
      movelog: [],
    }),
  };

  const client = Client({
    game: ZooParadeCustomScenario,
  });

  client.moves.movePlay(4); // Player 1

  // get the latest game state
  const { G } = client.store.getState();

  // the board should look like this now
  delete G.movelog;
  expect(G).toEqual({
    deck: [
      card(8, 0, 3),
      card(28, 2, 3),
      card(18, 1, 3),
      card(23, 2, 1),
      card(30, 3, 0),
      card(22, 2, 0),
      card(48, 4, 3),
      card(44, 4, 1),
      card(6, 0, 2),
      card(36, 3, 2),
      card(16, 1, 2),
      card(32, 3, 0),
      card(26, 2, 2),
      card(39, 3, 4),
      card(5, 0, 2),
      card(14, 1, 1),
      card(20, 2, 0),
      card(47, 4, 3),
      card(3, 0, 1),
      card(15, 1, 2),
      card(49, 4, 4),
      card(4, 0, 1),
      card(11, 1, 0),
      card(21, 2, 0),
      card(24, 2, 1),
      card(19, 1, 4),
      card(42, 4, 0),
      card(29, 2, 4),
      card(2, 0, 0),
      card(31, 3, 0),
      card(9, 0, 4),
      card(25, 2, 2),
      card(12, 1, 0),
      card(41, 4, 0),
      card(43, 4, 1),
      card(27, 2, 3),
      card(17, 1, 3),
      card(34, 3, 1),
      card(13, 1, 1),
      card(0, 0, 0),
      card(10, 1, 0),
      card(40, 4, 0),
      card(35, 3, 2),
      card(33, 3, 1),
      card(7, 0, 3),
      card(37, 3, 3),
      card(46, 4, 2),
      card(1, 0, 0),
      card(38, 3, 3),
      card(45, 4, 2),
    ],
    deckindex: -2,
    trash: [
      {
        id: 0,
        value: 0,
        color: 0,
      },
      card(45, 4, 2),
      card(38, 3, 3),
      {
        id: 12,
        value: 0,
        color: 1,
      },
      {
        id: 41,
        value: 0,
        color: 4,
      },
      card(33, 3, 1),
      {
        id: 2,
        value: 0,
        color: 0,
      },
      {
        id: 42,
        value: 0,
        color: 4,
      },
      {
        id: 19,
        value: 4,
        color: 1,
      },
      {
        id: 49,
        value: 4,
        color: 4,
      },
      {
        id: 15,
        value: 2,
        color: 1,
      },
      {
        id: 11,
        value: 0,
        color: 1,
      },
      {
        id: 47,
        value: 3,
        color: 4,
      },
      {
        id: 3,
        value: 1,
        color: 0,
      },
      {
        id: 4,
        value: 1,
        color: 0,
      },
      {
        id: 17,
        value: 3,
        color: 1,
      },
      {
        id: 39,
        value: 4,
        color: 3,
      },
      {
        id: 26,
        value: 2,
        color: 2,
      },
      {
        id: 32,
        value: 0,
        color: 3,
      },
      {
        id: 16,
        value: 2,
        color: 1,
      },
      {
        id: 36,
        value: 2,
        color: 3,
      },
      {
        id: 6,
        value: 2,
        color: 0,
      },
      {
        id: 44,
        value: 1,
        color: 4,
      },
      {
        id: 48,
        value: 3,
        color: 4,
      },
      {
        id: 22,
        value: 0,
        color: 2,
      },
      {
        id: 30,
        value: 0,
        color: 3,
      },
      {
        id: 23,
        value: 1,
        color: 2,
      },
      {
        id: 5,
        value: 2,
        color: 0,
      },
      {
        id: 28,
        value: 3,
        color: 2,
      },
    ],
    piles: [
      [card(1, 0, 0)],
      [
        card(10, 1, 0),
        {
          id: 13,
          value: 1,
          color: 1,
        },
      ],
      [
        {
          id: 21,
          value: 0,
          color: 2,
        },
        {
          id: 24,
          value: 1,
          color: 2,
        },
      ],
      [
        {
          id: 31,
          value: 0,
          color: 3,
        },
        {
          id: 34,
          value: 1,
          color: 3,
        },
        card(35, 3, 2),
        card(37, 3, 3),
      ],
      [
        card(40, 4, 0),
        {
          id: 43,
          value: 1,
          color: 4,
        },
        card(46, 4, 2),
      ],
    ],
    hands: [
      {
        player: 0,
        cards: [
          {
            id: 27,
            value: 3,
            color: 2,
          },
          {
            id: 29,
            value: 4,
            color: 2,
          },
          {
            id: 14,
            value: 1,
            color: 1,
          },
          {
            id: 25,
            value: 2,
            color: 2,
          },
          null,
        ],
        hints: [
          {
            value: [IHintMask.UNKNOWN, IHintMask.UNKNOWN, IHintMask.NO, IHintMask.UNKNOWN, IHintMask.UNKNOWN],
            color: [...UNKNOWN_MASK],
          },
          {
            value: [IHintMask.UNKNOWN, IHintMask.UNKNOWN, IHintMask.NO, IHintMask.UNKNOWN, IHintMask.UNKNOWN],
            color: [...UNKNOWN_MASK],
          },
          {
            color: [...UNKNOWN_MASK],
            value: [...UNKNOWN_MASK],
          },
          {
            value: [IHintMask.UNKNOWN, IHintMask.UNKNOWN, IHintMask.YES, IHintMask.UNKNOWN, IHintMask.UNKNOWN],
            color: [...UNKNOWN_MASK],
          },
          {
            color: [...UNKNOWN_MASK],
            value: [...UNKNOWN_MASK],
          },
        ],
      },
      {
        player: 1,
        cards: [
          card(7, 0, 3),
          {
            id: 20,
            value: 0,
            color: 2,
          },
          {
            id: 8,
            value: 3,
            color: 0,
          },
          {
            id: 9,
            value: 4,
            color: 0,
          },
          {
            id: 18,
            value: 3,
            color: 1,
          },
        ],
        hints: [
          {
            value: [IHintMask.UNKNOWN, IHintMask.UNKNOWN, IHintMask.NO, IHintMask.UNKNOWN, IHintMask.UNKNOWN],
            color: [...UNKNOWN_MASK],
          },
          {
            color: [...UNKNOWN_MASK],
            value: [...UNKNOWN_MASK],
          },
          {
            color: [...UNKNOWN_MASK],
            value: [...UNKNOWN_MASK],
          },
          {
            value: [IHintMask.UNKNOWN, IHintMask.UNKNOWN, IHintMask.NO, IHintMask.UNKNOWN, IHintMask.UNKNOWN],
            color: [...UNKNOWN_MASK],
          },
          {
            color: [...UNKNOWN_MASK],
            value: [...UNKNOWN_MASK],
          },
        ],
      },
    ],
    countdown: 2,
    treats: 8,
  });
});
