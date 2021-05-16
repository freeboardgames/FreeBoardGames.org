import { GameProvider } from 'infra/game/GameProvider';
import React, { ComponentType } from 'react';
import { Provider } from 'react-redux';
import { mockStore } from 'test/utils/rtl';

export const gameDecorator = (Story: ComponentType) => {
  const store = mockStore({});
  return (
    <Provider store={store}>
      <GameProvider gameCode="zooparade">
        <Story />
      </GameProvider>
    </Provider>
  );
};
