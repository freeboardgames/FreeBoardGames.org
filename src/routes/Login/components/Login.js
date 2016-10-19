import React from 'react'
import TurnatoBar from '../../../TurnatoBar/TurnatoBar'
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

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
    //Check valid/invalid email and password, then call props function
    window.alert("Email: "+this.state.email+" password: "+this.state.password);
  },
  render: function () {
    return (
  <TurnatoBar>
  <CardHeader style={{paddingBottom: '0px'}}
    title={(this.props.needsPassword) ?
      "We need your password." :
      "What is your e-mail?"}
    subtitle={(this.props.needsPassword) ?
      "It seems that you have been here before." :
      "So we can let you know when it is your turn!"}
  />

  <CardText style={{textAlign: "center"}}>
    <TextField
      id="email"
      hintText="Your e-mail address"
      floatingLabelText="E-mail"
      onChange={this.onEmailChange}
      errorText={this.state.emailError}
      value={this.state.email}
    /><br />
    {(this.props.needsPassword) ?
    (<div><TextField
      hintText="Your password"
      floatingLabelText="Password"
      onChange={this.onPasswordChange}
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
  </TurnatoBar>
)
}
})
Login.defaultProps = {
  needsPassword: false
};
export default Login
