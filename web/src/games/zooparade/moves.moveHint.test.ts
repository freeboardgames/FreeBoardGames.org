import { Client } from 'boardgame.io/client';
import { ZooParadeGame } from './game';
import { UNKNOWN_MASK } from './constants';
import { IHintMask } from './interfaces';
import { card } from './testing';

it('Hint Color 1 - Good hint.', () => {
  // set up a specific board scenario
  const ZooParadeCustomScenario = {
    ...ZooParadeGame,
    setup: () => ({
      movelog: [],
      deck: [
        card(48, 4, 3),
        card(29, 2, 4),
        card(39, 3, 4),
        card(33, 3, 1),
        card(2, 0, 0),
        card(34, 3, 1),
        card(18, 1, 3),
        card(32, 3, 0),
        card(40, 4, 0),
        card(17, 1, 3),
        card(20, 2, 0),
        card(4, 0, 1),
        card(10, 1, 0),
        card(27, 2, 3),
        card(12, 1, 0),
        card(37, 3, 3),
        card(36, 3, 2),
        card(15, 1, 2),
        card(46, 4, 2),
        card(30, 3, 0),
        card(38, 3, 3),
        card(31, 3, 0),
        card(23, 2, 1),
        card(28, 2, 3),
        card(7, 0, 3),
        card(16, 1, 2),
        card(42, 4, 0),
        card(0, 0, 0),
        card(26, 2, 2),
        card(21, 2, 0),
        card(19, 1, 4),
        card(44, 4, 1),
        card(35, 3, 2),
        card(22, 2, 0),
        card(6, 0, 2),
        card(1, 0, 0),
        card(8, 0, 3),
        card(5, 0, 2),
        card(25, 2, 2),
        card(13, 1, 1),
        card(41, 4, 0),
        card(14, 1, 1),
        card(3, 0, 1),
        card(49, 4, 4),
        card(9, 0, 4),
        card(24, 2, 1),
        card(47, 4, 3),
        card(43, 4, 1),
        card(11, 1, 0),
        card(45, 4, 2),
      ],
      deckindex: 39,
      trash: [],
      piles: [[], [], [], [], []],
      hands: [
        {
          player: 0,
          cards: [card(45, 4, 2), card(11, 1, 0), card(43, 4, 1), card(47, 4, 3), card(24, 2, 1)],
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
          cards: [card(9, 0, 4), card(49, 4, 4), card(3, 0, 1), card(14, 1, 1), card(41, 4, 0)],
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
  client.moves.moveHintColor(1, 1); // Player 0
  // get the latest game state
  const { G } = client.store.getState();
  // the board should look like this now
  delete G.movelog;
  expect(G).toEqual({
    deck: [
      card(48, 4, 3),
      card(29, 2, 4),
      card(39, 3, 4),
      card(33, 3, 1),
      card(2, 0, 0),
      card(34, 3, 1),
      card(18, 1, 3),
      card(32, 3, 0),
      card(40, 4, 0),
      card(17, 1, 3),
      card(20, 2, 0),
      card(4, 0, 1),
      card(10, 1, 0),
      card(27, 2, 3),
      card(12, 1, 0),
      card(37, 3, 3),
      card(36, 3, 2),
      card(15, 1, 2),
      card(46, 4, 2),
      card(30, 3, 0),
      card(38, 3, 3),
      card(31, 3, 0),
      card(23, 2, 1),
      card(28, 2, 3),
      card(7, 0, 3),
      card(16, 1, 2),
      card(42, 4, 0),
      card(0, 0, 0),
      card(26, 2, 2),
      card(21, 2, 0),
      card(19, 1, 4),
      card(44, 4, 1),
      card(35, 3, 2),
      card(22, 2, 0),
      card(6, 0, 2),
      card(1, 0, 0),
      card(8, 0, 3),
      card(5, 0, 2),
      card(25, 2, 2),
      card(13, 1, 1),
      card(41, 4, 0),
      card(14, 1, 1),
      card(3, 0, 1),
      card(49, 4, 4),
      card(9, 0, 4),
      card(24, 2, 1),
      card(47, 4, 3),
      card(43, 4, 1),
      card(11, 1, 0),
      card(45, 4, 2),
    ],
    deckindex: 39,
    trash: [],
    piles: [[], [], [], [], []],
    hands: [
      {
        player: 0,
        cards: [card(45, 4, 2), card(11, 1, 0), card(43, 4, 1), card(47, 4, 3), card(24, 2, 1)],
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
        cards: [card(9, 0, 4), card(49, 4, 4), card(3, 0, 1), card(14, 1, 1), card(41, 4, 0)],
        hints: [
          {
            color: [IHintMask.UNKNOWN, IHintMask.NO, IHintMask.UNKNOWN, IHintMask.UNKNOWN, IHintMask.UNKNOWN],
            value: [...UNKNOWN_MASK],
          },
          {
            color: [IHintMask.UNKNOWN, IHintMask.NO, IHintMask.UNKNOWN, IHintMask.UNKNOWN, IHintMask.UNKNOWN],
            value: [...UNKNOWN_MASK],
          },
          {
            color: [IHintMask.UNKNOWN, IHintMask.NO, IHintMask.UNKNOWN, IHintMask.UNKNOWN, IHintMask.UNKNOWN],
            value: [...UNKNOWN_MASK],
          },
          {
            color: [IHintMask.NO, IHintMask.YES, IHintMask.NO, IHintMask.NO, IHintMask.NO],
            value: [...UNKNOWN_MASK],
          },
          {
            color: [IHintMask.UNKNOWN, IHintMask.NO, IHintMask.UNKNOWN, IHintMask.UNKNOWN, IHintMask.UNKNOWN],
            value: [...UNKNOWN_MASK],
          },
        ],
      },
    ],
    countdown: 3,
    treats: 7,
  });
});

it('Hint Value 2 - Hint Value nothing.', () => {
  // set up a specific board scenario
  const ZooParadeCustomScenario = {
    ...ZooParadeGame,
    setup: () => ({
      movelog: [],
      deck: [
        card(48, 4, 3),
        card(29, 2, 4),
        card(39, 3, 4),
        card(33, 3, 1),
        card(2, 0, 0),
        card(34, 3, 1),
        card(18, 1, 3),
        card(32, 3, 0),
        card(40, 4, 0),
        card(17, 1, 3),
        card(20, 2, 0),
        card(4, 0, 1),
        card(10, 1, 0),
        card(27, 2, 3),
        card(12, 1, 0),
        card(37, 3, 3),
        card(36, 3, 2),
        card(15, 1, 2),
        card(46, 4, 2),
        card(30, 3, 0),
        card(38, 3, 3),
        card(31, 3, 0),
        card(23, 2, 1),
        card(28, 2, 3),
        card(7, 0, 3),
        card(16, 1, 2),
        card(42, 4, 0),
        card(0, 0, 0),
        card(26, 2, 2),
        card(21, 2, 0),
        card(19, 1, 4),
        card(44, 4, 1),
        card(35, 3, 2),
        card(22, 2, 0),
        card(6, 0, 2),
        card(1, 0, 0),
        card(8, 0, 3),
        card(5, 0, 2),
        card(25, 2, 2),
        card(13, 1, 1),
        card(41, 4, 0),
        card(14, 1, 1),
        card(3, 0, 1),
        card(49, 4, 4),
        card(9, 0, 4),
        card(24, 2, 1),
        card(47, 4, 3),
        card(43, 4, 1),
        card(11, 1, 0),
        card(45, 4, 2),
      ],
      deckindex: 38,
      trash: [],
      piles: [[], [], [], [], [card(41, 4, 0)]],
      hands: [
        {
          player: 0,
          cards: [card(45, 4, 2), card(11, 1, 0), card(43, 4, 1), card(47, 4, 3), card(24, 2, 1)],
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
            card(49, 4, 4),
            card(3, 0, 1),
            card(14, 1, 1),
            {
              id: 13,
              value: 1,
              color: 1,
            },
          ],
          hints: [
            {
              color: [IHintMask.UNKNOWN, IHintMask.NO, IHintMask.UNKNOWN, IHintMask.UNKNOWN, IHintMask.UNKNOWN],
              value: [...UNKNOWN_MASK],
            },
            {
              color: [IHintMask.UNKNOWN, IHintMask.NO, IHintMask.UNKNOWN, IHintMask.UNKNOWN, IHintMask.UNKNOWN],
              value: [...UNKNOWN_MASK],
            },
            {
              color: [IHintMask.UNKNOWN, IHintMask.NO, IHintMask.UNKNOWN, IHintMask.UNKNOWN, IHintMask.UNKNOWN],
              value: [IHintMask.NO, IHintMask.UNKNOWN, IHintMask.UNKNOWN, IHintMask.NO, IHintMask.NO],
            },
            {
              color: [IHintMask.UNKNOWN, IHintMask.YES, IHintMask.UNKNOWN, IHintMask.UNKNOWN, IHintMask.UNKNOWN],
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
      treats: 7,
    }),
  };
  const client = Client({
    game: ZooParadeCustomScenario,
  });
  client.moves.moveHintValue(1, 2); // Player 0
  // get the latest game state
  const { G } = client.store.getState();
  // the board should look like this now
  delete G.movelog;
  expect(G).toEqual({
    deck: [
      card(48, 4, 3),
      card(29, 2, 4),
      card(39, 3, 4),
      card(33, 3, 1),
      card(2, 0, 0),
      card(34, 3, 1),
      card(18, 1, 3),
      card(32, 3, 0),
      card(40, 4, 0),
      card(17, 1, 3),
      card(20, 2, 0),
      card(4, 0, 1),
      card(10, 1, 0),
      card(27, 2, 3),
      card(12, 1, 0),
      card(37, 3, 3),
      card(36, 3, 2),
      card(15, 1, 2),
      card(46, 4, 2),
      card(30, 3, 0),
      card(38, 3, 3),
      card(31, 3, 0),
      card(23, 2, 1),
      card(28, 2, 3),
      card(7, 0, 3),
      card(16, 1, 2),
      card(42, 4, 0),
      card(0, 0, 0),
      card(26, 2, 2),
      card(21, 2, 0),
      card(19, 1, 4),
      card(44, 4, 1),
      card(35, 3, 2),
      card(22, 2, 0),
      card(6, 0, 2),
      card(1, 0, 0),
      card(8, 0, 3),
      card(5, 0, 2),
      card(25, 2, 2),
      card(13, 1, 1),
      card(41, 4, 0),
      card(14, 1, 1),
      card(3, 0, 1),
      card(49, 4, 4),
      card(9, 0, 4),
      card(24, 2, 1),
      card(47, 4, 3),
      card(43, 4, 1),
      card(11, 1, 0),
      card(45, 4, 2),
    ],
    deckindex: 38,
    trash: [],
    piles: [[], [], [], [], [card(41, 4, 0)]],
    hands: [
      {
        player: 0,
        cards: [card(45, 4, 2), card(11, 1, 0), card(43, 4, 1), card(47, 4, 3), card(24, 2, 1)],
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
          card(49, 4, 4),
          card(3, 0, 1),
          card(14, 1, 1),
          {
            id: 13,
            value: 1,
            color: 1,
          },
        ],
        hints: [
          {
            value: [IHintMask.UNKNOWN, IHintMask.UNKNOWN, IHintMask.NO, IHintMask.UNKNOWN, IHintMask.UNKNOWN],
            color: [IHintMask.UNKNOWN, IHintMask.NO, IHintMask.UNKNOWN, IHintMask.UNKNOWN, IHintMask.UNKNOWN],
          },
          {
            value: [IHintMask.UNKNOWN, IHintMask.UNKNOWN, IHintMask.NO, IHintMask.UNKNOWN, IHintMask.UNKNOWN],
            color: [IHintMask.UNKNOWN, IHintMask.NO, IHintMask.UNKNOWN, IHintMask.UNKNOWN, IHintMask.UNKNOWN],
          },
          {
            value: [IHintMask.NO, IHintMask.YES, IHintMask.NO, IHintMask.NO, IHintMask.NO],
            color: [IHintMask.UNKNOWN, IHintMask.NO, IHintMask.UNKNOWN, IHintMask.UNKNOWN, IHintMask.UNKNOWN],
          },
          {
            value: [IHintMask.UNKNOWN, IHintMask.UNKNOWN, IHintMask.NO, IHintMask.UNKNOWN, IHintMask.UNKNOWN],
            color: [IHintMask.UNKNOWN, IHintMask.YES, IHintMask.UNKNOWN, IHintMask.UNKNOWN, IHintMask.UNKNOWN],
          },
          {
            value: [IHintMask.UNKNOWN, IHintMask.UNKNOWN, IHintMask.NO, IHintMask.UNKNOWN, IHintMask.UNKNOWN],
            color: [...UNKNOWN_MASK],
          },
        ],
      },
    ],
    countdown: 3,
    treats: 6,
  });
});

it('Hint 3 - No Hint token.', () => {
  // set up a specific board scenario
  const ZooParadeCustomScenario = {
    ...ZooParadeGame,
    setup: () => ({
      deck: [
        card(2, 0, 0),
        card(46, 4, 2),
        card(48, 4, 3),
        card(19, 1, 4),
        card(17, 1, 3),
        card(40, 4, 0),
        card(22, 2, 0),
        card(0, 0, 0),
        card(8, 0, 3),
        card(27, 2, 3),
        card(3, 0, 1),
        card(9, 0, 4),
        card(1, 0, 0),
        card(25, 2, 2),
        card(39, 3, 4),
        card(37, 3, 3),
        card(24, 2, 1),
        card(30, 3, 0),
        card(23, 2, 1),
        card(41, 4, 0),
        card(15, 1, 2),
        card(42, 4, 0),
        card(43, 4, 1),
        card(16, 1, 2),
        card(10, 1, 0),
        card(35, 3, 2),
        card(47, 4, 3),
        card(33, 3, 1),
        card(7, 0, 3),
        card(20, 2, 0),
        card(36, 3, 2),
        card(28, 2, 3),
        card(14, 1, 1),
        card(5, 0, 2),
        card(21, 2, 0),
        card(34, 3, 1),
        card(11, 1, 0),
        card(13, 1, 1),
        card(29, 2, 4),
        card(38, 3, 3),
        card(49, 4, 4),
        card(4, 0, 1),
        card(18, 1, 3),
        card(26, 2, 2),
        card(6, 0, 2),
        card(12, 1, 0),
        card(32, 3, 0),
        card(45, 4, 2),
        card(31, 3, 0),
        card(44, 4, 1),
      ],
      deckindex: 39,
      trash: [],
      piles: [[], [], [], [], []],
      hands: [
        {
          player: 0,
          cards: [card(44, 4, 1), card(31, 3, 0), card(45, 4, 2), card(32, 3, 0), card(12, 1, 0)],
          hints: [
            {
              value: [IHintMask.UNKNOWN, IHintMask.YES, IHintMask.NO, IHintMask.NO, IHintMask.NO],
              color: [...UNKNOWN_MASK],
            },
            {
              value: [IHintMask.UNKNOWN, IHintMask.NO, IHintMask.NO, IHintMask.NO, IHintMask.NO],
              color: [...UNKNOWN_MASK],
            },
            {
              value: [IHintMask.UNKNOWN, IHintMask.NO, IHintMask.YES, IHintMask.NO, IHintMask.NO],
              color: [...UNKNOWN_MASK],
            },
            {
              value: [IHintMask.UNKNOWN, IHintMask.NO, IHintMask.NO, IHintMask.NO, IHintMask.NO],
              color: [...UNKNOWN_MASK],
            },
            {
              value: [IHintMask.UNKNOWN, IHintMask.NO, IHintMask.NO, IHintMask.NO, IHintMask.NO],
              color: [...UNKNOWN_MASK],
            },
          ],
        },
        {
          player: 1,
          cards: [card(6, 0, 2), card(26, 2, 2), card(18, 1, 3), card(4, 0, 1), card(49, 4, 4)],
          hints: [
            {
              value: [0, -1, 1, -1, -1],
              color: [...UNKNOWN_MASK],
            },
            {
              value: [0, -1, 1, -1, -1],
              color: [...UNKNOWN_MASK],
            },
            {
              value: [0, -1, -1, 1, -1],
              color: [...UNKNOWN_MASK],
            },
            {
              value: [0, 1, -1, -1, -1],
              color: [...UNKNOWN_MASK],
            },
            {
              value: [0, -1, -1, -1, 1],
              color: [...UNKNOWN_MASK],
            },
          ],
        },
      ],
      countdown: 3,
      treats: 0,
      movelog: [],
    }),
  };
  const client = Client({
    game: ZooParadeCustomScenario,
  });
  // get the latest game state
  const { G } = client.store.getState();
  // the board should look like this now
  delete G.movelog;

  expect(G).toEqual({
    deck: [
      card(2, 0, 0),
      card(46, 4, 2),
      card(48, 4, 3),
      card(19, 1, 4),
      card(17, 1, 3),
      card(40, 4, 0),
      card(22, 2, 0),
      card(0, 0, 0),
      card(8, 0, 3),
      card(27, 2, 3),
      card(3, 0, 1),
      card(9, 0, 4),
      card(1, 0, 0),
      card(25, 2, 2),
      card(39, 3, 4),
      card(37, 3, 3),
      card(24, 2, 1),
      card(30, 3, 0),
      card(23, 2, 1),
      card(41, 4, 0),
      card(15, 1, 2),
      card(42, 4, 0),
      card(43, 4, 1),
      card(16, 1, 2),
      card(10, 1, 0),
      card(35, 3, 2),
      card(47, 4, 3),
      card(33, 3, 1),
      card(7, 0, 3),
      card(20, 2, 0),
      card(36, 3, 2),
      card(28, 2, 3),
      card(14, 1, 1),
      card(5, 0, 2),
      card(21, 2, 0),
      card(34, 3, 1),
      card(11, 1, 0),
      card(13, 1, 1),
      card(29, 2, 4),
      card(38, 3, 3),
      card(49, 4, 4),
      card(4, 0, 1),
      card(18, 1, 3),
      card(26, 2, 2),
      card(6, 0, 2),
      card(12, 1, 0),
      card(32, 3, 0),
      card(45, 4, 2),
      card(31, 3, 0),
      card(44, 4, 1),
    ],
    deckindex: 39,
    trash: [],
    piles: [[], [], [], [], []],
    hands: [
      {
        player: 0,
        cards: [card(44, 4, 1), card(31, 3, 0), card(45, 4, 2), card(32, 3, 0), card(12, 1, 0)],
        hints: [
          {
            value: [IHintMask.UNKNOWN, IHintMask.YES, IHintMask.NO, IHintMask.NO, IHintMask.NO],
            color: [...UNKNOWN_MASK],
          },
          {
            value: [IHintMask.UNKNOWN, IHintMask.NO, IHintMask.NO, IHintMask.NO, IHintMask.NO],
            color: [...UNKNOWN_MASK],
          },
          {
            value: [IHintMask.UNKNOWN, IHintMask.NO, IHintMask.YES, IHintMask.NO, IHintMask.NO],
            color: [...UNKNOWN_MASK],
          },
          {
            value: [IHintMask.UNKNOWN, IHintMask.NO, IHintMask.NO, IHintMask.NO, IHintMask.NO],
            color: [...UNKNOWN_MASK],
          },
          {
            value: [IHintMask.UNKNOWN, IHintMask.NO, IHintMask.NO, IHintMask.NO, IHintMask.NO],
            color: [...UNKNOWN_MASK],
          },
        ],
      },
      {
        player: 1,
        cards: [card(6, 0, 2), card(26, 2, 2), card(18, 1, 3), card(4, 0, 1), card(49, 4, 4)],
        hints: [
          {
            value: [IHintMask.UNKNOWN, IHintMask.NO, IHintMask.YES, IHintMask.NO, IHintMask.NO],
            color: [...UNKNOWN_MASK],
          },
          {
            value: [IHintMask.UNKNOWN, IHintMask.NO, IHintMask.YES, IHintMask.NO, IHintMask.NO],
            color: [...UNKNOWN_MASK],
          },
          {
            value: [IHintMask.UNKNOWN, IHintMask.NO, IHintMask.NO, IHintMask.YES, IHintMask.NO],
            color: [...UNKNOWN_MASK],
          },
          {
            value: [IHintMask.UNKNOWN, IHintMask.YES, IHintMask.NO, IHintMask.NO, IHintMask.NO],
            color: [...UNKNOWN_MASK],
          },
          {
            value: [IHintMask.UNKNOWN, IHintMask.NO, IHintMask.NO, IHintMask.NO, IHintMask.YES],
            color: [...UNKNOWN_MASK],
          },
        ],
      },
    ],
    countdown: 3,
    treats: 0,
  });
});
