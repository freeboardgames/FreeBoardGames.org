import superagent from 'superagent';
import AddressHelper from 'components/App/Helpers/AddressHelper';
import { Room } from 'dto/Room';

// import Cookies from 'js-cookie';

// export enum AUTH_RESULT_CODE {
//   SUCCESS,
//   UNKNOWN_EMAIL,
//   BAD_PASSWORD,
// }

// export enum REG_RESULT_CODE {
//   SUCCESS,
//   NON_UNIQ_EMAIL,
//   NON_UNIQ_USERNAME,
//   WEAK_PASSWORD,
// }

// export interface AuthResponse {
//   status: AUTH_RESULT_CODE;
//   emailErrorMsg?: string;
//   passwordErrorMsg?: string;
// }

// export interface RegResponse {
//   status: REG_RESULT_CODE;
//   emailErrorMsg?: string;
//   usernameErrorMsg?: string;
//   passwordErrorMsg?: string;
// }

export class LobbyService {
  public static async list(): Promise<Room[]> {
    console.log('list');
    const response = await superagent.get(`${AddressHelper.getMatchServerAddress()}/rooms`);
    const result = response.body;
    return result;
  }

  // public static async register(email: string, username: string, password: string): Promise<RegResponse> {
  //   const response = await superagent
  //     .post(`${AddressHelper.getMatchServerAddress()}/users/register`)
  //     .set('CSRF-Token', Cookies.get('XSRF-TOKEN'))
  //     .send({ email, username, password });
  //   const result = response.body;
  //   return result;
  // }
}
