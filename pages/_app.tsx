/* eslint-disable react/react-in-jsx-scope */

import App from 'next/app';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../src/theme';
import { SelfXSSWarning } from '../components/App/SelfXSSWarning';
import withError from 'next-with-error';
import ErrorPage from './_error';

class defaultApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
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
