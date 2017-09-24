import GAMES from '../../../games';
// ------------------------------------
// Constants
// ------------------------------------
export const DOWN_REQUEST = 'DOWN_REQUEST';
export const JOIN_PARTY_REQUEST = 'JOIN_PARTY_REQUEST';
export const LEAVE_PARTY_REQUEST = 'LEAVE_PARTY_REQUEST';
export const SET_INFO = 'SET_INFO';
export const SET_GAMES = 'SET_GAMES';
export const SET_MATCHES = 'SET_MATCHES';
export const SET_DOWN_MAPPING = 'SET_DOWN_MAPPING';


// ------------------------------------
// Actions
// ------------------------------------
export const down = (party, game) => (dispatch) => {
  dispatch({type: DOWN_REQUEST, party, game});
};

export const joinParty = (token, party_code) => (dispatch) => {
  dispatch({type: JOIN_PARTY_REQUEST, code: party_code});
};

export const leaveParty = (token, party_code) => (dispatch) => {
  dispatch({type: LEAVE_PARTY_REQUEST, code: party_code});
};

export const actions = {
  down, joinParty, leaveParty
};

// ------------------------------------
// Party Reducer
// ------------------------------------
const ACTION_HANDLERS = {
  [SET_INFO] : (state, action) => {
    //Always preserve the current user.
    if ('info' in state && 'currentUser' in state.info) {
      action.info.currentUser = state.info.currentUser;
    }
    return {...state,
      info: action.info};
  },
  ['LOCATION_CHANGE'] : () => {
    return initialState;
  },
  [SET_DOWN_MAPPING] : (state, action) => {
    let games = [];
    if (state.games) {
      for (let i=0; i<state.games.length; i++) {
        let game = state.games[i];
        games.push({...game, loading: false});
      }
    }
    return {...state,
      downMapping: action.downMapping,
      games};
  },
  [SET_MATCHES] : (state, action) => {
    return {...state,
      matches: action.matches};
  },
  [DOWN_REQUEST] : (state, action) => {
    let games = [];
    for (let i=0; i<state.games.length; i++) {
      let game = state.games[i];
      if (game.code == action.game) {
        games.push({...game, loading: true});
      } else {
        games.push({...game});
      }
    }
    return {...state,
      games};
  },
};
const initialState = {games: GAMES.list,
  matches: [],
  info: {loading: true},
  downMapping: {}};
export default function partyReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
