import { Room } from './Room';

export interface User {
  id?: number;
  nickname: string;
  rooms?: Room[];
}

export interface NewUserResponse {
  status: NewUserResponseStatus;
  token?: string;
}

export enum NewUserResponseStatus {
  Success = 'success',
  BadNickname = 'badnickname',
  Exception = 'exception',
  // NicknameInUse = 'nicknameinuse',  // TODO(JasonHarrison) are we checking for dups?
}

export interface RenameUserResponse {
  status: RenameUserResponseStatus;
}

export enum RenameUserResponseStatus {
  Success = 'success',
  BadNickname = 'badnickname',
  // NicknameInUse = 'nicknameinuse',  // TODO(JasonHarrison) are we checking for dups?
}
