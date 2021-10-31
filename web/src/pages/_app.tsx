/* eslint-disable react/react-in-jsx-scope */

import { ApolloClient, InMemoryCache, split } from '@apollo/client';
import { createHttpLink } from '@apollo/client/link/http';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';
import { ApolloProvider } from '@apollo/react-hooks';
import * as Sentry from '@sentry/browser';
import { ThemeProvider } from 'infra/common';
import { SelfXSSWarning } from 'infra/common/components/base/SelfXSSWarning';
import AddressHelper from 'infra/common/helpers/AddressHelper';
import { wrapper } from 'infra/common/redux/store';
import { GameProvider } from 'infra/game/GameProvider';
import { appWithTranslation } from 'infra/i18n';
import withError from 'next-with-error';
import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import { compose } from 'recompose';
import ErrorPage from './_error';

const SENTRY_DSN = 'https://5957292e58cf4d2fbb781910e7b26b1f@o397015.ingest.sentry.io/5251165';

const httpLink = createHttpLink({
  uri: AddressHelper.getGraphQLServerAddress(),
});

const isMainDomain =
  typeof window !== 'undefined' && window.location.hostname.toLowerCase() === 'www.freeboardgames.org';

// SSR makes this error
const wsLink = process.browser
  ? new WebSocketLink({
      uri: AddressHelper.getWSServerAddress(),
      options: {
        timeout: 3000,
        reconnect: true,
        lazy: true,
      },
    })
  : undefined;

const link = wsLink
  ? split(
      ({ query }) => {
        const definition = getMainDefinition(query);
        return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
      },
      wsLink,
      httpLink,
    )
  : httpLink;

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

class DefaultApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS:
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    // Initialize Google Analytics:
    if (isMainDomain) {
      const version = process.env.VERSION;
      const channel = process.env.CHANNEL;
      let release;
      if (version && channel) release = `${version}-${channel}`;
      Sentry.init({ dsn: SENTRY_DSN, release });
    }
  }

  render() {
    const { Component, pageProps } = this.props as any;
    return (
      <>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="application-name" content="FreeBoardGames.org" />
          <meta name="apple-mobile-web-app-title" content="FreeBoardGames.org" />
          <meta name="theme-color" content="#3f51b5" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
          <meta name="msapplication-TileColor" content="#ffc40d" />
          <meta name="msapplication-config" content="/static/icons/browserconfig.xml" />
        </Head>
        <ThemeProvider>
          <SelfXSSWarning />
          <ApolloProvider client={client}>
            <GameProvider {...pageProps}>
              <Component {...pageProps} />
            </GameProvider>
          </ApolloProvider>
        </ThemeProvider>
      </>
    );
  }

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }
}

const enhance = compose(wrapper.withRedux, appWithTranslation, withError(ErrorPage));

export default enhance(DefaultApp);
