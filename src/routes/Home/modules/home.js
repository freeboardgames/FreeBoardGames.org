import fetch from 'isomorphic-fetch';

// ------------------------------------
// Constants
// ------------------------------------
export const HOME_REQUEST = 'HOME_REQUEST';
export const SET_PARTIES = 'SET_PARTIES';
export const SET_MATCHES = 'SET_MATCHES';
export const SET_GAMES = 'SET_GAMES';

// ------------------------------------
// Actions
// ------------------------------------

export const requestHome = (token) => (dispatch) => {
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
    [SET_GAMES] : (state, action) => {
        return {...state,
            games: action.games,
            loading: false
        };
    },
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {loading: true, parties: []};
export default function loginReducer (state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : state;
}
