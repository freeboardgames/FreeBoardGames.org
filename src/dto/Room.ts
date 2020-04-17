import { User } from './User';

export interface Room {
  id?: number;
  capacity: number;
  gameCode: string;
  unlisted: boolean;
  users?: User[];
}
