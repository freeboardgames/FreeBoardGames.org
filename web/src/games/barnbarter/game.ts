import { Ctx } from 'boardgame.io';
import { IG, ICard, IMoney, IAuction, ITrade } from './definitions';

import { phaseStart, phaseAuction, phaseAuctionPay, phaseTradeFirst, phaseTradeSecond } from './phases';
import { finished, score } from './helpers';

export function _setup(ctx: Ctx, shuffle: boolean, timeoutMS: number): IG {
  // All available Animals
  let cards = <ICard[]>(
    [].concat(
      ...[
        <ICard[]>Array(4).fill(<ICard>{ name: 'Chicken', value: 10 }),
        <ICard[]>Array(4).fill(<ICard>{ name: 'Duck', value: 40 }),
        <ICard[]>Array(4).fill(<ICard>{ name: 'Cat', value: 90 }),
        <ICard[]>Array(4).fill(<ICard>{ name: 'Dog', value: 160 }),
        <ICard[]>Array(4).fill(<ICard>{ name: 'Sheep', value: 250 }),
        <ICard[]>Array(4).fill(<ICard>{ name: 'Goat', value: 350 }),
        <ICard[]>Array(4).fill(<ICard>{ name: 'Donkey', value: 500 }),
        <ICard[]>Array(4).fill(<ICard>{ name: 'Pig', value: 650 }),
        <ICard[]>Array(4).fill(<ICard>{ name: 'Cow', value: 800 }),
        <ICard[]>Array(4).fill(<ICard>{ name: 'Horse', value: 1000 }),
      ],
    )
  );
  //
  if (shuffle) {
    cards = ctx.random.Shuffle(cards);
  }

  // Money in the Bank
  let moneys = [].concat(
    ...[
      <ICard[]>Array(ctx.numPlayers).fill(<ICard>{ value: 500 }),
      <ICard[]>Array(ctx.numPlayers).fill(<ICard>{ value: 200 }),
      <ICard[]>Array(ctx.numPlayers).fill(<ICard>{ value: 100 }),
      <ICard[]>Array(ctx.numPlayers).fill(<ICard>{ value: 50 }),
    ],
  );

  let players = Array(ctx.numPlayers);

  for (let i = 0; i < ctx.numPlayers; i++) {
    players[i] = { money: [], cards: [], currentBid: -1, moneyRevealed: false };
  }

  // starting money
  // 2x 0, 4x10, 1x50
  players.forEach((player) => {
    player.money.push(<IMoney>{ value: 0 });
  });
  players.forEach((player) => {
    player.money.push(<IMoney>{ value: 0 });
  });
  players.forEach((player) => {
    player.money.push(<IMoney>{ value: 10 });
  });
  players.forEach((player) => {
    player.money.push(<IMoney>{ value: 10 });
  });
  players.forEach((player) => {
    player.money.push(<IMoney>{ value: 10 });
  });
  players.forEach((player) => {
    player.money.push(<IMoney>{ value: 10 });
  });
  players.forEach((player) => {
    player.money.push(<IMoney>{ value: 50 });
  });

  let G = <IG>{
    log: [],
    players: players,
    cards: cards,
    money: moneys,
    auction: <IAuction>{ counter: 0, timeLastHit: 0, card: null, payingPlayerID: -1, payMoneyIDs: null },
    playerTurnId: -1, //Gets autoincremented to 0 by onBegin of startPhase
    moveToPhase: '',
    timeoutMS: timeoutMS,
    trade: <ITrade>{ counterPlayerId: -1, animalIdAttacker: null, animalIdDefender: null, bid: null },
  };

  return G;
}

export const BarnBarterGame = {
  name: 'barnbarter',
  setup: (ctx: Ctx): IG => {
    return _setup(ctx, true, 1000);
  },
  phases: {
    phaseStart: phaseStart,
    phaseAuction: phaseAuction,
    phaseAuctionPay: phaseAuctionPay,
    phaseTradeFirst: phaseTradeFirst,
    phaseTradeSecond: phaseTradeSecond,
  },
  playerView: (G: IG, playerID: string) => {
    // TODO: This still needs to be done
    // probably will introduce bugs on testing
    // --> Should also be tested itself.

    if (isNaN(parseInt(playerID))) {
      // this is an issue in Testing, where no playerID is passed.
      // so we fake it to "0" for all players.
      playerID = '0';
    }

    return {
      ...G,
      log: [],
      players: G.players.map((player, index) => {
        return parseInt(playerID) == index
          ? player
          : {
              ...player,
              money: player.moneyRevealed
                ? player.money
                : player.money.map(
                    () => {
                      return <IMoney>{ value: -1 };
                    }, // hide money
                  ),
            };
      }),
      cards: G.cards.map(() => {
        return <ICard>{ name: 'hidden', value: 0 };
      }),
      auction: {
        ...G.auction,
        payMoneyIDs: null, //never visualized by any player. Fully internal, but confidential.
      },
      trade: {
        ...G.trade,
        bid:
          parseInt(playerID) == G.trade.counterPlayerId || parseInt(playerID) == G.playerTurnId
            ? G.trade.bid
            : G.trade.bid === null
            ? null
            : G.trade.bid.map(
                (moneyId) => {
                  return moneyId;
                }, // hide money
              ),
      },
    };
  },
  endIf: (G: IG, ctx: Ctx) => {
    if (finished(G, ctx)) {
      let scoreId = score(G, ctx);
      return { winner: scoreId };
    }
  },
};
