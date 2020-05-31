import { MakeStore, createWrapper } from 'next-redux-wrapper';
import { createStore } from 'redux';
import { reducer } from './reducer';
import { ReduxState } from './definitions';

const makeStore: MakeStore<ReduxState> = () => {
  return createStore(reducer);
};

export const wrapper = createWrapper<ReduxState>(makeStore, { debug: false });
