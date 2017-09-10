// ------------------------------------
// Constants
// ------------------------------------
export const SEND_MESSAGE = 'SEND_MESSAGE_REQUEST';
export const SAVE_PUSH_SUBSCRIPTION = 'SAVE_PUSH_SUBSCRIPTION_REQUEST';

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
  };
}

export function savePushSubscription (payload) {
  return {
    type    : SAVE_PUSH_SUBSCRIPTION,
    payload : payload
  };
}

export const actions = {
  sendMessage, savePushSubscription
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SEND_MESSAGE] : (state, action) => {
    state.messages.push(action.payload);
    state.messages = state.messages.slice(0);
    return { ...state };
  },
  ['LOCATION_CHANGE'] : () => {
    return JSON.parse(JSON.stringify(initialState));
  },
  ['SET_MESSAGES'] : (state, action) => {
    return { ...state, messages: action.payload.slice(0) };
  },
  ['SET_MATCH_INFO'] : (state, action) => {
    return { ...state, matchInfo: action.payload };
  }
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {messages: [],
  matchInfo: {loading: true},
  disconnected: false};
export default function messageReducer (state, action) {
  if (!state) {
    state = JSON.parse(JSON.stringify(initialState));
  }
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
