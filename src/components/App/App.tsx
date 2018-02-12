import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import ChessMenu from '../games/chess';
import Home from '../Home/Home';
import NotFound from './NotFound';
import * as ReactGA from 'react-ga';

ReactGA.initialize('UA-105391878-1');
navigator.serviceWorker.register('/sw.js').then((registration) => {
  registration.update();
});

const withGA = (WrapperComponent: any) => {
  class GAWrapper extends React.Component<{}, {}> {
    render() {
      ReactGA.set({ page: window.location.pathname });
      ReactGA.pageview(window.location.pathname);
      return <WrapperComponent {...this.props}/>;
    }
  }
  return GAWrapper;
};

class Main extends React.Component<{}, {}> {
  render() {
    return (
      <Switch>
        <Route exact={true} path="/" component={withGA(Home)}/>
        <Route path="/g/chess"  exact={true} component={withGA(ChessMenu)}/>
        <Route path="/g/chess/:opponentType/:code" exact={true} component={withGA(ChessMenu)}/>
        <Route path="/g/chess/:opponentType/:code/:playerID" exact={true} component={withGA(ChessMenu)}/>
        <Route component={withGA(NotFound)} />
      </Switch>
    );
  }
}

export default Main;
