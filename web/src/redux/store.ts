import { MakeStore, createWrapper } from 'next-redux-wrapper';
import { createStore } from 'redux';
import { reducer } from './reducer';
import { AuthData } from './actions';

export interface State {
  user: AuthData;
}

const makeStore: MakeStore<State> = () => {
  return createStore(reducer);
};

export const wrapper = createWrapper<State>(makeStore, { debug: false });
