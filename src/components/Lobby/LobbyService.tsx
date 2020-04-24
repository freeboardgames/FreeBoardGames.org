import superagent from 'superagent';
import AddressHelper from 'components/App/Helpers/AddressHelper';
import { Room, NewRoomResponse } from 'dto/Room';
import { NewUserResponse, RenameUserResponse, RenameUserResponseStatus } from 'dto/User';
import Cookies from 'js-cookie';
import { setAuthData } from 'misc/AuthHelper';

export class LobbyService {
  public static async checkin(nickname: string): Promise<NewUserResponse> {
    const response = await superagent.post(`${AddressHelper.getMatchServerAddress()}/users`).send({ nickname });
    const result = response.body;
    return result;
  }

  public static async renameUser(newNickname: string): Promise<RenameUserResponse> {
    const token = Cookies.get('token') || '';
    const response = await superagent
      .post(`${AddressHelper.getMatchServerAddress()}/users/rename`)
      .send({ token, newNickname });
    const result: RenameUserResponse = response.body;
    if (result.status === RenameUserResponseStatus.Success) {
      setAuthData(newNickname, token);
    }
    return result;
  }

  public static async list(): Promise<Room[]> {
    const response = await superagent.get(`${AddressHelper.getMatchServerAddress()}/rooms`);
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

  public static async updateRoomMetadata(roomID: string): Promise<Room> {
    const token = Cookies.get('token') || '';
    const response = await superagent.post(`${AddressHelper.getMatchServerAddress()}/room/${roomID}`).send({ token });
    const result = response.body;
    return result;
  }
}
