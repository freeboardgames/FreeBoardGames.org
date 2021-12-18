/* eslint-disable react/prop-types */
import * as rtl from '@testing-library/react';
import { merge } from 'lodash';
import { ReactElement } from 'react';
import { createProvider, ProvidersOptions } from './providers';

export * from '@testing-library/react';

export function render(ui: ReactElement, options?: rtl.RenderOptions & ProvidersOptions) {
  return makeRender()(ui, options);
}

export function makeRender(globalOptions?: ProvidersOptions) {
  return function render(ui: ReactElement, options?: rtl.RenderOptions & ProvidersOptions) {
    const Provider = createProvider(merge({}, options, globalOptions));
    return rtl.render(ui, { wrapper: Provider, ...options });
  };
}
