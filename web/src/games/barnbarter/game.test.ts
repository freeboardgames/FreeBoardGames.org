import { Client } from 'boardgame.io/client';
import { Local } from 'boardgame.io/multiplayer';
import { BarnBarterGame } from './game';

// https://github.com/nicolodavis/boardgame.io/blob/master/docs/testing.md
it('Setup Game', () => {
  // set up a specific board scenario
  const BarnBarterCustomScenario = {
    ...BarnBarterGame,
    numPlayers: 3,
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
  clients[1].moves.moveChoseAnimalAndMoney(2, 1, [0]);
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
  clients[2].moves.moveChoseAnimalAndMoney(1, 16, [0]);
  clients[1].moves.moveAnswerTrade([]);

  clients[0].moves.moveChoseTrade();
  clients[0].moves.moveChoseAnimalAndMoney(1, 4, [0]);
  clients[1].moves.moveAnswerTrade([4, 5]);

  clients[1].moves.moveChoseTrade();
  clients[1].moves.moveChoseAnimalAndMoney(2, 2, [0]);
  clients[2].moves.moveAnswerTrade([]);

  clients[2].moves.moveChoseTrade();
  clients[2].moves.moveChoseAnimalAndMoney(1, 2, [0]);
  clients[1].moves.moveAnswerTrade([4, 5]);

  clients[0].moves.moveChoseTrade();
  clients[0].moves.moveChoseAnimalAndMoney(2, 3, [0]);
  clients[2].moves.moveAnswerTrade([4, 5]);

  clients[1].moves.moveChoseTrade();
  clients[1].moves.moveChoseAnimalAndMoney(2, 3, [0]);
  clients[2].moves.moveAnswerTrade([4, 5]);

  clients[2].moves.moveChoseTrade();
  clients[2].moves.moveChoseAnimalAndMoney(0, 0, [0]);
  clients[0].moves.moveAnswerTrade([]);

  //player 0 should  have 0 available moves

  clients[1].moves.moveChoseTrade();
  clients[1].moves.moveChoseAnimalAndMoney(2, 1, [0]);
  clients[2].moves.moveAnswerTrade([0, 1, 2, 3]);

  //var { G, ctx } =  clients[0].getState();
  //console.log(ctx)
});
