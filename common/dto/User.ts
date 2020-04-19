import { Room } from './Room';

export interface User {
  id?: number;
  nickname: string;
  rooms?: Room[];
}

export interface CheckinResponse {
  result: CheckinResponseStatus;
  token?: string;
}

export enum CheckinResponseStatus {
  Success = 'success',
  BadNickname = 'badnickname',
  Exception = 'exception',
  // NicknameInUse = 'nicknameinuse',  // TODO(JasonHarrison) are we checking for dups?
}
