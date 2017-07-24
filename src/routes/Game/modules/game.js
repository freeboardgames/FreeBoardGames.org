import fetch from 'isomorphic-fetch'

// ------------------------------------
// Constants
// ------------------------------------
export const GAME_INFO_REQUEST = 'GAME_INFO_REQUEST'
export const SET_GAME_INFO = 'SET_GAME_INFO'

// ------------------------------------
// Actions
// ------------------------------------
export const requestGameInfo = (code) => (dispatch, getState) => {
  dispatch({type: GAME_INFO_REQUEST, code});
}

export const actions = {
  requestGameInfo
}

// ------------------------------------
// Party Reducer
// ------------------------------------
const ACTION_HANDLERS = {
  [SET_GAME_INFO] : (state, action) => {
    return {
      ...state,
      info: action.payload,
      loading: false
    }
  },
}
const initialState = {loading: true}
export default function gameReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
