import { AUTH_RESULT_CODE, REG_RESULT_CODE } from '../User';

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
