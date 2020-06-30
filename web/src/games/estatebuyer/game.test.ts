import { INVALID_MOVE } from 'boardgame.io/core';
import { Client } from 'boardgame.io/client';
import { EstateBuyerGame, IG, getScoreBoard, HighestBid, Phases } from './game';
import { Local } from 'boardgame.io/multiplayer';
import { Ctx } from 'boardgame.io';
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

const defaultCtx:Ctx = { 
    activePlayers: null,
    currentPlayer: "0",
    numMoves: 0,
    numPlayers: 2,
    phase: null,
    playOrder: ["0", "1"],
    playOrderPos: 0,
    turn: 1
}

test('getting scoreboard', () => {
    let G: IG = {
        players: [
            {
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
                buildings: [],
                bid: 1,
                money: 15,
                passed: false,
            },
            {
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
                buildings: [],
                bid: 0,
                money: 0,
                passed: true,
            }
        ],
        cardsontable: [],
        buildings: [],
        checks: [],
        hotseat: false,
        round: 0,
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
            checks: [],
            buildings: [],
            bid: 1,
            money: 15,
            passed: false,
        },
        {
            checks: [],
            buildings: [],
            bid: 0,
            money: 0,
            passed: true,
        },
        {
            checks: [],
            buildings: [],
            bid: 6,
            money: 6,
            passed: false,
        },
    ];

    expect(HighestBid(players)).toEqual(6);
});

it('should start game', () => {
    const spec = {
        game: EstateBuyerGame,
        multiplayer: Local(),
    };

    const p0 = Client({ ...spec, playerID: '0' } as any) as any;
    const p1 = Client({ ...spec, playerID: '1' } as any) as any;

    p0.start();
    p1.start();

    p0.moves.GameStart();

    const { ctx } = p0.getState();
    expect(ctx.phase).toEqual(Phases.auction);
});