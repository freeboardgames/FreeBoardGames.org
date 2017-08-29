import jwtDecode from 'jwt-decode';

const initialState = {
    token: null,
    userName: null,
    email: null,
    isAuthenticated: false
};

const ACTION_HANDLERS = {
    ['AUTH_SUCCESS']: (state, action) => {
        return {
            'isAuthenticated': true,
            'token': action.payload.token,
            'userName': jwtDecode(action.payload.token).userName,
            'email': jwtDecode(action.payload.token).email,
        };
    },
    ['AUTH_LOGOUT']: (state, payload) => {
        return {...initialState};
    }
};

export default function authReducer (state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : state;
}
