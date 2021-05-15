/* eslint-disable react/prop-types */
import * as rtl from '@testing-library/react';
import { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { Dispatch, Store } from 'redux';
import configureMockStore from 'redux-mock-store';

export * from '@testing-library/react';

const mockStore = configureMockStore();

export function render(ui: ReactElement, options?: rtl.RenderOptions & ProvidersOptions) {
  return makeRender()(ui, options);
}

export function makeRender(globalOptions?: ProvidersOptions) {
  return function render(ui: ReactElement, options?: rtl.RenderOptions & ProvidersOptions) {
    const store = options?.store || globalOptions?.store || mockStore({});
    store.dispatch = options?.dispatch || globalOptions?.dispatch || store.dispatch;
    return rtl.render(ui, { wrapper: createProviders({ store }), ...options });
  };
}

function createProviders({ store }) {
  return ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
  };
}

interface ProvidersOptions {
  store?: Store;
  dispatch?: Dispatch;
}
