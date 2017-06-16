// ------------------------------------
// Constants
// ------------------------------------
export const CLICK = 'MATCH_ACTION_REQUEST'
export const JOIN_MATCH = 'MATCH_JOIN_REQUEST'
export const MATCH_SET_STATE = 'MATCH_SET_STATE'

// ------------------------------------
// Actions
// ------------------------------------
export function sendClick (match_code, x, y, player) {
  return {
    type    : CLICK,
    match_code: match_code,
    payload : {x: x,
              y: y},
    player: player
  }
}

export function joinMatch (match_code) {
  return {
    type : JOIN_MATCH,
    match_code : match_code
  }
}

export const actions = {
  sendClick
}

// ------------------------------------
// FUNCTIONS
// ------------------------------------
function isValidCell(board, x, y) {
  let boardHeight = board.length;
  let boardWidth = board[0].length;
  return x >= 0 && x < boardWidth &&
    y >= 0 && y < boardHeight;
}


// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [MATCH_SET_STATE] : (state, action) => {
    return {
      ...action.payload
    }
  },
  [CLICK] : (state, action) => {
  }
}


// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {board: [
    ['rd_00', 'nd_01', 'bd_02', 'qd_03', 'kd_04', 'bd_005', 'nd_06', 'rd_07'],
    ['pd_08', 'pd_09', 'pd_10', 'pd_11', 'pd_12', 'pd_13', 'pd_14', 'pd_15'],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['pl_16', 'pl_17', 'pl_18', 'pl_19', 'pl_20', 'pl_21', 'pl_22', 'pl_23'],
    ['rl_24', 'nl_25', 'bl_26', 'ql_27', 'kl_28', 'bl_29', 'nl_30', 'rl_31']
  ],
  loading: true,
  turn: 0,
  winner: null,
  selected: null,
  feasible: null};
export default function messageReducer (state, action) {
  if (!state) {
    //Have to do a deep copy because that on the server, the initialState was
    //being modified by following actions.
    state = JSON.parse(JSON.stringify(initialState));
  }
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
