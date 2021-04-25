import { useRouter } from '../hooks';
import React from 'react';
import { NextComponentType, NextPageContext } from 'next';
import { ExcludeRouterProps, WithRouterProps } from 'next/dist/client/with-router';

export function withRouter<P extends WithRouterProps, C = NextPageContext>(
  ComposedComponent: NextComponentType<C, any, P>,
): React.ComponentType<ExcludeRouterProps<P>> {
  // https://github.com/vercel/next.js/blob/canary/packages/next/client/with-router.tsx
  function WithRouterWrapper(props: any): JSX.Element {
    return <ComposedComponent router={useRouter()} {...props} />;
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps;
  // This is needed to allow checking for custom getInitialProps in _app
  (WithRouterWrapper as any).origGetInitialProps = (ComposedComponent as any).origGetInitialProps;
  if (process.env.NODE_ENV !== 'production') {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}
