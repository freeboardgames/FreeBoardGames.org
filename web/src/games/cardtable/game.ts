import { Ctx } from 'boardgame.io';
import { INVALID_MOVE } from 'boardgame.io/core';
import { cardEnum, dealCribbage } from './deals';

export enum playerEnum {
  north = '0',
  south = '1',
  east = '2',
  west = '3',
}

export enum stageEnum {
  cuttingForDeal = 'cuttingForDeal',
  dealHand = 'dealHand',
  putToCrib = 'putToCrib',
  cutForTurn = 'cutForTurn',
  thePlay = 'thePlay',
  theCount = 'theCount',
}

export enum phaseEnum {
  preGame = 'preGame',
  gamePlay = 'gamePlay',
  gameEnd = 'gameEnd',
}

export interface IG {
  bestCut?: number;
  chosenDealer?: number;
  cutTie?: boolean;
  score: IScoreKeeper;
  deck: ICard[];
  hands: ITable;
  stock: ICard[];
}

export interface ITable {
  north: IHand;
  south: IHand;
  east: IHand;
  west: IHand;
  top?: IHand;
  low?: IHand;
}

export interface ICard {
  id: cardEnum;
  rank: number;
  faced: boolean;
}

export interface IHand {
  private: ICard[];
  held: ICard[];
  melds: ICard[];
  tricks: ICard[];
  played: ICard[];
  cribFlipped?: boolean;
}

export interface ILocation {
  container: string;
  ordinal: number;
  cardcount?: number;
}

export type IScore = {
  back: number;
  front: number;
  games?: number;
};

export type IScoreKeeper = {
  north: IScore;
  south: IScore;
  east: IScore;
  west: IScore;
  near?: IScore;
  far?: IScore;
};

export interface ICardMove {
  from: ILocation;
  to: ILocation;
}

const mapForPlayer = (G: IG, ctx: Ctx, id: string) => {
  let { hands, score } = G;
  let near = id && id === '1' ? score.south : score.north;
  let far = id && id === '1' ? score.north : score.south;
  let top = id && id === '1' ? hands.north : hands.south;
  let low = id && id === '1' ? hands.south : hands.north;
  let myHands = { ...hands, low, top };
  let myScore = { ...score, near, far };
  let result: IG = { ...G, hands: myHands, score: myScore };
  return result;
};

const maskForPlayer = (G: IG) => {
  let result: IG = null;
  let { hands } = G;

  let { top, low } = hands;
  let tempTop: ICard[] = top.held.map((e) => ({ ...e, faced: true }));
  let tempLow: ICard[] = low.held.map((e) => ({ ...e, faced: false }));
  result = { ...G, hands: { ...hands, low: { ...low, held: tempLow }, top: { ...top, held: tempTop } } };

  return result;
};

const playerView = (G: IG, ctx: Ctx, id: string) => {
  let temp: IG = mapForPlayer(G, ctx, id);
  return maskForPlayer(temp);
};

const doesCutResolve = (G: IG, ctx: Ctx) => {
  let myCard = ctx.playerID === '0' ? G.hands.north.played[0] : G.hands.south.played[0];
  let theirCard = ctx.playerID === '0' ? G.hands.south.played[0] : G.hands.north.played[0];
  let response = false;
  if (myCard && theirCard && myCard.rank % 13 !== theirCard.rank % 13) {
    response = true;
  }
  return response;
};

const doesCutResolveSelf = (G: IG, ctx: Ctx) => {
  let myCard = ctx.playerID === '0' ? G.hands.north.played[0] : G.hands.south.played[0];
  let theirCard = ctx.playerID === '0' ? G.hands.south.played[0] : G.hands.north.played[0];
  let response = false;
  if (myCard && theirCard) {
    response = myCard.rank % 13 < theirCard.rank % 13;
    if (myCard.rank % 13 === theirCard.rank % 13) {
      G.cutTie = true;
    }
  }
  return response;
};

const moveCards = (G: IG, ctx: Ctx, cm: ICardMove) => {
  if (cm.from && cm.to) {
    //this uses Immer mutability under the hood
    let source: ICard[] = getNamedContainer(G, cm.from.container);
    let target: ICard[] = getNamedContainer(G, cm.to.container);
    let moving: ICard[] = source.splice(cm.from.ordinal, cm.from.cardcount ? cm.from.cardcount : 1);
    target.splice(cm.to.ordinal, 0, ...moving);
  } else return INVALID_MOVE;
};

const cloneCardAt = (G: IG, ctx: Ctx, cm: ICardMove) => {
  if (cm.from && cm.to) {
    //this uses Immer mutability under the hood
    let source: ICard[] = getNamedContainer(G, cm.from.container);
    let target: ICard[] = getNamedContainer(G, cm.to.container);
    let moving: ICard[] = source.slice(
      cm.from.ordinal,
      cm.from.cardcount ? cm.from.cardcount + cm.from.ordinal : 1 + cm.from.ordinal,
    );
    target.splice(cm.to.ordinal, 0, ...moving);
  } else return INVALID_MOVE;
};

const cutDeck = (G: IG, ctx: Ctx, depth: number) => {
  // by convention top card is at 0
  //depth can never be greater than G.deck.length
  //normalize to a value < G.deck.length
  var ndepth = depth % G.deck.length;

  let top: ICard[] = ndepth > 0 ? G.deck.slice(0, ndepth) : G.deck.slice(0, G.deck.length + ndepth);
  let bottom: ICard[] = ndepth > 0 ? G.deck.slice(ndepth, G.deck.length) : G.deck.slice(ndepth);
  top.unshift(...bottom);
  return { ...G, deck: top };
};

const resetGamePegs = (G: IG) => {
  G.score.south.back = -1;
  G.score.north.back = -1;
  G.score.south.front = 0;
  G.score.north.front = 0;
};

const resetMatchPegs = (G: IG) => {
  G.score.south.games = 0;
  G.score.north.games = 0;
};

const deal = (G: IG, ctx: Ctx) => {
  let fresh: ICard[] = dealCribbage.fresh.slice(0);
  let { pattern } = dealCribbage;
  //player 0 sits north, player 1 sits south
  let dealer = ctx.playerID;
  fresh = ctx.random.Shuffle(fresh);
  let draftNorth = [];
  let draftSouth = [];
  let holders = dealer === '1' ? [draftNorth, draftSouth] : [draftSouth, draftNorth];
  for (var i = 0; i < pattern.hand; i++) {
    for (var j = 0; j < pattern.players; j++) {
      holders[j % pattern.players].push(fresh.pop());
    }
  }
  G.hands.north.melds.length = 0;
  G.hands.north.played.length = 0;
  G.hands.north.private.length = 0;
  G.hands.north.tricks.length = 0;
  G.hands.north.tricks.length = 0;
  G.hands.north.held.length = 0;
  G.hands.north.held = draftNorth;
  G.hands.east.private.length = 0; //used for crib
  G.hands.south.melds.length = 0;
  G.hands.south.played.length = 0;
  G.hands.south.private.length = 0;
  G.hands.south.tricks.length = 0;
  G.hands.south.held.length = 0;
  G.hands.south.held = draftSouth;
  G.stock = [];
  G.hands.east.cribFlipped = false;
  G.deck = fresh;
  if (ctx.activePlayers && ctx.activePlayers[0] === 'theCount' && ctx.activePlayers[1] === 'theCount') {
    ctx.events.endTurn();
  } else {
    ctx.events.setActivePlayers({ all: 'putToCrib' });
  }
};

const putToCrib = (G: IG, ctx: Ctx, idx: number) => {
  let who = ctx.playerID;
  let playFrom: ILocation = findFromForPlayer(G, ctx, idx, who);
  let playTo: ILocation = findCribForPlayer();
  let cribMove = {
    from: playFrom,
    to: playTo,
  };
  moveCards(G, ctx, cribMove);
  if (G.hands.east.private.length > 3) {
    ctx.events.setActivePlayers({ all: 'cutForTurn' });
  }
};

const cutCardClone = (G: IG, ctx: Ctx, move: ICardMove) => {
  cloneCardAt(G, ctx, move);
};

const assignIfCutBetter = (G: IG, ctx: Ctx) => {
  //when defined G.bestCut shows best so far
  if (G.bestCut) {
    if (doesCutResolve(G, ctx)) {
      if (doesCutResolveSelf(G, ctx)) {
        G.chosenDealer = ctx.playerID === '0' ? 0 : 1;
        G.bestCut = ctx.playerID === '0' ? G.hands.north.played[0].rank % 13 : G.hands.south.played[0].rank % 13;
      } else {
        G.chosenDealer = ctx.playerID === '0' ? 1 : 0;
        G.bestCut = ctx.playerID === '0' ? G.hands.south.played[0].rank % 13 : G.hands.north.played[0].rank % 13;
      }
    } else {
      if (G.hands.north.played[0].rank % 13 === G.hands.south.played[0].rank % 13) {
        G.cutTie = true;
      }
    }
  } else {
    let { container } = findPlayedForPlayer(G, ctx, ctx.playerID);
    G.bestCut = getNamedContainer(G, container)[0].rank % 13;
  }
};

const cutForDeal = (G: IG, ctx: Ctx, idx: number) => {
  if (G.cutTie) {
    //clear everything
    G.cutTie = false;
    G.hands.north.played = [];
    G.hands.south.played = [];
    G.bestCut = null;
  }
  let who = ctx.playerID;
  let cloneFrom: ILocation = {
    container: 'deck',
    ordinal: idx,
  };
  let playTo: ILocation = findPlayedForPlayer(G, ctx, who);
  let cutClone = {
    from: cloneFrom,
    to: playTo,
  };
  cutCardClone(G, ctx, cutClone);
  assignIfCutBetter(G, ctx);
};

const play = (G: IG, ctx: Ctx, idx: number) => {
  let who = ctx.playerID;
  let playFrom: ILocation = findFromForPlayer(G, ctx, idx, who);
  let playTo: ILocation = findPlayedForPlayer(G, ctx, who);
  let playMove = {
    from: playFrom,
    to: playTo,
  };
  moveCards(G, ctx, playMove);
  if (G.hands.north.held.length === 0 && G.hands.south.held.length === 0) {
    ctx.events.setActivePlayers({ all: 'theCount' });
  }
};

const rotateTurnToDeal = (G: IG, ctx: Ctx) => {
  G.chosenDealer = ctx.currentPlayer === '0' ? 1 : 0;
  G.hands.north.held.length = 0;
  G.hands.south.held.length = 0;
  G.hands.east.private.length = 0;
  G.hands.north.played.length = 0;
  G.hands.south.played.length = 0;
  G.deck.push(G.deck[0]); //kludge to face the turn
  G.bestCut = null;
  G.cutTie = false;

  let nextPlayer = ctx.currentPlayer === '0' ? '1' : '0';
  ctx.events.endTurn({ next: nextPlayer });
};
const cutShowTurn = (G: IG, ctx: Ctx, idx: number) => {
  cutDeck(G, ctx, idx);
  G.deck.length = 1;
  ctx.events.setActivePlayers({ all: 'thePlay' });
};

const flipCrib = (G: IG) => {
  G.hands.east.cribFlipped = !G.hands.east.cribFlipped;
};

const pegPoints = (G: IG, ctx: Ctx, score: number) => {
  //pegs are as a back, and fwd peg
  //as score ensues, back2front+score,
  //is the general behavior
  let playerScore: IScore = findPegLaneForPlayer(G, ctx);
  let { front, back } = playerScore;
  let temp = front;
  front = front + score;
  back = temp;
  playerScore.front = front;
  playerScore.back = back;
};

export const moves = {
  cutDeck,

  moveCards,

  deal,

  putToCrib,

  play,

  cutShowTurn,

  rotateTurnToDeal,

  cutForDeal,

  pegPoints,

  flipCrib,

  resetGamePegs,

  resetMatchPegs,
};

// // const getDealerDecision = (G: IG) => {

// //   G.hands.north.played[0].rank % 13 > G.hands.north.played[0].rank % 13 ? 'northDealer' : 'southDealer';
// // }

// const isDealerDecided = (G: IG) => {
//   return G.hands.north.played[0].rank % 13 > G.hands.north.played[0].rank % 13;
// }

const getNamedContainer = (G: IG, name: String) => {
  let path: string[] = name.split('.');
  let container: ICard[] = null;
  if (path.length === 1) {
    container = G[path[0]];
  } else if (path.length === 2) {
    container = G[path[0]][path[1]];
  } else if (path.length === 3) {
    container = G[path[0]][path[1]][path[2]];
  } else container = null;

  return container;
};

const findFromForPlayer = (G: IG, ctx: Ctx, idx: number, who: String) => {
  let path = who === '0' ? 'hands.north.held' : 'hands.south.held';
  let myCardsLocation: ILocation = { container: path, ordinal: idx };
  return myCardsLocation;
};

const findPegLaneForPlayer = (G: IG, ctx: Ctx) => {
  let who: string = ctx.playerID;
  let path = who === '0' ? 'north' : 'south';
  let myPegLane: IScore = G.score[path];
  return myPegLane;
};

const findPlayedForPlayer = (G: IG, ctx: Ctx, who: String) => {
  let path = who === '0' ? 'hands.north.played' : 'hands.south.played';
  let myPlayedLocation: ILocation = { container: path, ordinal: 53 }; //any number larger than container size will append
  return myPlayedLocation;
};

const findCribForPlayer = () => {
  let path = 'hands.east.private';
  let myPlayedLocation: ILocation = { container: path, ordinal: 53 }; //any number larger than container size will append
  return myPlayedLocation;
};

export const CardTableGame = {
  name: 'cardtable',

  setup: () => ({
    score: {
      north: { front: 0, back: -1, game: 0 },
      south: { front: 0, back: -1, game: 0 },
      east: { front: 0, back: -1, game: 0 },
      west: { front: 0, back: -1, game: 0 },
      far: { front: 0, back: -1, game: 0 },
      near: { front: 0, back: -1, game: 0 },
    },
    count: 0,
    deck: [
      { id: 'AS', rank: 13, faced: false, img: './media/png/AS.png' },
      { id: 'AC', rank: 26, faced: false, img: './media/png/AC.png' },
      { id: 'AD', rank: 39, faced: false, img: './media/png/AD.png' },
      { id: 'AH', rank: 52, faced: false, img: './media/png/AH.png' },
    ],
    hands: {
      north: { private: [], melds: [], tricks: [], played: [], held: [] },
      east: { private: [], melds: [], tricks: [], played: [], held: [] },
      south: { private: [], melds: [], tricks: [], played: [], held: [] },
      west: { private: [], melds: [], tricks: [], played: [], held: [] },
    },
    stock: [],
  }),

  playerView,

  moves,

  phases: {
    preGame: {
      onBegin: (G: IG, ctx: Ctx) => {
        let draftDeck: ICard[] = dealCribbage.fresh.slice(0);
        draftDeck = ctx.random.Shuffle(draftDeck);
        return { ...G, deck: draftDeck, chosenDealer: null, bestCut: null };
      },
      endIf: (G: IG) => G.chosenDealer === 0 || G.chosenDealer === 1,
      start: true,
      next: 'gamePlay',
      turn: {
        activePlayers: { all: 'cuttingForDeal' },
        stages: {
          [stageEnum.cuttingForDeal]: {
            moves: { cutForDeal, deal, pegPoints, resetGamePegs, resetMatchPegs },
          },
        },
      },
    },
    gamePlay: {
      next: phaseEnum.gameEnd,
      moves,
      turn: {
        activePlayers: { all: stageEnum.dealHand },
        order: {
          first: (G) => {
            return G.chosenDealer;
          },
          next: (G, ctx) => {
            return ctx.playerID === '0' ? 1 : 0;
          },
        },
      },
      stages: {
        [stageEnum.dealHand]: {
          next: stageEnum.putToCrib,
          moves: { deal, pegPoints, resetGamePegs, resetMatchPegs },
        },
        putToCrib: {
          next: stageEnum.cutForTurn,
          moves: { putToCrib },
        },
        [stageEnum.cutForTurn]: {
          next: stageEnum.thePlay,
          moves: { cutShowTurn, pegPoints },
        },
        [stageEnum.thePlay]: {
          next: stageEnum.theCount,
          moves: { play, pegPoints },
        },
        [stageEnum.theCount]: {
          next: stageEnum.dealHand,
          moves: { pegPoints, rotateTurnToDeal, flipCrib },
        },
      },
    },

    gameEnd: {
      next: 'predicteGameOver',
      moves,
    },
    matchEnd: {
      next: 'predicateMatchOver',
      moves,
    },
  },
};
