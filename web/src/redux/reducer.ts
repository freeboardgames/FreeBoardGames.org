import { ActionNames, AuthData, SyncUserAction } from './actions';

const INITIAL_USER: AuthData = { loggedIn: false, ready: false };
const INITIAL_STATE = { user: INITIAL_USER };

export const reducer = (state = INITIAL_STATE, action: SyncUserAction) => {
  switch (action.type) {
    case ActionNames.SyncUser:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export type RootState = ReturnType<typeof reducer>;
