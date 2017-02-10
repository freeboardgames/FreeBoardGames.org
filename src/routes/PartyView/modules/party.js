import fetch from 'isomorphic-fetch'

// ------------------------------------
// Constants
// ------------------------------------
export const DOWN_REQUEST = 'DOWN_REQUEST'
export const SET_INFO = 'SET_INFO'
export const SET_GAMES = 'SET_GAMES'
export const SET_MATCHES = 'SET_MATCHES'
export const SET_DOWN_MAPPING = 'SET_DOWN_MAPPING'


// ------------------------------------
// Actions
// ------------------------------------
export const down = (party, user, game) => (dispatch, getState) => {
  dispatch({type: DOWN_REQUEST, party, user, game});
  /*
  return fetch(`/api/parties/` + party + `/down`,
    { method: 'POST',
      headers: {'content-type': 'application/json'},
	    body: JSON.stringify({ game, user })
    })
      .then(response => response.json())
      .then(json => dispatch(json))*/
}

export const connectToParty = (party) => (dispatch, getState) => {
  let info = {loading: false, code: 'UEHueoajeokaw', name: "Mermões",
               members: ["felizardow", "rafaelplonghi", "vitorpfr", "curvorj"]}
  let matches = [{id: 'awjdjdaw', game_code: 'checkers', game_name: "Checkers",
                  status: "Going on", players: ["felizardow", "vitorpfr"]},
                 {id: 'poqweqep', game_code: 'chess', game_name: "Chess",
                  status: "Finished", players: ["rafaelplonghi", "curvorj"]}]
  let games = [{code: 'chess', name: 'Chess', maxPlayers: 2},
               {code: 'checkers', name: 'Checkers', maxPlayers: 2}]
  let downMapping = {'chess': ['vitorpfr'], 'checkers': ['felizardow']}
  dispatch({type: SET_DOWN_MAPPING, downMapping});
  dispatch({type: SET_GAMES, games});
  dispatch({type: SET_MATCHES, matches});
  dispatch({type: SET_INFO, info});
}

export const actions = {
  down, connectToParty
}

// ------------------------------------
// Party Reducer
// ------------------------------------
const ACTION_HANDLERS = {
  [SET_INFO] : (state, action) => {
    return {...state,
            info: action.info}
  },
  [SET_GAMES] : (state, action) => {
    return {...state,
            games: action.games}
  },
  [SET_DOWN_MAPPING] : (state, action) => {
    return {...state,
            downMapping: action.downMapping}
  },
  [SET_MATCHES] : (state, action) => {
    return {...state,
            matches: action.matches}
  },
  [DOWN_REQUEST] : (state, action) => {
    let games = []
    for (let i=0; i<state.games.length; i++) {
      let game = state.games[i]
      if (game.code == action.game) {
        games.push({...game, loading: true})
      } else {
        games.push({...game})
      }
    }
    return {...state,
            games}
  },
}
const initialState = {loading: true}
export default function partyReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
