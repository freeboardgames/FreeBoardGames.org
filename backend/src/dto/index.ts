import { RESULT_CODE } from '../User';

export interface AuthResponse {
  status: RESULT_CODE;
  emailErrorMsg?: string;
  passwordErrorMsg?: string;
}
