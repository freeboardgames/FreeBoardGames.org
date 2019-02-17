import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { GameInfo } from './Game/GameInfo';
import { Game } from './Game/Game';
import Home from '../Home/Home';
import About from '../About/About';
import NotFound from './NotFound';
import ReactGA from 'react-ga';
import { getPageMetadata } from '../metadata';

ReactGA.initialize('UA-105391878-1');
if (typeof window !== 'undefined' &&
  typeof navigator !== 'undefined' &&
  navigator.serviceWorker) {
  navigator.serviceWorker.register('/sw.js').then((registration) => {
    registration.update();
  });
}

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

class Main extends React.Component<{}, {}> {
  render() {
    if (typeof document !== 'undefined' &&
      typeof window !== 'undefined') {
      document.title = getPageMetadata(window.location.pathname).title;
    }
    return (
      <Switch>
        <Route exact={true} path="/" component={withGA(Home)} />
        <Route exact={true} path="/about" component={withGA(About)} />
        <Route path="/g/:gameCode" exact={true} component={withGA(GameInfo)} />
        <Route path="/g/:gameCode/:mode" exact={true} component={withGA(Game)} />
        <Route path="/g/:gameCode/:mode/:matchCode/:playerID" exact={true} component={withGA(Game)} />
        <Route component={withGA(NotFound)} />
      </Switch>
    );
  }
}

export default Main;
