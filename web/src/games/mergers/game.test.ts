import { Ctx } from 'boardgame.io';
import { INVALID_MOVE } from 'boardgame.io/core';
import {
  autosetChainToMerge,
  awardBonuses,
  buyStock,
  chooseChainToMerge,
  chooseNewChain,
  chooseSurvivingChain,
  declareGameOver,
  drawHotels,
  mergerPhaseNextTurn,
  MergersGame,
  placeHotel,
  swapAndSellStock,
} from './game';
import { fillInTestHotels, getMultiplayerTestClients } from './test_utils';
import { Chain, Hotel, IG, Player } from './types';
import { fillStockMap, setupInitialState } from './utils';

const DEFAULT_CTX: Ctx = {
  numPlayers: 2,
  playOrder: ['0', '1'],
  playOrderPos: 0,
  playerID: '0',
  activePlayers: null,
  currentPlayer: '0',
  turn: 1,
  phase: 'buildingPhase',
};

describe('placeHotel', () => {
  let originalBoard: Hotel[][];

  beforeEach(() => {
    originalBoard = fillInTestHotels([
      [
        { chain: Chain.Toro },
        { chain: Chain.Toro },
        { drawnByPlayer: '0' }, // would join Toro, and bring in 3-B
      ],
      [
        { drawnByPlayer: '0' }, // would join Toro
        {},
        { hasBeenPlaced: true },
      ],
      [
        {},
        {},
        { drawnByPlayer: '0' }, // would form a new chain w/ 3-B
      ],
    ]);
  });

  it('sets the last placed hotel', () => {
    const G: IG = {
      hotels: originalBoard,
    };
    const ctx: Ctx = {
      ...DEFAULT_CTX,
      playerID: '0',
      events: { endStage: jest.fn() },
    };

    placeHotel(G, ctx, '1-B');

    expect(G.lastPlacedHotel).toEqual('1-B');
  });

  it('joins hotel to a single adjacent chain', () => {
    const G: IG = {
      hotels: originalBoard,
    };
    const ctx: Ctx = {
      ...DEFAULT_CTX,
      playerID: '0',
      events: { endStage: jest.fn() },
    };

    placeHotel(G, ctx, '1-B');

    expect(G.hotels).toEqual(
      fillInTestHotels([
        [{ chain: Chain.Toro }, { chain: Chain.Toro }, { drawnByPlayer: '0' }],
        [
          { chain: Chain.Toro, drawnByPlayer: '0' }, // joined Toro
          {},
          { hasBeenPlaced: true },
        ],
        [{}, {}, { drawnByPlayer: '0' }],
      ]),
    );
  });

  it('joins a neighboring unassigned hotel to adjacent chain', () => {
    const G: IG = {
      hotels: originalBoard,
    };
    const ctx: Ctx = {
      ...DEFAULT_CTX,
      playerID: '0',
      events: { endStage: jest.fn() },
    };

    placeHotel(G, ctx, '3-A');

    expect(G.hotels).toEqual(
      fillInTestHotels([
        [
          { chain: Chain.Toro },
          { chain: Chain.Toro },
          { chain: Chain.Toro, drawnByPlayer: '0' }, // joined Toro
        ],
        [
          { drawnByPlayer: '0' },
          {},
          { chain: Chain.Toro }, // joined Toro
        ],
        [{}, {}, { drawnByPlayer: '0' }],
      ]),
    );
  });

  it('starts a new chain when placed next to a lone hotel', () => {
    const G: IG = {
      hotels: originalBoard,
    };
    const ctx: Ctx = {
      ...DEFAULT_CTX,
      playerID: '0',
      events: { endStage: jest.fn(), setStage: jest.fn() },
    };

    placeHotel(G, ctx, '3-C');

    expect(G.hotels).toEqual(
      fillInTestHotels([
        [{ chain: Chain.Toro }, { chain: Chain.Toro }, { drawnByPlayer: '0' }],
        [{ drawnByPlayer: '0' }, {}, { hasBeenPlaced: true }],
        [
          {},
          {},
          { hasBeenPlaced: true, drawnByPlayer: '0' }, // placed
        ],
      ]),
    );
    expect(ctx.events.setStage).toHaveBeenCalledWith('chooseNewChainStage');
  });

  it('does not allow a player with hotels to pass', () => {
    const G = {
      hotels: [[{ id: '1-A', drawnByPlayer: '0' }]],
    };
    const ctx: Ctx = {
      ...DEFAULT_CTX,
      playerID: '0',
      events: { endStage: jest.fn() },
    };

    const result = placeHotel(G, ctx);

    expect(result).toEqual(INVALID_MOVE);
  });

  it('allows a player with no hotels to pass', () => {
    const G: IG = {
      hotels: [[]],
    };
    const ctx: Ctx = {
      ...DEFAULT_CTX,
      playerID: '0',
      events: { endStage: jest.fn() },
    };

    placeHotel(G, ctx);

    expect(G.lastMove).toEqual("Player 0 doesn't have any playable hotels");
    expect(ctx.events.endStage).toHaveBeenCalled();
  });
});

describe('buyStock', () => {
  let G: IG;
  let ctx: Ctx;

  const TEST_HOTELS = [
    [
      { chain: Chain.Toro },
      { chain: Chain.Toro },
      {},
      { chain: Chain.Continuum },
      { chain: Chain.Continuum },
      { chain: Chain.Continuum },
    ],
  ];

  const GAME_OVER_HOTELS = [
    [
      { chain: Chain.Toro },
      { chain: Chain.Toro },
      { chain: Chain.Toro },
      { chain: Chain.Toro },
      { chain: Chain.Toro },
      { chain: Chain.Toro },
      { chain: Chain.Toro },
      { chain: Chain.Toro },
      { chain: Chain.Toro },
      { chain: Chain.Toro },
      { chain: Chain.Toro },
    ],
  ];

  beforeEach(() => {
    G = {
      hotels: TEST_HOTELS,
      players: {
        '0': {
          stocks: { ...fillStockMap(0), [Chain.Toro]: 10 },
          money: 1000,
        },
      },
      availableStocks: { ...fillStockMap(25), [Chain.Toro]: 2 },
    };
    ctx = {
      ...DEFAULT_CTX,
      playerID: '0',
      events: { setStage: jest.fn() },
    };
  });

  it('buys the right amount of stock for the right prices', () => {
    buyStock(G, ctx, { [Chain.Toro]: 2, [Chain.Continuum]: 1 });

    // 2 Toros x $200 + 1 Continuum x $500 = $900
    expect(G.players['0'].money).toEqual(100);
    expect(G.players['0'].stocks[Chain.Toro]).toEqual(12);
    expect(G.players['0'].stocks[Chain.Continuum]).toEqual(1);
    expect(G.availableStocks[Chain.Toro]).toEqual(0);
    expect(G.availableStocks[Chain.Continuum]).toEqual(24);
    expect(ctx.events.setStage).toHaveBeenCalledWith('drawHotelsStage');
  });

  it('allows the player to pass', () => {
    buyStock(G, ctx, {});

    expect(G.players['0'].money).toEqual(1000);
    expect(G.players['0'].stocks[Chain.Toro]).toEqual(10);
    expect(G.players['0'].stocks[Chain.Continuum]).toEqual(0);
    expect(G.availableStocks[Chain.Toro]).toEqual(2);
    expect(G.availableStocks[Chain.Continuum]).toEqual(25);
    expect(ctx.events.setStage).toHaveBeenCalledWith('drawHotelsStage');
  });

  it('does not buy more stocks than are available', () => {
    buyStock(G, ctx, { [Chain.Toro]: 3 });

    // 2 Toros x $200 = $400
    expect(G.players['0'].money).toEqual(600);
    expect(G.players['0'].stocks[Chain.Toro]).toEqual(12);
    expect(G.availableStocks[Chain.Toro]).toEqual(0);
    expect(ctx.events.setStage).toHaveBeenCalledWith('drawHotelsStage');
  });

  it('does not buy more stocks than the player can afford', () => {
    buyStock(G, ctx, { [Chain.Continuum]: 3 });

    // 2 Continuum x $500 = $1000
    expect(G.players['0'].money).toEqual(0);
    expect(G.players['0'].stocks[Chain.Continuum]).toEqual(2);
    expect(G.availableStocks[Chain.Continuum]).toEqual(23);
    expect(ctx.events.setStage).toHaveBeenCalledWith('drawHotelsStage');
  });

  it('does not buy more than 3 stocks', () => {
    G.availableStocks[Chain.Toro] = 15;

    buyStock(G, ctx, { [Chain.Toro]: 4 });

    // 3 Toro x $200 = $600
    expect(G.players['0'].money).toEqual(400);
    expect(G.players['0'].stocks[Chain.Toro]).toEqual(13);
    expect(G.availableStocks[Chain.Toro]).toEqual(12);
    expect(ctx.events.setStage).toHaveBeenCalledWith('drawHotelsStage');
  });

  it('does not buy negative stocks', () => {
    buyStock(G, ctx, { [Chain.Toro]: -1 });

    // no change
    expect(G.players['0'].money).toEqual(1000);
    expect(G.players['0'].stocks[Chain.Toro]).toEqual(10);
    expect(G.availableStocks[Chain.Toro]).toEqual(2);
    expect(ctx.events.setStage).toHaveBeenCalledWith('drawHotelsStage');
  });

  it('moves to declareGameOverStage if the game can be declared over', () => {
    G.hotels = GAME_OVER_HOTELS;

    buyStock(G, ctx, {});

    expect(ctx.events.setStage).toHaveBeenCalledWith('declareGameOverStage');
  });
});

describe('swapAndSellStock', () => {
  let G: IG;
  let ctx: Ctx;

  const TEST_HOTELS = [
    [
      { chain: Chain.Toro },
      { chain: Chain.Toro },
      {},
      { chain: Chain.Continuum },
      { chain: Chain.Continuum },
      { chain: Chain.Continuum },
    ],
  ];

  beforeEach(() => {
    G = {
      hotels: TEST_HOTELS,
      merger: { chainToMerge: Chain.Toro, survivingChain: Chain.Continuum, swapAndSells: {} },
      players: {
        '0': {
          stocks: { ...fillStockMap(0), [Chain.Toro]: 10 },
          money: 1000,
        },
      },
      availableStocks: { ...fillStockMap(25), [Chain.Toro]: 2 },
    };
    ctx = {
      ...DEFAULT_CTX,
      playerID: '0',
      events: { setStage: jest.fn() },
    };
  });

  it('swaps and sells stock if available', () => {
    // swaps 2, sells 3 ($200 each)
    swapAndSellStock(G, ctx, 2, 3);

    expect(G.players['0'].money).toEqual(1600);
    expect(G.players['0'].stocks[Chain.Toro]).toEqual(5);
    expect(G.players['0'].stocks[Chain.Continuum]).toEqual(1);
    expect(G.availableStocks[Chain.Toro]).toEqual(7);
    expect(G.availableStocks[Chain.Continuum]).toEqual(24);
  });

  it('does not allow selling more than a player has', () => {
    // swaps 2, sells 9 ($200 each)
    swapAndSellStock(G, ctx, 2, 9);

    // only sells 8
    expect(G.players['0'].money).toEqual(2600);
    expect(G.players['0'].stocks[Chain.Toro]).toEqual(0);
    expect(G.players['0'].stocks[Chain.Continuum]).toEqual(1);
    expect(G.availableStocks[Chain.Toro]).toEqual(12);
    expect(G.availableStocks[Chain.Continuum]).toEqual(24);
  });

  it('does not allow swapping more than a player has', () => {
    // swaps 12
    swapAndSellStock(G, ctx, 12, 0);

    // only swaps 10
    expect(G.players['0'].money).toEqual(1000);
    expect(G.players['0'].stocks[Chain.Toro]).toEqual(0);
    expect(G.players['0'].stocks[Chain.Continuum]).toEqual(5);
    expect(G.availableStocks[Chain.Toro]).toEqual(12);
    expect(G.availableStocks[Chain.Continuum]).toEqual(20);
  });

  it('does not allow swapping for more than is available', () => {
    G.availableStocks[Chain.Continuum] = 3;

    // swaps 12
    swapAndSellStock(G, ctx, 12, 0);

    // only swaps 6
    expect(G.players['0'].money).toEqual(1000);
    expect(G.players['0'].stocks[Chain.Toro]).toEqual(4);
    expect(G.players['0'].stocks[Chain.Continuum]).toEqual(3);
    expect(G.availableStocks[Chain.Toro]).toEqual(8);
    expect(G.availableStocks[Chain.Continuum]).toEqual(0);
  });

  it('does not allow selling more stock than is left after swapping', () => {
    // swaps 8, sells 3 ($200 each)
    swapAndSellStock(G, ctx, 8, 3);

    // only swaps 8 and sells 2
    expect(G.players['0'].money).toEqual(1400);
    expect(G.players['0'].stocks[Chain.Toro]).toEqual(0);
    expect(G.players['0'].stocks[Chain.Continuum]).toEqual(4);
    expect(G.availableStocks[Chain.Toro]).toEqual(12);
    expect(G.availableStocks[Chain.Continuum]).toEqual(21);
  });

  it('does not allow negative values', () => {
    swapAndSellStock(G, ctx, -2, -1);

    // no change
    expect(G.players['0'].money).toEqual(1000);
    expect(G.players['0'].stocks[Chain.Toro]).toEqual(10);
    expect(G.players['0'].stocks[Chain.Continuum]).toEqual(0);
    expect(G.availableStocks[Chain.Toro]).toEqual(2);
    expect(G.availableStocks[Chain.Continuum]).toEqual(25);
  });
});

describe('chooseNewChain', () => {
  let originalBoard: Hotel[][];
  let G: IG;
  let ctx: Ctx;

  beforeEach(() => {
    originalBoard = [
      [
        { id: '1-A', hasBeenPlaced: true },
        { id: '2-A', hasBeenPlaced: true, drawnByPlayer: '0' },
        { id: '3-A', hasBeenPlaced: true },
        { id: '4-A', hasBeenPlaced: true },
      ],
    ];
    G = {
      players: { '0': { stocks: { ...fillStockMap(0) } } },
      availableStocks: { ...fillStockMap(25) },
      hotels: originalBoard,
      lastPlacedHotel: '2-A',
    };
    ctx = {
      ...DEFAULT_CTX,
      playerID: '0',
      events: { endStage: jest.fn() },
    };
  });

  it('should assign the chain to all hotels in the new chain', () => {
    chooseNewChain(G, ctx, Chain.Amore);

    expect(G.hotels).toEqual([
      [
        { id: '1-A', hasBeenPlaced: true, chain: Chain.Amore },
        { id: '2-A', hasBeenPlaced: true, chain: Chain.Amore, drawnByPlayer: '0' },
        { id: '3-A', hasBeenPlaced: true, chain: Chain.Amore },
        { id: '4-A', hasBeenPlaced: true, chain: Chain.Amore },
      ],
    ]);
  });

  it('should assign one bonus stock to the player who placed the last hotel', () => {
    chooseNewChain(G, ctx, Chain.Amore);

    expect(G.players['0'].stocks[Chain.Amore]).toEqual(1);
  });
});

describe('awardBonuses', () => {
  let player0: Player;
  let player1: Player;
  let player2: Player;
  let hotels: Hotel[][];
  let G: IG;

  beforeEach(() => {
    player0 = { id: '0', stocks: { ...fillStockMap(0), [Chain.Toro]: 3 }, money: 1000 };
    player1 = { id: '1', stocks: { ...fillStockMap(0), [Chain.Toro]: 4 }, money: 2000 };
    player2 = { id: '2', stocks: { ...fillStockMap(0), [Chain.Toro]: 1 }, money: 3000 };

    // size of chain = 3 => stock price = 300, majority = 3000, minority = 1500
    hotels = [
      [{ chain: Chain.Toro }, { chain: Chain.Toro }],
      [{ chain: Chain.Toro }, { chain: Chain.Amore }],
    ];

    G = {
      players: { '0': player0, '1': player1, '2': player2 },
      hotels,
    };
  });

  it('awards a single player majority and minority', () => {
    awardBonuses(G, Chain.Toro);

    // player 0 gets 1500
    // player 1 gets 3000
    expect(G).toEqual({
      players: {
        '0': { ...player0, money: 2500 },
        '1': { ...player1, money: 5000 },
        '2': { ...player2, money: 3000 },
      },
      hotels,
    });
  });

  it('splits majority between multiple players', () => {
    G.players['0'].stocks[Chain.Toro] = 3;
    G.players['1'].stocks[Chain.Toro] = 3;
    G.players['2'].stocks[Chain.Toro] = 2;

    awardBonuses(G, Chain.Toro);

    // players 0 and 1 get 4500 / 2 rounded up = 2300
    expect(G).toEqual({
      players: {
        '0': { ...player0, money: 3300 },
        '1': { ...player1, money: 4300 },
        '2': { ...player2, money: 3000 },
      },
      hotels,
    });
  });

  it('splits minority between multiple players', () => {
    G.players['0'].stocks[Chain.Toro] = 3;
    G.players['1'].stocks[Chain.Toro] = 2;
    G.players['2'].stocks[Chain.Toro] = 2;

    awardBonuses(G, Chain.Toro);

    // player 0 gets 3000
    // players 1 and 2 get 1500 / 2 rounded up = 800
    expect(G).toEqual({
      players: {
        '0': { ...player0, money: 4000 },
        '1': { ...player1, money: 2800 },
        '2': { ...player2, money: 3800 },
      },
      hotels,
    });
  });
});

describe('chooseSurvivingChain', () => {
  it('sets survivingChain and removes it from the mergingChains', () => {
    const hotels = [
      [{ chain: Chain.Toro }, { chain: Chain.Toro }],
      [{ chain: Chain.Continuum }, { chain: undefined }],
      [{ chain: Chain.Continuum }, { chain: Chain.Amore }],
    ];
    const G: IG = {
      merger: {
        mergingChains: [Chain.Toro, Chain.Continuum, Chain.Amore],
      },
      hotels,
    };
    const result = chooseSurvivingChain(G, {}, Chain.Continuum);
    expect(G.merger.survivingChain).toEqual(Chain.Continuum);
    expect(G.merger.mergingChains).toEqual([Chain.Toro, Chain.Amore]);
    expect(result).not.toEqual(INVALID_MOVE);
  });

  it('only allows one of the largest chains to be selected', () => {
    const hotels = [
      [{ chain: Chain.Toro }, { chain: Chain.Toro }],
      [{ chain: Chain.Continuum }, { chain: undefined }],
      [{ chain: Chain.Continuum }, { chain: Chain.Amore }],
    ];
    const G: IG = {
      merger: {
        mergingChains: [Chain.Toro, Chain.Continuum, Chain.Amore],
      },
      hotels,
    };
    const result = chooseSurvivingChain(G, {}, Chain.Amore);
    expect(result).toEqual(INVALID_MOVE);
  });
});

describe('chooseChainToMerge', () => {
  it('sets chainToMerge and re-sorts mergingChains', () => {
    const hotels = [
      [{ chain: Chain.Toro }, { chain: Chain.Toro }],
      [{ chain: Chain.Continuum }, { chain: Chain.Amore }],
      [{ chain: Chain.Continuum }, { chain: Chain.Amore }],
      [{ chain: Chain.Festivus }, { chain: Chain.Festivus }],
    ];
    const G: IG = {
      merger: {
        survivingChain: Chain.Toro,
        mergingChains: [Chain.Festivus, Chain.Amore, Chain.Continuum],
      },
      hotels,
    };
    const result = chooseChainToMerge(G, {}, Chain.Continuum);
    expect(G.merger.chainToMerge).toEqual(Chain.Continuum);
    expect(G.merger.mergingChains).toEqual([Chain.Continuum, Chain.Festivus, Chain.Amore]);
    expect(result).not.toEqual(INVALID_MOVE);
  });
});

describe('autosetChainToMerge', () => {
  it('does nothing if chainToMerge is set', () => {
    const hotels = [
      [{ chain: Chain.Toro }, { chain: Chain.Toro }],
      [{ chain: Chain.Toro }, { chain: Chain.Continuum }],
      [{ chain: Chain.Continuum }, { chain: Chain.Amore }],
    ];
    const G: IG = {
      merger: {
        chainToMerge: Chain.Amore, // would be disallowed, but illustrates this test
        survivingChain: Chain.Toro,
        mergingChains: [Chain.Amore, Chain.Continuum],
      },
      hotels,
    };
    autosetChainToMerge(G);
    expect(G.merger.chainToMerge).toEqual(Chain.Amore);
    expect(G.merger.mergingChains).toEqual([Chain.Amore, Chain.Continuum]);
  });

  it('chooses the next largest chain', () => {
    const hotels = [
      [{ chain: Chain.Toro }, { chain: Chain.Toro }],
      [{ chain: Chain.Continuum }, { chain: undefined }],
      [{ chain: Chain.Continuum }, { chain: Chain.Amore }],
    ];
    const G: IG = {
      merger: {
        survivingChain: Chain.Toro,
        mergingChains: [Chain.Continuum, Chain.Amore],
      },
      hotels,
    };
    autosetChainToMerge(G);
    expect(G.merger.chainToMerge).toEqual(Chain.Continuum);
    expect(G.merger.mergingChains).toEqual([Chain.Continuum, Chain.Amore]);
  });

  it('choose nothing if there is a tie', () => {
    const hotels = [
      [{ chain: Chain.Toro }, { chain: Chain.Toro }],
      [{ chain: Chain.Continuum }, { chain: Chain.Amore }],
      [{ chain: Chain.Continuum }, { chain: Chain.Amore }],
    ];
    const G: IG = {
      merger: {
        survivingChain: Chain.Toro,
        mergingChains: [Chain.Amore, Chain.Continuum],
      },
      hotels,
    };
    autosetChainToMerge(G);
    expect(G.merger.chainToMerge).toBeUndefined();
    expect(G.merger.mergingChains).toEqual([Chain.Amore, Chain.Continuum]);
  });
});

describe('mergerPhaseNextTurn', () => {
  let eventsSpy;
  beforeEach(() => {
    eventsSpy = { setPhase: jest.fn() };
  });

  it('wraps around to the beginning of the order', () => {
    const G: IG = {
      lastPlacedHotel: '1-A',
      hotels: [[{ drawnByPlayer: 'Player3' }]],
      merger: {
        chainToMerge: Chain.Toro,
        mergingChains: [Chain.Toro],
        swapAndSells: {},
      },
    };
    const ctx: Ctx = {
      playOrderPos: 3,
      numPlayers: 4,
      playOrder: ['Player1', 'Player2', 'Player3', 'Player4'],
      activePlayers: {},
      currentPlayer: 'Player4',
      turn: 0,
      phase: 'mergerPhase',
      events: eventsSpy,
    };
    expect(mergerPhaseNextTurn(G, ctx)).toEqual(0);
    expect(eventsSpy.setPhase.mock.calls.length).toEqual(0);
  });

  it('skips the merging player if they do not have any stock', () => {
    const G: IG = {
      lastPlacedHotel: '1-A',
      hotels: [[{ drawnByPlayer: 'Player3' }]],
      merger: {
        chainToMerge: Chain.Toro,
        mergingChains: [Chain.Toro],
        swapAndSells: {
          Player1: { swap: 0, sell: 0 },
          Player3: { swap: 0, sell: 0 },
          Player4: { swap: 0, sell: 0 },
        },
      },
    };
    const ctx = {
      playOrderPos: 2,
      numPlayers: 4,
      playOrder: ['Player1', 'Player2', 'Player3', 'Player4'],
      activePlayers: {},
      currentPlayer: 'Player3',
      turn: 0,
      phase: 'mergerPhase',
      events: eventsSpy,
    };
    expect(mergerPhaseNextTurn(G, ctx)).toEqual(1);
    expect(eventsSpy.setPhase.mock.calls.length).toEqual(0);
  });

  it('skips to the next player that has not exchanged stock', () => {
    const G: IG = {
      lastPlacedHotel: '1-A',
      hotels: [[{ drawnByPlayer: 'Player3' }]],
      merger: {
        chainToMerge: Chain.Toro,
        mergingChains: [Chain.Toro],
        swapAndSells: {
          Player1: { swap: 0, sell: 0 },
          Player3: { swap: 0, sell: 0 },
          Player4: { swap: 0, sell: 0 },
        },
      },
    };
    const ctx = {
      playOrderPos: 3,
      numPlayers: 4,
      playOrder: ['Player1', 'Player2', 'Player3', 'Player4'],
      activePlayers: {},
      currentPlayer: 'Player4',
      turn: 0,
      phase: 'mergerPhase',
      events: eventsSpy,
    };
    expect(mergerPhaseNextTurn(G, ctx)).toEqual(1);
    expect(eventsSpy.setPhase.mock.calls.length).toEqual(0);
  });

  it('stops if the next player caused the merger and they have exchanged', () => {
    const G = {
      lastPlacedHotel: '1-A',
      merger: {
        chainToMerge: Chain.Toro,
        mergingChains: [Chain.Toro],
        swapAndSells: {
          Player1: { swap: 0, sell: 0 },
          Player2: { swap: 0, sell: 0 },
          Player3: { swap: 0, sell: 0 },
          Player4: { swap: 0, sell: 0 },
        },
      },
      hotels: [[{ drawnByPlayer: 'Player3' }]],
    };
    const ctx = {
      playOrderPos: 1,
      numPlayers: 4,
      playOrder: ['Player1', 'Player2', 'Player3', 'Player4'],
      activePlayers: {},
      currentPlayer: 'Player2',
      turn: 0,
      phase: 'mergerPhase',
      events: eventsSpy,
    };
    expect(mergerPhaseNextTurn(G, ctx)).not.toBeUndefined();
  });

  it('returns undefined if no one else has any stock', () => {
    const G = {
      lastPlacedHotel: '1-A',
      hotels: [[{ drawnByPlayer: 'Player3' }]],
      merger: {
        chainToMerge: Chain.Toro,
        mergingChains: [Chain.Toro],
        swapAndSells: {
          Player1: { swap: 0, sell: 0 },
          Player2: { swap: 0, sell: 0 },
          Player3: { swap: 0, sell: 0 },
          Player4: { swap: 0, sell: 0 },
        },
      },
    };
    const ctx = {
      playOrderPos: 2,
      numPlayers: 4,
      playOrder: ['Player1', 'Player2', 'Player3', 'Player4'],
      activePlayers: {},
      currentPlayer: '2',
      turn: 0,
      phase: 'mergerPhase',
      events: eventsSpy,
    };
    expect(mergerPhaseNextTurn(G, ctx)).not.toBeUndefined();
  });

  it('returns chooseNextMergerPhase if there are more chains to merge', () => {
    const G = {
      lastPlacedHotel: '1-A',
      hotels: [[{ drawnByPlayer: 'Player3' }]],
      merger: {
        chainToMerge: Chain.Toro,
        mergingChains: [Chain.Toro, Chain.Lucius],
        swapAndSells: {
          Player1: { swap: 0, sell: 0 },
          Player2: { swap: 0, sell: 0 },
          Player3: { swap: 0, sell: 0 },
          Player4: { swap: 0, sell: 0 },
        },
      },
    };
    const ctx = {
      playOrderPos: 2,
      numPlayers: 4,
      playOrder: ['Player1', 'Player2', 'Player3', 'Player4'],
      activePlayers: {},
      currentPlayer: '2',
      turn: 0,
      phase: 'mergerPhase',
      events: eventsSpy,
    };
    expect(mergerPhaseNextTurn(G, ctx)).not.toBeUndefined();
  });
});

describe('declareGameOver', () => {
  let G: IG;
  let ctx: Ctx;

  const TEST_HOTELS = [
    [
      { chain: Chain.Toro },
      { chain: Chain.Toro },
      {},
      { chain: Chain.Continuum },
      { chain: Chain.Continuum },
      { chain: Chain.Continuum },
    ],
  ];

  beforeEach(() => {
    G = {
      hotels: TEST_HOTELS,
      players: {
        '0': {
          id: '0',
          stocks: { ...fillStockMap(0), [Chain.Toro]: 8 },
          money: 1000,
        },
        '1': {
          id: '1',
          stocks: { ...fillStockMap(0), [Chain.Toro]: 4, [Chain.Continuum]: 13 },
          money: 2000,
        },
      },
      availableStocks: { ...fillStockMap(0) },
    };
    ctx = {
      ...DEFAULT_CTX,
      playerID: '0',
      events: {
        endGame: jest.fn(),
        endTurn: jest.fn(),
        endStage: jest.fn(),
        setStage: jest.fn(),
      },
    };
  });

  it('settles the remaining hotel chains', () => {
    declareGameOver(G, ctx, true);

    // Started with $1000
    // Toro majority = $2000
    // Toro stock = 8 x $200 = $1600
    expect(G.players['0'].money).toEqual(4600);

    // Started with $2000
    // Toro minority = $1000
    // Toro stock = 4 x $200 = $800
    // Continuum majority + minority = $7500
    // Continuum stock = 13 x $500 = $6500
    expect(G.players['1'].money).toEqual(17800);

    expect(ctx.events.endGame).toHaveBeenCalled();
  });

  it('allows a player to not declare the game over', () => {
    declareGameOver(G, ctx, false);

    expect(ctx.events.setStage).toHaveBeenCalledWith('drawHotelsStage');
    expect(ctx.events.endGame).not.toHaveBeenCalled();
  });
});

describe('drawHotels', () => {
  let G: IG;
  let ctx;

  beforeEach(() => {
    G = {
      hotels: fillInTestHotels([
        [{ drawnByPlayer: '1' }, { hasBeenRemoved: true }, {}],
        [{ chain: Chain.Toro }, { drawnByPlayer: '0' }, { chain: Chain.Continuum }],
        [{ chain: Chain.Toro }, { drawnByPlayer: '0' }, { chain: Chain.Continuum }],
        [{ chain: Chain.Toro }, {}, { chain: Chain.Continuum }],
        [{ chain: Chain.Toro }, {}, { chain: Chain.Continuum }],
        [{ chain: Chain.Toro }, {}, { chain: Chain.Continuum }],
        [{ chain: Chain.Toro }, {}, { chain: Chain.Continuum }],
        [{ chain: Chain.Toro }, {}, { chain: Chain.Continuum }],
        [{ chain: Chain.Toro }, {}, { chain: Chain.Continuum }],
        [{ chain: Chain.Toro }, {}, { chain: Chain.Continuum }],
        [{ chain: Chain.Toro }, {}, { chain: Chain.Continuum }],
        [{ chain: Chain.Toro }, {}, { chain: Chain.Continuum }],
        [{ drawnByPlayer: '0' }, { drawnByPlayer: '0' }, { drawnByPlayer: '0' }],
      ]),
      players: {
        '0': { id: '0' },
        '1': { id: '1' },
      },
    };
    ctx = {
      ...DEFAULT_CTX,
      playerID: '0',
      events: {
        endTurn: jest.fn(),
        endStage: jest.fn(),
      },
      random: { Number: () => 0 },
    };
  });

  it('removes unplayable tiles, draws to 6, and ends the turn', () => {
    drawHotels(G, ctx);

    expect(G.hotels).toEqual(
      fillInTestHotels([
        [{ drawnByPlayer: '1' }, { hasBeenRemoved: true }, { drawnByPlayer: '0' }],
        [{ chain: Chain.Toro }, { hasBeenRemoved: true }, { chain: Chain.Continuum }],
        [{ chain: Chain.Toro }, { hasBeenRemoved: true }, { chain: Chain.Continuum }],
        [{ chain: Chain.Toro }, { drawnByPlayer: '0' }, { chain: Chain.Continuum }],
        [{ chain: Chain.Toro }, { drawnByPlayer: '0' }, { chain: Chain.Continuum }],
        [{ chain: Chain.Toro }, {}, { chain: Chain.Continuum }],
        [{ chain: Chain.Toro }, {}, { chain: Chain.Continuum }],
        [{ chain: Chain.Toro }, {}, { chain: Chain.Continuum }],
        [{ chain: Chain.Toro }, {}, { chain: Chain.Continuum }],
        [{ chain: Chain.Toro }, {}, { chain: Chain.Continuum }],
        [{ chain: Chain.Toro }, {}, { chain: Chain.Continuum }],
        [{ chain: Chain.Toro }, {}, { chain: Chain.Continuum }],
        [{ drawnByPlayer: '0' }, { drawnByPlayer: '0' }, { drawnByPlayer: '0' }],
      ]),
    );
    expect(ctx.events.endTurn).toHaveBeenCalled();
    expect(ctx.events.endStage).toHaveBeenCalled();
  });
});

describe('mergerPhase', () => {
  describe('a 3-way merger', () => {
    let p0;
    let p1;
    let originalBoard: Hotel[][];
    beforeEach(() => {
      originalBoard = fillInTestHotels([
        [
          // having 1-A be drawn by player 0 ensures they will have the first turn
          { chain: Chain.Toro, drawnByPlayer: '0' },
          { chain: Chain.Toro },
          {},
          {},
        ],
        [
          {},
          { drawnByPlayer: '0' }, // will merge all three chains
          { chain: Chain.Amore },
          { chain: Chain.Amore },
        ],
        [{ chain: Chain.Continuum }, { chain: Chain.Continuum }, {}, {}],
      ]);

      const MergersCustomScenario = {
        ...MergersGame,
        setup: (ctx: Ctx) => {
          const G = setupInitialState(ctx.numPlayers);
          G.hotels = originalBoard;
          G.players['0'].stocks[Chain.Toro] = 1;
          G.players['0'].stocks[Chain.Continuum] = 2;
          G.players['1'].stocks[Chain.Amore] = 1;
          G.players['1'].stocks[Chain.Continuum] = 1;
          return G;
        },
      };

      const clients = getMultiplayerTestClients(2, MergersCustomScenario);

      p0 = clients[0];
      p1 = clients[1];
    });

    it.only('completes the merger process twice', () => {
      // DO NOT SUBMIT: DELETE it.only BEFORE MERGING!
      expect(p0.store.getState().G.players['0'].money).toEqual(6000);
      expect(p1.store.getState().G.players['1'].money).toEqual(6000);
      expect(p0.store.getState().G.players['0'].stocks[Chain.Toro]).toEqual(1);
      expect(p0.store.getState().G.players['0'].stocks[Chain.Amore]).toEqual(0);
      expect(p0.store.getState().G.players['0'].stocks[Chain.Continuum]).toEqual(2);
      expect(p0.store.getState().G.players['1'].stocks[Chain.Toro]).toEqual(0);
      expect(p0.store.getState().G.players['1'].stocks[Chain.Amore]).toEqual(1);
      expect(p0.store.getState().G.players['1'].stocks[Chain.Continuum]).toEqual(1);

      // place merger tile
      p0.moves.placeHotel('2-B');

      // chooseSurvivingChainPhase
      expect(p0.store.getState().ctx.phase).toEqual('chooseSurvivingChainPhase');
      p0.moves.chooseSurvivingChain(Chain.Amore);

      // chooseChainToMergePhase
      expect(p0.store.getState().ctx.phase).toEqual('chooseChainToMergePhase');
      p0.moves.chooseChainToMerge(Chain.Toro);

      // mergerPhase (merging Toro)
      expect(p0.store.getState().ctx.phase).toEqual('mergerPhase');
      // awards bonuses (2000, 1000, both to p0)
      expect(p0.store.getState().G.players['0'].money).toEqual(9000);
      expect(p0.store.getState().G.players['1'].money).toEqual(6000);
      // p0 swaps and sells stock
      debugger;
      p0.moves.swapAndSellStock(0, 1); // swap 0, sell 1
      expect(p0.store.getState().G.players['0'].stocks[Chain.Toro]).toEqual(0);
      // skips p1

      // mergerPhase (merging Continuum)
      expect(p0.store.getState().ctx.phase).toEqual('mergerPhase');
      // awards bonuses (4000 to p0, 2000 to p1)
      expect(p0.store.getState().G.players['0'].money).toEqual(13200);
      expect(p0.store.getState().G.players['1'].money).toEqual(8000);
      // p0 swaps and sells stock

      p0.moves.swapAndSellStock(2, 0); // swap 2, sell 0
      expect(p0.store.getState().G.players['0'].stocks[Chain.Continuum]).toEqual(0);
      expect(p0.store.getState().G.players['0'].stocks[Chain.Amore]).toEqual(1);
      expect(p0.store.getState().G.players['0'].money).toEqual(13200);
      // p1 swaps and sells stock
      p1.moves.swapAndSellStock(0, 0); // swap 0, sell 0
      expect(p0.store.getState().G.players['1'].stocks[Chain.Continuum]).toEqual(1);
      expect(p0.store.getState().G.players['1'].money).toEqual(8000);

      // moves on to buildingPhase
      expect(p0.store.getState().ctx.phase).toEqual('buildingPhase');
      expect(p0.store.getState().ctx.activePlayers[0]).toEqual('buyStockStage');

      // absorbs hotels
      const expectedBoard = fillInTestHotels([
        [{ chain: Chain.Amore, drawnByPlayer: '0' }, { chain: Chain.Amore }, {}, {}],
        [{}, { chain: Chain.Amore, drawnByPlayer: '0' }, { chain: Chain.Amore }, { chain: Chain.Amore }],
        [{ chain: Chain.Amore }, { chain: Chain.Amore }, {}, {}],
      ]);
      expect(p0.store.getState().G.hotels).toEqual(expectedBoard);
    });
  });

  describe('when the merging player does not have stock in the chain', () => {
    let p0;
    let p1;
    let originalBoard: Hotel[][];
    beforeEach(() => {
      originalBoard = fillInTestHotels([
        [
          // having 1-A be drawn by player 0 ensures they will have the first turn
          { chain: Chain.Toro, drawnByPlayer: '0' },
          { chain: Chain.Toro },
          {},
        ],
        [{}, { drawnByPlayer: '0' }, {}],
        [{ chain: Chain.Continuum }, { chain: Chain.Continuum }, {}],
      ]);

      const MergersCustomScenario = {
        ...MergersGame,
        setup: (ctx: Ctx) => {
          const G = setupInitialState(ctx.numPlayers);
          G.hotels = originalBoard;
          G.players['1'].stocks[Chain.Toro] = 1;
          return G;
        },
      };

      const clients = getMultiplayerTestClients(2, MergersCustomScenario);

      p0 = clients[0];
      p1 = clients[1];
    });

    it('skips to the player with stock', () => {
      expect(p0.store.getState().G.players['0'].money).toEqual(6000);
      expect(p1.store.getState().G.players['1'].money).toEqual(6000);

      // place merger tile
      p0.moves.placeHotel('2-B');

      // chooseSurvivingChainPhase
      expect(p0.store.getState().ctx.phase).toEqual('chooseSurvivingChainPhase');
      p0.moves.chooseSurvivingChain(Chain.Continuum);

      // chooseChainToMergePhase (skipped)

      // mergerPhase (merging Toro)
      expect(p0.store.getState().ctx.phase).toEqual('mergerPhase');
      // awards bonuses (2000, 1000, both to p1)
      expect(p0.store.getState().G.players['0'].money).toEqual(6000);
      expect(p0.store.getState().G.players['1'].money).toEqual(9000);

      // p1 exchanges stock
      p1.moves.swapAndSellStock(0, 1); // swaps 0, sells 1
      expect(p0.store.getState().G.players['1'].stocks[Chain.Toro]).toEqual(0);
      expect(p0.store.getState().G.players['1'].money).toEqual(9200);

      // moves on to buildingPhase
      expect(p0.store.getState().ctx.phase).toEqual('buildingPhase');
      expect(p0.store.getState().ctx.activePlayers[0]).toEqual('buyStockStage');

      // absorbs hotels
      const expectedBoard = fillInTestHotels([
        [{ chain: Chain.Continuum, drawnByPlayer: '0' }, { chain: Chain.Continuum }, {}],
        [{}, { drawnByPlayer: '0', chain: Chain.Continuum }, {}],
        [{ chain: Chain.Continuum }, { chain: Chain.Continuum }, {}],
      ]);
      expect(p0.store.getState().G.hotels).toEqual(expectedBoard);
    });
  });
});

describe('mergers', () => {
  let p0;
  let p1;
  let p2;

  beforeEach(() => {
    // Prevent hotel selection by assigning all tiles up front.
    // Assign three initial hotels in place of random initial assignment.
    // Player 0 placed 1-A so will go first.
    const hotels = fillInTestHotels([
      [
        { drawnByPlayer: '0', hasBeenPlaced: true },
        { drawnByPlayer: '0' },
        { drawnByPlayer: '0' },
        { drawnByPlayer: '0' },
      ],
      [
        { drawnByPlayer: '0' },
        { drawnByPlayer: '2' },
        { drawnByPlayer: '1' },
        { drawnByPlayer: '1', hasBeenPlaced: true },
      ],
      [{ drawnByPlayer: '2' }, { drawnByPlayer: '2' }, { drawnByPlayer: '2' }, { drawnByPlayer: '1' }],
      [
        { drawnByPlayer: '2', hasBeenPlaced: true },
        { drawnByPlayer: '2' },
        { drawnByPlayer: '1' },
        { drawnByPlayer: '1' },
      ],
    ]);

    const MergersCustomScenario = {
      ...MergersGame,
      setup: (ctx: Ctx) => {
        const G = setupInitialState(ctx.numPlayers);
        G.hotels = hotels;
        return G;
      },
    };
    const clients = getMultiplayerTestClients(3, MergersCustomScenario);

    p0 = clients[0];
    p1 = clients[1];
    p2 = clients[2];
  });

  it('correctly plays out an entire game', () => {
    p0.moves.placeHotel('2-A');
    p0.moves.chooseNewChain(Chain.Toro);
    p0.moves.buyStock({ [Chain.Toro]: 3 });
    p0.moves.drawHotels();
    expect(p0.store.getState().G.players['0'].money).toEqual(5400);
    expect(p0.store.getState().G.players['0'].stocks[Chain.Toro]).toEqual(4);
    expect(p0.store.getState().G.availableStocks[Chain.Toro]).toEqual(21);

    p1.moves.placeHotel('3-B');
    p1.moves.chooseNewChain(Chain.Amore);
    p1.moves.buyStock({ [Chain.Amore]: 3 });
    p1.moves.drawHotels();
    expect(p0.store.getState().G.players['1'].money).toEqual(5100);
    expect(p0.store.getState().G.players['1'].stocks[Chain.Amore]).toEqual(4);
    expect(p0.store.getState().G.availableStocks[Chain.Amore]).toEqual(21);

    p2.moves.placeHotel('1-C');
    p2.moves.chooseNewChain(Chain.Continuum);
    p2.moves.buyStock({ [Chain.Continuum]: 3 });
    p2.moves.drawHotels();
    expect(p0.store.getState().G.players['2'].money).toEqual(4800);
    expect(p0.store.getState().G.players['2'].stocks[Chain.Continuum]).toEqual(4);
    expect(p0.store.getState().G.availableStocks[Chain.Continuum]).toEqual(21);

    p0.moves.placeHotel('3-A');
    p0.moves.chooseSurvivingChain(Chain.Amore);
    p0.moves.swapAndSellStock(2, 1);
    p0.moves.buyStock({ [Chain.Amore]: 3 });
    p0.moves.drawHotels();
    expect(p0.store.getState().G.players['0'].money).toEqual(6800);
    expect(p0.store.getState().G.players['0'].stocks[Chain.Toro]).toEqual(1);
    expect(p0.store.getState().G.players['0'].stocks[Chain.Amore]).toEqual(4);
    expect(p0.store.getState().G.availableStocks[Chain.Toro]).toEqual(24);
    expect(p0.store.getState().G.availableStocks[Chain.Amore]).toEqual(17);

    p1.moves.placeHotel('4-D');
    p1.moves.buyStock({ [Chain.Continuum]: 1, [Chain.Amore]: 2 });
    p1.moves.drawHotels();
    expect(p0.store.getState().G.players['1'].money).toEqual(3500);
    expect(p0.store.getState().G.players['1'].stocks[Chain.Amore]).toEqual(6);
    expect(p0.store.getState().G.players['1'].stocks[Chain.Continuum]).toEqual(1);
    expect(p0.store.getState().G.availableStocks[Chain.Amore]).toEqual(15);
    expect(p0.store.getState().G.availableStocks[Chain.Continuum]).toEqual(20);

    p2.moves.placeHotel('2-C');
    p2.moves.buyStock({ [Chain.Continuum]: 3 });
    p2.moves.drawHotels();
    expect(p0.store.getState().G.players['2'].money).toEqual(3300);
    expect(p0.store.getState().G.players['2'].stocks[Chain.Continuum]).toEqual(7);
    expect(p0.store.getState().G.availableStocks[Chain.Continuum]).toEqual(17);

    p0.moves.placeHotel('4-A');
    p0.moves.buyStock({ [Chain.Amore]: 3 });
    p0.moves.drawHotels();
    expect(p0.store.getState().G.players['0'].money).toEqual(4700);
    expect(p0.store.getState().G.players['0'].stocks[Chain.Toro]).toEqual(1);
    expect(p0.store.getState().G.players['0'].stocks[Chain.Amore]).toEqual(7);
    expect(p0.store.getState().G.availableStocks[Chain.Toro]).toEqual(24);
    expect(p0.store.getState().G.availableStocks[Chain.Amore]).toEqual(12);

    p1.moves.placeHotel('3-D');
    p1.moves.chooseNewChain(Chain.Toro);
    p1.moves.buyStock({ [Chain.Toro]: 1, [Chain.Amore]: 2 });
    p1.moves.drawHotels();
    expect(p0.store.getState().G.players['1'].money).toEqual(1900);
    expect(p0.store.getState().G.players['1'].stocks[Chain.Amore]).toEqual(8);
    expect(p0.store.getState().G.players['1'].stocks[Chain.Continuum]).toEqual(1);
    expect(p0.store.getState().G.players['1'].stocks[Chain.Toro]).toEqual(2);
    expect(p0.store.getState().G.availableStocks[Chain.Amore]).toEqual(10);
    expect(p0.store.getState().G.availableStocks[Chain.Continuum]).toEqual(17);
    expect(p0.store.getState().G.availableStocks[Chain.Toro]).toEqual(22);

    p2.moves.placeHotel('2-B');
    expect(p0.store.getState().G.players['1'].money).toEqual(4400);
    expect(p0.store.getState().G.players['2'].money).toEqual(8300);
    p2.moves.swapAndSellStock(6, 1);
    expect(p0.store.getState().G.players['2'].money).toEqual(8800);
    expect(p0.store.getState().G.players['2'].stocks[Chain.Continuum]).toEqual(0);
    expect(p0.store.getState().G.players['2'].stocks[Chain.Amore]).toEqual(3);
    p1.moves.swapAndSellStock(0, 1);
    expect(p0.store.getState().G.players['1'].money).toEqual(4900);
    expect(p0.store.getState().G.players['1'].stocks[Chain.Continuum]).toEqual(0);
    p2.moves.buyStock({ [Chain.Amore]: 3 });
    p2.moves.drawHotels();
    expect(p0.store.getState().G.players['2'].money).toEqual(6700);
    expect(p0.store.getState().G.players['2'].stocks[Chain.Amore]).toEqual(6);
    expect(p0.store.getState().G.availableStocks[Chain.Amore]).toEqual(4);

    p0.moves.placeHotel('1-B');
    p0.moves.buyStock({ [Chain.Amore]: 3 });
    p0.moves.drawHotels();
    expect(p0.store.getState().G.players['0'].money).toEqual(2300);
    expect(p0.store.getState().G.players['0'].stocks[Chain.Toro]).toEqual(1);
    expect(p0.store.getState().G.players['0'].stocks[Chain.Amore]).toEqual(10);
    expect(p0.store.getState().G.availableStocks[Chain.Toro]).toEqual(22);
    expect(p0.store.getState().G.availableStocks[Chain.Amore]).toEqual(1);

    p1.moves.placeHotel('4-C');
    expect(p0.store.getState().G.players['0'].money).toEqual(3300);
    expect(p0.store.getState().G.players['1'].money).toEqual(6900);
    p1.moves.swapAndSellStock(2);
    expect(p0.store.getState().G.players['1'].money).toEqual(6900);
    expect(p0.store.getState().G.players['1'].stocks[Chain.Toro]).toEqual(0);
    expect(p0.store.getState().G.players['1'].stocks[Chain.Amore]).toEqual(9);
    expect(p0.store.getState().G.availableStocks[Chain.Amore]).toEqual(0);
    p0.moves.swapAndSellStock(0, 1);
    expect(p0.store.getState().G.players['0'].money).toEqual(3500);
    expect(p0.store.getState().G.players['0'].stocks[Chain.Toro]).toEqual(0);
    expect(p0.store.getState().G.availableStocks[Chain.Toro]).toEqual(25);
    p1.moves.buyStock();
    p1.moves.declareGameOver(false);
    p1.moves.drawHotels();
    expect(p0.store.getState().G.players['0'].stocks[Chain.Amore]).toEqual(10);

    p2.moves.placeHotel('2-D');
    p2.moves.buyStock();
    p2.moves.declareGameOver(true);

    // 8000 bonus + 10 * 800 = 16000
    expect(p0.store.getState().G.players['0'].money).toEqual(19500);
    // 4000 bonus + 9 * 800 = 11200
    expect(p0.store.getState().G.players['1'].money).toEqual(18100);
    // 6 * 800 = 4800
    expect(p0.store.getState().G.players['2'].money).toEqual(11500);

    expect(p0.store.getState().ctx.gameover).toEqual({
      declaredBy: '2',
      winner: '0',
      scores: [
        {
          id: '0',
          money: 19500,
          winner: true,
        },
        {
          id: '1',
          money: 18100,
          winner: false,
        },
        {
          id: '2',
          money: 11500,
          winner: false,
        },
      ],
      finalMergers: [
        {
          chainToMerge: Chain.Amore,
          chainSize: 15,
          stockCounts: { '0': 10, '1': 9, '2': 6 },
          bonuses: { '0': 8000, '1': 4000 },
          swapAndSells: {},
        },
      ],
    });
  });
});
