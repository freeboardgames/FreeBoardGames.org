import { Ctx } from 'boardgame.io';
import { IG, ICard, IMoney, IAuction } from './definitions';

import { phaseNone, phaseStart, phaseAuction, phaseAuctionPay } from './phases';

function _setup(ctx: Ctx, timeoutMS: number): IG {
  // All available Animals
  var cards = <ICard[]>(
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
  cards = ctx.random.Shuffle(cards);

  // Money in the Bank
  var moneys = [].concat(
    ...[
      <ICard[]>Array(5).fill(<ICard>{ value: 500 }),
      <ICard[]>Array(5).fill(<ICard>{ value: 200 }),
      <ICard[]>Array(5).fill(<ICard>{ value: 100 }),
      <ICard[]>Array(5).fill(<ICard>{ value: 50 }),
    ],
  );

  var players = Array(ctx.numPlayers);

  for (var i = 0; i < ctx.numPlayers; i++) {
    players[i] = { moneys: [], cards: [], currentBid: -1, moneyRevealed: false };
  }

  // starting money
  // 2x 0, 4x10, 1x50
  players.forEach((player) => {
    player.moneys.push(<IMoney>{ value: 0 });
  });
  players.forEach((player) => {
    player.moneys.push(<IMoney>{ value: 0 });
  });
  players.forEach((player) => {
    player.moneys.push(<IMoney>{ value: 10 });
  });
  players.forEach((player) => {
    player.moneys.push(<IMoney>{ value: 10 });
  });
  players.forEach((player) => {
    player.moneys.push(<IMoney>{ value: 10 });
  });
  players.forEach((player) => {
    player.moneys.push(<IMoney>{ value: 10 });
  });
  players.forEach((player) => {
    player.moneys.push(<IMoney>{ value: 50 });
  });

  var G = <IG>{
    log: [],
    players: players,
    cards: cards,
    money: moneys,
    auction: <IAuction>{ counter: 0, timeLastHit: 0, card: null, payingPlayerID: -1, payMoneyIDs: null },
    playerTurnId: 0,
    moveToPhase: '',
    timeoutMS: timeoutMS,
  };

  ctx.events.setPhase('phaseStart');

  return G;
}

export const BarnBarterGame = {
  name: 'barnbarter',
  setup: (ctx: Ctx): IG => {
    return _setup(ctx, 0);
  },
  phases: {
    phaseNone: phaseNone,
    phaseStart: phaseStart,
    phaseAuction: phaseAuction,
    phaseAuctionPay: phaseAuctionPay,
  },
  // playerView: (G: IG, ctx: Ctx, playerID: string) => { return G },
  endIf: (G: IG, ctx: Ctx) => {
    G;
    ctx;
    return false;
  },
};
