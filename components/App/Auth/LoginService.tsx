import superagent from 'superagent';
import AddressHelper from '../Helpers/AddressHelper';

export enum RESULT_CODE {
  UNKNOWN_EMAIL = 0,
  BAD_PASSWORD = 1,
  SUCCESS = 2,
}

export interface AuthResponse {
  status: RESULT_CODE;
  emailErrorMsg?: string;
  passwordErrorMsg?: string;
}

export class LoginService {
  public static async authenticate(email: string, password: string): Promise<AuthResponse> {
    const response = await superagent
      .post(`${AddressHelper.getMatchServerAddress()}/users/auth`)
      .send({ email, password });
    const result = response.body;
    return result;
  }
}
