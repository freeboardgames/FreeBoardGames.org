import { expect } from 'chai';
import { LobbyService, IPlayerInRoom } from './LobbyService';
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
    const roomID = await LobbyService.newRoom('foogame');
    expect(roomID).to.equal('fooroom');
  });

  it('should join room', async () => {
    const response = { body: { playerCredentials: 'foosecret' } };
    request.post = jest.fn().mockReturnValue({
      send: jest.fn().mockResolvedValue(response),
    });
    LobbyService.setCredential = jest.fn();
    const player: IPlayerInRoom = { playerID: 0, name: 'Jason', roomID: 'fooroom' };
    await LobbyService.joinRoom('foogame', player);
    expect((LobbyService.setCredential as any).mock.calls.length).to.equal(1);
  });

  it('should set nickname', async () => {
    const spy = jest.spyOn(Storage.prototype, 'setItem');
    LobbyService.setNickname('fooname');
    expect(spy.mock.calls.length).to.equal(1);
  });

  it('should get nickname', async () => {
    const spy = jest.spyOn(Storage.prototype, 'getItem');
    const nickname = 'foonickname';
    spy.mockReturnValue(nickname);
    expect(LobbyService.getNickname()).to.equal(nickname);
  });
});
