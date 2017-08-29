import React from 'react';
import TurnatoBar from '../../../TurnatoBar/TurnatoBar';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import TextField from 'material-ui/TextField';
import {CardActions, CardHeader, CardText} from 'material-ui/Card';
import { browserHistory } from 'react-router';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';

class Login extends React.Component {
    componentWillMount() {
        this.setState({
            nickname: this.props.nickname
        });
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.token) {
            ReactGA.event({
                category: 'Login',
                action: 'success',
            });
            localStorage.setItem('token4', nextProps.token);
            if ('location' in this.props &&
          'query' in this.props.location &&
          'next' in this.props.location.query) {
                browserHistory.push(this.props.location.query.next);
            } else {
                browserHistory.push('/');
            }
        }
        if (nextProps.nickname) {
            this.setState({
                nickname: nextProps.nickname
            });
        }
    }
    onNicknameChange(event) {
        if (event.target.value.length <= 15) {
            this.setState({...this.state,
                nickname: event.target.value});
        }
    }
    doNewUser() {
        ReactGA.event({
            category: 'Login',
            action: 'do',
        });
        this.props.newUser(this.state.nickname);
    }
    onKeyPress(e) {
        if (e.key === 'Enter') {
            ReactGA.event({
                category: 'Login',
                action: 'enter',
            });
            this.doNewUser();
        }
    }
    render() {
        return (
  <TurnatoBar disconnected={this.props.disconnected}>
  <CardHeader style={{paddingBottom: '0px'}}
    title="What is your nickname?"
    subtitle="So players can know who you are!"
  />
  {(!this.props.loading) ? (
  <div>
    <CardText style={{textAlign: 'center'}}>
      <TextField
        id="nickname"
        hintText="Your nickname"
        onChange={this.onNicknameChange.bind(this)}
        floatingLabelText="Nickname"
        onKeyPress={this.onKeyPress.bind(this)}
        value={this.state.nickname}
      /><br />
    </CardText>
    <CardActions style={{textAlign: 'right'}}>
      <RaisedButton label="Play" secondary={true}
        onClick={this.doNewUser.bind(this)}
        disabled={!this.state.nickname || this.state.nickname.length == 0} />
    </CardActions>
  </div>
  ) : (
    <CardText style={{textAlign: 'center'}}>
      <CircularProgress size={80} thickness={5} />
    </CardText>)}
  </TurnatoBar>
        );
    }
}
Login.propTypes = {
    disconnected: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
    nickname: PropTypes.string.isRequired,
    token: PropTypes.string,
    newUser: PropTypes.func.isRequired,
    location: PropTypes.object,
};
Login.defaultProps = {
    disconnected: false,
    loading: false,
    nickname: '',
    token: null,
    newUser: null
};
export default Login;
