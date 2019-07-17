import { expect } from 'chai';
import { LobbyService, IPlayerInRoom, IStoredCredentials } from './LobbyService';
import request from 'superagent';

describe('New Room', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create new room', async () => {
    const response = { body: { gameID: 'fooroom' } };
    request.post = jest.fn().mockReturnValue({
      send: jest.fn().mockResolvedValue(response),
    });
    const roomID = await LobbyService.newRoom('foogame', 2);
    expect(roomID).to.equal('fooroom');
  });

  it('should join room', async () => {
    const response = { body: { playerCredentials: 'foosecret' } };
    request.post = jest.fn().mockReturnValue({
      send: jest.fn().mockResolvedValue(response),
    });
    const setItemMock = jest.fn();
    Storage.prototype.getItem = () => JSON.stringify({}); // mock no crendetials
    Storage.prototype.setItem = setItemMock;
    const player: IPlayerInRoom = { playerID: 0, name: 'Jason', roomID: 'fooroom' };
    await LobbyService.joinRoom('foogame', player);
    expect(setItemMock.mock.calls[0][1]).to.equal(
      JSON.stringify({ fooroom: { credential: 'foosecret', playerID: 0 } }),
    );
  });

  it('should set nickname', async () => {
    const setItemMock = jest.fn();
    Storage.prototype.setItem = setItemMock;
    LobbyService.setNickname('fooname');
    expect(setItemMock.mock.calls[0][1]).to.equal('fooname');
  });

  it('should get nickname', async () => {
    Storage.prototype.getItem = jest.fn(() => 'foonickname');
    expect(LobbyService.getNickname()).to.equal('foonickname');
  });

  it('should rename', async () => {
    request.post = jest.fn().mockReturnValue({
      send: jest.fn(),
    });
    Storage.prototype.getItem = () => JSON.stringify({ fooroom: { playerID: 0, credential: 'foocredential' } });
    const player: IPlayerInRoom = { playerID: 0, name: 'Jason', roomID: 'fooroom' };
    await LobbyService.renameUser('foogame', player, 'fooNewName');
    expect((request.post as any).mock.calls.length).to.equal(1);
  });

  it('should get room metadata without currentUser', async () => {
    const mockResponse = { body: { players: [{ id: 0, name: 'Jason', roomID: 'fooroom' }] } };
    request.get = jest.fn().mockReturnValue(mockResponse);
    Storage.prototype.getItem = () => JSON.stringify(null);
    const response = await LobbyService.getRoomMetadata('foogame', 'fooroom');
    expect(response).to.eql({
      players: [{ playerID: 0, name: 'Jason', roomID: 'fooroom' }],
      gameCode: 'foogame',
      roomID: 'fooroom',
      currentUser: undefined,
      numberOfPlayers: 1,
    });
  });

  it('should get room metadata with currentUser', async () => {
    const mockResponse = { body: { players: [{ id: 0, name: 'Jason', roomID: 'fooroom' }] } };
    request.get = jest.fn().mockReturnValue(mockResponse);
    const mockStoredCredentials: IStoredCredentials = { fooroom: { playerID: 0, credential: 'foocredential' } };
    Storage.prototype.getItem = () => JSON.stringify(mockStoredCredentials);
    const response = await LobbyService.getRoomMetadata('foogame', 'fooroom');
    expect(response).to.eql({
      players: [{ playerID: 0, name: 'Jason', roomID: 'fooroom' }],
      gameCode: 'foogame',
      roomID: 'fooroom',
      currentUser: { playerID: 0, name: 'Jason', roomID: 'fooroom' },
      numberOfPlayers: 1,
    });
  });

  it('should get next room', async () => {
    const mockResponse = { body: { nextRoomID: 'barroom' } };
    request.post = jest.fn().mockReturnValue({
      send: jest.fn().mockResolvedValue(mockResponse),
    });
    const mockStoredCredentials: IStoredCredentials = { fooroom: { playerID: 0, credential: 'foocredential' } };
    Storage.prototype.getItem = () => JSON.stringify(mockStoredCredentials);
    const response = await LobbyService.getPlayAgainNextRoom('foogame', 'fooroom', 2);
    expect(response).to.equal('barroom');
  });
});
