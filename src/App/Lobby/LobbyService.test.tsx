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
});
