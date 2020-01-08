/* eslint-disable react/react-in-jsx-scope */

import App from 'next/app';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../src/theme';
import { SelfXSSWarning } from '../components/App/SelfXSSWarning';
import withError from 'next-with-error';
import ErrorPage from './_error';
import ReactGA from 'react-ga';
import Router from 'next/router';

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
    }
    // https://github.com/sergiodxa/next-ga/blob/32899e9635efe1491a5f47469b0bd2250e496f99/src/index.js#L32
    (Router as any).onRouteChangeComplete = (path: string) => {
      this.logPageView(path);
    };
    this.logPageView(window.location.pathname);
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <SelfXSSWarning />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

export default withError(ErrorPage)(defaultApp);
