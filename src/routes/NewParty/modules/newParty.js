import fetch from 'isomorphic-fetch';

// ------------------------------------
// Constants
// ------------------------------------
export const NEW_PARTY_REQUEST = 'NEW_PARTY_REQUEST';
export const NEW_PARTY_ERROR = 'NEW_PARTY_ERROR';


// ------------------------------------
// Actions
// ------------------------------------

export const newParty = (name) => (dispatch, getState) => {
    dispatch({type: NEW_PARTY_REQUEST, name});
};

export const actions = {
    newParty
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
    [NEW_PARTY_REQUEST] : (state, action) => {
        return {...state,
            name: action.name,
            loading: true};
    },
    [NEW_PARTY_ERROR] : (state, action) => {
        return {
            ...state,
            loading: false,
            error: action.error};
    },
    ['NEW_PARTY_SUCCESS'] : (state, action) => {
        return {id: action.payload.id};
    }
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {error: null, name: null, loading: false};
export default function newPartyReducer (state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : state;
}
