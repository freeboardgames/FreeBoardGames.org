import superagent from 'superagent';
import AddressHelper from 'components/App/Helpers/AddressHelper';
import { Room } from 'entities/Room';
import { CheckinResponse } from 'services/UserService';
import { User } from 'entities/User';

export class LobbyService {
  public static async list(): Promise<Room[]> {
    const response = await superagent.get(`${AddressHelper.getMatchServerAddress()}/rooms`);
    const result = response.body;
    return result;
  }

  public static async checkin(nickname: string): Promise<CheckinResponse> {
    const response = await superagent.post(`${AddressHelper.getMatchServerAddress()}/users`).send({ nickname });
    const result = response.body;
    return result;
  }
}
