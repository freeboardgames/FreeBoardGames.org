import { INVALID_MOVE } from 'boardgame.io/core';
import { Game, Ctx } from 'boardgame.io';
import { Chain, Hotel, Player, IG, Merger } from './types';
import {
  playersInMajority,
  playersInMinority,
  roundUpToNearest100,
  roundDownToNearest2,
  setupInitialState,
} from './utils';
import { Hotels } from './hotels';

export function getHotels(G: IG): Hotels {
  return new Hotels(G.hotels);
}

export function placeHotel(G: IG, ctx: Ctx, id?: string) {
  const hotels = getHotels(G);
  if (!id) {
    if (!!hotels.playerHotels(ctx.playerID).find((h) => !hotels.isUnplayable(h))) {
      return INVALID_MOVE;
    }
    G.lastMove = `Player ${ctx.playerID} doesn't have any playable hotels`;
    ctx.events.endStage();
    return;
  }

  const hotel = hotels.getHotel(id);
  if (hotel.hasBeenPlaced || hotel.drawnByPlayer !== ctx.playerID || hotels.isUnplayable(hotel)) {
    return INVALID_MOVE;
  }
  hotel.hasBeenPlaced = true;
  G.lastPlacedHotel = id;

  const adjacent = hotels.adjacentHotels(hotel);

  if (adjacent.length > 0) {
    const adjacentChains = adjacent.map((h) => h.chain);
    const adjacentDefinedChains = adjacentChains.filter((c) => !!c);
    const adjacentDefinedChainSet = new Set(adjacentDefinedChains);
    const numAdjacentChains = adjacentDefinedChainSet.size;

    if (numAdjacentChains === 0) {
      ctx.events.setStage('chooseNewChainStage');
      return;
    } else if (numAdjacentChains === 1) {
      absorbNewHotels(G, adjacentDefinedChains[0], id);
    } else if (numAdjacentChains > 1) {
      // merger
      const mergingChains = Array.from(adjacentDefinedChainSet);
      mergingChains.sort((a, b) => hotels.sizeOfChain(b) - hotels.sizeOfChain(a));
      G.merger = { mergingChains };
      ctx.events.setPhase('chooseSurvivingChainPhase');
    }
  }
  ctx.events.endStage();
}

// absorb a hotel and all it connects to, into a chain
export function absorbNewHotels(G: IG, chain: Chain, id: string, idsAbsorbed: Set<string> = new Set([id])) {
  const hotels = getHotels(G);
  const hotel = hotels.getHotel(id);
  hotels
    .adjacentHotels(hotel)
    .filter((h) => !idsAbsorbed.has(h.id))
    .forEach((h) => absorbNewHotels(G, chain, h.id, idsAbsorbed.add(h.id)));
  hotel.chain = chain;
}

export function chooseNewChain(G: IG, ctx: Ctx, chain: Chain) {
  const hotels = getHotels(G);
  if (hotels.sizeOfChain(chain) > 0) {
    return INVALID_MOVE;
  }
  const lastPlacedHotel = hotels.getHotel(G.lastPlacedHotel);
  lastPlacedHotel.chain = chain;
  absorbNewHotels(G, chain, lastPlacedHotel.id);

  // assign free stock
  if (G.availableStocks[chain] > 0) {
    G.availableStocks[chain]--;
    G.players[lastPlacedHotel.drawnByPlayer].stocks[chain]++;
  }
  G.lastMove = `Player ${ctx.playerID} chooses ${chain} as the new chain`;
  ctx.events.endStage();
}

export function gameCanBeDeclaredOver(G: IG) {
  const hotels = getHotels(G);
  const chainSizes = Object.keys(Chain).map((key) => hotels.sizeOfChain(Chain[key]));
  const chainsOnBoard = chainSizes.filter((s) => s > 0).length;
  const unmergeableChains = chainSizes.filter((s) => s > 10).length;
  if (chainsOnBoard > 0 && chainsOnBoard === unmergeableChains) {
    return true;
  } else if (chainSizes.find((s) => s > 40)) {
    return true;
  }
  return false;
}

export function buyStock(G: IG, ctx: Ctx, order: Partial<Record<Chain, number>>) {
  G.lastMove = '';
  if (order) {
    const hotels = getHotels(G);
    const player = G.players[ctx.playerID];
    let purchasesRemaining = 3;
    Object.keys(Chain).forEach((key) => {
      const chain = Chain[key];
      const num = order[chain];
      if (!num) {
        return;
      }
      const stockPrice = hotels.priceOfStock(chain);
      if (stockPrice === undefined) {
        return;
      }
      let stocksToBuy = Math.min(num, Math.min(G.availableStocks[chain], purchasesRemaining));
      if (!G.lastMove) {
        G.lastMove += `Player ${ctx.playerID} buys `;
      } else {
        G.lastMove += ', ';
      }
      G.lastMove += `${stocksToBuy} ${chain} for $${stockPrice * stocksToBuy}`;
      while (stocksToBuy > 0 && player.money >= stockPrice) {
        player.stocks[chain]++;
        player.money -= stockPrice;
        G.availableStocks[chain]--;
        stocksToBuy--;
        purchasesRemaining--;
      }
    });
  }

  if (!G.lastMove) {
    G.lastMove = `Player ${ctx.playerID} doesn't buy any stock`;
  }

  if (gameCanBeDeclaredOver(G)) {
    ctx.events.setStage('declareGameOverStage');
  } else {
    ctx.events.setStage('drawHotelsStage');
  }
}

export function drawHotels(G: IG, ctx: Ctx) {
  // first, find and remove any of this player's unplayable tiles
  const player: Player = G.players[ctx.playerID];
  const hotels = getHotels(G);
  hotels
    .playerHotels(player.id)
    .filter((h) => hotels.isPermanentlyUnplayable(h))
    .forEach((h) => {
      h.drawnByPlayer = undefined;
      h.hasBeenRemoved = true;
    });

  const hotelsToDraw: number = 6 - hotels.playerHotels(player.id).length;
  for (let i = 0; i < hotelsToDraw; i++) {
    assignRandomHotel(G, ctx, player);
  }
  ctx.events.endStage();
  ctx.events.endTurn();
}

export function assignRandomHotel(G: IG, ctx: Ctx, player: Player): boolean {
  const hotel = getRandomHotel(G, ctx);
  if (!hotel) {
    return false;
  }
  hotel.drawnByPlayer = player.id;
  return true;
}

export function getRandomHotel(G: IG, ctx: Ctx): Hotel | undefined {
  const undrawnHotels = getHotels(G)
    .allHotels()
    .filter((h) => !h.hasBeenPlaced && !h.drawnByPlayer && !h.hasBeenRemoved);
  if (undrawnHotels.length > 0) {
    return undrawnHotels[Math.floor(ctx.random.Number() * undrawnHotels.length)];
  }
}

export function firstBuildTurn(G: IG, ctx: Ctx): number {
  const hotels = getHotels(G);
  if (G.lastPlacedHotel) {
    // if we're returning from a merger, it's still the current players turn
    return ctx.playOrder.indexOf(hotels.getHotel(G.lastPlacedHotel).drawnByPlayer);
  } else {
    // otherwise choose first player based on initial hotel placement
    const topLeftMostHotel = hotels.topLeftMostHotel();
    return ctx.playOrder.indexOf(topLeftMostHotel.drawnByPlayer);
  }
}

export function chooseSurvivingChain(G: IG, ctx, chain: Chain) {
  const hotels = getHotels(G);
  // must be the same size as the first (largest) chain in the merge
  if (hotels.sizeOfChain(chain) !== hotels.sizeOfChain(G.merger.mergingChains[0])) {
    return INVALID_MOVE;
  }
  G.merger.survivingChain = chain;
  G.merger.mergingChains.splice(G.merger.mergingChains.indexOf(chain), 1);
  G.lastMove = `Player ${ctx.playerID} chooses ${chain} to survive the merger`;
}

export function chooseChainToMerge(G: IG, ctx, chain: Chain) {
  const hotels = getHotels(G);
  // must be the same size as the first (largest) merging chain
  if (hotels.sizeOfChain(chain) !== hotels.sizeOfChain(G.merger.mergingChains[0])) {
    return INVALID_MOVE;
  }

  G.merger.chainToMerge = chain;

  // move the chain to the front of the array
  G.merger.mergingChains.splice(G.merger.mergingChains.indexOf(chain), 1);
  G.merger.mergingChains.unshift(chain);
  G.lastMove = `Player ${ctx.playerID} chooses ${chain} to merge next`;
}

export function swapAndSellStock(G: IG, ctx: Ctx, swap?: number, sell?: number) {
  debugger;
  const { chainToMerge, survivingChain } = G.merger;
  const player = G.players[ctx.playerID];
  const originalStockCount = player.stocks[chainToMerge];

  if (player.stocks[chainToMerge] === 0) {
    G.lastMove = `Player ${ctx.playerID} has no ${chainToMerge} stock`;
  } else {
    G.lastMove = '';
  }

  let toSwap = swap || 0;
  toSwap = Math.min(toSwap, player.stocks[chainToMerge]);
  toSwap = Math.min(toSwap, G.availableStocks[survivingChain] * 2);
  toSwap = roundDownToNearest2(toSwap);

  if (toSwap > 0) {
    G.lastMove = `Player ${ctx.playerID} swaps ${toSwap} ${chainToMerge} for ${toSwap / 2} ${survivingChain}`;
  }
  // player gives away N stocks of the merged chan
  player.stocks[chainToMerge] -= toSwap;
  G.availableStocks[chainToMerge] += toSwap;

  // player receives N / 2 stocks of the surviving chain
  player.stocks[survivingChain] += toSwap / 2;
  G.availableStocks[survivingChain] -= toSwap / 2;

  let toSell = sell || 0;
  toSell = Math.min(toSell, player.stocks[chainToMerge] || 0);

  // players sells stocks
  if (toSell > 0) {
    if (G.lastMove) {
      G.lastMove += ', ';
    } else {
      G.lastMove += `Player ${ctx.playerID} `;
    }
    G.lastMove += `sells ${toSell} ${chainToMerge}`;
  }

  player.stocks[chainToMerge] -= toSell;
  G.availableStocks[chainToMerge] += toSell;
  player.money += toSell * getHotels(G).priceOfStock(chainToMerge);
  G.merger.swapAndSells[player.id] = { swap: toSwap, sell: toSell };

  if (originalStockCount > 0 && player.stocks[chainToMerge] > 0) {
    if (!G.lastMove) {
      G.lastMove += `Player ${ctx.playerID} `;
    } else {
      G.lastMove += ', ';
    }
    G.lastMove += `keeps ${player.stocks[chainToMerge]} ${chainToMerge}`;
  }
}

export function declareGameOver(G: IG, ctx: Ctx, isGameOver: boolean) {
  if (isGameOver) {
    G.lastMove = `Player ${ctx.playerID} declares the game over`;
    // award bonuses for remaining chains
    const hotels = getHotels(G);
    const chains = new Set<Chain>(
      hotels
        .allHotels()
        .map((h) => h.chain)
        .sort((a, b) => hotels.sizeOfChain(a) - hotels.sizeOfChain(b))
        .filter((c) => !!c),
    );
    const finalMergers = [];
    chains.forEach((c) => {
      const mergerResults = getMergerResults(G, c);
      finalMergers.push(mergerResults);
      awardMoneyToPlayers(G, mergerResults.bonuses);
    });

    // sell off all remaining stock in those chains
    chains.forEach((c) => {
      const stockPrice = hotels.priceOfStock(c);
      if (stockPrice === undefined) {
        return;
      }
      Object.keys(G.players).forEach((key) => {
        const numStock = G.players[key].stocks[c];
        G.players[key].money += numStock * stockPrice;
        G.players[key].stocks[c] -= numStock;
        G.availableStocks[c] += numStock;
      });
    });

    // build gameover object
    let playerArray = Object.values(G.players);
    playerArray = playerArray.slice(0, playerArray.length);
    playerArray.sort((a, b) => b.money - a.money);
    const winningScore = playerArray[0].money;
    const winners = playerArray.filter((p) => p.money === winningScore).map((p) => p.id);
    ctx.events.endGame({
      declaredBy: ctx.playerID,
      winner: winners.length === 1 ? winners[0] : undefined,
      winners: winners.length > 1 ? winners : undefined,
      scores: playerArray.map((p) => ({
        id: p.id,
        money: p.money,
        winner: p.money === winningScore,
      })),
      finalMergers,
    });
    ctx.events.endTurn();
    ctx.events.endStage();
  } else {
    ctx.events.setStage('drawHotelsStage');
  }
}

export function getBonuses(G: IG, chain: Chain): Record<string, number> {
  const bonuses = {};
  const hotels = getHotels(G);
  const majority = playersInMajority(G.players, chain);
  if (majority.length === 1) {
    // give first bonus to first player
    bonuses[majority[0].id] = hotels.majorityBonus(chain);

    const minority = playersInMinority(G.players, chain);
    if (minority.length === 0) {
      // give minority to the majority as well
      bonuses[majority[0].id] += hotels.minorityBonus(chain);
    } else if (minority.length === 1) {
      // give minority to second place
      bonuses[minority[0].id] = hotels.minorityBonus(chain);
    } else if (minority.length > 1) {
      // split minority bonus between em
      const total = hotels.minorityBonus(chain);
      const each = roundUpToNearest100(total / minority.length);
      for (const player of minority) {
        bonuses[player.id] = each;
      }
    }
  } else if (majority.length > 1) {
    // split both bonuses between some number of folks
    const total = hotels.majorityBonus(chain) + hotels.minorityBonus(chain);
    const each = roundUpToNearest100(total / majority.length);
    for (const player of majority) {
      bonuses[player.id] = each;
    }
  }
  return bonuses;
}

export function awardMoneyToPlayers(G: IG, awards: Record<string, number>) {
  for (const playerID of Object.keys(awards)) {
    G.players[playerID].money += awards[playerID];
  }
}

export function awardBonuses(G: IG, chain: Chain) {
  awardMoneyToPlayers(G, getBonuses(G, chain));
}

export function setupInitialDrawing(G: IG, ctx: Ctx) {
  const hotels = getHotels(G);
  for (let i = 0; i < ctx.numPlayers; i++) {
    const player = G.players[`${i}`];

    // initial random drawing + placement
    assignRandomHotel(G, ctx, player);
    hotels.playerHotels(player.id)[0].hasBeenPlaced = true;

    // draw 6 more tiles
    for (let j = 0; j < 6; j++) {
      assignRandomHotel(G, ctx, player);
    }
  }

  const topLeftMostHotel = hotels.topLeftMostHotel();
  G.lastMove = `Player ${topLeftMostHotel.drawnByPlayer} draws ${topLeftMostHotel.id} and will go first`;
}

export function autosetChainToMerge(G: IG) {
  const hotels = getHotels(G);
  if (!!G.merger.chainToMerge) {
    return;
  }
  if (G.merger.mergingChains.length === 1) {
    G.merger.chainToMerge = G.merger.mergingChains[0];
    return;
  }
  const firstChainSize = hotels.sizeOfChain(G.merger.mergingChains[0]);
  const secondChainSize = hotels.sizeOfChain(G.merger.mergingChains[1]);
  if (firstChainSize !== secondChainSize) {
    G.merger.chainToMerge = G.merger.mergingChains[0];
  }
}

export function nextPlayerPos(ctx: Ctx, playerPos: number): number {
  return (playerPos + 1) % ctx.numPlayers;
}

export function mergerPhaseFirstTurn(G: IG, ctx: Ctx) {
  return mergerPhaseNextTurn(G, ctx, true);
}

export function mergerPhaseNextTurn(G: IG, ctx: Ctx, isFirst: boolean = false) {
  const mergingPlayerID = getHotels(G).getHotel(G.lastPlacedHotel).drawnByPlayer;
  const mergingPlayerPos = ctx.playOrder.indexOf(mergingPlayerID);

  // check if the next player needs to go
  const startingPos = isFirst ? mergingPlayerPos : nextPlayerPos(ctx, ctx.playOrderPos);
  if (!G.merger.swapAndSells[ctx.playOrder[startingPos]]) {
    return startingPos;
  }

  // otherwise, loop once through the rest of the players until we find one
  for (let i = nextPlayerPos(ctx, startingPos); i !== startingPos; i = nextPlayerPos(ctx, i)) {
    if (G.merger.swapAndSells[ctx.playOrder[i]] === undefined) {
      return i;
    }
  }

  if (G.merger.mergingChains.length === 1) {
    ctx.events.setPhase('buildingPhase');
  } else {
    ctx.events.setPhase('chooseChainToMergePhase');
  }

  // return a value to avoid from ending the phase that way, which preempts the setPhase call
  // we also want to set the merging player as the next turn regardless
  return mergingPlayerPos;
}

export function getMergerResults(G: IG, chainToMerge: Chain): Merger {
  const stockCounts = {};
  const swapAndSells = {};
  for (const player of Object.values(G.players)) {
    const numStock = player.stocks[chainToMerge];
    stockCounts[player.id] = numStock;
    if (numStock === 0) {
      // for folks that have no stock, prefill their swaps/sells to empty so they're skipped
      swapAndSells[player.id] = { swap: 0, sell: 0 };
    }
  }

  const bonuses = getBonuses(G, chainToMerge);
  const chainSize = getHotels(G).sizeOfChain(chainToMerge);

  return {
    chainToMerge,
    chainSize,
    stockCounts,
    swapAndSells,
    bonuses,
  };
}

// TODO: implement playerView
export const MergersGame: Game<IG> = {
  name: 'mergers',

  setup: (ctx: Ctx) => {
    const G: IG = setupInitialState(ctx.numPlayers);

    setupInitialDrawing(G, ctx);

    ctx.events.setPhase('buildingPhase');

    return G;
  },

  phases: {
    buildingPhase: {
      turn: {
        order: {
          first: firstBuildTurn,
          next: (G: IG, ctx: Ctx) => (ctx.playOrderPos + 1) % ctx.numPlayers,
        },

        activePlayers: { currentPlayer: 'placeHotelStage' },

        stages: {
          placeHotelStage: {
            moves: { placeHotel },
            next: 'buyStockStage',
          },
          chooseNewChainStage: {
            moves: { chooseNewChain },
            next: 'buyStockStage',
          },
          buyStockStage: {
            moves: { buyStock },
          },
          declareGameOverStage: {
            moves: { declareGameOver },
          },
          drawHotelsStage: {
            moves: { drawHotels },
          },
        },
      },

      onBegin: (G: IG, ctx: Ctx) => {
        if (G.lastPlacedHotel) {
          // if returning from a merger phase, we're now in the buy stock stage
          const hotel = getHotels(G).getHotel(G.lastPlacedHotel);
          ctx.events.setActivePlayers({ value: { [hotel.drawnByPlayer]: 'buyStockStage' } });
        }
      },
    },

    chooseSurvivingChainPhase: {
      turn: {
        order: {
          first: (G: IG, ctx: Ctx) => ctx.playOrderPos,
          next: () => undefined,
        },
      },

      next: 'chooseChainToMergePhase',

      moves: { chooseSurvivingChain },

      endIf: (G: IG) => !!G.merger.survivingChain,

      onBegin: (G: IG) => {
        if (!!G.merger.survivingChain) {
          return;
        }
        // if there's a biggest chain, set it as the survivor
        const hotels = getHotels(G);
        const firstChainSize = hotels.sizeOfChain(G.merger.mergingChains[0]);
        const secondChainSize = hotels.sizeOfChain(G.merger.mergingChains[1]);
        if (firstChainSize !== secondChainSize) {
          G.merger.survivingChain = G.merger.mergingChains.shift();
        }
      },
    },

    chooseChainToMergePhase: {
      turn: {
        order: {
          first: (G: IG, ctx: Ctx) => ctx.playOrderPos,
          next: () => undefined,
        },
      },

      next: 'mergerPhase',

      moves: { chooseChainToMerge },

      endIf: (G: IG) => !G.merger.survivingChain || !!G.merger.chainToMerge,

      onBegin: (G: IG) => autosetChainToMerge(G),
    },

    mergerPhase: {
      turn: {
        order: {
          first: mergerPhaseFirstTurn,
          next: mergerPhaseNextTurn,
        },
        moveLimit: 1,
      },

      moves: { swapAndSellStock },

      onBegin: (G: IG) => {
        // now that we now which chain is being merged, fill in the rest of the merger info
        const mergerResults: Merger = getMergerResults(G, G.merger.chainToMerge);
        G.merger = {
          ...G.merger,
          ...mergerResults,
        };
        awardMoneyToPlayers(G, G.merger.bonuses);
      },

      onEnd: (G: IG) => {
        // remove the just-merged chain
        G.merger.chainToMerge = undefined;
        G.merger.chainSize = undefined;
        G.merger.mergingChains.shift();

        // if we're all done, absorb all hotels into the surviving chain and clear the merer
        if (G.merger.mergingChains.length === 0) {
          absorbNewHotels(G, G.merger.survivingChain, G.lastPlacedHotel);
          G.merger = undefined;
        }
      },
    },
  },
};
