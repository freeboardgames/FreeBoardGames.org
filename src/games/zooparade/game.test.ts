import {
    Client
} from 'boardgame.io/client';
import {
    ZooParadeGame
} from './game';


it('End to End - 1', () => {
    // set up a specific board scenario
    const ZooParadeCustomScenario = {
        ...ZooParadeGame,
        setup: () => ({
            deck: [{
                    id: 33,
                    color: 3,
                    value: 1
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
                    id: 13,
                    color: 1,
                    value: 1
                },
                {
                    id: 24,
                    color: 2,
                    value: 1
                },
                {
                    id: 10,
                    color: 1,
                    value: 0
                },
                {
                    id: 47,
                    color: 4,
                    value: 3
                },
                {
                    id: 7,
                    color: 0,
                    value: 3
                },
                {
                    id: 44,
                    color: 4,
                    value: 1
                },
                {
                    id: 11,
                    color: 1,
                    value: 0
                },
                {
                    id: 21,
                    color: 2,
                    value: 0
                },
                {
                    id: 30,
                    color: 3,
                    value: 0
                },
                {
                    id: 4,
                    color: 0,
                    value: 1
                },
                {
                    id: 3,
                    color: 0,
                    value: 1
                },
                {
                    id: 32,
                    color: 3,
                    value: 0
                },
                {
                    id: 28,
                    color: 2,
                    value: 3
                },
                {
                    id: 45,
                    color: 4,
                    value: 2
                },
                {
                    id: 2,
                    color: 0,
                    value: 0
                },
                {
                    id: 27,
                    color: 2,
                    value: 3
                },
                {
                    id: 23,
                    color: 2,
                    value: 1
                },
                {
                    id: 26,
                    color: 2,
                    value: 2
                },
                {
                    id: 43,
                    color: 4,
                    value: 1
                },
                {
                    id: 39,
                    color: 3,
                    value: 4
                },
                {
                    id: 16,
                    color: 1,
                    value: 2
                },
                {
                    id: 0,
                    color: 0,
                    value: 0
                },
                {
                    id: 12,
                    color: 1,
                    value: 0
                },
                {
                    id: 14,
                    color: 1,
                    value: 1
                },
                {
                    id: 25,
                    color: 2,
                    value: 2
                },
                {
                    id: 22,
                    color: 2,
                    value: 0
                },
                {
                    id: 36,
                    color: 3,
                    value: 2
                },
                {
                    id: 40,
                    color: 4,
                    value: 0
                },
                {
                    id: 15,
                    color: 1,
                    value: 2
                },
                {
                    id: 38,
                    color: 3,
                    value: 3
                },
                {
                    id: 9,
                    color: 0,
                    value: 4
                },
                {
                    id: 35,
                    color: 3,
                    value: 2
                },
                {
                    id: 42,
                    color: 4,
                    value: 0
                },
                {
                    id: 18,
                    color: 1,
                    value: 3
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
                    id: 20,
                    color: 2,
                    value: 0
                },
                {
                    id: 46,
                    color: 4,
                    value: 2
                },
                {
                    id: 31,
                    color: 3,
                    value: 0
                },
                {
                    id: 37,
                    color: 3,
                    value: 3
                },
                {
                    id: 34,
                    color: 3,
                    value: 1
                },
                {
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
                    id: 41,
                    color: 4,
                    value: 0
                },
                {
                    id: 49,
                    color: 4,
                    value: 4
                },
                {
                    id: 6,
                    color: 0,
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
                            id: 6,
                            color: 0,
                            value: 2
                        },
                        {
                            id: 49,
                            color: 4,
                            value: 4
                        },
                        {
                            id: 41,
                            color: 4,
                            value: 0
                        },
                        {
                            id: 29,
                            color: 2,
                            value: 4
                        },
                        {
                            id: 48,
                            color: 4,
                            value: 3
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
                            id: 34,
                            color: 3,
                            value: 1
                        },
                        {
                            id: 37,
                            color: 3,
                            value: 3
                        },
                        {
                            id: 31,
                            color: 3,
                            value: 0
                        },
                        {
                            id: 46,
                            color: 4,
                            value: 2
                        },
                        {
                            id: 20,
                            color: 2,
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
    const {
        G,
        ctx
    } = client.store.getState();
    // the board should look like this now
    expect(G).toEqual({
        deck: [{
                id: 33,
                color: 3,
                value: 1
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
                id: 13,
                color: 1,
                value: 1
            },
            {
                id: 24,
                color: 2,
                value: 1
            },
            {
                id: 10,
                color: 1,
                value: 0
            },
            {
                id: 47,
                color: 4,
                value: 3
            },
            {
                id: 7,
                color: 0,
                value: 3
            },
            {
                id: 44,
                color: 4,
                value: 1
            },
            {
                id: 11,
                color: 1,
                value: 0
            },
            {
                id: 21,
                color: 2,
                value: 0
            },
            {
                id: 30,
                color: 3,
                value: 0
            },
            {
                id: 4,
                color: 0,
                value: 1
            },
            {
                id: 3,
                color: 0,
                value: 1
            },
            {
                id: 32,
                color: 3,
                value: 0
            },
            {
                id: 28,
                color: 2,
                value: 3
            },
            {
                id: 45,
                color: 4,
                value: 2
            },
            {
                id: 2,
                color: 0,
                value: 0
            },
            {
                id: 27,
                color: 2,
                value: 3
            },
            {
                id: 23,
                color: 2,
                value: 1
            },
            {
                id: 26,
                color: 2,
                value: 2
            },
            {
                id: 43,
                color: 4,
                value: 1
            },
            {
                id: 39,
                color: 3,
                value: 4
            },
            {
                id: 16,
                color: 1,
                value: 2
            },
            {
                id: 0,
                color: 0,
                value: 0
            },
            {
                id: 12,
                color: 1,
                value: 0
            },
            {
                id: 14,
                color: 1,
                value: 1
            },
            {
                id: 25,
                color: 2,
                value: 2
            },
            {
                id: 22,
                color: 2,
                value: 0
            },
            {
                id: 36,
                color: 3,
                value: 2
            },
            {
                id: 40,
                color: 4,
                value: 0
            },
            {
                id: 15,
                color: 1,
                value: 2
            },
            {
                id: 38,
                color: 3,
                value: 3
            },
            {
                id: 9,
                color: 0,
                value: 4
            },
            {
                id: 35,
                color: 3,
                value: 2
            },
            {
                id: 42,
                color: 4,
                value: 0
            },
            {
                id: 18,
                color: 1,
                value: 3
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
                id: 20,
                color: 2,
                value: 0
            },
            {
                id: 46,
                color: 4,
                value: 2
            },
            {
                id: 31,
                color: 3,
                value: 0
            },
            {
                id: 37,
                color: 3,
                value: 3
            },
            {
                id: 34,
                color: 3,
                value: 1
            },
            {
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
                id: 41,
                color: 4,
                value: 0
            },
            {
                id: 49,
                color: 4,
                value: 4
            },
            {
                id: 6,
                color: 0,
                value: 2
            }
        ],
        deckindex: 31,
        trash: [{
                id: 37,
                color: 3,
                value: 3
            },
            {
                id: 48,
                color: 4,
                value: 3
            },
            {
                id: 49,
                color: 4,
                value: 4
            },
            {
                id: 5,
                value: 2,
                color: 0
            },
            {
                id: 34,
                color: 3,
                value: 1
            },
            {
                id: 35,
                value: 2,
                color: 3
            }
        ],
        piles: [
            [{
                id: 1,
                value: 0,
                color: 0
            }],
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
                        id: 6,
                        color: 0,
                        value: 2
                    },
                    {
                        id: 42,
                        value: 0,
                        color: 4
                    },
                    {
                        id: 38,
                        value: 3,
                        color: 3
                    },
                    {
                        id: 29,
                        color: 2,
                        value: 4
                    },
                    {
                        id: 18,
                        value: 3,
                        color: 1
                    }
                ],
                hints: [{
                        value: [
                            0,
                            0,
                            0,
                            0,
                            -1
                        ],
                        color: [
                            0,
                            0,
                            0,
                            -1,
                            -1
                        ]
                    },
                    {
                        value: [
                            0,
                            0,
                            0,
                            0,
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
                        value: [
                            0,
                            0,
                            0,
                            0,
                            1
                        ],
                        color: [
                            0,
                            0,
                            0,
                            -1,
                            -1
                        ]
                    },
                    {
                        value: [
                            0,
                            0,
                            0,
                            0,
                            -1
                        ],
                        color: [
                            0,
                            0,
                            0,
                            -1,
                            0
                        ]
                    }
                ]
            },
            {
                player: 1,
                cards: [{
                        id: 9,
                        value: 4,
                        color: 0
                    },
                    {
                        id: 8,
                        value: 3,
                        color: 0
                    },
                    {
                        id: 31,
                        color: 3,
                        value: 0
                    },
                    {
                        id: 46,
                        color: 4,
                        value: 2
                    },
                    {
                        id: 20,
                        color: 2,
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
        countdown: 0,
        treats: 7
    })


    expect(ctx.gameover).toEqual({
        draw: true
    })

})




it('End to End - 2', () => {
    // set up a specific board scenario
    const ZooParadeCustomScenario = {
        ...ZooParadeGame,
        setup: () => ({
                deck: [{
                        id: 45,
                        color: 4,
                        value: 2
                    },
                    {
                        id: 18,
                        color: 1,
                        value: 3
                    },
                    {
                        id: 7,
                        color: 0,
                        value: 3
                    },
                    {
                        id: 10,
                        color: 1,
                        value: 0
                    },
                    {
                        id: 19,
                        color: 1,
                        value: 4
                    },
                    {
                        id: 11,
                        color: 1,
                        value: 0
                    },
                    {
                        id: 1,
                        color: 0,
                        value: 0
                    },
                    {
                        id: 39,
                        color: 3,
                        value: 4
                    },
                    {
                        id: 0,
                        color: 0,
                        value: 0
                    },
                    {
                        id: 27,
                        color: 2,
                        value: 3
                    },
                    {
                        id: 46,
                        color: 4,
                        value: 2
                    },
                    {
                        id: 25,
                        color: 2,
                        value: 2
                    },
                    {
                        id: 49,
                        color: 4,
                        value: 4
                    },
                    {
                        id: 2,
                        color: 0,
                        value: 0
                    },
                    {
                        id: 32,
                        color: 3,
                        value: 0
                    },
                    {
                        id: 8,
                        color: 0,
                        value: 3
                    },
                    {
                        id: 6,
                        color: 0,
                        value: 2
                    },
                    {
                        id: 38,
                        color: 3,
                        value: 3
                    },
                    {
                        id: 41,
                        color: 4,
                        value: 0
                    },
                    {
                        id: 31,
                        color: 3,
                        value: 0
                    },
                    {
                        id: 34,
                        color: 3,
                        value: 1
                    },
                    {
                        id: 28,
                        color: 2,
                        value: 3
                    },
                    {
                        id: 5,
                        color: 0,
                        value: 2
                    },
                    {
                        id: 13,
                        color: 1,
                        value: 1
                    },
                    {
                        id: 36,
                        color: 3,
                        value: 2
                    },
                    {
                        id: 43,
                        color: 4,
                        value: 1
                    },
                    {
                        id: 15,
                        color: 1,
                        value: 2
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
                        id: 4,
                        color: 0,
                        value: 1
                    },
                    {
                        id: 3,
                        color: 0,
                        value: 1
                    },
                    {
                        id: 40,
                        color: 4,
                        value: 0
                    },
                    {
                        id: 42,
                        color: 4,
                        value: 0
                    },
                    {
                        id: 48,
                        color: 4,
                        value: 3
                    },
                    {
                        id: 9,
                        color: 0,
                        value: 4
                    },
                    {
                        id: 30,
                        color: 3,
                        value: 0
                    },
                    {
                        id: 33,
                        color: 3,
                        value: 1
                    },
                    {
                        id: 44,
                        color: 4,
                        value: 1
                    },
                    {
                        id: 24,
                        color: 2,
                        value: 1
                    },
                    {
                        id: 29,
                        color: 2,
                        value: 4
                    },
                    {
                        id: 23,
                        color: 2,
                        value: 1
                    },
                    {
                        id: 12,
                        color: 1,
                        value: 0
                    },
                    {
                        id: 14,
                        color: 1,
                        value: 1
                    },
                    {
                        id: 17,
                        color: 1,
                        value: 3
                    },
                    {
                        id: 16,
                        color: 1,
                        value: 2
                    },
                    {
                        id: 47,
                        color: 4,
                        value: 3
                    },
                    {
                        id: 37,
                        color: 3,
                        value: 3
                    },
                    {
                        id: 20,
                        color: 2,
                        value: 0
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
                                id: 20,
                                color: 2,
                                value: 0
                            },
                            {
                                id: 37,
                                color: 3,
                                value: 3
                            },
                            {
                                id: 47,
                                color: 4,
                                value: 3
                            },
                            {
                                id: 16,
                                color: 1,
                                value: 2
                            },
                            {
                                id: 17,
                                color: 1,
                                value: 3
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
                                id: 14,
                                color: 1,
                                value: 1
                            },
                            {
                                id: 12,
                                color: 1,
                                value: 0
                            },
                            {
                                id: 23,
                                color: 2,
                                value: 1
                            },
                            {
                                id: 29,
                                color: 2,
                                value: 4
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
                    }
                ],
                countdown: 3,
                treats: 8
            }



        ),
    }
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
    const {
        G,
        ctx
    } = client.store.getState();
    // the board should look like this now
    expect(G).toEqual(

        {
            deck: [{
                    id: 45,
                    color: 4,
                    value: 2
                },
                {
                    id: 18,
                    color: 1,
                    value: 3
                },
                {
                    id: 7,
                    color: 0,
                    value: 3
                },
                {
                    id: 10,
                    color: 1,
                    value: 0
                },
                {
                    id: 19,
                    color: 1,
                    value: 4
                },
                {
                    id: 11,
                    color: 1,
                    value: 0
                },
                {
                    id: 1,
                    color: 0,
                    value: 0
                },
                {
                    id: 39,
                    color: 3,
                    value: 4
                },
                {
                    id: 0,
                    color: 0,
                    value: 0
                },
                {
                    id: 27,
                    color: 2,
                    value: 3
                },
                {
                    id: 46,
                    color: 4,
                    value: 2
                },
                {
                    id: 25,
                    color: 2,
                    value: 2
                },
                {
                    id: 49,
                    color: 4,
                    value: 4
                },
                {
                    id: 2,
                    color: 0,
                    value: 0
                },
                {
                    id: 32,
                    color: 3,
                    value: 0
                },
                {
                    id: 8,
                    color: 0,
                    value: 3
                },
                {
                    id: 6,
                    color: 0,
                    value: 2
                },
                {
                    id: 38,
                    color: 3,
                    value: 3
                },
                {
                    id: 41,
                    color: 4,
                    value: 0
                },
                {
                    id: 31,
                    color: 3,
                    value: 0
                },
                {
                    id: 34,
                    color: 3,
                    value: 1
                },
                {
                    id: 28,
                    color: 2,
                    value: 3
                },
                {
                    id: 5,
                    color: 0,
                    value: 2
                },
                {
                    id: 13,
                    color: 1,
                    value: 1
                },
                {
                    id: 36,
                    color: 3,
                    value: 2
                },
                {
                    id: 43,
                    color: 4,
                    value: 1
                },
                {
                    id: 15,
                    color: 1,
                    value: 2
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
                    id: 4,
                    color: 0,
                    value: 1
                },
                {
                    id: 3,
                    color: 0,
                    value: 1
                },
                {
                    id: 40,
                    color: 4,
                    value: 0
                },
                {
                    id: 42,
                    color: 4,
                    value: 0
                },
                {
                    id: 48,
                    color: 4,
                    value: 3
                },
                {
                    id: 9,
                    color: 0,
                    value: 4
                },
                {
                    id: 30,
                    color: 3,
                    value: 0
                },
                {
                    id: 33,
                    color: 3,
                    value: 1
                },
                {
                    id: 44,
                    color: 4,
                    value: 1
                },
                {
                    id: 24,
                    color: 2,
                    value: 1
                },
                {
                    id: 29,
                    color: 2,
                    value: 4
                },
                {
                    id: 23,
                    color: 2,
                    value: 1
                },
                {
                    id: 12,
                    color: 1,
                    value: 0
                },
                {
                    id: 14,
                    color: 1,
                    value: 1
                },
                {
                    id: 17,
                    color: 1,
                    value: 3
                },
                {
                    id: 16,
                    color: 1,
                    value: 2
                },
                {
                    id: 47,
                    color: 4,
                    value: 3
                },
                {
                    id: 37,
                    color: 3,
                    value: 3
                },
                {
                    id: 20,
                    color: 2,
                    value: 0
                }
            ],
            deckindex: 0,
            trash: [{
                    id: 44,
                    value: 1,
                    color: 4
                },
                {
                    id: 40,
                    value: 0,
                    color: 4
                },
                {
                    id: 21,
                    value: 0,
                    color: 2
                },
                {
                    id: 24,
                    color: 2,
                    value: 1
                },
                {
                    id: 22,
                    value: 0,
                    color: 2
                },
                {
                    id: 36,
                    value: 2,
                    color: 3
                },
                {
                    id: 15,
                    value: 2,
                    color: 1
                },
                {
                    id: 13,
                    value: 1,
                    color: 1
                },
                {
                    id: 34,
                    value: 1,
                    color: 3
                },
                {
                    id: 31,
                    value: 0,
                    color: 3
                },
                {
                    id: 41,
                    value: 0,
                    color: 4
                },
                {
                    id: 38,
                    value: 3,
                    color: 3
                },
                {
                    id: 6,
                    value: 2,
                    color: 0
                },
                {
                    id: 25,
                    value: 2,
                    color: 2
                }
            ],
            piles: [
                [{
                        id: 2,
                        value: 0,
                        color: 0
                    },
                    {
                        id: 4,
                        value: 1,
                        color: 0
                    },
                    {
                        id: 5,
                        value: 2,
                        color: 0
                    },
                    {
                        id: 8,
                        value: 3,
                        color: 0
                    },
                    {
                        id: 9,
                        value: 4,
                        color: 0
                    }
                ],
                [{
                        id: 12,
                        color: 1,
                        value: 0
                    },
                    {
                        id: 14,
                        color: 1,
                        value: 1
                    },
                    {
                        id: 16,
                        color: 1,
                        value: 2
                    },
                    {
                        id: 17,
                        color: 1,
                        value: 3
                    },
                    {
                        id: 19,
                        value: 4,
                        color: 1
                    }
                ],
                [{
                        id: 20,
                        color: 2,
                        value: 0
                    },
                    {
                        id: 23,
                        color: 2,
                        value: 1
                    },
                    {
                        id: 26,
                        value: 2,
                        color: 2
                    },
                    {
                        id: 28,
                        value: 3,
                        color: 2
                    },
                    {
                        id: 29,
                        color: 2,
                        value: 4
                    }
                ],
                [{
                        id: 30,
                        value: 0,
                        color: 3
                    },
                    {
                        id: 33,
                        value: 1,
                        color: 3
                    },
                    {
                        id: 35,
                        value: 2,
                        color: 3
                    },
                    {
                        id: 37,
                        color: 3,
                        value: 3
                    },
                    {
                        id: 39,
                        value: 4,
                        color: 3
                    }
                ],
                [{
                        id: 42,
                        value: 0,
                        color: 4
                    },
                    {
                        id: 43,
                        value: 1,
                        color: 4
                    },
                    {
                        id: 46,
                        value: 2,
                        color: 4
                    },
                    {
                        id: 47,
                        color: 4,
                        value: 3
                    },
                    {
                        id: 49,
                        value: 4,
                        color: 4
                    }
                ]
            ],
            hands: [{
                    player: 0,
                    cards: [{
                            id: 18,
                            value: 3,
                            color: 1
                        },
                        {
                            id: 27,
                            value: 3,
                            color: 2
                        },
                        {
                            id: 11,
                            value: 0,
                            color: 1
                        },
                        {
                            id: 3,
                            value: 1,
                            color: 0
                        },
                        {
                            id: 10,
                            value: 0,
                            color: 1
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
                            id: 48,
                            value: 3,
                            color: 4
                        },
                        {
                            id: 32,
                            value: 0,
                            color: 3
                        },
                        {
                            id: 1,
                            value: 0,
                            color: 0
                        },
                        {
                            id: 7,
                            value: 3,
                            color: 0
                        },
                        {
                            id: 0,
                            value: 0,
                            color: 0
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
            countdown: 2,
            treats: 8
        }

    );
})