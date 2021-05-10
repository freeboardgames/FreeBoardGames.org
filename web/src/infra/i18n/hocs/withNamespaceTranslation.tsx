import React from 'react';
import { useWithNamespace } from '../hooks';
import { WithNamespace as TWithNamespace } from '../types';
import hoistNonReactStatics from 'hoist-non-react-statics';

export const withNamespaceTranslation = <P extends {}>(
  Component: React.ComponentType<P & TWithNamespace>,
  componentName = Component.displayName ?? Component.name,
): { (props: P): JSX.Element; displayName: string } & hoistNonReactStatics.NonReactStatics<
  React.ComponentType<P>,
  {}
> => {
  const WithNamespace = (props: P) => {
    const withNamespace = useWithNamespace();
    return <Component {...props} withNamespace={withNamespace} />;
  };

  WithNamespace.displayName = `withNamespaceTranslation(${componentName})`;

  return hoistNonReactStatics(WithNamespace, Component);
};
