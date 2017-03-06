import fetch from 'isomorphic-fetch'

// ------------------------------------
// Constants
// ------------------------------------
export const PARTIES_REQUEST = 'PARTIES_REQUEST'
export const PARTIES_RESULT = 'PARTIES_RESULT'

// ------------------------------------
// Actions
// ------------------------------------

export const requestParties = (token) => (dispatch) => {
  dispatch({type: PARTIES_REQUEST});
}

export const actions = {
  requestParties
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [PARTIES_REQUEST] : (state, action) => {
    return {loading: true, list: []}
  },
  [PARTIES_RESULT] : (state, action) => {
    return {loading: false, list: action.result}
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {loading: false, list: []}
export default function loginReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
