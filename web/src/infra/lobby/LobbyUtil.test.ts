import { shortIdToAnimal } from './LobbyUtil';

describe('LobbyUtil', () => {
  describe('converting short IDs to animals', () => {
    it('should be a Monkey', () => {
      const result = shortIdToAnimal('yxa9cAAtF');
      expect(result).toEqual('Monkey');
    });
  });
});
