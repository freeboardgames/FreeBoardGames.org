import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Chess from '../games/Chess';
import Home from '../Home';
import NotFound from './NotFound';

class Main extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <Switch>
          <Route exact={true} path="/" component={Home}/>
          <Route path="/g/Chess" component={Chess}/>
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default Main;
