/* eslint-disable react/prop-types */
import { ReduxState } from 'infra/common/redux/definitions';
import { GameProvider } from 'infra/game/GameProvider';
import React from 'react';
import { Provider } from 'react-redux';
import { Dispatch } from 'redux';
import { mockStore } from './redux';

export function createProvider(options: ProvidersOptions) {
  const gameCode = options?.gameCode;
  const store = buildStore(options);
  store.dispatch = options?.dispatch || store.dispatch;

  return ({ children, ...props }) => {
    return (
      <Provider store={store || mockStore({})}>
        <GameProvider gameCode={gameCode}>
          <>{React.cloneElement(children, props)}</>
        </GameProvider>
      </Provider>
    );
  };
}

function buildStore(options?: ProvidersOptions) {
  return (options?.store && mockStore(options.store)) || mockStore({});
}

export interface ProvidersOptions {
  gameCode?: string;
  store?: Partial<ReduxState>;
  dispatch?: Dispatch;
}
