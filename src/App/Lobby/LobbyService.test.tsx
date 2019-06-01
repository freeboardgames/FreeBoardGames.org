import { expect } from 'chai';
import { LobbyService } from './LobbyService';
import request from 'superagent';

describe('New Room', () => {
  it('should create new room', async () => {
    const response = { body: { gameID: 'fooroom' } };
    request.post = jest.fn().mockReturnValue({
      send: jest.fn().mockResolvedValue(response),
    });
    console.log(await request.post('x').send('x'));
    const roomID = await LobbyService.newRoom('foogame');
    expect(roomID).to.equal('fooroom');
  });
});
