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

function isCellEmpty(cell) {
  return (cell.indexOf('d') == -1 &&
          cell.indexOf('l') == -1);
}

function getCellPlayer(cell) {
  return isCellEmpty(cell) ? null :
         (cell.indexOf('d') >= 0 ? 0 : 1);
}

function isCellSelected(cell) {
  return cell.indexOf('@') >= 0;
}

function toggleCellSelected(board, x, y, player) {
  if (isValidCell(board, x, y) && getCellPlayer(board[y][x]) == player) {
    if (board[y][x].indexOf('@') >= 0) {
      board[y][x] = board[y][x].replace('@', '');
    } else {
      board[y][x] += '@';
    }
  }
}

function isCellMovable(cell) {
  return cell.indexOf('*') >= 0;
}

function toggleCellMovable(board, x, y, player) {
  if (isValidCell(board, x, y)) {
    if (board[y][x].indexOf('*') >= 0) {
      board[y][x] = board[y][x].replace('*', '');
    } else {
      if (isCellEmpty(board[y][x]) ||
          player == getCellPlayer(board[y][x])) {
        board[y][x] += '*';
      }
    }
  }
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
    let target = state.board[action.payload.y][action.payload.x];
    let isTargetEmpty = isCellEmpty(target);
    let targetPlayer = getCellPlayer(target);
    let isTargetSelected = isCellSelected(target);
    let isTargetMovable = isCellMovable(target);
    let targetPiece = '';
    if (!isTargetEmpty) {
      targetPiece = target[0];
    }

    if (isTargetMovable) {

    } else {
      switch (targetPiece) {
        case 'k':
          for (let deltaY=-1; deltaY <= 1; deltaY++) {
            for (let deltaX=-1; deltaX <= 1; deltaX++) {
              if (deltaX == 0 && deltaY ==0) {
                toggleCellSelected(state.board,
                                   action.payload.x,
                                   action.payload.y,
                                   action.player);
              } else {
                toggleCellMovable(state.board,
                                  action.payload.x+deltaX,
                                  action.payload.y+deltaY,
                                  action.player);

              }
            }
          }
        break;
        case 'q':
          for (let delta=-7; delta <= 7; delta++) {
            if (delta == 0) {
              toggleCellSelected(state.board,
                                 action.payload.x,
                                 action.payload.y,
                                 action.player);
            } else {
              toggleCellMovable(state.board,
                                action.payload.x+delta,
                                action.payload.y+delta,
                                action.player);
              toggleCellMovable(state.board,
                                action.payload.x-delta,
                                action.payload.y+delta,
                                action.player);
              toggleCellMovable(state.board,
                                action.payload.x,
                                action.payload.y+delta,
                                action.player);
              toggleCellMovable(state.board,
                                action.payload.x+delta,
                                action.payload.y,
                                action.player);

            }
          }
        break;
      }
    }
    return {
      ...state
    }
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
