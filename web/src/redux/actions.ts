import { Action } from 'redux';

export enum ActionNames {
  SyncUser = 'SyncUser',
}

export interface AuthData {
  nickname?: string;
  loggedIn: boolean;
  ready: boolean;
}

export interface SyncUserAction extends Action<ActionNames.SyncUser> {
  payload: AuthData;
}
