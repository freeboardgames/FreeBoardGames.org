import AddressHelper from '../AddressHelper';
import request from 'superagent';

export class LobbyService {
  public static async newRoom(gameCode: string): Promise<string> {
    const response = await request
      .post(`${AddressHelper.getServerAddress()}/games/${gameCode}/create`)
      .send({ numPlayers: 2 });
    // TODO make user join automatically this room, store credentials
    return response.body.gameID;
  }
}
