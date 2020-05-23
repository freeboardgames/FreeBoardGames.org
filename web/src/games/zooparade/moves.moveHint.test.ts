import {
  Client
} from 'boardgame.io/client';
import {
  ZooParadeGame
} from './game';

it('Hint Color 1 - Good hint.', () => {

  // set up a specific board scenario
  const ZooParadeCustomScenario = {
    ...ZooParadeGame,
    setup: () => ({
      movelog: [],
      deck: [{
          id: 48,
          color: 4,
          value: 3
        },
        {
          id: 29,
          color: 2,
          value: 4
        },
        {
          id: 39,
          color: 3,
          value: 4
        },
        {
          id: 33,
          color: 3,
          value: 1
        },
        {
          id: 2,
          color: 0,
          value: 0
        },
        {
          id: 34,
          color: 3,
          value: 1
        },
        {
          id: 18,
          color: 1,
          value: 3
        },
        {
          id: 32,
          color: 3,
          value: 0
        },
        {
          id: 40,
          color: 4,
          value: 0
        },
        {
          id: 17,
          color: 1,
          value: 3
        },
        {
          id: 20,
          color: 2,
          value: 0
        },
        {
          id: 4,
          color: 0,
          value: 1
        },
        {
          id: 10,
          color: 1,
          value: 0
        },
        {
          id: 27,
          color: 2,
          value: 3
        },
        {
          id: 12,
          color: 1,
          value: 0
        },
        {
          id: 37,
          color: 3,
          value: 3
        },
        {
          id: 36,
          color: 3,
          value: 2
        },
        {
          id: 15,
          color: 1,
          value: 2
        },
        {
          id: 46,
          color: 4,
          value: 2
        },
        {
          id: 30,
          color: 3,
          value: 0
        },
        {
          id: 38,
          color: 3,
          value: 3
        },
        {
          id: 31,
          color: 3,
          value: 0
        },
        {
          id: 23,
          color: 2,
          value: 1
        },
        {
          id: 28,
          color: 2,
          value: 3
        },
        {
          id: 7,
          color: 0,
          value: 3
        },
        {
          id: 16,
          color: 1,
          value: 2
        },
        {
          id: 42,
          color: 4,
          value: 0
        },
        {
          id: 0,
          color: 0,
          value: 0
        },
        {
          id: 26,
          color: 2,
          value: 2
        },
        {
          id: 21,
          color: 2,
          value: 0
        },
        {
          id: 19,
          color: 1,
          value: 4
        },
        {
          id: 44,
          color: 4,
          value: 1
        },
        {
          id: 35,
          color: 3,
          value: 2
        },
        {
          id: 22,
          color: 2,
          value: 0
        },
        {
          id: 6,
          color: 0,
          value: 2
        },
        {
          id: 1,
          color: 0,
          value: 0
        },
        {
          id: 8,
          color: 0,
          value: 3
        },
        {
          id: 5,
          color: 0,
          value: 2
        },
        {
          id: 25,
          color: 2,
          value: 2
        },
        {
          id: 13,
          color: 1,
          value: 1
        },
        {
          id: 41,
          color: 4,
          value: 0
        },
        {
          id: 14,
          color: 1,
          value: 1
        },
        {
          id: 3,
          color: 0,
          value: 1
        },
        {
          id: 49,
          color: 4,
          value: 4
        },
        {
          id: 9,
          color: 0,
          value: 4
        },
        {
          id: 24,
          color: 2,
          value: 1
        },
        {
          id: 47,
          color: 4,
          value: 3
        },
        {
          id: 43,
          color: 4,
          value: 1
        },
        {
          id: 11,
          color: 1,
          value: 0
        },
        {
          id: 45,
          color: 4,
          value: 2
        }
      ],
      deckindex: 39,
      trash: [],
      piles: [
        [],
        [],
        [],
        [],
        []
      ],
      hands: [{
          player: 0,
          cards: [{
              id: 45,
              color: 4,
              value: 2
            },
            {
              id: 11,
              color: 1,
              value: 0
            },
            {
              id: 43,
              color: 4,
              value: 1
            },
            {
              id: 47,
              color: 4,
              value: 3
            },
            {
              id: 24,
              color: 2,
              value: 1
            }
          ],
          hints: [{
              color: [
                0,
                0,
                0,
                0,
                0
              ],
              value: [
                0,
                0,
                0,
                0,
                0
              ]
            },
            {
              color: [
                0,
                0,
                0,
                0,
                0
              ],
              value: [
                0,
                0,
                0,
                0,
                0
              ]
            },
            {
              color: [
                0,
                0,
                0,
                0,
                0
              ],
              value: [
                0,
                0,
                0,
                0,
                0
              ]
            },
            {
              color: [
                0,
                0,
                0,
                0,
                0
              ],
              value: [
                0,
                0,
                0,
                0,
                0
              ]
            },
            {
              color: [
                0,
                0,
                0,
                0,
                0
              ],
              value: [
                0,
                0,
                0,
                0,
                0
              ]
            }
          ]
        },
        {
          player: 1,
          cards: [{
              id: 9,
              color: 0,
              value: 4
            },
            {
              id: 49,
              color: 4,
              value: 4
            },
            {
              id: 3,
              color: 0,
              value: 1
            },
            {
              id: 14,
              color: 1,
              value: 1
            },
            {
              id: 41,
              color: 4,
              value: 0
            }
          ],
          hints: [{
              color: [
                0,
                0,
                0,
                0,
                0
              ],
              value: [
                0,
                0,
                0,
                0,
                0
              ]
            },
            {
              color: [
                0,
                0,
                0,
                0,
                0
              ],
              value: [
                0,
                0,
                0,
                0,
                0
              ]
            },
            {
              color: [
                0,
                0,
                0,
                0,
                0
              ],
              value: [
                0,
                0,
                0,
                0,
                0
              ]
            },
            {
              color: [
                0,
                0,
                0,
                0,
                0
              ],
              value: [
                0,
                0,
                0,
                0,
                0
              ]
            },
            {
              color: [
                0,
                0,
                0,
                0,
                0
              ],
              value: [
                0,
                0,
                0,
                0,
                0
              ]
            }
          ]
        }
      ],
      countdown: 3,
      treats: 8
    }),
  }
  const client = Client({
    game: ZooParadeCustomScenario,
  });
  client.moves.moveHintColor(1, 1); // Player 0
  // get the latest game state
  const {
    G,
    ctx
  } = client.store.getState();
  // the board should look like this now
  delete G.movelog;
  expect(G).toEqual({
    deck: [{
        id: 48,
        color: 4,
        value: 3
      },
      {
        id: 29,
        color: 2,
        value: 4
      },
      {
        id: 39,
        color: 3,
        value: 4
      },
      {
        id: 33,
        color: 3,
        value: 1
      },
      {
        id: 2,
        color: 0,
        value: 0
      },
      {
        id: 34,
        color: 3,
        value: 1
      },
      {
        id: 18,
        color: 1,
        value: 3
      },
      {
        id: 32,
        color: 3,
        value: 0
      },
      {
        id: 40,
        color: 4,
        value: 0
      },
      {
        id: 17,
        color: 1,
        value: 3
      },
      {
        id: 20,
        color: 2,
        value: 0
      },
      {
        id: 4,
        color: 0,
        value: 1
      },
      {
        id: 10,
        color: 1,
        value: 0
      },
      {
        id: 27,
        color: 2,
        value: 3
      },
      {
        id: 12,
        color: 1,
        value: 0
      },
      {
        id: 37,
        color: 3,
        value: 3
      },
      {
        id: 36,
        color: 3,
        value: 2
      },
      {
        id: 15,
        color: 1,
        value: 2
      },
      {
        id: 46,
        color: 4,
        value: 2
      },
      {
        id: 30,
        color: 3,
        value: 0
      },
      {
        id: 38,
        color: 3,
        value: 3
      },
      {
        id: 31,
        color: 3,
        value: 0
      },
      {
        id: 23,
        color: 2,
        value: 1
      },
      {
        id: 28,
        color: 2,
        value: 3
      },
      {
        id: 7,
        color: 0,
        value: 3
      },
      {
        id: 16,
        color: 1,
        value: 2
      },
      {
        id: 42,
        color: 4,
        value: 0
      },
      {
        id: 0,
        color: 0,
        value: 0
      },
      {
        id: 26,
        color: 2,
        value: 2
      },
      {
        id: 21,
        color: 2,
        value: 0
      },
      {
        id: 19,
        color: 1,
        value: 4
      },
      {
        id: 44,
        color: 4,
        value: 1
      },
      {
        id: 35,
        color: 3,
        value: 2
      },
      {
        id: 22,
        color: 2,
        value: 0
      },
      {
        id: 6,
        color: 0,
        value: 2
      },
      {
        id: 1,
        color: 0,
        value: 0
      },
      {
        id: 8,
        color: 0,
        value: 3
      },
      {
        id: 5,
        color: 0,
        value: 2
      },
      {
        id: 25,
        color: 2,
        value: 2
      },
      {
        id: 13,
        color: 1,
        value: 1
      },
      {
        id: 41,
        color: 4,
        value: 0
      },
      {
        id: 14,
        color: 1,
        value: 1
      },
      {
        id: 3,
        color: 0,
        value: 1
      },
      {
        id: 49,
        color: 4,
        value: 4
      },
      {
        id: 9,
        color: 0,
        value: 4
      },
      {
        id: 24,
        color: 2,
        value: 1
      },
      {
        id: 47,
        color: 4,
        value: 3
      },
      {
        id: 43,
        color: 4,
        value: 1
      },
      {
        id: 11,
        color: 1,
        value: 0
      },
      {
        id: 45,
        color: 4,
        value: 2
      }
    ],
    deckindex: 39,
    trash: [],
    piles: [
      [],
      [],
      [],
      [],
      []
    ],
    hands: [{
        player: 0,
        cards: [{
            id: 45,
            color: 4,
            value: 2
          },
          {
            id: 11,
            color: 1,
            value: 0
          },
          {
            id: 43,
            color: 4,
            value: 1
          },
          {
            id: 47,
            color: 4,
            value: 3
          },
          {
            id: 24,
            color: 2,
            value: 1
          }
        ],
        hints: [{
            color: [
              0,
              0,
              0,
              0,
              0
            ],
            value: [
              0,
              0,
              0,
              0,
              0
            ]
          },
          {
            color: [
              0,
              0,
              0,
              0,
              0
            ],
            value: [
              0,
              0,
              0,
              0,
              0
            ]
          },
          {
            color: [
              0,
              0,
              0,
              0,
              0
            ],
            value: [
              0,
              0,
              0,
              0,
              0
            ]
          },
          {
            color: [
              0,
              0,
              0,
              0,
              0
            ],
            value: [
              0,
              0,
              0,
              0,
              0
            ]
          },
          {
            color: [
              0,
              0,
              0,
              0,
              0
            ],
            value: [
              0,
              0,
              0,
              0,
              0
            ]
          }
        ]
      },
      {
        player: 1,
        cards: [{
            id: 9,
            color: 0,
            value: 4
          },
          {
            id: 49,
            color: 4,
            value: 4
          },
          {
            id: 3,
            color: 0,
            value: 1
          },
          {
            id: 14,
            color: 1,
            value: 1
          },
          {
            id: 41,
            color: 4,
            value: 0
          }
        ],
        hints: [{
            color: [
              0,
              -1,
              0,
              0,
              0
            ],
            value: [
              0,
              0,
              0,
              0,
              0
            ]
          },
          {
            color: [
              0,
              -1,
              0,
              0,
              0
            ],
            value: [
              0,
              0,
              0,
              0,
              0
            ]
          },
          {
            color: [
              0,
              -1,
              0,
              0,
              0
            ],
            value: [
              0,
              0,
              0,
              0,
              0
            ]
          },
          {
            color: [
              0,
              1,
              0,
              0,
              0
            ],
            value: [
              0,
              0,
              0,
              0,
              0
            ]
          },
          {
            color: [
              0,
              -1,
              0,
              0,
              0
            ],
            value: [
              0,
              0,
              0,
              0,
              0
            ]
          }
        ]
      }
    ],
    countdown: 3,
    treats: 7
  });
})


it('Hint Value 2 - Hint Value nothing.', () => {


  // set up a specific board scenario
  const ZooParadeCustomScenario = {
    ...ZooParadeGame,
    setup: () => ({
      movelog: [],
      deck: [{
          id: 48,
          color: 4,
          value: 3
        },
        {
          id: 29,
          color: 2,
          value: 4
        },
        {
          id: 39,
          color: 3,
          value: 4
        },
        {
          id: 33,
          color: 3,
          value: 1
        },
        {
          id: 2,
          color: 0,
          value: 0
        },
        {
          id: 34,
          color: 3,
          value: 1
        },
        {
          id: 18,
          color: 1,
          value: 3
        },
        {
          id: 32,
          color: 3,
          value: 0
        },
        {
          id: 40,
          color: 4,
          value: 0
        },
        {
          id: 17,
          color: 1,
          value: 3
        },
        {
          id: 20,
          color: 2,
          value: 0
        },
        {
          id: 4,
          color: 0,
          value: 1
        },
        {
          id: 10,
          color: 1,
          value: 0
        },
        {
          id: 27,
          color: 2,
          value: 3
        },
        {
          id: 12,
          color: 1,
          value: 0
        },
        {
          id: 37,
          color: 3,
          value: 3
        },
        {
          id: 36,
          color: 3,
          value: 2
        },
        {
          id: 15,
          color: 1,
          value: 2
        },
        {
          id: 46,
          color: 4,
          value: 2
        },
        {
          id: 30,
          color: 3,
          value: 0
        },
        {
          id: 38,
          color: 3,
          value: 3
        },
        {
          id: 31,
          color: 3,
          value: 0
        },
        {
          id: 23,
          color: 2,
          value: 1
        },
        {
          id: 28,
          color: 2,
          value: 3
        },
        {
          id: 7,
          color: 0,
          value: 3
        },
        {
          id: 16,
          color: 1,
          value: 2
        },
        {
          id: 42,
          color: 4,
          value: 0
        },
        {
          id: 0,
          color: 0,
          value: 0
        },
        {
          id: 26,
          color: 2,
          value: 2
        },
        {
          id: 21,
          color: 2,
          value: 0
        },
        {
          id: 19,
          color: 1,
          value: 4
        },
        {
          id: 44,
          color: 4,
          value: 1
        },
        {
          id: 35,
          color: 3,
          value: 2
        },
        {
          id: 22,
          color: 2,
          value: 0
        },
        {
          id: 6,
          color: 0,
          value: 2
        },
        {
          id: 1,
          color: 0,
          value: 0
        },
        {
          id: 8,
          color: 0,
          value: 3
        },
        {
          id: 5,
          color: 0,
          value: 2
        },
        {
          id: 25,
          color: 2,
          value: 2
        },
        {
          id: 13,
          color: 1,
          value: 1
        },
        {
          id: 41,
          color: 4,
          value: 0
        },
        {
          id: 14,
          color: 1,
          value: 1
        },
        {
          id: 3,
          color: 0,
          value: 1
        },
        {
          id: 49,
          color: 4,
          value: 4
        },
        {
          id: 9,
          color: 0,
          value: 4
        },
        {
          id: 24,
          color: 2,
          value: 1
        },
        {
          id: 47,
          color: 4,
          value: 3
        },
        {
          id: 43,
          color: 4,
          value: 1
        },
        {
          id: 11,
          color: 1,
          value: 0
        },
        {
          id: 45,
          color: 4,
          value: 2
        }
      ],
      deckindex: 38,
      trash: [],
      piles: [
        [],
        [],
        [],
        [],
        [{
          id: 41,
          color: 4,
          value: 0
        }]
      ],
      hands: [{
          player: 0,
          cards: [{
              id: 45,
              color: 4,
              value: 2
            },
            {
              id: 11,
              color: 1,
              value: 0
            },
            {
              id: 43,
              color: 4,
              value: 1
            },
            {
              id: 47,
              color: 4,
              value: 3
            },
            {
              id: 24,
              color: 2,
              value: 1
            }
          ],
          hints: [{
              color: [
                0,
                0,
                0,
                0,
                0
              ],
              value: [
                0,
                0,
                0,
                0,
                0
              ]
            },
            {
              color: [
                0,
                0,
                0,
                0,
                0
              ],
              value: [
                0,
                0,
                0,
                0,
                0
              ]
            },
            {
              color: [
                0,
                0,
                0,
                0,
                0
              ],
              value: [
                0,
                0,
                0,
                0,
                0
              ]
            },
            {
              color: [
                0,
                0,
                0,
                0,
                0
              ],
              value: [
                0,
                0,
                0,
                0,
                0
              ]
            },
            {
              color: [
                0,
                0,
                0,
                0,
                0
              ],
              value: [
                0,
                0,
                0,
                0,
                0
              ]
            }
          ]
        },
        {
          player: 1,
          cards: [{
              id: 9,
              color: 0,
              value: 4
            },
            {
              id: 49,
              color: 4,
              value: 4
            },
            {
              id: 3,
              color: 0,
              value: 1
            },
            {
              id: 14,
              color: 1,
              value: 1
            },
            {
              id: 13,
              value: 1,
              color: 1
            }
          ],
          hints: [{
              color: [
                0,
                -1,
                0,
                0,
                0
              ],
              value: [
                0,
                0,
                0,
                0,
                0
              ]
            },
            {
              color: [
                0,
                -1,
                0,
                0,
                0
              ],
              value: [
                0,
                0,
                0,
                0,
                0
              ]
            },
            {
              color: [
                0,
                -1,
                0,
                0,
                0
              ],
              value: [
                0,
                0,
                0,
                0,
                0
              ]
            },
            {
              color: [
                0,
                1,
                0,
                0,
                0
              ],
              value: [
                0,
                0,
                0,
                0,
                0
              ]
            },
            {
              color: [
                0,
                0,
                0,
                0,
                0
              ],
              value: [
                0,
                0,
                0,
                0,
                0
              ]
            }
          ]
        }
      ],
      countdown: 3,
      treats: 7
    }),
  }
  const client = Client({
    game: ZooParadeCustomScenario,
  });
  client.moves.moveHintValue(1, 2); // Player 0
  // get the latest game state
  const {
    G,
    ctx
  } = client.store.getState();
  // the board should look like this now
  delete G.movelog;
  expect(G).toEqual({
    deck: [{
        id: 48,
        color: 4,
        value: 3
      },
      {
        id: 29,
        color: 2,
        value: 4
      },
      {
        id: 39,
        color: 3,
        value: 4
      },
      {
        id: 33,
        color: 3,
        value: 1
      },
      {
        id: 2,
        color: 0,
        value: 0
      },
      {
        id: 34,
        color: 3,
        value: 1
      },
      {
        id: 18,
        color: 1,
        value: 3
      },
      {
        id: 32,
        color: 3,
        value: 0
      },
      {
        id: 40,
        color: 4,
        value: 0
      },
      {
        id: 17,
        color: 1,
        value: 3
      },
      {
        id: 20,
        color: 2,
        value: 0
      },
      {
        id: 4,
        color: 0,
        value: 1
      },
      {
        id: 10,
        color: 1,
        value: 0
      },
      {
        id: 27,
        color: 2,
        value: 3
      },
      {
        id: 12,
        color: 1,
        value: 0
      },
      {
        id: 37,
        color: 3,
        value: 3
      },
      {
        id: 36,
        color: 3,
        value: 2
      },
      {
        id: 15,
        color: 1,
        value: 2
      },
      {
        id: 46,
        color: 4,
        value: 2
      },
      {
        id: 30,
        color: 3,
        value: 0
      },
      {
        id: 38,
        color: 3,
        value: 3
      },
      {
        id: 31,
        color: 3,
        value: 0
      },
      {
        id: 23,
        color: 2,
        value: 1
      },
      {
        id: 28,
        color: 2,
        value: 3
      },
      {
        id: 7,
        color: 0,
        value: 3
      },
      {
        id: 16,
        color: 1,
        value: 2
      },
      {
        id: 42,
        color: 4,
        value: 0
      },
      {
        id: 0,
        color: 0,
        value: 0
      },
      {
        id: 26,
        color: 2,
        value: 2
      },
      {
        id: 21,
        color: 2,
        value: 0
      },
      {
        id: 19,
        color: 1,
        value: 4
      },
      {
        id: 44,
        color: 4,
        value: 1
      },
      {
        id: 35,
        color: 3,
        value: 2
      },
      {
        id: 22,
        color: 2,
        value: 0
      },
      {
        id: 6,
        color: 0,
        value: 2
      },
      {
        id: 1,
        color: 0,
        value: 0
      },
      {
        id: 8,
        color: 0,
        value: 3
      },
      {
        id: 5,
        color: 0,
        value: 2
      },
      {
        id: 25,
        color: 2,
        value: 2
      },
      {
        id: 13,
        color: 1,
        value: 1
      },
      {
        id: 41,
        color: 4,
        value: 0
      },
      {
        id: 14,
        color: 1,
        value: 1
      },
      {
        id: 3,
        color: 0,
        value: 1
      },
      {
        id: 49,
        color: 4,
        value: 4
      },
      {
        id: 9,
        color: 0,
        value: 4
      },
      {
        id: 24,
        color: 2,
        value: 1
      },
      {
        id: 47,
        color: 4,
        value: 3
      },
      {
        id: 43,
        color: 4,
        value: 1
      },
      {
        id: 11,
        color: 1,
        value: 0
      },
      {
        id: 45,
        color: 4,
        value: 2
      }
    ],
    deckindex: 38,
    trash: [],
    piles: [
      [],
      [],
      [],
      [],
      [{
        id: 41,
        color: 4,
        value: 0
      }]
    ],
    hands: [{
        player: 0,
        cards: [{
            id: 45,
            color: 4,
            value: 2
          },
          {
            id: 11,
            color: 1,
            value: 0
          },
          {
            id: 43,
            color: 4,
            value: 1
          },
          {
            id: 47,
            color: 4,
            value: 3
          },
          {
            id: 24,
            color: 2,
            value: 1
          }
        ],
        hints: [{
            color: [
              0,
              0,
              0,
              0,
              0
            ],
            value: [
              0,
              0,
              0,
              0,
              0
            ]
          },
          {
            color: [
              0,
              0,
              0,
              0,
              0
            ],
            value: [
              0,
              0,
              0,
              0,
              0
            ]
          },
          {
            color: [
              0,
              0,
              0,
              0,
              0
            ],
            value: [
              0,
              0,
              0,
              0,
              0
            ]
          },
          {
            color: [
              0,
              0,
              0,
              0,
              0
            ],
            value: [
              0,
              0,
              0,
              0,
              0
            ]
          },
          {
            color: [
              0,
              0,
              0,
              0,
              0
            ],
            value: [
              0,
              0,
              0,
              0,
              0
            ]
          }
        ]
      },
      {
        player: 1,
        cards: [{
            id: 9,
            color: 0,
            value: 4
          },
          {
            id: 49,
            color: 4,
            value: 4
          },
          {
            id: 3,
            color: 0,
            value: 1
          },
          {
            id: 14,
            color: 1,
            value: 1
          },
          {
            id: 13,
            value: 1,
            color: 1
          }
        ],
        hints: [{
            value: [
              0,
              0,
              -1,
              0,
              0
            ],
            color: [
              0,
              -1,
              0,
              0,
              0
            ]
          },
          {
            value: [
              0,
              0,
              -1,
              0,
              0
            ],
            color: [
              0,
              -1,
              0,
              0,
              0
            ]
          },
          {
            value: [
              0,
              0,
              -1,
              0,
              0
            ],
            color: [
              0,
              -1,
              0,
              0,
              0
            ]
          },
          {
            value: [
              0,
              0,
              -1,
              0,
              0
            ],
            color: [
              0,
              1,
              0,
              0,
              0
            ]
          },
          {
            value: [
              0,
              0,
              -1,
              0,
              0
            ],
            color: [
              0,
              0,
              0,
              0,
              0
            ]
          }
        ]
      }
    ],
    countdown: 3,
    treats: 6
  });
})


it('Hint 3 - No Hint token.', () => {

  // set up a specific board scenario
  const ZooParadeCustomScenario = {
  ...ZooParadeGame,
  setup: () => (
    {
      deck: [
        {
          id: 2,
          color: 0,
          value: 0
        },
        {
          id: 46,
          color: 4,
          value: 2
        },
        {
          id: 48,
          color: 4,
          value: 3
        },
        {
          id: 19,
          color: 1,
          value: 4
        },
        {
          id: 17,
          color: 1,
          value: 3
        },
        {
          id: 40,
          color: 4,
          value: 0
        },
        {
          id: 22,
          color: 2,
          value: 0
        },
        {
          id: 0,
          color: 0,
          value: 0
        },
        {
          id: 8,
          color: 0,
          value: 3
        },
        {
          id: 27,
          color: 2,
          value: 3
        },
        {
          id: 3,
          color: 0,
          value: 1
        },
        {
          id: 9,
          color: 0,
          value: 4
        },
        {
          id: 1,
          color: 0,
          value: 0
        },
        {
          id: 25,
          color: 2,
          value: 2
        },
        {
          id: 39,
          color: 3,
          value: 4
        },
        {
          id: 37,
          color: 3,
          value: 3
        },
        {
          id: 24,
          color: 2,
          value: 1
        },
        {
          id: 30,
          color: 3,
          value: 0
        },
        {
          id: 23,
          color: 2,
          value: 1
        },
        {
          id: 41,
          color: 4,
          value: 0
        },
        {
          id: 15,
          color: 1,
          value: 2
        },
        {
          id: 42,
          color: 4,
          value: 0
        },
        {
          id: 43,
          color: 4,
          value: 1
        },
        {
          id: 16,
          color: 1,
          value: 2
        },
        {
          id: 10,
          color: 1,
          value: 0
        },
        {
          id: 35,
          color: 3,
          value: 2
        },
        {
          id: 47,
          color: 4,
          value: 3
        },
        {
          id: 33,
          color: 3,
          value: 1
        },
        {
          id: 7,
          color: 0,
          value: 3
        },
        {
          id: 20,
          color: 2,
          value: 0
        },
        {
          id: 36,
          color: 3,
          value: 2
        },
        {
          id: 28,
          color: 2,
          value: 3
        },
        {
          id: 14,
          color: 1,
          value: 1
        },
        {
          id: 5,
          color: 0,
          value: 2
        },
        {
          id: 21,
          color: 2,
          value: 0
        },
        {
          id: 34,
          color: 3,
          value: 1
        },
        {
          id: 11,
          color: 1,
          value: 0
        },
        {
          id: 13,
          color: 1,
          value: 1
        },
        {
          id: 29,
          color: 2,
          value: 4
        },
        {
          id: 38,
          color: 3,
          value: 3
        },
        {
          id: 49,
          color: 4,
          value: 4
        },
        {
          id: 4,
          color: 0,
          value: 1
        },
        {
          id: 18,
          color: 1,
          value: 3
        },
        {
          id: 26,
          color: 2,
          value: 2
        },
        {
          id: 6,
          color: 0,
          value: 2
        },
        {
          id: 12,
          color: 1,
          value: 0
        },
        {
          id: 32,
          color: 3,
          value: 0
        },
        {
          id: 45,
          color: 4,
          value: 2
        },
        {
          id: 31,
          color: 3,
          value: 0
        },
        {
          id: 44,
          color: 4,
          value: 1
        }
      ],
      deckindex: 39,
      trash: [],
      piles: [
        [],
        [],
        [],
        [],
        []
      ],
      hands: [
        {
          player: 0,
          cards: [
            {
              id: 44,
              color: 4,
              value: 1
            },
            {
              id: 31,
              color: 3,
              value: 0
            },
            {
              id: 45,
              color: 4,
              value: 2
            },
            {
              id: 32,
              color: 3,
              value: 0
            },
            {
              id: 12,
              color: 1,
              value: 0
            }
          ],
          hints: [
            {
              value: [
                0,
                1,
                -1,
                -1,
                -1
              ],
              color: [
                0,
                0,
                0,
                0,
                0
              ]
            },
            {
              value: [
                0,
                -1,
                -1,
                -1,
                -1
              ],
              color: [
                0,
                0,
                0,
                0,
                0
              ]
            },
            {
              value: [
                0,
                -1,
                1,
                -1,
                -1
              ],
              color: [
                0,
                0,
                0,
                0,
                0
              ]
            },
            {
              value: [
                0,
                -1,
                -1,
                -1,
                -1
              ],
              color: [
                0,
                0,
                0,
                0,
                0
              ]
            },
            {
              value: [
                0,
                -1,
                -1,
                -1,
                -1
              ],
              color: [
                0,
                0,
                0,
                0,
                0
              ]
            }
          ]
        },
        {
          player: 1,
          cards: [
            {
              id: 6,
              color: 0,
              value: 2
            },
            {
              id: 26,
              color: 2,
              value: 2
            },
            {
              id: 18,
              color: 1,
              value: 3
            },
            {
              id: 4,
              color: 0,
              value: 1
            },
            {
              id: 49,
              color: 4,
              value: 4
            }
          ],
          hints: [
            {
              value: [
                0,
                -1,
                1,
                -1,
                -1
              ],
              color: [
                0,
                0,
                0,
                0,
                0
              ]
            },
            {
              value: [
                0,
                -1,
                1,
                -1,
                -1
              ],
              color: [
                0,
                0,
                0,
                0,
                0
              ]
            },
            {
              value: [
                0,
                -1,
                -1,
                1,
                -1
              ],
              color: [
                0,
                0,
                0,
                0,
                0
              ]
            },
            {
              value: [
                0,
                1,
                -1,
                -1,
                -1
              ],
              color: [
                0,
                0,
                0,
                0,
                0
              ]
            },
            {
              value: [
                0,
                -1,
                -1,
                -1,
                1
              ],
              color: [
                0,
                0,
                0,
                0,
                0
              ]
            }
          ]
        }
      ],
      countdown: 3,
      treats: 0,
      movelog: [
      ]
    }
  ),
  }
  const client = Client({
  game: ZooParadeCustomScenario,
  });
  client.moves.moveHintValue(1,3); // Player 0
  // get the latest game state
  const {
  G,
  ctx
  } = client.store.getState();
  // the board should look like this now
  delete G.movelog;

  expect(G).toEqual(
    {
      deck: [
        {
          id: 2,
          color: 0,
          value: 0
        },
        {
          id: 46,
          color: 4,
          value: 2
        },
        {
          id: 48,
          color: 4,
          value: 3
        },
        {
          id: 19,
          color: 1,
          value: 4
        },
        {
          id: 17,
          color: 1,
          value: 3
        },
        {
          id: 40,
          color: 4,
          value: 0
        },
        {
          id: 22,
          color: 2,
          value: 0
        },
        {
          id: 0,
          color: 0,
          value: 0
        },
        {
          id: 8,
          color: 0,
          value: 3
        },
        {
          id: 27,
          color: 2,
          value: 3
        },
        {
          id: 3,
          color: 0,
          value: 1
        },
        {
          id: 9,
          color: 0,
          value: 4
        },
        {
          id: 1,
          color: 0,
          value: 0
        },
        {
          id: 25,
          color: 2,
          value: 2
        },
        {
          id: 39,
          color: 3,
          value: 4
        },
        {
          id: 37,
          color: 3,
          value: 3
        },
        {
          id: 24,
          color: 2,
          value: 1
        },
        {
          id: 30,
          color: 3,
          value: 0
        },
        {
          id: 23,
          color: 2,
          value: 1
        },
        {
          id: 41,
          color: 4,
          value: 0
        },
        {
          id: 15,
          color: 1,
          value: 2
        },
        {
          id: 42,
          color: 4,
          value: 0
        },
        {
          id: 43,
          color: 4,
          value: 1
        },
        {
          id: 16,
          color: 1,
          value: 2
        },
        {
          id: 10,
          color: 1,
          value: 0
        },
        {
          id: 35,
          color: 3,
          value: 2
        },
        {
          id: 47,
          color: 4,
          value: 3
        },
        {
          id: 33,
          color: 3,
          value: 1
        },
        {
          id: 7,
          color: 0,
          value: 3
        },
        {
          id: 20,
          color: 2,
          value: 0
        },
        {
          id: 36,
          color: 3,
          value: 2
        },
        {
          id: 28,
          color: 2,
          value: 3
        },
        {
          id: 14,
          color: 1,
          value: 1
        },
        {
          id: 5,
          color: 0,
          value: 2
        },
        {
          id: 21,
          color: 2,
          value: 0
        },
        {
          id: 34,
          color: 3,
          value: 1
        },
        {
          id: 11,
          color: 1,
          value: 0
        },
        {
          id: 13,
          color: 1,
          value: 1
        },
        {
          id: 29,
          color: 2,
          value: 4
        },
        {
          id: 38,
          color: 3,
          value: 3
        },
        {
          id: 49,
          color: 4,
          value: 4
        },
        {
          id: 4,
          color: 0,
          value: 1
        },
        {
          id: 18,
          color: 1,
          value: 3
        },
        {
          id: 26,
          color: 2,
          value: 2
        },
        {
          id: 6,
          color: 0,
          value: 2
        },
        {
          id: 12,
          color: 1,
          value: 0
        },
        {
          id: 32,
          color: 3,
          value: 0
        },
        {
          id: 45,
          color: 4,
          value: 2
        },
        {
          id: 31,
          color: 3,
          value: 0
        },
        {
          id: 44,
          color: 4,
          value: 1
        }
      ],
      deckindex: 39,
      trash: [],
      piles: [
        [],
        [],
        [],
        [],
        []
      ],
      hands: [
        {
          player: 0,
          cards: [
            {
              id: 44,
              color: 4,
              value: 1
            },
            {
              id: 31,
              color: 3,
              value: 0
            },
            {
              id: 45,
              color: 4,
              value: 2
            },
            {
              id: 32,
              color: 3,
              value: 0
            },
            {
              id: 12,
              color: 1,
              value: 0
            }
          ],
          hints: [
            {
              value: [
                0,
                1,
                -1,
                -1,
                -1
              ],
              color: [
                0,
                0,
                0,
                0,
                0
              ]
            },
            {
              value: [
                0,
                -1,
                -1,
                -1,
                -1
              ],
              color: [
                0,
                0,
                0,
                0,
                0
              ]
            },
            {
              value: [
                0,
                -1,
                1,
                -1,
                -1
              ],
              color: [
                0,
                0,
                0,
                0,
                0
              ]
            },
            {
              value: [
                0,
                -1,
                -1,
                -1,
                -1
              ],
              color: [
                0,
                0,
                0,
                0,
                0
              ]
            },
            {
              value: [
                0,
                -1,
                -1,
                -1,
                -1
              ],
              color: [
                0,
                0,
                0,
                0,
                0
              ]
            }
          ]
        },
        {
          player: 1,
          cards: [
            {
              id: 6,
              color: 0,
              value: 2
            },
            {
              id: 26,
              color: 2,
              value: 2
            },
            {
              id: 18,
              color: 1,
              value: 3
            },
            {
              id: 4,
              color: 0,
              value: 1
            },
            {
              id: 49,
              color: 4,
              value: 4
            }
          ],
          hints: [
            {
              value: [
                0,
                -1,
                1,
                -1,
                -1
              ],
              color: [
                0,
                0,
                0,
                0,
                0
              ]
            },
            {
              value: [
                0,
                -1,
                1,
                -1,
                -1
              ],
              color: [
                0,
                0,
                0,
                0,
                0
              ]
            },
            {
              value: [
                0,
                -1,
                -1,
                1,
                -1
              ],
              color: [
                0,
                0,
                0,
                0,
                0
              ]
            },
            {
              value: [
                0,
                1,
                -1,
                -1,
                -1
              ],
              color: [
                0,
                0,
                0,
                0,
                0
              ]
            },
            {
              value: [
                0,
                -1,
                -1,
                -1,
                1
              ],
              color: [
                0,
                0,
                0,
                0,
                0
              ]
            }
          ]
        }
      ],
      countdown: 3,
      treats: 0,
    }
  );
})