import { ActionNames, SyncUserAction } from './actions';
import { ReduxState, ReduxUserState } from './definitions';
import SSRHelper from 'infra/common/helpers/SSRHelper';
import { LobbyService } from 'infra/common/services/LobbyService';

const INITIAL_USER: ReduxUserState = { loggedIn: false, ready: false };
const INITIAL_STATE: ReduxState = { user: INITIAL_USER };

export const reducer = (state = getInitialState(), action: SyncUserAction): ReduxState => {
  switch (action.type) {
    case ActionNames.HYDRATE:
      const nextState = {
        ...state, // use previous state
        ready: true, // set ready to true
      };
      return nextState;
    case ActionNames.SyncUser:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

const getInitialState = () => {
  if (!SSRHelper.isSSR()) {
    const payload = LobbyService.getSyncUserAction().payload;
    const newState = { user: payload };
    return { ...newState };
  } else {
    return { ...INITIAL_STATE };
  }
};
