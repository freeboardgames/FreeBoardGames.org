import React, { Component } from 'react';
import { browserHistory, Router } from 'react-router';
import { Provider } from 'react-redux';
import ReactGA from 'react-ga';
import PropTypes from 'prop-types';
ReactGA.initialize('UA-105391878-1');

class AppContainer extends Component {
  shouldComponentUpdate () {
    return false;
  }

  render () {
    const { routes, store } = this.props;
    navigator.serviceWorker.register('/sw.js');
    function fireTracking() {
      ReactGA.set({ page: window.location.pathname });
      ReactGA.pageview(window.location.pathname);
    }

    return (
      <Provider store={store}>
        <div style={{ height: '100%' }}>
          <Router history={browserHistory} children={routes}
                  onUpdate={fireTracking}/>
        </div>
      </Provider>
    );
  }
}

AppContainer.propTypes = {
  routes: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

export default AppContainer;
