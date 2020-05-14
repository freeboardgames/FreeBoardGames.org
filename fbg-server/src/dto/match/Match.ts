import { User } from '../users/User';

export interface Match {
  id?: string;
  gameCode: string;
  bgioServerUrl: string;
  bgioMatchId: string;
  bgioSecret?: string;
  bgioPlayerId?: string;
  players: User[];
}
