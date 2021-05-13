import hoistNonReactStatics from 'hoist-non-react-statics';
import React from 'react';
import { useWithGameNamespace } from '../hooks';
import { WithNamespace as TWithNamespace } from '../types';

export const withNamespaceTranslation = <P extends {}>(
  Component: React.ComponentType<P & TWithNamespace>,
  componentName = null,
): { (props: P): JSX.Element; displayName: string } & hoistNonReactStatics.NonReactStatics<
  React.ComponentType<P>,
  {}
> => {
  const WithNamespace = (props: P) => {
    const withGameNamespace = useWithGameNamespace();
    return <Component {...props} withGameNamespace={withGameNamespace} />;
  };
  const finalComponentName = componentName ?? Component.displayName ?? Component.name;
  WithNamespace.displayName = `withNamespaceTranslation(${finalComponentName})`;

  return (hoistNonReactStatics(WithNamespace, Component) as unknown) as C;
};
