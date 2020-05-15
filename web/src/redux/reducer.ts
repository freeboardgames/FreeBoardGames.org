import { ActionNames, AuthData, SyncUserAction } from './actions';
import { State } from './store';

const INITIAL_USER: AuthData = { loggedIn: false, ready: false };
const INITIAL_STATE = { user: INITIAL_USER };

export const reducer = (state: State = INITIAL_STATE, action: SyncUserAction) => {
  switch (action.type) {
    case ActionNames.HYDRATE:
      return { ...state, ...action.payload };
    case ActionNames.SyncUser:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
