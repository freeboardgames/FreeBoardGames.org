/* eslint-disable react/react-in-jsx-scope */

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
import { ApolloClient } from 'apollo-client';
import { split, InMemoryCache } from 'apollo-boost';
import { getMainDefinition } from 'apollo-utilities';
import { createHttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { ApolloProvider } from '@apollo/react-hooks';
import AddressHelper from 'infra/common/helpers/AddressHelper';

const httpLink = createHttpLink({
  uri: AddressHelper.getGraphQLServerAddress(),
});

// SSR makes this error
const wsLink = process.browser
  ? new WebSocketLink({
      uri: AddressHelper.getWSServerAddress(),
      options: {
        reconnect: true,
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
    if (!(window as any).GA_INITIALIZED) {
      const GA_TRACKING_CODE = process.env.GA_TRACKING_CODE;
      ReactGA.initialize(GA_TRACKING_CODE);
      (window as any).GA_INITIALIZED = true;
      if (process.env.SENTRY_DSN) {
        const version = process.env.VERSION;
        const channel = process.env.CHANNEL;
        let release;
        if (version && channel) release = `${version}-${channel}`;
        Sentry.init({ dsn: process.env.SENTRY_DSN, release });
      }
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
      <ThemeProvider theme={theme}>
        <SelfXSSWarning />
        <UaContext.Provider value={isMobile}>
          <ApolloProvider client={client}>
            <Component {...pageProps} />
          </ApolloProvider>
        </UaContext.Provider>
      </ThemeProvider>
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

export default wrapper.withRedux(withError(ErrorPage)(defaultApp));
