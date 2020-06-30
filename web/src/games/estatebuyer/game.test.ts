import { INVALID_MOVE } from 'boardgame.io/core';
import { Client } from 'boardgame.io/client';
import { EstateBuyerGame, IG, getScoreBoard, HighestBid, Phases } from './game';
import { Local } from 'boardgame.io/multiplayer';
import IPlayer from './player';

const defaultPlayer:IPlayer = {
    buildings: [],
    checks: [],
    bid: 0,
    money: 15,
    passed: false,
    selectedCard: null,
    newCard: null,
    spentCard: null,
    spentMoney: null,
}

const defaultG:IG = {
    hotseat: true,
    round: 0,
    players: [
        defaultPlayer,
        defaultPlayer,
    ],
    buildings: [],
    checks: [],
    cardsontable: [],
}

test('getting scoreboard', () => {
    let G: IG = {
        ...defaultG,
        players: [
            {
                ...defaultPlayer,
                checks: [
                    {
                        number: 0,
                        value: 0,
                        showing: false
                    },
                    {
                        number: 3,
                        value: 3,
                        showing: false
                    }
                ],
                money: 15,
                bid: 1,
            },
            {
                ...defaultPlayer,
                checks: [
                    {
                        number: 4,
                        value: 4,
                        showing: false
                    },
                    {
                        number: 11,
                        value: 11,
                        showing: false
                    }
                ],
                money: 0,
                passed: true,
            }
        ],
    };
  
    expect(getScoreBoard(G)).toEqual([
        {
            playerID: "0",
            score: 18,
            bid: 1,
            money: 15,
            passed: false,
        },
        {
            playerID: "1",
            score: 15,
            bid: 0,
            money: 0,
            passed: true,
        },
    ]);
  });

test('highest bid', () => {
    let players:any = [
        {
            ...defaultPlayer,
            bid: 1,
        },
        {
            ...defaultPlayer,
            bid: 0,
        },
        {
            ...defaultPlayer,
            bid: 6,
        },
    ];

    expect(HighestBid(players)).toEqual(6);
});

it('should be valid moves', () => {
    const spec = {
        game: EstateBuyerGame,
        multiplayer: Local(),
    };

    const clients = [
        Client({ ...spec, playerID: '0' } as any) as any,
        Client({ ...spec, playerID: '1' } as any) as any
    ];

    clients[0].start();
    clients[1].start();

    clients[0].moves.GameStart();

    let state = clients[0].getState();
    let ctx = state.ctx;

    expect(ctx.phase).toEqual(Phases.auction);

    state = clients[0].getState();
    ctx = state.ctx;
    
    clients[ctx.currentPlayer].moves.MovePlaceBid(1);
    
    state = clients[0].getState();
    ctx = state.ctx;

    clients[ctx.currentPlayer].moves.MovePlaceBid(2);

    state = clients[0].getState();
    ctx = state.ctx;

    clients[ctx.currentPlayer].moves.MovePassBid();
});
