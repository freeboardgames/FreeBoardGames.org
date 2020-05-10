import { User } from '../users/User';

export interface Room {
  id?: string;
  gameCode: string;
  capacity: string;
  isPublic: boolean;
  users: User[]
}