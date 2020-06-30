import { INVALID_MOVE } from 'boardgame.io/core';
import { Client } from 'boardgame.io/client';
import { EstateBuyerGame, IG, getScoreBoard, HighestBid, Phases, Moves } from './game';
import { Local } from 'boardgame.io/multiplayer';
import IPlayer from './player';

const defaultPlayer: IPlayer = {
  buildings: [],
  checks: [],
  bid: 0,
  money: 15,
  passed: false,
  selectedCard: null,
  newCard: null,
  spentCard: null,
  spentMoney: null,
};

const defaultG: IG = {
  hotseat: true,
  round: 0,
  players: [defaultPlayer, defaultPlayer],
  buildings: [],
  checks: [],
  cardsontable: [],
};

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
            showing: false,
          },
          {
            number: 3,
            value: 3,
            showing: false,
          },
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
            showing: false,
          },
          {
            number: 11,
            value: 11,
            showing: false,
          },
        ],
        money: 0,
        passed: true,
      },
    ],
  };

  expect(getScoreBoard(G)).toEqual([
    {
      playerID: '0',
      score: 18,
      bid: 1,
      money: 15,
      passed: false,
    },
    {
      playerID: '1',
      score: 15,
      bid: 0,
      money: 0,
      passed: true,
    },
  ]);
});

test('highest bid', () => {
  let players: any = [
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

it('should be a whole game', () => {
  const spec = {
    game: EstateBuyerGame,
    multiplayer: Local(),
  };

  const clients = [Client({ ...spec, playerID: '0' } as any) as any, Client({ ...spec, playerID: '1' } as any) as any];

  clients[0].start();
  clients[1].start();

  clients[0].moves.GameStart(true);
  let state = clients[0].getState();

  //Move to auction phase
  expect(state.G.cardsontable.length).toEqual(2);
  expect(state.G.round).toEqual(1);
  expect(state.ctx.phase).toEqual(Phases.auction);

  //Can't even bid 0
  expect(Moves.PlaceBid(state.G, state.ctx, 0)).toEqual(INVALID_MOVE);
  //Can't bid negative
  expect(Moves.PlaceBid(state.G, state.ctx, -1)).toEqual(INVALID_MOVE);
  //Can't bid more money than you have
  expect(Moves.PlaceBid(state.G, state.ctx, 100)).toEqual(INVALID_MOVE);

  //Perform actual valid move
  const bidPlayer = state.ctx.currentPlayer;
  clients[state.ctx.currentPlayer].moves.MovePlaceBid(2);
  state = clients[0].getState();

  //Verify bidding player value is correct
  expect(state.G.players[bidPlayer].bid).toEqual(2);

  //Can't bid the same as a previous bid
  expect(Moves.PlaceBid(state.G, state.ctx, 2)).toEqual(INVALID_MOVE);

  //Perform actual valid move
  let winningPlayer = state.ctx.currentPlayer;
  clients[winningPlayer].moves.MovePlaceBid(4);
  state = clients[0].getState();
  const round = state.G.round;

  //Perform actual valid move
  let passingPlayer = state.ctx.currentPlayer;
  clients[passingPlayer].moves.MovePassBid();
  state = clients[0].getState();

  //Confirm player who is starting was not the passing player
  expect(parseInt(state.ctx.currentPlayer)).toEqual(+!parseInt(passingPlayer));

  //Round increased
  expect(state.G.round).toEqual(round + 1);

  //Player money spent correctly
  expect(state.G.players[passingPlayer].spentMoney).toEqual(1);
  expect(state.G.players[winningPlayer].spentMoney).toEqual(4);
  expect(state.G.players[passingPlayer].money).toEqual(23);
  expect(state.G.players[winningPlayer].money).toEqual(20);

  //Player Values Reset
  expect(state.G.players[0].bid).toEqual(0);
  expect(state.G.players[1].bid).toEqual(0);
  expect(state.G.players[0].passed).toBeFalse();
  expect(state.G.players[1].passed).toBeFalse();

  //Cards added to buildings array
  expect(state.G.players[0].buildings.length).toEqual(1);
  expect(state.G.players[1].buildings.length).toEqual(1);

  //Move on to confirming half bid math on odds
  passingPlayer = state.ctx.currentPlayer;
  clients[passingPlayer].moves.MovePlaceBid(3);
  state = clients[0].getState();

  winningPlayer = state.ctx.currentPlayer;
  clients[winningPlayer].moves.MovePlaceBid(5);
  clients[passingPlayer].moves.MovePassBid();
  state = clients[0].getState();

  //Verify losing bid of 3 pays half rounded up
  expect(state.G.players[passingPlayer].spentMoney).toEqual(2);
  expect(state.G.players[winningPlayer].spentMoney).toEqual(5);

  //6 more passes should finish the phase
  clients[winningPlayer].moves.MovePassBid();
  clients[passingPlayer].moves.MovePassBid();
  clients[winningPlayer].moves.MovePassBid();
  clients[passingPlayer].moves.MovePassBid();
  clients[winningPlayer].moves.MovePassBid();
  clients[passingPlayer].moves.MovePassBid();
  state = clients[0].getState();

  expect(state.ctx.phase).toEqual(Phases.property_selection_hotseat);
  expect(state.G.buildings.length).toEqual(0);
  expect(state.G.cardsontable.length).toEqual(2);
  expect(state.G.checks.length).toEqual(14);

  const firstPlayer = state.ctx.currentPlayer;

  expect(Moves.SelectBuilding(state.G, state.ctx, 3, 1)).toEqual(INVALID_MOVE);
  expect(Moves.SelectBuilding(state.G, state.ctx, firstPlayer, 100)).toEqual(INVALID_MOVE);

  clients[firstPlayer].moves.MoveSelectBuilding(
    firstPlayer,
    state.G.players[firstPlayer].buildings[0].value,
  );

  state = clients[0].getState();
  const secondPlayer = state.ctx.currentPlayer;
  expect(state.G.players[firstPlayer].selectedCard).toBeObject();

  clients[secondPlayer].moves.MoveSelectBuilding(
    secondPlayer,
    state.G.players[secondPlayer].buildings[0].value,
  );

  state = clients[0].getState();
  expect(state.G.players[firstPlayer].newCard).toBeObject();
  expect(state.G.players[firstPlayer].checks.length).toEqual(1);
  expect(state.G.players[firstPlayer].buildings.length).toEqual(7);
  expect(state.G.players[firstPlayer].selectedCard).toBeNull();
  expect(state.G.players[secondPlayer].newCard).toBeObject();
  expect(state.G.players[secondPlayer].checks.length).toEqual(1);
  expect(state.G.players[secondPlayer].buildings.length).toEqual(7);
  expect(state.G.players[secondPlayer].selectedCard).toBeNull();
});
