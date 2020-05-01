import { AuthState, SYNC_AUTH, SyncAuthAction } from './types';

export function syncAuth(auth: AuthState): SyncAuthAction {
  return {
    type: SYNC_AUTH,
    payload: auth,
  };
}
