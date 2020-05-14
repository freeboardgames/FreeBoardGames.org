import { ActionNames, SyncUserAction } from './actions';
import { ReduxState, ReduxUserState } from './definitions';

const INITIAL_USER: ReduxUserState = { loggedIn: false, ready: false };
const INITIAL_STATE: ReduxState = { user: INITIAL_USER };

export const reducer = (state = INITIAL_STATE, action: SyncUserAction): ReduxState => {
  switch (action.type) {
    case ActionNames.HYDRATE:
      return { ...state, ...action.payload };
    case ActionNames.SyncUser:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
