import { Action, createStore } from 'redux';
import { MakeStore } from 'next-redux-wrapper';

const INITIAL_STATE = { foo: 'foo' };

/**
 * @param initialState The store's initial state (on the client side, the state of the server-side store is passed here)
 */
export const makeStore: MakeStore = (initialState: RootState) => {
  return createStore(reducer, initialState);
};

interface FooAction extends Action<'FOO'> {
  payload: string;
}

export const reducer = (state = INITIAL_STATE, action: FooAction) => {
  switch (action.type) {
    case 'FOO':
      return { ...state, foo: action.payload };
    default:
      return state;
  }
};

export type RootState = ReturnType<typeof reducer>;
