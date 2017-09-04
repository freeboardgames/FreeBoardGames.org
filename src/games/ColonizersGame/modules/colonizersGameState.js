import {
  newBoard
} from './colonizersBoard.js';

const initialState = {
  board: newBoard(),
  loading: true,
  turn: 0,
  numPlayers: 3,
  winner: null
};

const ACTION_HANDLERS = {
};

export default function messageReducer (state, action) {
  if (!state) {
    //Have to do a deep copy because that on the server, the initialState was
    //being modified by following actions.
    state = JSON.parse(JSON.stringify(initialState));
  }
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
