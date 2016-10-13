// ------------------------------------
// Constants
// ------------------------------------
export const SEND_MESSAGE = 'SEND_MESSAGE'

// ------------------------------------
// Actions
// ------------------------------------
export function sendMessage (playerName, playerColor, text) {
  return {
    type    : SEND_MESSAGE,
    payload : {playerName: playerName,
              playerColor: playerColor,
              text: text}
  }
}

export const actions = {
  sendMessage
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SEND_MESSAGE] : (state, action) => {
    state.push(action.payload)
    return state.slice(0) //TODO: USAR LIBRARY THE IMMUTABLEs
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = []
export default function messageReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
