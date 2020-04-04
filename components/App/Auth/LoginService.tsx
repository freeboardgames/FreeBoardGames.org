import superagent from 'superagent';
import AddressHelper from '../Helpers/AddressHelper';

export enum AUTH_RESULT_CODE {
  SUCCESS,
  UNKNOWN_EMAIL,
  BAD_PASSWORD,
}

export enum REG_RESULT_CODE {
  SUCCESS,
  NON_UNIQ_EMAIL,
  NON_UNIQ_USERNAME,
  WEAK_PASSWORD,
}

export interface AuthResponse {
  status: AUTH_RESULT_CODE;
  emailErrorMsg?: string;
  passwordErrorMsg?: string;
}

export interface RegResponse {
  status: REG_RESULT_CODE;
  emailErrorMsg?: string;
  usernameErrorMsg?: string;
  passwordErrorMsg?: string;
}

export class LoginService {
  public static async authenticate(xrsfToken: string, email: string, password: string): Promise<AuthResponse> {
    const response = await superagent
      .post(`${AddressHelper.getMatchServerAddress()}/users/auth`)
      .set('CSRF-Token', xrsfToken)
      .send({ email, password });
    const result = response.body;
    return result;
  }

  public static async register(
    xrsfToken: string,
    email: string,
    username: string,
    password: string,
  ): Promise<RegResponse> {
    const response = await superagent
      .post(`${AddressHelper.getMatchServerAddress()}/users/register`)
      .set('CSRF-Token', xrsfToken)
      .send({ email, username, password });
    const result = response.body;
    return result;
  }
}
