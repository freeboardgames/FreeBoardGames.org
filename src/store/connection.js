// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  ['SOCKET_RECONNECT'] : (state, action) => {
    return { ...state, disconnected: false };
  },
  ['SOCKET_DISCONNECT'] : (state, action) => {
    return { ...state, disconnected: true };
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {disconnected: false}
export default function messageReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
