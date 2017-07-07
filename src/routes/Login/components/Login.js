import React from 'react'
import TurnatoBar from '../../../TurnatoBar/TurnatoBar'
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import { browserHistory } from 'react-router'

var Login =  React.createClass({
  componentWillMount: function() {
    this.setState({
      emailError: this.props.emailError,
      passwordError: this.props.passwordError,
      email: this.props.email,
      password: this.props.password
    });
  },
  componentWillReceiveProps: function(nextProps) {
    if (nextProps.token) {
      localStorage.setItem('token', nextProps.token);
      if ('location' in this.props &&
          'query' in this.props.location &&
          'next' in this.props.location.query) {
        browserHistory.push(this.props.location.query.next);
      } else {
        browserHistory.push('/');
      }
    }
    this.setState({
      emailError: nextProps.emailError,
      passwordError: nextProps.passwordError,
      email: nextProps.email,
      password: nextProps.password
    });
  },
  onEmailChange: function(event) {
    this.setState({...this.state,
      email: event.target.value});
  },
  onPasswordChange: function(event) {
    this.setState({...this.state,
      password: event.target.value});
  },
  doLogin: function () {
    this.props.login(this.state.email, this.state.password);
  },
  onKeyPress: function (e) {
    if (e.key === 'Enter') {
      this.doLogin()
    }
  },
  render: function () {
    return (
  <TurnatoBar disconnected={this.props.disconnected}>
  <CardHeader style={{paddingBottom: '0px'}}
    title={(this.props.needsPassword) ?
      "We need your password." :
      "What is your e-mail?"}
    subtitle={(this.props.needsPassword) ?
      "It seems that you have been here before." :
      "So we can let you know when it is your turn!"}
  />
  {(!this.props.loading) ? (
  <div>
    <CardText style={{textAlign: "center"}}>
      <TextField
        id="email"
        hintText="Your e-mail address"
        floatingLabelText="E-mail"
        onChange={this.onEmailChange}
        errorText={this.state.emailError}
        onKeyPress={this.onKeyPress}
        value={this.state.email}
      /><br />
      {(this.props.needsPassword) ?
      (<div><TextField
        type="password"
        hintText="Your password"
        floatingLabelText="Password"
        onChange={this.onPasswordChange}
        onKeyPress={this.onKeyPress}
        errorText={this.state.passwordError}
      /><br /></div>) : null}
    </CardText>
    <CardActions style={{textAlign: "right"}}>
      {(this.props.needsPassword) ?
        (<FlatButton label="I forgot my password"
          onClick= {this.props.forgotPassword}/>) :
        null}
      <RaisedButton label="Play" secondary={true}
        onClick={this.doLogin} />
    </CardActions>
  </div>
  ) : (
    <CardText style={{textAlign: "center"}}>
      <CircularProgress size={80} thickness={5} />
    </CardText>)}
  </TurnatoBar>
)
}
})
Login.defaultProps = {
  disconnected: false,
  needsPassword: true,
  loading: false,
  emailError: null,
  passwordError: null,
  token: null,
  login: null
};
export default Login
