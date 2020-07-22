import { Client } from 'boardgame.io/client';
import { ZooParadeGame } from './game';
import { UNKNOWN_MASK } from './constants';
import { IHintMask } from './interfaces';
import { card } from './testing';

it('Discard 1 - Full Hints.', () => {
  // set up a specific board scenario
  const ZooParadeCustomScenario = {
    ...ZooParadeGame,
    setup: () => ({
      movelog: [],
      deck: [
        card(0, 0, 0),
        card(1, 0, 0),
        card(2, 0, 0),
        card(3, 0, 1),
        card(4, 0, 1),
        card(5, 0, 2),
        card(6, 0, 2),
        card(7, 0, 3),
        card(8, 0, 3),
        card(9, 0, 4),
        card(10, 1, 0),
        card(11, 1, 0),
        card(12, 1, 0),
        card(13, 1, 1),
        card(14, 1, 1),
        card(15, 1, 2),
        card(16, 1, 2),
        card(17, 1, 3),
        card(18, 1, 3),
        card(19, 1, 4),
        card(20, 2, 0),
        card(21, 2, 0),
        card(22, 2, 0),
        card(23, 2, 1),
        card(24, 2, 1),
        card(25, 2, 2),
        card(26, 2, 2),
        card(27, 2, 3),
        card(28, 2, 3),
        card(29, 2, 4),
        card(30, 3, 0),
        card(31, 3, 0),
        card(32, 3, 0),
        card(33, 3, 1),
        card(34, 3, 1),
        card(35, 3, 2),
        card(36, 3, 2),
        card(37, 3, 3),
        card(38, 3, 3),
        card(39, 3, 4),
        card(40, 4, 0),
        card(41, 4, 0),
        card(42, 4, 0),
        card(43, 4, 1),
        card(44, 4, 1),
        card(45, 4, 2),
        card(46, 4, 2),
        card(47, 4, 3),
        card(48, 4, 3),
        card(49, 4, 4),
      ],
      deckindex: 39,
      trash: [],
      piles: [[], [], [], [], []],
      hands: [
        {
          player: 0,
          cards: [card(49, 4, 4), card(48, 4, 3), card(47, 4, 3), card(46, 4, 2), card(45, 4, 2)],
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
          cards: [card(44, 4, 1), card(43, 4, 1), card(42, 4, 0), card(41, 4, 0), card(40, 4, 0)],
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
  client.moves.moveDiscard(3); // Player 0
  // get the latest game state
  const { G } = client.store.getState();
  // the board should look like this now
  delete G.movelog;

  expect(G).toEqual({
    deck: [
      card(0, 0, 0),
      card(1, 0, 0),
      card(2, 0, 0),
      card(3, 0, 1),
      card(4, 0, 1),
      card(5, 0, 2),
      card(6, 0, 2),
      card(7, 0, 3),
      card(8, 0, 3),
      card(9, 0, 4),
      card(10, 1, 0),
      card(11, 1, 0),
      card(12, 1, 0),
      card(13, 1, 1),
      card(14, 1, 1),
      card(15, 1, 2),
      card(16, 1, 2),
      card(17, 1, 3),
      card(18, 1, 3),
      card(19, 1, 4),
      card(20, 2, 0),
      card(21, 2, 0),
      card(22, 2, 0),
      card(23, 2, 1),
      card(24, 2, 1),
      card(25, 2, 2),
      card(26, 2, 2),
      card(27, 2, 3),
      card(28, 2, 3),
      card(29, 2, 4),
      card(30, 3, 0),
      card(31, 3, 0),
      card(32, 3, 0),
      card(33, 3, 1),
      card(34, 3, 1),
      card(35, 3, 2),
      card(36, 3, 2),
      card(37, 3, 3),
      card(38, 3, 3),
      card(39, 3, 4),
      card(40, 4, 0),
      card(41, 4, 0),
      card(42, 4, 0),
      card(43, 4, 1),
      card(44, 4, 1),
      card(45, 4, 2),
      card(46, 4, 2),
      card(47, 4, 3),
      card(48, 4, 3),
      card(49, 4, 4),
    ],
    deckindex: 38,
    trash: [card(46, 4, 2)],
    piles: [[], [], [], [], []],
    hands: [
      {
        player: 0,
        cards: [card(49, 4, 4), card(48, 4, 3), card(47, 4, 3), card(39, 3, 4), card(45, 4, 2)],
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
        cards: [card(44, 4, 1), card(43, 4, 1), card(42, 4, 0), card(41, 4, 0), card(40, 4, 0)],
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

it('Discard 2 - Not Full Hints.', () => {
  // set up a specific board scenario
  const ZooParadeCustomScenario = {
    ...ZooParadeGame,
    setup: () => ({
      movelog: [],
      deck: [
        card(0, 0, 0),
        card(1, 0, 0),
        card(2, 0, 0),
        card(3, 0, 1),
        card(4, 0, 1),
        card(5, 0, 2),
        card(6, 0, 2),
        card(7, 0, 3),
        card(8, 0, 3),
        card(9, 0, 4),
        card(10, 1, 0),
        card(11, 1, 0),
        card(12, 1, 0),
        card(13, 1, 1),
        card(14, 1, 1),
        card(15, 1, 2),
        card(16, 1, 2),
        card(17, 1, 3),
        card(18, 1, 3),
        card(19, 1, 4),
        card(20, 2, 0),
        card(21, 2, 0),
        card(22, 2, 0),
        card(23, 2, 1),
        card(24, 2, 1),
        card(25, 2, 2),
        card(26, 2, 2),
        card(27, 2, 3),
        card(28, 2, 3),
        card(29, 2, 4),
        card(30, 3, 0),
        card(31, 3, 0),
        card(32, 3, 0),
        card(33, 3, 1),
        card(34, 3, 1),
        card(35, 3, 2),
        card(36, 3, 2),
        card(37, 3, 3),
        card(38, 3, 3),
        card(39, 3, 4),
        card(40, 4, 0),
        card(41, 4, 0),
        card(42, 4, 0),
        card(43, 4, 1),
        card(44, 4, 1),
        card(45, 4, 2),
        card(46, 4, 2),
        card(47, 4, 3),
        card(48, 4, 3),
        card(49, 4, 4),
      ],
      deckindex: 34,
      trash: [card(46, 4, 2), card(43, 4, 1), card(39, 3, 4), card(38, 3, 3), card(37, 3, 3)],
      piles: [[], [], [], [], []],
      hands: [
        {
          player: 0,
          cards: [card(49, 4, 4), card(48, 4, 3), card(47, 4, 3), card(35, 3, 2), card(45, 4, 2)],
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
              color: [IHintMask.UNKNOWN, IHintMask.NO, IHintMask.UNKNOWN, IHintMask.UNKNOWN, IHintMask.UNKNOWN],
              value: [...UNKNOWN_MASK],
            },
            {
              color: [IHintMask.UNKNOWN, IHintMask.NO, IHintMask.UNKNOWN, IHintMask.UNKNOWN, IHintMask.UNKNOWN],
              value: [...UNKNOWN_MASK],
            },
          ],
        },
        {
          player: 1,
          cards: [card(44, 4, 1), card(36, 3, 2), card(42, 4, 0), card(41, 4, 0), card(40, 4, 0)],
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
      treats: 7,
    }),
  };
  const client = Client({
    game: ZooParadeCustomScenario,
  });
  client.moves.moveDiscard(3); // Player 0
  // get the latest game state
  const { G } = client.store.getState();
  // the board should look like this now
  delete G.movelog;
  expect(G).toEqual({
    deck: [
      card(0, 0, 0),
      card(1, 0, 0),
      card(2, 0, 0),
      card(3, 0, 1),
      card(4, 0, 1),
      card(5, 0, 2),
      card(6, 0, 2),
      card(7, 0, 3),
      card(8, 0, 3),
      card(9, 0, 4),
      card(10, 1, 0),
      card(11, 1, 0),
      card(12, 1, 0),
      card(13, 1, 1),
      card(14, 1, 1),
      card(15, 1, 2),
      card(16, 1, 2),
      card(17, 1, 3),
      card(18, 1, 3),
      card(19, 1, 4),
      card(20, 2, 0),
      card(21, 2, 0),
      card(22, 2, 0),
      card(23, 2, 1),
      card(24, 2, 1),
      card(25, 2, 2),
      card(26, 2, 2),
      card(27, 2, 3),
      card(28, 2, 3),
      card(29, 2, 4),
      card(30, 3, 0),
      card(31, 3, 0),
      card(32, 3, 0),
      card(33, 3, 1),
      card(34, 3, 1),
      card(35, 3, 2),
      card(36, 3, 2),
      card(37, 3, 3),
      card(38, 3, 3),
      card(39, 3, 4),
      card(40, 4, 0),
      card(41, 4, 0),
      card(42, 4, 0),
      card(43, 4, 1),
      card(44, 4, 1),
      card(45, 4, 2),
      card(46, 4, 2),
      card(47, 4, 3),
      card(48, 4, 3),
      card(49, 4, 4),
    ],
    deckindex: 33,
    trash: [card(46, 4, 2), card(43, 4, 1), card(39, 3, 4), card(38, 3, 3), card(37, 3, 3), card(35, 3, 2)],
    piles: [[], [], [], [], []],
    hands: [
      {
        player: 0,
        cards: [card(49, 4, 4), card(48, 4, 3), card(47, 4, 3), card(34, 3, 1), card(45, 4, 2)],
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
            color: [...UNKNOWN_MASK],
            value: [...UNKNOWN_MASK],
          },
          {
            color: [IHintMask.UNKNOWN, IHintMask.NO, IHintMask.UNKNOWN, IHintMask.UNKNOWN, IHintMask.UNKNOWN],
            value: [...UNKNOWN_MASK],
          },
        ],
      },
      {
        player: 1,
        cards: [card(44, 4, 1), card(36, 3, 2), card(42, 4, 0), card(41, 4, 0), card(40, 4, 0)],
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
