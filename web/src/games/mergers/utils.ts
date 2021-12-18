import { Hotels } from './hotels';
import { Chain, IG, Player } from './types';

const STOCK_PER_CHAIN = 25;

export function setupInitialState(numPlayers: number, isAllPlayerStateVisible: boolean = false): IG {
  return {
    hotels: Hotels.buildGrid(),
    players: setupPlayers(numPlayers),
    availableStocks: fillStockMap(STOCK_PER_CHAIN),
    lastMove: '',
    isAllPlayerStateVisible: isAllPlayerStateVisible,
  };
}

export function setupPlayers(numPlayers: number): Record<string, Player> {
  const players: Record<string, Player> = {};
  for (let i = 0; i < numPlayers; i++) {
    const id = `${i}`;
    players[id] = {
      id,
      money: 6000,
      stocks: fillStockMap(0),
    };
  }
  return players;
}

export function fillStockMap<T>(value: T): Record<Chain, T> {
  return {
    Toro: value,
    Lucius: value,
    Worldlywise: value,
    Amore: value,
    Festivus: value,
    Continuum: value,
    Imperative: value,
  };
}

export function playersInDescOrderOfStock(players: Record<string, Player>, chain: Chain): Player[] {
  const playerList = Object.values(players);
  playerList.sort((a, b) => b.stocks[chain] - a.stocks[chain]);
  return playerList;
}

export function playersInMajority(players: Record<string, Player>, chain: Chain): Player[] {
  const sortedPlayers = playersInDescOrderOfStock(players, chain);
  const majorityStockCount = sortedPlayers[0].stocks[chain];
  if (majorityStockCount === 0) {
    return [];
  }
  return sortedPlayers.filter((p) => p.stocks[chain] === majorityStockCount);
}

export function playersInMinority(players: Record<string, Player>, chain: Chain): Player[] {
  const sortedPlayers = playersInDescOrderOfStock(players, chain);
  const majorityStockCount = sortedPlayers[0].stocks[chain];
  const minorityStockCount = sortedPlayers[1].stocks[chain];
  if (majorityStockCount === minorityStockCount || !minorityStockCount) {
    return [];
  }
  return sortedPlayers.filter((p) => p.stocks[chain] === minorityStockCount);
}

export function roundUpToNearest100(x: number): number {
  return Math.ceil(x / 100) * 100;
}

export function roundDownToNearest2(x: number): number {
  return Math.floor(x / 2) * 2;
}
