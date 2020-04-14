import superagent from 'superagent';
import AddressHelper from 'components/App/Helpers/AddressHelper';
import { Room } from 'entities/Room';

export class LobbyService {
  public static async list(): Promise<Room[]> {
    const response = await superagent.get(`${AddressHelper.getMatchServerAddress()}/rooms`);
    const result = response.body;
    return result;
  }
}
