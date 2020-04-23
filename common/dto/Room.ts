import { User } from './User';

export interface Room {
  id?: number;
  capacity: number;
  gameCode: string;
  unlisted: boolean;
  users?: User[];
  currentUserId?: number;
}

export interface NewRoomResponse {
  status: NewRoomResponseStatus;
  room?: Room;
}

export enum NewRoomResponseStatus {
  Success = 'success',
  Exception = 'exception',
  // NicknameInUse = 'nicknameinuse',  // TODO(JasonHarrison) are we checking for dups?
}
