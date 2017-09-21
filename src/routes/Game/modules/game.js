import GAMES from '../../../games';
// ------------------------------------
// Constants
// ------------------------------------
export const GAME_INFO = 'GAME_INFO';

// ------------------------------------
// Actions
// ------------------------------------
export const requestGameInfo = (code) => (dispatch) => {
  dispatch({type: GAME_INFO, code});
};

export const actions = {
  requestGameInfo
};

// ------------------------------------
// Party Reducer
// ------------------------------------
const ACTION_HANDLERS = {
  [GAME_INFO] : (state, action) => {
    return {
      ...state,
      info: GAMES.map[action.code]
    };
  },
  ['LOCATION_CHANGE'] : () => {
    return initialState;
  },
};
const initialState = {};
export default function gameReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
