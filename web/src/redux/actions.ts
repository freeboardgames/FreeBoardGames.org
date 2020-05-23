import { Action } from 'redux';
import { ReduxUserState } from './definitions';

export enum ActionNames {
  HYDRATE = '__NEXT_REDUX_WRAPPER_HYDRATE__',
  SyncUser = 'SyncUser',
}

export interface SyncUserAction extends Action<ActionNames> {
  payload: ReduxUserState;
}
