// ------------------------------------
// Constants
// ------------------------------------
export const MATCH_ACTION_REQUEST = 'MATCH_ACTION_REQUEST';
export const JOIN_MATCH = 'JOIN_MATCH_REQUEST';
export const LEAVE_MATCH = 'LEAVE_MATCH_REQUEST';
export const MATCH_SET_STATE = 'MATCH_SET_STATE';

// ------------------------------------
// Actions
// ------------------------------------
export function sendClick (match_code, x, y, player) {
  return {
    type    : MATCH_ACTION_REQUEST,
    subtype : 'CLICK',
    match_code: match_code,
    payload : {x: x,
      y: y},
    player: player
  };
}

export function resign(match_code, player) {
  return {
    type    : MATCH_ACTION_REQUEST,
    subtype : 'RESIGN',
    match_code: match_code,
    player: player
  };
}

export function joinMatch (match_code) {
  return {
    type : JOIN_MATCH,
    match_code : match_code
  };
}

export function leaveMatch (match_code) {
  return {
    type : LEAVE_MATCH,
    match_code : match_code
  };
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

function calculateFeasible (board, x, y, player, turn) {
  let piece = board[y][x];
  if (!piece || piece.player != player || turn%2 != player)
    return [];
  let feasible = [];
  let eat_movements = [];
  //UP OR DOWN
  for (let directionY = -1; directionY <= 1; directionY +=2) {
    if (directionY == 1 && piece.player == 1 && !piece.double) {
      continue;
    }
    if (directionY == -1 && piece.player == 0 && !piece.double) {
      continue;
    }
    //LEFT OR RIGHT
    for (let directionX = -1; directionX <= 1; directionX += 2) {
      //WALK
      if (isValidCell(board, x+directionX, y+directionY) &&
          !board[y+directionY][x+directionX]) {
        feasible.push({x: x+directionX, y: y+directionY, movement: 'WALK',
          from: {x: x, y: y}});
      }
      //EAT
      if (isValidCell(board, x+directionX, y+directionY) &&
          isValidCell(board, x+2*directionX, y+2*directionY) &&
          board[y+directionY][x+directionX] &&
          board[y+directionY][x+directionX].player != piece.player &&
          !board[y+2*directionY][x+2*directionX]) {
        let movement = {movement: 'EAT',
          x: x+2*directionX, y: y+2*directionY,
          eaten: {x: x+directionX, y: y+directionY},
          from: {x: x, y: y}};
        eat_movements.push(movement);
      }
    }
  }
  if (eat_movements.length > 0) {
    return eat_movements;
  } else {
    return feasible;
  }
}

function getWinner (board) {
  for (let player = 0; player <= 1; player++) {
    let isPlayerLoser = true;
    for (let y = 0; y < board.length; y++) {
      for (let x = 0; x < board[y].length; x++) {
        let possible_moves = calculateFeasible(board, x, y, player, player);
        if (possible_moves.length > 0) {
          isPlayerLoser = false;
        }
      }
    }
    if (isPlayerLoser) {
      return (player+1)%2;
    }
  }
  return null;
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [MATCH_SET_STATE] : (state, action) => {
    return {
      ...action.payload
    };
  },
  [MATCH_ACTION_REQUEST] : (state, action) => {
    if (action.subtype == 'CLICK') {
      let x = action.payload.x;
      let y = action.payload.y;
      if (state.feasible) {
        for (var i =0; i < state.feasible.length; i++) {
          let f = state.feasible[i];
          if (f.x == x && f.y == y) {
            if (f.movement == 'WALK') {
              state.board[y][x] = state.board[f.from.y][f.from.x];
              state.board[f.from.y][f.from.x] = null;
              state.turn += 1;
            } else if (f.movement == 'EAT') {
              state.board[y][x] = state.board[f.from.y][f.from.x];
              state.board[f.from.y][f.from.x] = null;
              state.board[f.eaten.y][f.eaten.x] = null;

              let next_feasible = calculateFeasible(state.board, x,y,
                                  action.player, state.turn);
              let can_eat_next = false;
              next_feasible.forEach((f2) => {
                if (f2.movement == 'EAT')
                  can_eat_next = true;
              });
              if (!can_eat_next)
                state.turn += 1;
            }
            if ((y == 0 || y == state.board.length - 1) &&
                !state.board[y][x].double) {
              state.board[y][x].double = true;
            }
            break;
          }
        }
        return {
          ...state,
          selected: null,
          feasible: null,
          winner: getWinner(state.board)
        };
      } else if (state.selected &&
                 state.selected.x == x &&
                 state.selected.y == y) {
        return {
          ...state,
          selected: null,
          feasible: null
        };
      } else {
        let feasible = calculateFeasible(state.board,x,y, action.player,
          state.turn);
        if (feasible.length > 0) {
          return {
            ...state,
            feasible: feasible,
            selected: {x: x, y: y}
          };
        }
      }
      return state;
    } else if (action.subtype == 'RESIGN') {
      return {
        ...state,
        winner: (action.player+1)%2
      };
    }
  }
};


// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {board: [
  [{player: 0, key:0}, null, {player: 0, key:1}, null,
    {player: 0, key:2}, null, {player: 0, key:3}, null],
  [null, {player: 0, key:4}, null, {player: 0, key:5}, null,
    {player: 0, key:6}, null, {player: 0, key:7}],
  [{player: 0, key:8}, null, {player: 0, key:9}, null,
        {player: 0, key:10}, null, {player: 0, key:11}, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, {player: 1, key:12}, null, {player: 1, key:13}, null,
    {player: 1, key:14}, null, {player: 1, key:15}],
  [{player: 1, key:16}, null, {player: 1, key:17}, null,
      {player: 1, key:18}, null, {player: 1, key:19},null],
  [null, {player: 1, key:20}, null, {player: 1, key:21}, null,
    {player: 1, key:22}, null, {player: 1, key:23}]
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
