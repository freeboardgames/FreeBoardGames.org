import React from 'react';
import { Switch, Route } from 'react-router-dom';
import GameInfo from './Game/GameInfoAsync';
import Game from './Game/GameAsync';
import Home from '../Home/HomeAsync';
import About from '../About/AboutAsync';
import getMessagePage from './MessagePage';
import ReactGA from 'react-ga';
import { getPageMetadata } from '../metadata';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { useTranslation } from 'react-i18next';

ReactGA.initialize('UA-105391878-1');

const withGA = (WrapperComponent: any) => {
  class GAWrapper extends React.Component<{}, {}> {
    render() {
      if (typeof window !== 'undefined') {
        ReactGA.set({ page: window.location.pathname });
        ReactGA.pageview(window.location.pathname);
      }
      return <WrapperComponent {...this.props} />;
    }
  }
  return GAWrapper;
};

const withI18n = (WrapperComponent: any) => {
  class Wrapper extends React.Component<{}, {}> {
    render() {
      const { t, i18n } = useTranslation();
      return <WrapperComponent {...t} />;
    }
  }
  return Wrapper;
};

class Main extends React.Component<{}, {}> {
  render() {
    if (typeof document !== 'undefined' &&
      typeof window !== 'undefined') {
      document.title = getPageMetadata(window.location.pathname).title;
    }
    return (
      <Switch>
        <Route exact={true} path="/" component={withI18n(withGA(Home))} />
        <Route exact={true} path="/about" component={withGA(About)} />
        <Route path="/g/:gameCode" exact={true} component={withGA(GameInfo)} />
        <Route path="/g/:gameCode/:mode" exact={true} component={withGA(Game)} />
        <Route path="/g/:gameCode/:mode/:aiLevel" exact={true} component={withGA(Game)} />
        <Route path="/g/:gameCode/:mode/:matchCode/:playerID" exact={true} component={withGA(Game)} />
        <Route component={withGA(getMessagePage('error', 'Not Found'))} />
      </Switch>
    );
  }
}

export default Main;
