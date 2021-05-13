import hoistNonReactStatics from 'hoist-non-react-statics';
import React, { PropsWithChildren } from 'react';
import { useWithGameNamespace } from '../hooks';
import { WithNamespace as TWithNamespace } from '../types';

export const withNamespaceTranslation = <P extends {}, C extends React.ComponentType<P & TWithNamespace>>(
  Component: C,
  componentName = Component.displayName ?? Component.name,
) => {
  type Props = JSX.LibraryManagedAttributes<C, PropsWithChildren<P & TWithNamespace>>;

  const WithNamespace: React.ComponentType<Props> = (props) => {
    const withGameNamespace = useWithGameNamespace();
    return <Component {...props} withGameNamespace={withGameNamespace} />;
  };

  WithNamespace.displayName = `withNamespaceTranslation(${componentName})`;

  return (hoistNonReactStatics(WithNamespace, Component) as unknown) as C;
};
