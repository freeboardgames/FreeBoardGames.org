import { Room } from './Room';

export interface User {
  nickname: string;
  credential?: string;
  rooms?: Room[];
}

export interface CheckinResponse {
  result: CheckinResponseStatus;
  credential?: string;
}

export enum CheckinResponseStatus {
  Success = 'success',
  badNickname = 'badnickname',
  // NicknameInUse = 'nicknameinuse',  // TODO(JasonHarrison) are we checking for dups?
}
