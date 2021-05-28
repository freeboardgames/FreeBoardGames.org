import Enzyme from 'enzyme';
import { merge } from 'lodash';
import React, { ReactElement } from 'react';
import { createProvider, ProvidersOptions } from './providers';

export function makeMount(globalOptions?: ProvidersOptions) {
  return (element: ReactElement, options?: ProvidersOptions) => {
    const Provider = createProvider(merge({}, options, globalOptions));
    return Enzyme.mount(<Provider>{element}</Provider>);
  };
}
