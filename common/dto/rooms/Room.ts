import { User } from '../users/User';

export const CHECKIN_PERIOD = 5; // in seconds
export interface Room {
  id?: string;
  gameCode: string;
  capacity: number;
  isPublic: boolean;
  creator?: User;
  users?: User[];
}
