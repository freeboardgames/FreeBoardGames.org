import React from 'react'
import TurnatoBar from '../../../TurnatoBar/TurnatoBar'
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import {List, ListItem} from 'material-ui/List';
import {Card, CardMedia, CardTitle} from 'material-ui/Card';
import Subheader from 'material-ui/Subheader';
import SocialGroup from 'material-ui/svg-icons/social/group';
import NavigationChevronRight from 'material-ui/svg-icons/navigation/chevron-right';
import { browserHistory } from 'react-router'


var Home =  React.createClass({
  componentDidMount: function () {
    if (this.props.token) {
      this.props.requestParties(this.props.token)
    }
  },
  render: function () {
    let viewParty = (id) => () => {
      browserHistory.push('/p/'+id);
    };
    let newParty = () => {
      browserHistory.push('/newParty');
    };
    let login = () => {
      browserHistory.push('/login');
    };
    let partiesList = [];
    if (this.props.parties.length > 0) {
      this.props.parties.map((party) => {
        partiesList.push((<ListItem
          leftIcon={<SocialGroup />}
          primaryText={party.name}
          rightIcon={<NavigationChevronRight />}
          style={{WebkitAppearance: 'inherit'}}
          onClick={viewParty(party.id)}
          key={party.id}
        />));
      });
    } else {
      partiesList.push(
        (<p key="0" style={{paddingLeft: "16px",
        paddingRight: "16px"}}>You do not belong to any party yet.<br /><br />
        <a
          onClick={newParty}
          href="#">Create one</a> and invite your friends!</p>));
    }
    return (<TurnatoBar disconnected={this.props.disconnected}>
      <Card>
        <CardMedia
          overlay={<CardTitle title="Fun with friends."
          subtitle="Play your turn whenever you can, wherever you are." />}
        >
        <img src="intro.jpg" />
      </CardMedia>
      </Card>
      { (this.props.partiesLoading) ? (
        <div style={{textAlign: "center"}}>
          <br/>
          <CircularProgress size={80} thickness={5} />
        </div>
      ) :
      (
      <List>
        <Subheader>Parties</Subheader>
        {partiesList}
      </List>)}
      <br/><br/>
      <RaisedButton label="Create party" secondary={true}
      onClick={newParty}
      style={{position: "fixed", bottom: "0px",
       width: "100%", maxWidth: "500px"}}/>
      </TurnatoBar>)
  }});

  Home.defaultProps = {
    disconnected: false,
    parties: [],
    partiesLoading: false,
    token: null,
    requestParties: null
  };
export default Home
