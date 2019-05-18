import React from 'react';
import { Switch, Route } from 'react-router-dom';
import GameInfo from './Game/GameInfoAsync';
import Game from './Game/GameAsync';
import Home from '../Home/HomeAsync';
import About from '../About/AboutAsync';
import getMessagePage from './MessagePage';
import ReactGA from 'react-ga';
import { getPageMetadata } from '../metadata';
import { registerLang, setCurrentLocale, Text } from 'react-easy-i18n';
import translations from './translations';

ReactGA.initialize('UA-105391878-1');

const withGA = (WrapperComponent: any) => {
  class Wrapper extends React.Component<{}, {}> {
    render() {
      if (typeof window !== 'undefined') {
        ReactGA.set({ page: window.location.pathname });
        ReactGA.pageview(window.location.pathname);
      }
      return <WrapperComponent {...this.props} />;
    }
  }
  return Wrapper;
};
const withI18n = (WrapperComponent: any) => {
  class Wrapper extends React.Component<{}, {}> {
    render() {
      registerLang('en', translations.en);
      setCurrentLocale('en');
      return <WrapperComponent {...this.props} />;
    }
  }
  return Wrapper;
};

const withWrappers = (WrapperComponent: any) => {
  return withI18n(withGA(WrapperComponent));
};

class Main extends React.Component<{}, {}> {
  render() {
    if (typeof document !== 'undefined' &&
      typeof window !== 'undefined') {
      document.title = getPageMetadata(window.location.pathname).title;
    }
    return (
      <Switch>
        <Route exact={true} path="/" component={withWrappers(Home)} />
        <Route exact={true} path="/about" component={withWrappers(About)} />
        <Route path="/g/:gameCode" exact={true} component={withWrappers(GameInfo)} />
        <Route path="/g/:gameCode/:mode" exact={true} component={withWrappers(Game)} />
        <Route path="/g/:gameCode/:mode/:aiLevel" exact={true} component={withWrappers(Game)} />
        <Route path="/g/:gameCode/:mode/:matchCode/:playerID" exact={true} component={withWrappers(Game)} />
        <Route component={withWrappers(getMessagePage('error', 'Not Found'))} />
      </Switch>
    );
  }
}

export default Main;
