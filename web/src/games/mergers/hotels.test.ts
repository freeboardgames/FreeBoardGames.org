import { Chain } from './types';
import { Hotels } from './hotels';

const UNMERGEABLE_SIZE_OF_ONE = 0;

describe('Hotels', () => {
  describe('isPermanentlyUnplayable', () => {
    it('returns true if it would merge two unmergeable chains', () => {
      const hotels = new Hotels([
        [
          { id: '1-A', hasBeenPlaced: true, chain: Chain.Tower },
          { id: '2-A' }, // playing this tile would merge 1-A and 3-A
          { id: '3-A', hasBeenPlaced: true, chain: Chain.Continental },
        ],
      ]);
      expect(hotels.isPermanentlyUnplayable({ id: '2-A' }, UNMERGEABLE_SIZE_OF_ONE)).toBe(true);
    });

    it('returns false if it would bring two new tiles into an unmergeable chain', () => {
      const hotels = new Hotels([
        [
          { id: '1-A', hasBeenPlaced: true, chain: Chain.Tower },
          { id: '2-A' }, // playing this tile would add it, and 3-A, to Tower
          { id: '3-A', hasBeenPlaced: true },
        ],
      ]);
      expect(hotels.isPermanentlyUnplayable({ id: '2-A' }, UNMERGEABLE_SIZE_OF_ONE)).toBe(false);
    });

    it('returns false if it touches two of the same unmergeable chain, plus one', () => {
      const hotels = new Hotels([
        [
          { id: '1-A', hasBeenPlaced: true, chain: Chain.Tower },
          { id: '2-A' }, // playing this tile would add it, and 2-B, to Tower
          { id: '3-A', hasBeenPlaced: true, chain: Chain.Tower },
        ],
        [{ id: '1-B' }, { id: '2-B', hasBeenPlaced: true }, { id: '3-B' }],
      ]);
      expect(hotels.isPermanentlyUnplayable({ id: '2-A' }, UNMERGEABLE_SIZE_OF_ONE)).toBe(false);
    });
  });
});
