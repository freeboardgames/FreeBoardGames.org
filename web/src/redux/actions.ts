import { Action } from 'redux';

export enum ActionNames {
  HYDRATE = '__NEXT_REDUX_WRAPPER_HYDRATE__',
  SyncUser = 'SyncUser',
}

export interface AuthData {
  nickname?: string;
  loggedIn: boolean;
  ready: boolean;
}

export interface SyncUserAction extends Action<ActionNames> {
  payload: AuthData;
}
