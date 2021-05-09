import hoistNonReactStatics from 'hoist-non-react-statics';
import { getGamesNamespace } from 'infra/game';
import { useCurrentGame } from 'infra/game/GameProvider';
import React from 'react';
import { useTranslation } from '../hooks';
import { WithCurrentGameTranslation as TWithCurrentGameTranslation } from '../types';

export const withCurrentGameTranslation = <P extends {}>(
  Component: React.ComponentType<P & TWithCurrentGameTranslation>,
  componentName = Component.displayName ?? Component.name,
): { (props: P): JSX.Element; displayName: string } & hoistNonReactStatics.NonReactStatics<
  React.ComponentType<P>,
  {}
> => {
  const WithNamespace = (props: P) => {
    const { game } = useCurrentGame();
    const namespace = game?.code;
    const { t } = useTranslation(getGamesNamespace(namespace));
    return <Component {...props} translate={t} />;
  };

  WithNamespace.displayName = `withCurrentGameTranslation(${componentName})`;

  return hoistNonReactStatics(WithNamespace, Component);
};
