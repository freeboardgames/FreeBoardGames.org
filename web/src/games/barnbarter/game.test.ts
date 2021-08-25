import { Client } from 'boardgame.io/client';
import { Local } from 'boardgame.io/multiplayer';
import { BarnBarterGame, _setup } from './game';
import { Ctx } from 'boardgames.io';

// https://github.com/nicolodavis/boardgame.io/blob/master/docs/testing.md
it('Whole Game', () => {
  // set up a specific board scenario
  const BarnBarterCustomScenario = {
    ...BarnBarterGame,
    numPlayers: 3,
    setup: (ctx: Ctx) => {
      return {
        ..._setup(ctx, false, 0),
      };
    },
  };

  const spec = {
    game: BarnBarterCustomScenario,
    numPlayers: 3,
    multiplayer: Local(),
  };
  // initialize the client with your custom scenario

  const clients = [0, 1, 2].map((value) => {
    return Client({ ...spec, playerID: value.toString() } as any);
  });

  clients.map((p) => p.start());

  // let { G, ctx } =  clients[0].getState();

  // get the latest game state
  clients[0].moves.moveChoseAuction();

  clients[0].moves.moveGoing();
  clients[0].moves.moveGoing();

  clients[2].moves.moveBid(10);

  clients[0].moves.moveGoing();
  clients[0].moves.moveGoing();
  clients[0].moves.moveGoing();

  clients[2].moves.movePay([0]); // not enough

  clients[0].moves.moveGoing();
  clients[0].moves.moveGoing();

  clients[2].moves.moveBid(10);
  clients[1].moves.moveBid(10);

  clients[0].moves.moveGoing();

  clients[2].moves.moveBid(90); //overbidding not allowed
  // should still be on bid = 10
  clients[1].moves.moveBid(100);

  clients[0].moves.moveGoing();
  clients[0].moves.moveGoing();
  clients[0].moves.moveGoing();

  clients[1].moves.movePay([3]); // can't pay

  clients[1].moves.moveBid(10);

  clients[0].moves.moveGoing();
  clients[0].moves.moveGoing();
  clients[0].moves.moveGoing();

  clients[1].moves.movePay([3]);

  clients[1].moves.moveChoseAuction();

  clients[1].moves.moveGoing();
  clients[1].moves.moveGoing();
  clients[1].moves.moveGoing();

  clients[2].moves.moveChoseAuction();
  clients[0].moves.moveBid(10);
  clients[2].moves.moveGoing();
  clients[2].moves.moveGoing();
  clients[2].moves.moveGoing();
  clients[0].moves.movePay([0]); //underpay
  clients[0].moves.moveBid(10);
  clients[2].moves.moveGoing();
  clients[2].moves.moveGoing();
  clients[2].moves.moveGoing();
  clients[0].moves.movePay([0]); //underpay again! --> INVALID_MOVE
  clients[0].moves.movePay([3]); // ok

  for (let i = 0; i < 4; i++) {
    clients[0].moves.moveChoseAuction();
    clients[0].moves.moveGoing();
    clients[0].moves.moveGoing();
    clients[0].moves.moveGoing();
    clients[1].moves.moveChoseAuction();
    clients[1].moves.moveGoing();
    clients[1].moves.moveGoing();
    clients[1].moves.moveGoing();
    clients[2].moves.moveChoseAuction();
    clients[2].moves.moveGoing();
    clients[2].moves.moveGoing();
    clients[2].moves.moveGoing();
  }

  clients[0].moves.moveChoseTrade();

  clients[0].moves.moveTradeBack();

  clients[0].moves.moveChoseTrade();

  clients[0].moves.moveChoseAnimalAndMoney(1, 0, [0, 1, 2]); //trade 2 horses

  clients[1].moves.moveAnswerTrade([0, 1, 2, 3]);

  clients[1].moves.moveChoseAuction();
  clients[1].moves.moveGoing();
  clients[1].moves.moveGoing();
  clients[1].moves.moveGoing();
  clients[2].moves.moveChoseAuction();
  clients[2].moves.moveGoing();
  clients[2].moves.moveGoing();
  clients[2].moves.moveGoing();

  for (let i = 0; i < 7; i++) {
    clients[0].moves.moveChoseAuction();
    clients[0].moves.moveGoing();
    clients[0].moves.moveGoing();
    clients[0].moves.moveGoing();
    clients[1].moves.moveChoseAuction();
    clients[1].moves.moveGoing();
    clients[1].moves.moveGoing();
    clients[1].moves.moveGoing();
    clients[2].moves.moveChoseAuction();
    clients[2].moves.moveGoing();
    clients[2].moves.moveGoing();
    clients[2].moves.moveGoing();
  }

  clients[0].moves.moveChoseAuction();
  clients[0].moves.moveGoing();
  clients[0].moves.moveGoing();
  clients[0].moves.moveGoing();
  clients[1].moves.moveChoseAuction();
  clients[1].moves.moveGoing();
  clients[1].moves.moveGoing();
  clients[1].moves.moveGoing();

  clients[2].moves.moveChoseAuction(); //no more cards, going back
  clients[2].moves.moveChoseTrade();

  clients[2].moves.moveChoseAnimalAndMoney(1, 4, [0]);
  clients[1].moves.moveAnswerTrade([]);

  clients[0].moves.moveChoseTrade();
  clients[0].moves.moveChoseAnimalAndMoney(1, 13, [0]);
  clients[1].moves.moveAnswerTrade([]);

  clients[1].moves.moveChoseTrade();
  clients[1].moves.moveChoseAnimalAndMoney(0, 10, [0]);
  clients[0].moves.moveAnswerTrade([]);

  clients[2].moves.moveChoseTrade();
  clients[2].moves.moveChoseAnimalAndMoney(0, 10, [0]);
  clients[0].moves.moveAnswerTrade([5]);

  clients[0].moves.moveChoseTrade();
  clients[0].moves.moveChoseAnimalAndMoney(1, 9, [0]);
  clients[1].moves.moveAnswerTrade([]);

  clients[1].moves.moveChoseTrade();
  clients[1].moves.moveChoseAnimalAndMoney(2, 10, [0]);
  clients[2].moves.moveAnswerTrade([]);

  clients[2].moves.moveChoseTrade();
  clients[2].moves.moveChoseAnimalAndMoney(0, 4, [0]);
  clients[0].moves.moveAnswerTrade([5]);

  clients[0].moves.moveChoseTrade();
  clients[0].moves.moveChoseAnimalAndMoney(1, 3, [0]);
  clients[1].moves.moveAnswerTrade([5]);

  clients[1].moves.moveChoseTrade();

  clients[1].moves.moveChoseAnimalAndMoney(2, 0, [0]);
  clients[2].moves.moveAnswerTrade([]);

  clients[2].moves.moveChoseTrade();
  clients[2].moves.moveChoseAnimalAndMoney(0, 0, [0]);
  clients[0].moves.moveAnswerTrade([]);

  clients[0].moves.moveChoseTrade();
  clients[0].moves.moveChoseAnimalAndMoney(2, 7, [0]);
  clients[2].moves.moveAnswerTrade([4, 5]);

  clients[1].moves.moveChoseTrade();
  clients[1].moves.moveChoseAnimalAndMoney(2, 7, [0]);
  clients[2].moves.moveAnswerTrade([5, 6]);

  clients[2].moves.moveChoseTrade();
  clients[2].moves.moveChoseAnimalAndMoney(0, 4, [0]);
  clients[0].moves.moveAnswerTrade([]);

  clients[0].moves.moveChoseTrade();
  clients[0].moves.moveChoseAnimalAndMoney(1, 4, [0]);
  clients[1].moves.moveAnswerTrade([4, 5]);

  clients[1].moves.moveChoseTrade();
  clients[1].moves.moveChoseAnimalAndMoney(2, 2, [0]);
  clients[2].moves.moveAnswerTrade([]);

  clients[2].moves.moveChoseTrade();
  clients[2].moves.moveChoseAnimalAndMoney(1, 9, [0]);
  clients[1].moves.moveAnswerTrade([]);

  clients[0].moves.moveChoseTrade();
  clients[0].moves.moveChoseAnimalAndMoney(2, 3, [0]);
  clients[2].moves.moveAnswerTrade([4, 5]);

  clients[1].moves.moveChoseTrade();
  clients[1].moves.moveChoseAnimalAndMoney(2, 3, [0]);
  clients[2].moves.moveAnswerTrade([4, 5]);

  let { ctx } = clients[0].getState();
  //console.log(ctx)

  expect(ctx.gameover).toEqual({ winner: 1 });
});

it('Bad user input testing', () => {
  // set up a specific board scenario
  const BarnBarterCustomScenario = {
    ...BarnBarterGame,
    numPlayers: 3,
    setup: (ctx: Ctx) => {
      return {
        ..._setup(ctx, false, 0),
      };
    },
  };

  const spec = {
    game: BarnBarterCustomScenario,
    numPlayers: 3,
    multiplayer: Local(),
  };
  // initialize the client with your custom scenario

  const clients = [0, 1, 2].map((value) => {
    return Client({ ...spec, playerID: value.toString() } as any);
  });

  clients.map((p) => p.start());

  clients[0].moves.moveChoseAuction();

  clients[2].moves.moveBid(10);

  clients[0].moves.moveGoing();
  clients[0].moves.moveGoing();
  clients[0].moves.moveGoing();

  // invlaid
  clients[2].moves.movePay([-1]); // invalid index
  clients[2].moves.movePay([7]); // invalid index
  clients[2].moves.movePay([0, 0]); // invalid index
  clients[2].moves.movePay([0, 0, -1]); // invalid index
  clients[2].moves.movePay([0, 1, 2, 3, 2]); // invalid index

  // valid
  clients[2].moves.movePay([2]);

  clients[1].moves.moveChoseAuction();
  clients[1].moves.moveGoing();
  clients[1].moves.moveGoing();
  clients[1].moves.moveGoing();

  clients[2].moves.moveChoseAuction();
  clients[2].moves.moveGoing();
  clients[2].moves.moveGoing();
  clients[2].moves.moveGoing();

  clients[0].moves.moveChoseAuction();
  clients[0].moves.moveGoing();
  clients[0].moves.moveGoing();
  clients[0].moves.moveGoing();

  clients[1].moves.moveChoseAuction();
  clients[2].moves.moveBid(10);
  clients[1].moves.moveGoing();
  clients[1].moves.moveGoing();
  clients[1].moves.moveGoing();
  clients[2].moves.movePay([2]);

  clients[2].moves.moveChoseAuction();
  clients[2].moves.moveGoing();
  clients[2].moves.moveGoing();
  clients[2].moves.moveGoing();

  clients[0].moves.moveChoseAuction();
  clients[0].moves.moveGoing();
  clients[0].moves.moveGoing();
  clients[0].moves.moveGoing();

  clients[1].moves.moveChoseTrade();
  //invalid moves
  clients[1].moves.moveChoseAnimalAndMoney(1, 1, [0, 1, 2]); //trade with self
  clients[1].moves.moveChoseAnimalAndMoney(-1, 1, [0, 1, 2]); //trade with invlaid player
  clients[1].moves.moveChoseAnimalAndMoney(clients.length, 1, [0, 1, 2]); //trade with invlaid player

  // let { G, ctx } =  clients[0].getState();

  // console.log(G.players[0].cards)
  // console.log(G.players[1].cards)
  // console.log(G.players[2].cards)

  clients[1].moves.moveChoseAnimalAndMoney(0, -1, [0, 1, 2]); //trade for non-existing card
  clients[1].moves.moveChoseAnimalAndMoney(0, 2, [0, 1, 2]); //trade for non-existing card
  clients[1].moves.moveChoseAnimalAndMoney(0, 1, [0, 1, 2]); //trade for card i don't have

  clients[1].moves.moveChoseAnimalAndMoney(0, 0, [-1]); //trade for non-existing money
  clients[1].moves.moveChoseAnimalAndMoney(0, 0, [8]); //trade for non-existing money
  // should be allowed: clients[1].moves.moveChoseAnimalAndMoney(0, 1, []); //attacker must offer sth.
  clients[1].moves.moveChoseAnimalAndMoney(0, 0, [1, 2, 3, 1]); //trade for duplicates

  //valid trade offer
  clients[1].moves.moveChoseAnimalAndMoney(0, 0, [1, 2, 3]);

  clients[0].moves.moveAnswerTrade([-1]);
  clients[0].moves.moveAnswerTrade([8]);
  clients[0].moves.moveAnswerTrade([1, 2, 3, 1]);

  //valid
  clients[0].moves.moveAnswerTrade([]);

  let { ctx } = clients[0].getState();
  expect(ctx.phase).toEqual('phaseStart');
});
