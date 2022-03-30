import hoistNonReactStatics from 'hoist-non-react-statics';
import React, { PropsWithChildren } from 'react';
import { useCurrentGameTranslation } from '../hooks';
import { WithCurrentGameTranslation as TWithCurrentGameTranslation } from '../types';

export const withCurrentGameTranslation = <
  P extends {},
  C extends React.ComponentType<P & TWithCurrentGameTranslation>,
>(
  Component: C,
  componentName?: string,
) => {
  type Props = JSX.LibraryManagedAttributes<C, PropsWithChildren<P & TWithCurrentGameTranslation>>;

  const WithNamespace: React.ComponentType<Props> = (props) => {
    const { translate } = useCurrentGameTranslation();
    return <Component {...props} translate={translate} />;
  };

  WithNamespace.displayName = `withCurrentGameTranslation(${componentName ?? Component.displayName ?? Component.name})`;

  return hoistNonReactStatics(WithNamespace, Component) as unknown as C;
};
