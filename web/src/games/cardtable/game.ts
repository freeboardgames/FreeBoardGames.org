import { Ctx } from 'boardgame.io';
import { INVALID_MOVE } from 'boardgame.io/core';
import { dealCribbage } from './deals';

export interface IG {
  count: number;
  deck: ICard[];
  hands: ITable;
  stock: ICard[];
}

export interface ITable {
  north: IHand;
  south: IHand;
  east: IHand;
  west: IHand;
}

export interface ICard {
  id: string;
  rank: number;
  faced: boolean;
  img: string;
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

export interface ICardMove {
  from: ILocation;
  to: ILocation;
}

const moveCards = (G: IG, ctx: Ctx, cm: ICardMove) => {
  if (cm.from && cm.to) {
    //this uses Immer mutability under the hood
    let source: ICard[] = getNamedContainer(G, cm.from.container);
    let target: ICard[] = getNamedContainer(G, cm.to.container);
    let moving: ICard[] = source.splice(cm.from.ordinal, cm.from.cardcount ? cm.from.cardcount : 1);
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

export const moves = {
  cutDeck,

  moveCards,

  deal(G: IG, ctx: Ctx) {
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
    G.deck = fresh;
  },

  putToCrib(G: IG, ctx: Ctx, idx: number) {
    let who = ctx.playerID;
    let playFrom: ILocation = findFromForPlayer(G, ctx, idx, who);
    let playTo: ILocation = findCribForPlayer();
    let cribMove = {
      from: playFrom,
      to: playTo,
    };
    moveCards(G, ctx, cribMove);
  },

  play(G: IG, ctx: Ctx, idx: number) {
    let who = ctx.playerID;
    let playFrom: ILocation = findFromForPlayer(G, ctx, idx, who);
    let playTo: ILocation = findPlayedForPlayer(G, ctx, who);
    let playMove = {
      from: playFrom,
      to: playTo,
    };
    moveCards(G, ctx, playMove);
  },
  cutShowTurn(G: IG, ctx: Ctx, idx: number) {
    cutDeck(G, ctx, idx);
    G.deck.length = 1;
    return;
  },

  flipCrib(G: IG) {
    G.hands.east.cribFlipped = !G.hands.east.cribFlipped;
  },
};

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
    count: 0,
    deck: [
      { id: 'AS', rank: 13, faced: false, img: './media/png/AS.png' },
      { id: 'AC', rank: 26, faced: false, img: './media/png/AC.png' },
      { id: 'AD', rank: 39, faced: false, img: './media/png/AD.png' },
      { id: 'AH', rank: 52, faced: false, img: './media/png/AH.png' },
    ],
    hands: {
      north: { playerId: '1', private: [], melds: [], tricks: [], played: [], held: [] },
      east: { playerId: '2', private: [], melds: [], tricks: [], played: [], held: [] },
      south: { playerId: '3', private: [], melds: [], tricks: [], played: [], held: [] },
      west: { playerId: '4', private: [], melds: [], tricks: [], played: [], held: [] },
    },
    stock: [],
  }),

  moves: moves,

  flow: {
    movesPerTurn: 1,
  },
};
