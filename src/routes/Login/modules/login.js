// ------------------------------------
// Constants
// ------------------------------------
export const NEW_USER_REQUEST = 'NEW_USER_REQUEST';


// ------------------------------------
// Actions
// ------------------------------------

export const newUser = (nickname) => (dispatch) => {
  dispatch({type: NEW_USER_REQUEST, nickname});
};

export const actions = {
  newUser
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [NEW_USER_REQUEST] : (state) => {
    return {...state,
      loading: true}; },
  ['AUTH_SUCCESS'] : (state, action) => {
    return {token: action.payload.token};
  }
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {loading: false};
export default function loginReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
