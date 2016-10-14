// ------------------------------------
// Constants
// ------------------------------------
export const SELECT_PIECE = 'SELECT_PIECE'
export const MOVE_PIECE = 'MOVE_PIECE'
export const RELEASE_PIECE = 'RELEASE_PIECE'

// ------------------------------------
// Actions
// ------------------------------------
export function selectPiece (x, y) {
  return {
    type    : SELECT_PIECE,
    payload : {x: x,
              y: y}
  }
}

export function movePiece (x, y) {
  return {
    type    : MOVE_PIECE,
    payload : {x: x,
              y: y}
  }
}

export function releasePiece () {
  return {
    type    : RELEASE_PIECE
  }
}

export const actions = {
  selectPiece,
  movePiece,
  releasePiece
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SELECT_PIECE] : (state, action) => {
    if (state == null) {
      return {x: action.payload.x,
               y: action.payload.y,
               tempX: action.payload.x,
               tempY: action.payload.y};
    }
    return state;
  },
  [MOVE_PIECE] : (state, action) => {
    if (state != null) {
      return {x: state.x,
               y: state.y,
               tempX: action.payload.x,
               tempY: action.payload.y}
    }
    return state;
  },
  [RELEASE_PIECE] : (state, action) => {
    return null;
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = null
export default function selectedPieceReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
