export interface AuthState {
  loggedIn: boolean;
  nickname: string;
}

export const SYNC_AUTH = 'SYNC_AUTH';
// actions
export interface SyncAuthAction {
  type: typeof SYNC_AUTH;
  payload: AuthState;
}

// export type AuthActionTypes = SyncUserAction;
