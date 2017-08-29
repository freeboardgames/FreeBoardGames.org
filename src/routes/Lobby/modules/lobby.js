import fetch from 'isomorphic-fetch';

// ------------------------------------
// Constants
// ------------------------------------
export const JOIN_LOBBY = 'JOIN_LOBBY_REQUEST';
export const SET_LOBBY_INFO = 'SET_LOBBY_INFO';

// ------------------------------------
// Actions
// ------------------------------------
export const joinLobby = (code) => (dispatch, getState) => {
    dispatch({type: JOIN_LOBBY, code});
};
export const fail = () => (dispatch, getState) => {
    dispatch({type: SET_LOBBY_INFO, payload: { status: 'FAILED' }});
};

export const actions = {
    joinLobby, fail
};

// ------------------------------------
// Party Reducer
// ------------------------------------
const ACTION_HANDLERS = {
    [SET_LOBBY_INFO] : (state, action) => {
        return {
            ...action.payload
        };
    },
};
const initialState = {loading: true};
export default function lobbyReducer (state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : state;
}
