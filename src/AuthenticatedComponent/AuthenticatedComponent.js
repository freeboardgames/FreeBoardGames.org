import React from 'react';
import {connect} from 'react-redux';
import { browserHistory } from 'react-router';
import ReactGA from 'react-ga';
import PropTypes from 'prop-types';

export function requireAuthentication(Component) {

  class AuthenticatedComponent extends React.Component {

    componentWillMount() {
      this.checkAuth();
    }

    componentWillReceiveProps() {
      this.checkAuth();
    }

    checkAuth() {
      if (!this.props.auth.isAuthenticated) {
        ReactGA.event({
          category: 'AuthenticatedComponent',
          action: 'redirect',
        });
        let redirectAfterLogin = this.props.location.pathname;
        browserHistory.push('/login?next=' + redirectAfterLogin);
      }
    }

    render() {
      if (this.props.auth.isAuthenticated) {
        return (<Component {...this.props}/>);
      } else {
        return null;
      }
    }
  }
  AuthenticatedComponent.propTypes = {
    location: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
  };

  const mapStateToProps = (state) => ({
    auth: state.auth,
  });

  return connect(mapStateToProps)(AuthenticatedComponent);

}
