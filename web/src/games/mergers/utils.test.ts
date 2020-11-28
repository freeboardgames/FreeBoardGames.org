import { Chain } from './types';
import { fillStockMap, playersInDescOrderOfStock, playersInMajority, playersInMinority } from './utils';

describe('utils', () => {
  describe('playersInDescOrderOfStock', () => {
    it('should sort by the given chain', () => {
      const player0 = { stocks: { ...fillStockMap(0), [Chain.Tower]: 3, [Chain.American]: 1 } };
      const player1 = { stocks: { ...fillStockMap(0), [Chain.Tower]: 4, [Chain.American]: 2 } };
      const player2 = { stocks: { ...fillStockMap(0), [Chain.Tower]: 1, [Chain.American]: 3 } };
      const players = { '0': player0, '1': player1, '2': player2 };
      const result = playersInDescOrderOfStock(players, Chain.Tower);
      expect(result).toEqual([player1, player0, player2]);
    });
  });

  describe('playersInMajority', () => {
    it('chooses a single player majority', () => {
      const player0 = { stocks: { ...fillStockMap(0), [Chain.Tower]: 3 } };
      const player1 = { stocks: { ...fillStockMap(0), [Chain.Tower]: 4 } };
      const player2 = { stocks: { ...fillStockMap(0), [Chain.Tower]: 1 } };
      const players = { '0': player0, '1': player1, '2': player2 };
      const result = playersInMajority(players, Chain.Tower);
      expect(result).toEqual([player1]);
    });
    it('chooses a multiple player majority', () => {
      const player0 = { stocks: { ...fillStockMap(0), [Chain.Tower]: 3 } };
      const player1 = { stocks: { ...fillStockMap(0), [Chain.Tower]: 3 } };
      const player2 = { stocks: { ...fillStockMap(0), [Chain.Tower]: 3 } };
      const players = { '0': player0, '1': player1, '2': player2 };
      const result = playersInMajority(players, Chain.Tower);
      expect(result).toEqual([player0, player1, player2]);
    });
    it('chooses an empty majority', () => {
      const player0 = { stocks: fillStockMap(0) };
      const player1 = { stocks: fillStockMap(0) };
      const player2 = { stocks: fillStockMap(0) };
      const players = { '0': player0, '1': player1, '2': player2 };
      const result = playersInMajority(players, Chain.Tower);
      expect(result).toEqual([]);
    });
  });

  describe('playersInMinority', () => {
    it('chooses the second place player', () => {
      const player0 = { stocks: { ...fillStockMap(0), [Chain.Tower]: 3 } };
      const player1 = { stocks: { ...fillStockMap(0), [Chain.Tower]: 4 } };
      const player2 = { stocks: { ...fillStockMap(0), [Chain.Tower]: 1 } };
      const players = { '0': player0, '1': player1, '2': player2 };
      const result = playersInMinority(players, Chain.Tower);
      expect(result).toEqual([player0]);
    });
    it('chooses a multiple player minority', () => {
      const player0 = { stocks: { ...fillStockMap(0), [Chain.Tower]: 3 } };
      const player1 = { stocks: { ...fillStockMap(0), [Chain.Tower]: 4 } };
      const player2 = { stocks: { ...fillStockMap(0), [Chain.Tower]: 3 } };
      const players = { '0': player0, '1': player1, '2': player2 };
      const result = playersInMinority(players, Chain.Tower);
      expect(result).toEqual([player0, player2]);
    });
    it('chooses an empty minority when only one player has stocks', () => {
      const player0 = { stocks: fillStockMap(0) };
      const player1 = { stocks: { ...fillStockMap(0), [Chain.Tower]: 4 } };
      const player2 = { stocks: fillStockMap(0) };
      const players = { '0': player0, '1': player1, '2': player2 };
      const result = playersInMinority(players, Chain.Tower);
      expect(result).toEqual([]);
    });
    it('chooses an empty minority when multiple players with the only stock are tied', () => {
      const player0 = { stocks: fillStockMap(0) };
      const player1 = { stocks: { ...fillStockMap(0), [Chain.Tower]: 4 } };
      const player2 = { stocks: { ...fillStockMap(0), [Chain.Tower]: 4 } };
      const players = { '0': player0, '1': player1, '2': player2 };
      const result = playersInMinority(players, Chain.Tower);
      expect(result).toEqual([]);
    });
    it('chooses an empty minority when no one has stock', () => {
      const player0 = { stocks: fillStockMap(0) };
      const player1 = { stocks: fillStockMap(0) };
      const player2 = { stocks: fillStockMap(0) };
      const players = { '0': player0, '1': player1, '2': player2 };
      const result = playersInMinority(players, Chain.Tower);
      expect(result).toEqual([]);
    });
  });
});
