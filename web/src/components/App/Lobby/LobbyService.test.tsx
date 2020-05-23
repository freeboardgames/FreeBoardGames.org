import { LobbyService } from './LobbyService';
import request from 'superagent';
import { NewRoomResponse } from 'dto/rooms/NewRoomResponse';
import { CheckinRoomResponse } from 'dto/rooms/CheckinRoomResponse';
import { NewUserResponse } from 'dto/users/NewUserResponse';
import { Match } from 'dto/match/Match';

describe('New Room', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should dispatch redux event when unauthenticated', async () => {
    const response: Partial<request.Response> = { unauthorized: true };
    request.post = jest.fn().mockReturnValue({
      set: jest
        .fn()
        .mockReturnValue({ set: jest.fn().mockReturnValue({ send: jest.fn().mockRejectedValue({ response }) }) }),
    });
    const dispatch = jest.fn();
    const roomID = LobbyService.newRoom(dispatch, 'foogame', 2);
    await expect(roomID).rejects.toEqual({ response });
    expect(dispatch).toHaveBeenCalledWith({ type: 'SyncUser', payload: { ready: true, loggedIn: false } });
  });

  it('should create new room', async () => {
    const response: NewRoomResponse = { roomId: 'fooroom' };
    request.post = jest.fn().mockReturnValue({
      set: jest
        .fn()
        .mockReturnValue({ set: jest.fn().mockReturnValue({ send: jest.fn().mockResolvedValue({ body: response }) }) }),
    });
    const dispatch = jest.fn();
    const roomID = await LobbyService.newRoom(dispatch, 'foogame', 2);
    expect(roomID).toEqual('fooroom');
  });

  it('should check-in on room', async () => {
    const response: CheckinRoomResponse = { room: { capacity: 2, isPublic: false, gameCode: 'chess' }, userId: 1 };
    request.post = jest.fn().mockReturnValue({
      set: jest
        .fn()
        .mockReturnValue({ set: jest.fn().mockReturnValue({ send: jest.fn().mockResolvedValue({ body: response }) }) }),
    });
    const dispatch = jest.fn();
    const actualResponse = await LobbyService.checkin(dispatch, 'foogame');
    expect(actualResponse).toEqual(response);
  });

  it('should get match', async () => {
    const response: Match = { gameCode: 'chess', bgioMatchId: 'foo', bgioServerUrl: 'bar', players: [] };
    request.get = jest.fn().mockReturnValue({
      set: jest.fn().mockResolvedValue({ body: response }),
    });
    const dispatch = jest.fn();
    const actualResponse = await LobbyService.getMatch(dispatch, 'matchId');
    expect(actualResponse).toEqual(response);
  });

  it('should create new user', async () => {
    const setItemMock = jest.fn();
    Storage.prototype.setItem = setItemMock;
    const response: NewUserResponse = { jwtPayload: 'fooJwt' };
    request.post = jest.fn().mockReturnValue({
      set: jest.fn().mockReturnValue({ send: jest.fn().mockResolvedValue({ body: response }) }),
    });
    await LobbyService.newUser('fooname');
    expect(setItemMock.mock.calls[0][1]).toEqual('fooname');
  });

  it('should get nickname', async () => {
    Storage.prototype.getItem = jest.fn(() => 'foonickname');
    expect(LobbyService.getNickname()).toEqual('foonickname');
  });

  /*it('should rename', async () => {
    request.post = jest.fn().mockReturnValue({
      send: jest.fn(),
    });
    Storage.prototype.getItem = () => JSON.stringify({ fooroom: { playerID: 0, credential: 'foocredential' } });
    const player: IPlayerInRoom = { playerID: 0, name: 'Jason', roomID: 'fooroom' };
    await LobbyService.renameUser('foogame', player, 'fooNewName');
    expect((request.post as any).mock.calls.length).toEqual(1);
  });

  it('should get next room', async () => {
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
