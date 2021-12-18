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

  var { G, ctx } = clients[0].getState();
  expect(ctx.phase).toEqual('phaseStart');

  clients[0].moves.moveChoseAuction();
  var { G, ctx } = clients[0].getState();
  expect(ctx.phase).toEqual('phaseAuction');

  clients[0].moves.moveGoing();
  clients[0].moves.moveGoing();

  var { G, ctx } = clients[0].getState();
  expect(G.auction.counter).toEqual(2);

  clients[2].moves.moveBid(100);
  var { G, ctx } = clients[0].getState();
  expect(G.auction.counter).toEqual(0);
  expect(G.players[0].currentBid).toEqual(-1);
  expect(G.players[1].currentBid).toEqual(-1);
  expect(G.players[2].currentBid).toEqual(100);

  clients[0].moves.moveGoing();
  clients[0].moves.moveGoing();
  clients[0].moves.moveGoing();
  var { G, ctx } = clients[0].getState();
  expect(ctx.phase).toEqual('phaseAuctionPay');

  clients[2].moves.movePay([0]); // not enough, so going back to auction
  var { G, ctx } = clients[0].getState();
  expect(ctx.phase).toEqual('phaseAuction');

  clients[0].moves.moveGoing();
  clients[0].moves.moveGoing();
  var { G, ctx } = clients[0].getState();
  expect(G.auction.counter).toEqual(2);

  clients[2].moves.moveBid(10);
  clients[1].moves.moveBid(10);

  var { G, ctx } = clients[0].getState();
  expect(G.auction.counter).toEqual(0);
  expect(G.players[0].currentBid).toEqual(-1);
  expect(G.players[1].currentBid).toEqual(10);
  expect(G.players[2].currentBid).toEqual(10);

  clients[0].moves.moveGoing();

  clients[2].moves.moveBid(90); //overbidding not allowed
  var { G, ctx } = clients[0].getState();
  expect(G.players[1].currentBid).toEqual(10);
  expect(G.players[2].currentBid).toEqual(10);

  clients[1].moves.moveBid(100);
  var { G, ctx } = clients[0].getState();
  expect(G.players[1].currentBid).toEqual(110); // <- still allowed to overbid
  expect(G.players[2].currentBid).toEqual(10);

  clients[0].moves.moveGoing();
  clients[0].moves.moveGoing();
  clients[0].moves.moveGoing();

  clients[1].moves.movePay([3]); // can't pay

  clients[1].moves.moveBid(10);

  clients[0].moves.moveGoing();
  clients[0].moves.moveGoing();
  clients[0].moves.moveGoing();

  clients[1].moves.movePay([3]);
  var { G, ctx } = clients[0].getState();
  expect(ctx.phase).toEqual('phaseStart');

  clients[1].moves.moveChoseAuction();

  clients[1].moves.moveGoing();
  clients[1].moves.moveGoing();
  clients[1].moves.moveGoing();

  clients[2].moves.moveChoseAuction();
  clients[0].moves.moveBid(10);
  clients[2].moves.moveGoing();
  clients[2].moves.moveGoing();
  clients[2].moves.moveGoing();
  clients[0].moves.movePay([0]); //underpay, but you can pay
  var { G, ctx } = clients[0].getState();
  expect(ctx.phase).toEqual('phaseAuctionPay');
  clients[0].moves.movePay([3]); // ok
  var { G, ctx } = clients[0].getState();
  expect(ctx.phase).toEqual('phaseStart');

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

  var { G, ctx } = clients[0].getState();
  expect(ctx.phase).toEqual('phaseStart');
  expect(G.players[0].cards).toEqual([
    { name: 'Horse', value: 1000 },
    { name: 'Horse', value: 1000 },
    { name: 'Cow', value: 800 },
    { name: 'Pig', value: 650 },
    { name: 'Donkey', value: 500 },
  ]);
  expect(G.players[1].cards).toEqual([
    { name: 'Horse', value: 1000 },
    { name: 'Horse', value: 1000 },
    { name: 'Cow', value: 800 },
    { name: 'Cow', value: 800 },
    { name: 'Pig', value: 650 },
    { name: 'Donkey', value: 500 },
  ]);
  expect(G.players[2].cards).toEqual([
    { name: 'Cow', value: 800 },
    { name: 'Pig', value: 650 },
    { name: 'Pig', value: 650 },
    { name: 'Donkey', value: 500 },
  ]);

  clients[0].moves.moveChoseTrade();
  var { G, ctx } = clients[0].getState();
  expect(ctx.phase).toEqual('phaseTradeFirst');

  clients[0].moves.moveTradeBack();
  var { G, ctx } = clients[0].getState();
  expect(ctx.phase).toEqual('phaseStart');

  clients[0].moves.moveChoseTrade();
  var { G, ctx } = clients[0].getState();
  expect(ctx.phase).toEqual('phaseTradeFirst');

  clients[0].moves.moveChoseAnimalAndMoney(1, 0, [0, 1, 2]); //trade 2 horses
  var { G, ctx } = clients[0].getState();
  expect(ctx.phase).toEqual('phaseTradeSecond');
  expect(G.trade.animalIdDefender).toEqual([0, 1]);
  expect(G.trade.animalIdAttacker).toEqual([0, 1]);

  clients[1].moves.moveAnswerTrade([0, 1, 2, 3]);
  var { G, ctx } = clients[0].getState();
  expect(ctx.phase).toEqual('phaseStart');
  expect(G.players[0].money).toEqual([
    { value: 10 },
    { value: 10 },
    { value: 50 },
    { value: 10 },
    { value: 50 },
    { value: 100 },
    { value: 200 },
    { value: 0 },
    { value: 0 },
    { value: 10 },
    { value: 10 },
  ]);
  // actually there are numbers in here. But due to the bug, that
  // during testing the playerView function doesn't get a playerID
  // we fake it s.t. during testing every player only sees player 0's playerView.
  expect(G.players[1].money).toEqual([
    { value: -1 },
    { value: -1 },
    { value: -1 },
    { value: -1 },
    { value: -1 },
    { value: -1 },
    { value: -1 },
    { value: -1 },
  ]);
  expect(G.players[0].cards).toEqual([
    { name: 'Cow', value: 800 },
    { name: 'Pig', value: 650 },
    { name: 'Donkey', value: 500 },
  ]);
  expect(G.players[1].cards).toEqual([
    { name: 'Horse', value: 1000 },
    { name: 'Horse', value: 1000 },
    { name: 'Cow', value: 800 },
    { name: 'Cow', value: 800 },
    { name: 'Pig', value: 650 },
    { name: 'Donkey', value: 500 },
    { name: 'Horse', value: 1000 },
    { name: 'Horse', value: 1000 },
  ]);

  // finish all auctions:
  for (let i = 0; i < 8; i++) {
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
  }
  clients[1].moves.moveChoseAuction();
  clients[1].moves.moveGoing();
  clients[1].moves.moveGoing();
  clients[1].moves.moveGoing();
  // now all cards have been played

  clients[2].moves.moveChoseAuction(); //no more cards, going back
  var { G, ctx } = clients[0].getState();
  expect(ctx.phase).toEqual('phaseStart');

  // win trade
  clients[2].moves.moveChoseTrade();
  clients[2].moves.moveChoseAnimalAndMoney(1, 4, [0]);
  var { G, ctx } = clients[0].getState();
  expect(G.players[1].cards[4]).toEqual({ name: 'Pig', value: 650 });
  clients[1].moves.moveAnswerTrade([]);
  var { G, ctx } = clients[0].getState();
  expect(G.players[2].cards[G.players[2].cards.length - 1]).toEqual({ name: 'Pig', value: 650 });

  clients[0].moves.moveChoseTrade();
  clients[0].moves.moveChoseAnimalAndMoney(1, 13, [0]);
  clients[1].moves.moveAnswerTrade([]);

  clients[1].moves.moveChoseTrade();
  clients[1].moves.moveChoseAnimalAndMoney(0, 10, [0]);
  clients[0].moves.moveAnswerTrade([]);

  clients[2].moves.moveChoseTrade();
  clients[2].moves.moveChoseAnimalAndMoney(0, 10, [0]);
  var { G, ctx } = clients[0].getState();
  expect(G.players[0].cards[10]).toEqual({ name: 'Duck', value: 40 }); // both players have duck in 10th
  expect(G.players[2].cards[10]).toEqual({ name: 'Duck', value: 40 });
  clients[0].moves.moveAnswerTrade([5]);
  var { G, ctx } = clients[0].getState();
  expect(G.players[0].cards[10]).toEqual({ name: 'Duck', value: 40 }); // keep the duck
  expect(G.players[2].cards[10]).toEqual({ name: 'Chicken', value: 10 }); // lost the duck - now chicken moved up
  expect(G.players[0].cards[G.players[0].cards.length - 1]).toEqual({ name: 'Duck', value: 40 }); // got new duck

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

  var { G, ctx } = clients[0].getState();

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
