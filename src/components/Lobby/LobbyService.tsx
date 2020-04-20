import superagent from 'superagent';
import AddressHelper from 'components/App/Helpers/AddressHelper';
import { Room, NewRoomResponse } from 'dto/Room';
import { CheckinResponse } from 'dto/User';
import Cookies from 'js-cookie';

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

  public static async newRoom(gameCode: string, capacity: number, unlisted: boolean): Promise<NewRoomResponse> {
    const token = Cookies.get('token') || '';
    const response = await superagent
      .post(`${AddressHelper.getMatchServerAddress()}/rooms`)
      .send({ token, gameCode, capacity, unlisted });
    const result = response.body;
    return result;
  }

  public static async getRoom(roomID: string): Promise<Room> {
    const response = await superagent.get(`${AddressHelper.getMatchServerAddress()}/room/${roomID}`);
    const result = response.body;
    return result;
  }
}
