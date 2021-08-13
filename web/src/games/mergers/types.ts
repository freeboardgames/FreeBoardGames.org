export interface IG {
  // TODO: change this to { 'A1': Hotel } ?
  hotels?: Hotel[][];
  players?: Record<string, Player>;
  availableStocks?: Record<Chain, number>;
  lastPlacedHotel?: string;
  lastMove?: string;
  merger?: Merger;
  // See https://github.com/boardgameio/boardgame.io/issues/979
  isFirstTurnInPhase?: boolean;
}

export enum Chain {
  Toro = 'Toro',
  Lucius = 'Lucius',
  Worldywise = 'Worldywise',
  Amore = 'Amore',
  Festivus = 'Festivus',
  Continuum = 'Continuum',
  Imperative = 'Imperative',
}

export interface Hotel {
  id?: string;
  hasBeenPlaced?: boolean;
  drawnByPlayer?: string;
  chain?: Chain;
  hasBeenRemoved?: boolean;
}

export interface Player {
  id?: string;
  money?: number;
  stocks?: Record<Chain, number>;
}

export interface Score {
  id?: string;
  money?: number;
  winner?: boolean;
}

export interface SwapAndSell {
  swap?: number;
  sell?: number;
}

export interface Merger {
  survivingChain?: Chain;
  chainToMerge?: Chain;
  mergingChains?: Chain[];
  chainSize?: number;
  stockCounts?: Record<string, number>;
  bonuses?: Record<string, number>;
  swapAndSells?: Record<string, SwapAndSell>;
}
