import {
  newHexMap
} from './hexMap.js';

import {
  HIDDEN_MAP_CELLS_Y_X,
  DEFAULT_TRADEPOSTS_Y_X_EDGE
} from './colonizersGameConstants.js';

export const MATCH_SET_STATE = 'MATCH_SET_STATE';
export const MATCH_ACTION_REQUEST = 'MATCH_ACTION_REQUEST';

const initialState = {
  board: {
    map: newHexMap(5,5, HIDDEN_MAP_CELLS_Y_X),
    tradePosts: DEFAULT_TRADEPOSTS_Y_X_EDGE,
    tileTypes: {},
    tileNumbers: {}
  },
  playerResources: {},
  playerScore: {},
  //Phase 0: Each player initialize buildings/roads. 1: Normal Game
  phase: 0,
  //BUILD_OUTPOST, BUILD__CITY, BUILD_ROAD, TRADE_PROPOSAL
  operationInProgress: 'BUILD_OUTPOST',
  waitingDices: null,
  turn: 0,
  numPlayers: 3,
  winner: null,
  feasible: [],
  feasibleOperations: []
};

const ACTION_HANDLERS = {
  [MATCH_SET_STATE] : (state, action) => {
    return JSON.parse(JSON.stringify(action.payload));
  },
  ['LOCATION_CHANGE'] : () => {
    return JSON.parse(JSON.stringify(initialState));
  },
  ['SET_MATCH_INFO'] : () => {
    //Set numPlayers
    //Populate board.tileTypes and board.tileNumbers

  },
  ['DICE_RESULT'] : () => {
    //Received dice result from server
    //Distribute resources
  },
  [MATCH_ACTION_REQUEST] : (state, action) => {
    //Only action done by players not in turn
    if (action.subtype == 'TRADE_RESPONSE') {
      //If some positive response, trade resources and
      //set operationInProgress is null
      //If everybody answered negative, operationInProgress is null
    }
    //Check if it is users turn
    if (action.subtype == 'START_OPERATION') {
      //Check for operation feasibility
      //Road: Calculate feasible roads to build
      //Outpost: Calculate feasible outposts to BUILD
      //City: calculate feasible cities to build
      //Trade proposal: Check if enough resources
    } else if (action.subtype == 'BUILD') {
      //Check if feasible to build
      //Might set next player turn IF phase==0
      //Calculate score, check for winner
    } else if (action.subtype == 'BUY_CARD') {
      //This will be the last thing to implement
      //Needs to keep hand and deck secrets in the server
      //Calculate score, check for winner
    } else if (action.subtype == 'USE_CARD') {
      //This will be the last thing to implement
      //Needs to keep hand and deck secrets in the server
      //Calculate score, check for winner
    } else if (action.subtype == 'END_TURN') {
      //SET next player turn
      //SET waitingDice
    }
  },
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
