// ------------------------------------
// Constants
// ------------------------------------
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_ERROR = 'LOGIN_ERROR'


// ------------------------------------
// Actions
// ------------------------------------

export const login = (email,password) => (dispatch, getState) => {
  dispatch({type: LOGIN_REQUEST, email, password});
  return new Promise((resolve) => {
    setTimeout(() => {
      dispatch({type: LOGIN_ERROR, needsPassword: true})
      resolve()
    }, 2000)
  })
}

export const actions = {
  login
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [LOGIN_REQUEST] : (state, action) => {
    return {...state,
      email: action.email,
      password: action.password,
      loading: true} },
  [LOGIN_ERROR] : (state, action) => {
    if (action.passwordError)
      return {...state,
        loading: false,
        needsPassword: true,
        passwordError: action.passwordError,
        emailError: null}
    if (action.emailError)
      return {
        ...state,
        loading: false,
        needsPassword: false,
        emailError: action.emailError,
        passwordError: null}
    if (action.needsPassword)
      return {...state,
        loading: false,
        needsPassword: true};
  },
  ['AUTH_SUCCESS'] : (state, action) => {
    return {loggedIn: true}
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {needsPassword: false, loading: false}
export default function loginReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
