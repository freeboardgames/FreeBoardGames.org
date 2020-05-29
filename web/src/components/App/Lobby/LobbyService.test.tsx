import { LobbyService } from './LobbyService';
import { GetMatch_match } from 'gqlTypes/GetMatch';
import { ApolloClient } from 'apollo-client';
import { CheckinRoom } from 'gqlTypes/CheckinRoom';
jest.mock('apollo-client');

describe('New Room', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should dispatch redux event when unauthenticated', async () => {
    const error = { graphQLErrors: [{ extensions: { exception: { status: 401 } } }] };
    const mockMutate = jest.fn().mockRejectedValue(error);
    (ApolloClient as any).mockImplementation(() => ({ mutate: mockMutate }));
    const dispatch = jest.fn();
    const roomID = LobbyService.newRoom(dispatch, 'foogame', 2);
    await expect(roomID).rejects.toEqual(error);
    expect(dispatch).toHaveBeenCalledWith({ type: 'SyncUser', payload: { ready: true, loggedIn: false } });
  });

  it('should create new room', async () => {
    const mockMutate = jest.fn().mockResolvedValue({ data: 'foo' });
    (ApolloClient as any).mockImplementation(() => ({ mutate: mockMutate }));
    const dispatch = jest.fn();
    const roomID = await LobbyService.newRoom(dispatch, 'foogame', 2);
    expect(roomID).toEqual('foo');
  });

  it('should check-in on room', async () => {
    const response: CheckinRoom = {
      checkinRoom: {
        __typename: 'Room' as const,
        capacity: 2,
        isPublic: false,
        gameCode: 'chess',
        userId: 1,
        matchId: null,
        userMemberships: [],
      },
    };
    const mockMutate = jest.fn().mockResolvedValue({ data: response });
    (ApolloClient as any).mockImplementation(() => ({ mutate: mockMutate }));
    const dispatch = jest.fn();
    const actualResponse = await LobbyService.checkin(dispatch, 'foogame');
    expect(actualResponse).toEqual(response);
  });

  it('should get match', async () => {
    const match: GetMatch_match = {
      __typename: 'Match' as const,
      bgioSecret: 'secret',
      bgioPlayerId: '0',
      gameCode: 'chess',
      bgioMatchId: 'foo',
      bgioServerUrl: 'bar',
      playerMemberships: [],
    };
    const mockQuery = jest.fn().mockResolvedValue({ data: { match } });
    (ApolloClient as any).mockImplementation(() => ({ query: mockQuery }));
    const dispatch = jest.fn();
    const actualResponse = await LobbyService.getMatch(dispatch, 'matchId');
    expect(actualResponse).toEqual({ match });
  });

  it('should create new user', async () => {
    const setItemMock = jest.fn();
    Storage.prototype.setItem = setItemMock;
    const mockMutate = jest.fn().mockResolvedValue({ data: { newUser: { jwtToken: 'fooJwt' } } });
    (ApolloClient as any).mockImplementation(() => ({ mutate: mockMutate }));
    await LobbyService.newUser('fooname');
    expect(setItemMock.mock.calls[0][1]).toEqual('fooname');
  });

  it('should get nickname', async () => {
    Storage.prototype.getItem = jest.fn(() => 'foonickname');
    expect(LobbyService.getNickname()).toEqual('foonickname');
  });

  it('should rename', async () => {
    const mockMutate = jest.fn().mockResolvedValue({ data: { updateUserNickname: { nickname: 'fooJwt' } } });
    (ApolloClient as any).mockImplementation(() => ({ mutate: mockMutate }));

    Storage.prototype.getItem = () => JSON.stringify({ fooroom: { playerID: 0, credential: 'foocredential' } });
    const mockSetItem = jest.fn();
    Storage.prototype.setItem = mockSetItem;
    const dispatch = jest.fn();
    await LobbyService.renameUser(dispatch, 'fooNewName');
    expect(mockSetItem).toHaveBeenCalled();
  });

  /*it('should get next room', async () => {
    const mockResponse = { body: { nextRoomID: 'barroom' } };
    request.post = jest.fn().mockReturnValue({
      send: jest.fn().mockResolvedValue(mockResponse),
    });
    const mockStoredCredentials: IStoredCredentials = { fooroom: { playerID: 0, credential: 'foocredential' } };
    Storage.prototype.getItem = () => JSON.stringify(mockStoredCredentials);
    const response = await LobbyService.getPlayAgainNextRoom('foogame', 'fooroom', 2);
    expect(response).toEqual('barroom');
  });
  */
});
