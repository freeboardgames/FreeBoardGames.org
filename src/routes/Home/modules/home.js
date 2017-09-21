import GAMES from '../../../games';
// ------------------------------------
// Constants
// ------------------------------------
export const HOME_REQUEST = 'HOME_REQUEST';
export const SET_PARTIES = 'SET_PARTIES';
export const SET_MATCHES = 'SET_MATCHES';
export const SET_LOADING = 'SET_LOADING';

// ------------------------------------
// Actions
// ------------------------------------

export const requestHome = () => (dispatch) => {
  dispatch({type: HOME_REQUEST});
};

export const actions = {
  requestHome
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SET_MATCHES] : (state, action) => {
    return {...state,
      matches: action.matches
    };
  },
  [SET_PARTIES] : (state, action) => {
    return {...state,
      parties: action.parties
    };
  },
  [SET_LOADING] : (state, action) => {
    return {...state,
      loading: action.loading
    };
  },

  ['LOCATION_CHANGE'] : () => {
    return initialState;
  },
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {loading: true, parties: [], games: GAMES.list};
export default function loginReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
