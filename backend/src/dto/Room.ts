// export enum LOBBY_RESULT_CODE {
//   SUCCESS,
//   UNKNOWN_EMAIL,
//   BAD_PASSWORD,
// };

export interface Room {
  gameCode: string;
  players: string[];
  capacity: number;
}

// export interface RegResponse {
//   status: REG_RESULT_CODE;
//   emailErrorMsg?: string;
//   usernameErrorMsg?: string;
//   passwordErrorMsg?: string;
// }
