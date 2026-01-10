import { MakeStore, createWrapper } from 'next-redux-wrapper';
import { createStore, Store } from 'redux';
import { reducer } from './reducer';
import { ReduxState } from './definitions';

const makeStore: MakeStore<Store<ReduxState>> = () => {
  return createStore(reducer);
};

export const wrapper = createWrapper<Store<ReduxState>>(makeStore, { debug: false });
