import hoistNonReactStatics from 'hoist-non-react-statics';
import { getGameCodeNamespace } from 'infra/game';
import { useCurrentGame } from 'infra/game/GameProvider';
import React, { PropsWithChildren } from 'react';
import { useTranslation } from '../hooks';
import { WithCurrentGameTranslation as TWithCurrentGameTranslation } from '../types';

export const withCurrentGameTranslation = <
  P extends {},
  C extends React.ComponentType<P & TWithCurrentGameTranslation>
>(
  Component: C,
  componentName = Component.displayName ?? Component.name,
) => {
  type Props = JSX.LibraryManagedAttributes<C, PropsWithChildren<P & TWithCurrentGameTranslation>>;

  const WithNamespace: React.ComponentType<Props> = (props) => {
    const { game } = useCurrentGame();
    const namespace = game?.code;
    const { t } = useTranslation(getGameCodeNamespace(namespace));
    return <Component {...props} translate={t} />;
  };

  WithNamespace.displayName = `withCurrentGameTranslation(${componentName})`;

  return (hoistNonReactStatics(WithNamespace, Component) as unknown) as C;
};
