import { Action, createStore } from 'redux';
import { MakeStore } from 'next-redux-wrapper';

export interface AuthState {
  loggedIn: boolean;
  nickname: string;
}

const INITIAL_STATE = { auth: { loggedIn: false, nickname: undefined } };

/**
 * @param initialState The store's initial state (on the client side, the state of the server-side store is passed here)
 */
export const makeStore: MakeStore = (initialState: RootState) => {
  return createStore(reducer, initialState);
};

interface ReduxAction extends Action<'SYNC_AUTH'> {
  payload: AuthState;
}

export const reducer = (state = INITIAL_STATE, action: ReduxAction) => {
  switch (action.type) {
    case 'SYNC_AUTH':
      return { ...state, auth: { ...action.payload } };
    default:
      return state;
  }
};

export type RootState = ReturnType<typeof reducer>;
