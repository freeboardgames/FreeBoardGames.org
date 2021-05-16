/* eslint-disable react/prop-types */
import * as rtl from '@testing-library/react';
import { ReduxState } from 'infra/common/redux/definitions';
import { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { Dispatch } from 'redux';
import configureMockStore from 'redux-mock-store';

export * from '@testing-library/react';

export const mockStore = configureMockStore();

export function render(ui: ReactElement, options?: rtl.RenderOptions & ProvidersOptions) {
  return makeRender()(ui, options);
}

export function makeRender(globalOptions?: ProvidersOptions) {
  return function render(ui: ReactElement, options?: rtl.RenderOptions & ProvidersOptions) {
    const store = buildStore(options, globalOptions);
    store.dispatch = options?.dispatch || globalOptions?.dispatch || store.dispatch;
    const output = rtl.render(ui, { wrapper: createProviders({ store }), ...options });
    return output;
  };
}

function buildStore(options?: rtl.RenderOptions & ProvidersOptions, globalOptions?: ProvidersOptions) {
  return (
    (options?.store && mockStore(options.store)) || (globalOptions?.store && mockStore(options.store)) || mockStore({})
  );
}

function createProviders({ store }) {
  return ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
  };
}

interface ProvidersOptions {
  store?: Partial<ReduxState>;
  dispatch?: Dispatch;
}
