import { shortIdToAnimal, getGroupedRoomsDisplay, GroupedRoomDisplay, orderCurrentGameFirst } from './LobbyUtil';
import { GetLobby_lobby } from 'gqlTypes/GetLobby';

describe('LobbyUtil', () => {
  describe('grouping rooms by game', () => {
    it('should group correctly', () => {
      const lobby: GetLobby_lobby = {
        __typename: 'Lobby' as const,
        rooms: [
          { __typename: 'Room' as const, capacity: 2, gameCode: 'chess', id: 'foo', userMemberships: [] },
          { __typename: 'Room' as const, capacity: 2, gameCode: 'checkers', id: 'bar', userMemberships: [] },
          { __typename: 'Room' as const, capacity: 2, gameCode: 'tictactoe', id: 'baz', userMemberships: [] },
          { __typename: 'Room' as const, capacity: 2, gameCode: 'chess', id: 'qux', userMemberships: [] },
          { __typename: 'Room' as const, capacity: 2, gameCode: 'tictactoe', id: 'qax', userMemberships: [] },
        ],
      };

      const result = getGroupedRoomsDisplay(lobby);

      expect(result).toEqual({
        chess: [
          { occupancy: 0, capacity: 2, gameCode: 'chess', id: 'foo', name: 'Horse' },
          { occupancy: 0, capacity: 2, gameCode: 'chess', id: 'qux', name: 'Dolphin' },
        ],
        checkers: [{ occupancy: 0, capacity: 2, gameCode: 'checkers', id: 'bar', name: 'Shark' }],
        tictactoe: [
          { occupancy: 0, capacity: 2, gameCode: 'tictactoe', id: 'baz', name: 'Zebra' },
          { occupancy: 0, capacity: 2, gameCode: 'tictactoe', id: 'qax', name: 'Tiger' },
        ],
      });
    });
  });

  describe('converting short IDs to animals', () => {
    it('should be a Monkey', () => {
      const result = shortIdToAnimal('yxa9cAAtF');
      expect(result).toEqual('Monkey');
    });
  });

  describe('ordering rooms correctly', () => {
    const grouped: GroupedRoomDisplay = {
      chess: [
        { occupancy: 0, capacity: 2, gameCode: 'chess', id: 'foo', name: 'Horse' },
        { occupancy: 0, capacity: 2, gameCode: 'chess', id: 'qux', name: 'Dolphin' },
      ],
      checkers: [{ occupancy: 0, capacity: 2, gameCode: 'checkers', id: 'bar', name: 'Shark' }],
      tictactoe: [
        { occupancy: 0, capacity: 2, gameCode: 'tictactoe', id: 'baz', name: 'Zebra' },
        { occupancy: 0, capacity: 2, gameCode: 'tictactoe', id: 'qax', name: 'Tiger' },
      ],
    };

    it('should keep the object order if no gameCode is specified', () => {
      const result = orderCurrentGameFirst(grouped);

      expect(result.map((x) => x[0])).toEqual(['chess', 'checkers', 'tictactoe']);
    });

    it('should bump the specified game to be the first', () => {
      const result = orderCurrentGameFirst(grouped, 'tictactoe');

      expect(result.map((x) => x[0])).toEqual(['tictactoe', 'chess', 'checkers']);
    });
  });
});
