// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
    ['SOCKET_RECONNECT'] : (state, action) => {
        return { ...state, disconnected: false };
    },
    ['SOCKET_DISCONNECT'] : (state, action) => {
        return { ...state, disconnected: true };
    },
    ['SOCKET_ACK_COUNT'] : (state, action) => {
        return { ... state, sendingMessage: (action.count > 0)};
    },
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {disconnected: false, sendingMessage: false};
export default function messageReducer (state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : state;
}
