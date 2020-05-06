import { MakeStore } from 'next-redux-wrapper';
import { createStore } from 'redux';
import { reducer, RootState } from './reducer';

/**
 * @param initialState The store's initial state (on the client side, the state of the server-side store is passed here)
 */
export const makeStore: MakeStore = (initialState: RootState) => {
  return createStore(reducer, initialState);
};
