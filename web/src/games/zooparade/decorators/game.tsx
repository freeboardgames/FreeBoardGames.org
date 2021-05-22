import React, { ComponentType } from 'react';
import { createProvider } from 'test/utils/providers';

const Provider = createProvider({ gameCode: 'zooparade' });

export const gameDecorator = (Story: ComponentType) => {
  return (
    <Provider>
      <Story />
    </Provider>
  );
};
