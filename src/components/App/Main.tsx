import * as React from "react";
import { Switch, Route } from 'react-router-dom'
import Chess from '../games/Chess'
import Home from '../Home'

class Main extends React.Component<{}, {}> {
  render() {
    return <div>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/g/Chess' component={Chess}/>
          </Switch>
        </div>;
  }
}

export default Main;
