/* eslint-disable react/react-in-jsx-scope */

import Head from 'next/head';
import App from 'next/app';
import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from 'infra/common/components/base/theme';
import { SelfXSSWarning } from 'infra/common/components/base/SelfXSSWarning';
import { isMobileFromReq } from 'infra/common/device/UaHelper';
import UaContext from 'infra/common/device/IsMobileContext';
import withError from 'next-with-error';
import ErrorPage from './_error';
import ReactGA from 'react-ga';
import Router from 'next/router';
import * as Sentry from '@sentry/browser';

import { wrapper } from 'infra/common/redux/store';
import { ApolloClient, split, InMemoryCache } from '@apollo/client';
import { createHttpLink } from '@apollo/client/link/http';
import { getMainDefinition } from '@apollo/client/utilities';
import { WebSocketLink } from '@apollo/client/link/ws';
import { ApolloProvider } from '@apollo/react-hooks';
import AddressHelper from 'infra/common/helpers/AddressHelper';
import { compose } from 'recompose';

const GA_TRACKING_CODE = 'UA-105391878-2';
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

class defaultApp extends App {
  logPageView(path: string) {
    ReactGA.set({ page: path });
    ReactGA.pageview(path);
  }

  componentDidMount() {
    // Remove the server-side injected CSS:
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    // Initialize Google Analytics:
    if (!(window as any).GA_INITIALIZED && isMainDomain) {
      ReactGA.initialize(GA_TRACKING_CODE);
      (window as any).GA_INITIALIZED = true;
      const version = process.env.VERSION;
      const channel = process.env.CHANNEL;
      let release;
      if (version && channel) release = `${version}-${channel}`;
      Sentry.init({ dsn: SENTRY_DSN, release });
    }
    // https://github.com/sergiodxa/next-ga/blob/32899e9635efe1491a5f47469b0bd2250e496f99/src/index.js#L32
    (Router as any).onRouteChangeComplete = (path: string) => {
      this.logPageView(path);
    };
    this.logPageView(window.location.pathname);
  }
  render() {
    const { Component, pageProps, isMobile } = this.props as any;
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
        <ThemeProvider theme={theme}>
          <SelfXSSWarning />
          <UaContext.Provider value={isMobile}>
            <ApolloProvider client={client}>
              <Component {...pageProps} />
            </ApolloProvider>
          </UaContext.Provider>
        </ThemeProvider>
      </>
    );
  }
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    const isMobile = isMobileFromReq(ctx.req);
    return { pageProps, isMobile };
  }
}

const enhance = compose(wrapper.withRedux, withError(ErrorPage));

export default enhance(defaultApp);
