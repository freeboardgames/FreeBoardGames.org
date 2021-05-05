import { getDisplayName } from 'recompose';
import { nextI18Next } from '../config';
import React from 'react';
import { useCurrentGame } from 'infra/game/GameProvider';

export const withTranslate = (propertyName: string = 'translate', options: { withRef?: boolean } = {}) => {
  return function Extend(WrappedComponent) {
    function I18nextWithTranslation({ forwardedRef, ...rest }) {
      const { game } = useCurrentGame();
      const ns = game?.code;
      const [t] = nextI18Next.useTranslation(ns, rest);

      const passDownProps = { ...rest, [propertyName]: t };

      if (options.withRef && forwardedRef) {
        passDownProps.ref = forwardedRef;
      } else if (!options.withRef && forwardedRef) {
        passDownProps.forwardedRef = forwardedRef;
      }

      return React.createElement(WrappedComponent, passDownProps);
    }

    I18nextWithTranslation.displayName = `withNamedT(${getDisplayName(WrappedComponent)})`;
    I18nextWithTranslation.WrappedComponent = WrappedComponent;
    I18nextWithTranslation.getInitialProps = WrappedComponent.getInitialProps;
    I18nextWithTranslation.propTypes = WrappedComponent.propTypes;
    I18nextWithTranslation.defaultProps = WrappedComponent.defaultProps;

    const forwardRef = (props, ref) =>
      React.createElement(I18nextWithTranslation, Object.assign({}, props, { forwardedRef: ref }));

    return options.withRef ? React.forwardRef(forwardRef) : I18nextWithTranslation;
  };
};
