import React from 'react'
import TurnatoBar from '../../../TurnatoBar/TurnatoBar'
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import { browserHistory } from 'react-router'

var NewParty =  React.createClass({
  componentWillMount: function() {
    this.setState({
      error: this.props.error,
      name: this.props.name
    });
  },
  componentWillReceiveProps: function(nextProps) {
    if (nextProps.id) {
      browserHistory.push('/p/' + nextProps.id);
    }
    this.setState({
      error: nextProps.error,
      name: nextProps.name
    });
  },
  onNameChange: function(event) {
    this.setState({...this.state,
      name: event.target.value});
  },
  doNewParty: function () {
    this.props.newParty(this.state.name);
  },
  render: function () {
    return (
  <TurnatoBar>
  <CardHeader style={{paddingBottom: '0px'}}
    title="Give a name to your party."
    subtitle="Pick a memorable name!"
  />
  {(!this.props.loading) ? (
  <div>
    <CardText style={{textAlign: "center"}}>
      <TextField
        id="name"
        hintText="Party's name"
        floatingLabelText="Name"
        onChange={this.onNameChange}
        errorText={this.state.error}
        value={this.state.name}
      />
    </CardText>
    <CardActions style={{textAlign: "right"}}>
      <RaisedButton label="Create" secondary={true}
        onClick={this.doNewParty} />
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
NewParty.defaultProps = {
  loading: false,
  error: null,
  name: null,
  newParty: null,
  id: null
};
export default NewParty
