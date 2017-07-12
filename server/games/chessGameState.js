'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.sendClick = sendClick;
exports.resign = resign;
exports.joinMatch = joinMatch;
exports.leaveMatch = leaveMatch;
exports.default = messageReducer;
// ------------------------------------
// Constants
// ------------------------------------
const MATCH_ACTION_REQUEST = exports.MATCH_ACTION_REQUEST = 'MATCH_ACTION_REQUEST';
const JOIN_MATCH = exports.JOIN_MATCH = 'JOIN_MATCH_REQUEST';
const LEAVE_MATCH = exports.LEAVE_MATCH = 'LEAVE_MATCH_REQUEST';
const MATCH_SET_STATE = exports.MATCH_SET_STATE = 'MATCH_SET_STATE';

// ------------------------------------
// Actions
// ------------------------------------
function sendClick(match_code, x, y, player) {
  return {
    type: MATCH_ACTION_REQUEST,
    subtype: 'CLICK',
    match_code: match_code,
    payload: { x: x,
      y: y },
    player: player
  };
}

function resign(match_code, player) {
  return {
    type: MATCH_ACTION_REQUEST,
    subtype: 'RESIGN',
    match_code: match_code,
    player: player
  };
}

function joinMatch(match_code) {
  return {
    type: JOIN_MATCH,
    match_code: match_code
  };
}

function leaveMatch(match_code) {
  return {
    type: LEAVE_MATCH,
    match_code: match_code
  };
}

const actions = exports.actions = {
  sendClick, leaveMatch, joinMatch
};

// ------------------------------------
// FUNCTIONS
// ------------------------------------
function isValidCell(board, x, y) {
  let boardHeight = board.length;
  let boardWidth = board[0].length;
  return x >= 0 && x < boardWidth && y >= 0 && y < boardHeight;
}

function isCellEmpty(cell) {
  return cell.indexOf('d') == -1 && cell.indexOf('l') == -1;
}

function getCellPlayer(cell) {
  return isCellEmpty(cell) ? null : cell.indexOf('l') >= 0 ? 0 : 1;
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

function findSelectedCell(board) {
  for (let j = 0; j < board.length; j++) {
    for (let i = 0; i < board[j].length; i++) {
      if (isCellSelected(board[j][i])) {
        return { x: i, y: j };
      }
    }
  }
  return null;
}

function findCellType(board, type, player) {
  for (let j = 0; j < board.length; j++) {
    for (let i = 0; i < board[j].length; i++) {
      let cell = board[j][i];
      if (!isCellEmpty(cell) && cell[0] === type && getCellPlayer(cell) === player) {
        return { x: i, y: j };
      }
    }
  }
  return null;
}

function clearBoardFlags(board) {
  for (let j = 0; j < board.length; j++) {
    for (let i = 0; i < board[j].length; i++) {
      board[j][i] = board[j][i].replace('@', '');
      board[j][i] = board[j][i].replace('*', '');
    }
  }
}

function isCellMovable(cell) {
  return cell.indexOf('*') >= 0;
}

function isEnPassantRisk(board, enPassantRisk, x, y, y2, player) {
  if (!enPassantRisk) return false;
  let isInRisk = false;
  for (let i = 0; i < enPassantRisk.length; i++) {
    if (enPassantRisk[i][0] == x && enPassantRisk[i][1] == y) {
      isInRisk = true;
    }
  }
  if (!isInRisk) return false;
  let direction = 1;
  if (player == 1) direction = -1;
  if (!isValidCell(board, x, y2)) return false;
  if (getCellPlayer(board[y2][x]) != (player + 1) % 2) return false;
  if (board[y2][x][0] == 'p') return true;
  return false;
}

function toggleCellMovable(board, x, y, player) {
  if (isValidCell(board, x, y)) {
    if (board[y][x].indexOf('*') >= 0) {
      board[y][x] = board[y][x].replace('*', '');
    } else {
      if (isCellEmpty(board[y][x]) || player != getCellPlayer(board[y][x])) {
        board[y][x] += '*';
      }
    }
  }
}

function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function detectCheck(state) {
  let result = [false, false];
  for (let y = 0; y < state.board.length; y++) {
    for (let x = 0; x < state.board[y].length; x++) {
      let cell = state.board[y][x];
      if (!isCellEmpty(cell)) {
        let cellPlayer = getCellPlayer(cell);
        let opponentPlayer = (cellPlayer + 1) % 2;
        let stateCopy = deepCopy(state);
        selectPiece(stateCopy, x, y, cellPlayer);
        let opponentKingCords = findCellType(stateCopy.board, 'k', opponentPlayer);
        if (!opponentKingCords) continue;
        let opponentKingCell = stateCopy.board[opponentKingCords.y][opponentKingCords.x];
        if (isCellMovable(opponentKingCell)) {
          result[opponentPlayer] = true;
        }
      }
    }
  }
  return result;
}

function clearInCheckMovableCells(state, player) {
  for (let y = 0; y < state.board.length; y++) {
    for (let x = 0; x < state.board[y].length; x++) {
      let cell = state.board[y][x];
      if (isCellMovable(cell)) {
        let stateCopy = deepCopy(state);
        movePiece(stateCopy, x, y, player);
        let checkState = detectCheck(stateCopy);
        if (checkState[player]) {
          toggleCellMovable(state.board, x, y, player);
        }
      }
    }
  }
}

function isCheckmated(state, player) {
  //First loop will select a player piece.
  for (let y0 = 0; y0 < state.board.length; y0++) {
    for (let x0 = 0; x0 < state.board[y0].length; x0++) {
      let selectedCell = state.board[y0][x0];
      if (isCellEmpty(selectedCell) || getCellPlayer(selectedCell) !== player) continue;
      for (let y1 = 0; y1 < state.board.length; y1++) {
        for (let x1 = 0; x1 < state.board[y1].length; x1++) {
          let stateCopy = deepCopy(state);
          clearBoardFlags(stateCopy.board);
          selectPiece(stateCopy, x0, y0, player);

          let targetCell = stateCopy.board[y1][x1];
          if (!isCellMovable(targetCell)) continue;
          movePiece(stateCopy, x1, y1, player);
          clearBoardFlags(stateCopy.board);
          let newCheckState = detectCheck(stateCopy);
          if (!newCheckState[player]) {
            return false;
          }
        }
      }
    }
  }
  return true;
}

function selectPiece(state, x, y, player) {
  let board = state.board;
  let target = board[y][x];
  let isTargetEmpty = isCellEmpty(target);
  let targetPiece = '';
  if (!isTargetEmpty) {
    targetPiece = target[0];
  }

  switch (targetPiece) {
    case 'k':
      //KING
      for (let deltaY = -1; deltaY <= 1; deltaY++) {
        for (let deltaX = -1; deltaX <= 1; deltaX++) {
          if (deltaX == 0 && deltaY == 0) {
            toggleCellSelected(board, x, y, player);
          } else {
            toggleCellMovable(board, x + deltaX, y + deltaY, player);
          }
        }
      }
      break;
    case 'b': //BISHOP
    case 'r': //ROOK
    case 'q':
      //QUEEN
      toggleCellSelected(board, x, y, player);
      let vectors = [];
      if (targetPiece == 'b') {
        vectors = [[1, 1], [-1, -1], [-1, 1], [1, -1]];
      } else if (targetPiece == 'r') {
        vectors = [[0, 1], [0, -1], [1, 0], [-1, 0]];
      } else if (targetPiece == 'q') {
        vectors = [[0, 1], [0, -1], [1, 0], [-1, 0], [1, 1], [-1, -1], [-1, 1], [1, -1]];
      }

      for (let i = 0; i < vectors.length; i++) {
        for (let delta = 1; delta <= 7; delta++) {
          let x2 = x + delta * vectors[i][0];
          let y2 = y + delta * vectors[i][1];
          toggleCellMovable(board, x2, y2, player);
          if (isValidCell(board, x2, y2) && !isCellEmpty(board[y2][x2])) {
            break;
          }
        }
      }
      break;
    case 'n':
      //KNIGHT
      toggleCellSelected(board, x, y, player);
      for (let deltaY = -1; deltaY <= 1; deltaY += 2) {
        for (let deltaX = -1; deltaX <= 1; deltaX += 2) {
          toggleCellMovable(board, x + 2 * deltaX, y + 1 * deltaY, player);
          toggleCellMovable(board, x + 1 * deltaX, y + 2 * deltaY, player);
        }
      }
      break;
    case 'p':
      //PAWN
      toggleCellSelected(board, x, y, player);
      let direction = 1;
      if (player == 0) direction = -1;
      let x2 = x;
      let y2 = y + direction;
      if (isValidCell(board, x2, y2) && isCellEmpty(board[y2][x2])) {
        toggleCellMovable(board, x2, y2, player);
        let initialRow = 6 - 5 * player;
        y2 = y + 2 * direction;
        if (initialRow == y && isCellEmpty(board[y2][x2])) {
          toggleCellMovable(board, x2, y2, player);
        }
      }
      //Left adjacent cell
      for (let delta = -1; delta <= 1; delta += 2) {
        x2 = x + delta;
        y2 = y + direction;
        if (isValidCell(board, x2, y2) && (!isCellEmpty(board[y2][x2]) || isEnPassantRisk(state.board, state.enPassantRisk, x2, y2, y2 - direction, player))) {
          toggleCellMovable(board, x2, y2, player);
        }
      }
      break;
  }
}

function movePiece(state, x, y, player) {
  let board = state.board;
  let enPassantRisk = state.enPassantRisk;
  //Find selected cell
  let selectedCellCord = findSelectedCell(board);
  let selectedCell = board[selectedCellCord.y][selectedCellCord.x];
  board[y][x] = selectedCell;
  board[selectedCellCord.y][selectedCellCord.x] = '';

  //Add En passant risk
  if (selectedCell[0] == 'p' && Math.abs(selectedCellCord.y - y) == 2) {
    if (!enPassantRisk) {
      state.enPassantRisk = [];
      enPassantRisk = state.enPassantRisk;
    }
    enPassantRisk.push([x, (selectedCellCord.y + y) / 2]);
  }
  //Check for en passant
  if (selectedCell[0] == 'p' && isEnPassantRisk(board, enPassantRisk, x, y, selectedCellCord.y, player)) {
    board[selectedCellCord.y][x] = '';
  }

  //Do castling
  let firstRow = 7 - 7 * player;
  if (selectedCell[0] == 'r' && y == firstRow && [0, 7].indexOf(selectedCellCord.x) != -1) {
    //King-side castling
    if (x == 2 && board[firstRow][3][0] == 'q') {
      let temp = board[firstRow][3];
      board[firstRow][3] = selectedCell;
      board[y][x] = temp;
      //Queen-side castling
    } else if (x == 5 && board[firstRow][4][0] == 'k') {
      let temp = board[firstRow][4];
      board[firstRow][4] = selectedCell;
      board[y][x] = temp;
    }
  }
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [MATCH_SET_STATE]: (state, action) => {
    return deepCopy(action.payload);
  },
  [MATCH_ACTION_REQUEST]: (state, action) => {
    if (action.subtype == 'CLICK') {
      state = deepCopy(state);
      let target = state.board[action.payload.y][action.payload.x];
      let isTargetEmpty = isCellEmpty(target);
      let targetPlayer = getCellPlayer(target);
      let isTargetSelected = isCellSelected(target);
      let isTargetMovable = isCellMovable(target);
      //Check if it is correct turn
      if (action.player != state.turn % 2) return state;

      if (isTargetMovable) {
        movePiece(state, action.payload.x, action.payload.y, action.player);

        let stateCopy = deepCopy(state);
        state.board = stateCopy.board;
        state.enPassantRisk = stateCopy.enPassantRisk;
        state.turn++;
        let opponent = (action.player + 1) % 2;
        state.check = detectCheck(stateCopy)[opponent];
        if (state.check && isCheckmated(state, opponent)) {
          state.winner = action.player;
        }
        clearBoardFlags(state.board);
      } else {
        //Check if trying to move its own piece
        if (action.player != targetPlayer) return state;
        let selectedCell = findSelectedCell(state.board);
        if (!selectedCell) {
          selectPiece(state, action.payload.x, action.payload.y, action.player);
          clearInCheckMovableCells(state, action.player);
        } else {
          //Unselect selectedCell, because target is not movable
          selectPiece(state, selectedCell.x, selectedCell.y, action.player);
        }
      }
      return state;
    } else if (action.subtype == 'RESIGN') {
      return _extends({}, state, {
        winner: (action.player + 1) % 2
      });
    }
  }
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = { board: [['rd_00', 'nd_01', 'bd_02', 'qd_03', 'kd_04', 'bd_05', 'nd_06', 'rd_07'], ['pd_08', 'pd_09', 'pd_10', 'pd_11', 'pd_12', 'pd_13', 'pd_14', 'pd_15'], ['', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', ''], ['pl_16', 'pl_17', 'pl_18', 'pl_19', 'pl_20', 'pl_21', 'pl_22', 'pl_23'], ['rl_24', 'nl_25', 'bl_26', 'ql_27', 'kl_28', 'bl_29', 'nl_30', 'rl_31']],
  loading: true,
  turn: 0,
  winner: null,
  selected: null,
  feasible: null };
function messageReducer(state, action) {
  if (!state) {
    //Have to do a deep copy because that on the server, the initialState was
    //being modified by following actions.
    state = JSON.parse(JSON.stringify(initialState));
  }
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
