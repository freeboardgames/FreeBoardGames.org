// ------------------------------------
// Constants
// ------------------------------------
export const SEND_MESSAGE = 'SEND_MESSAGE_REQUEST'
export const SAVE_PUSH_SUBSCRIPTION = 'SAVE_PUSH_SUBSCRIPTION_REQUEST'

// ------------------------------------
// Actions
// ------------------------------------
export function sendMessage (match_code, player, text) {
  return {
    type    : SEND_MESSAGE,
    payload : {
               match_code: match_code,
               player: player,
               text: text,
              }
  }
}

export function savePushSubscription (payload) {
  return {
    type    : SAVE_PUSH_SUBSCRIPTION,
    payload : payload
  }
}

export const actions = {
  sendMessage, savePushSubscription
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SEND_MESSAGE] : (state, action) => {
    state.push(action.payload)
    return state.slice(0)
  },
  ['SET_MESSAGES'] : (state, action) => {
    return action.payload.slice(0);
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
