import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import ChessMenu from '../games/Chess';
import Home from '../Home/Home';
import NotFound from './NotFound';

class Main extends React.Component<{}, {}> {
  render() {
    return (
      <Switch>
        <Route exact={true} path="/" component={Home}/>
        <Route path="/g/Chess"  exact={true} component={ChessMenu}/>
        <Route path="/g/Chess/:opponentType/:code" component={ChessMenu}/>
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default Main;
