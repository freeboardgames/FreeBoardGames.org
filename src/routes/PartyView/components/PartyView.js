import React from 'react'
import TurnatoBar from '../../../TurnatoBar/TurnatoBar'
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import {List, ListItem} from 'material-ui/List';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import { Link } from 'react-router'
import Subheader from 'material-ui/Subheader';
import ActionGroupWork from 'material-ui/svg-icons/action/group-work';
import NavigationChevronRight from 'material-ui/svg-icons/navigation/chevron-right';
import ImageRemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import PlacesCasino from 'material-ui/svg-icons/places/casino';
import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';
import { browserHistory } from 'react-router'


export const PartyView = React.createClass({
  componentDidMount: function () {
    this.props.connectToParty(this.props.token, this.props.params.id)
  },
  down: function (game) {
    return () => {
      if (game.loading)
        return
      this.props.down(this.props.info.code, game.code)
    }
  },
  render: function () {
    let joinMatch = (match) => () => {
      browserHistory.push('/g/' + match.game_code + '/' + match._id);
    };

    if (this.props.info.loading) {
      return (
        <TurnatoBar>
          <Card>
            <CardText style={{textAlign: "center"}}>
              <CircularProgress size={80} thickness={5} />
            </CardText>
          </Card>
        </TurnatoBar>);
    }
    // PARTY
    let partyName = this.props.info.name;
    let partyMemberCount = this.props.info.users.length;
    let partyMemberList = this.props.info.users.join(', ');

    //MATCHES
    let matchesList = [];
    this.props.matches.map((match) => {
      let players = match.players.join(', ');
      let active = match.players.indexOf(this.props.currentUser) > -1 &&
        match.status != 'Finished';

      matchesList.push((<ListItem
        key={match._id}
        primaryText={players}
        secondaryText={match.game_name + " - " + match.status}
        rightIcon={(active) ? <NavigationChevronRight /> :
                              <ImageRemoveRedEye />}
        style={{WebkitAppearance: 'inherit'}}
        onClick={joinMatch(match)}
      />))
    });

    // GAMES
    let gamesList = [];
    this.props.games.map((game) => {
      let downList = null;
      if (this.props.downMapping)
        downList = this.props.downMapping[game.code];
      let downCount = 0;
      let isChecked = false;
      if (downList) {
        downCount = downList.length;
        isChecked = downList.indexOf(this.props.currentUser) > -1;
      }

      gamesList.push((<ListItem
        key={game.code}
        primaryText={game.name}
        secondaryText={downCount+"/"+game.maxPlayers+" players"}
        rightIcon={<PlacesCasino />}
        leftCheckbox={(game.loading) ?
          <CircularProgress size={30} thickness={5} />
          : <Checkbox checked={isChecked}/>}
        style={{WebkitAppearance: 'inherit'}}
        onClick={this.down(game)}
      />));
    })
    return (<TurnatoBar>
      <br />
      <Card>
        <CardHeader
          title={partyName}
          subtitle={partyMemberCount+" members"}
        />
        <CardText>
          Members: {partyMemberList}
        </CardText>

        <CardActions style={{textAlign: "right"}}>
          <RaisedButton label="Invite Friends" secondary={true}  />
        </CardActions>
      </Card>
      <List>
        <Subheader>Recent matches</Subheader>
        {matchesList}

        <Subheader>Im down for</Subheader>
        {gamesList}

      </List>
      </TurnatoBar>)
    }
  })

PartyView.defaultProps = {
  connectToParty: () => {},
  down: () => {},
  token: '',
  currentUser: '',
  info: {loading: true},
  matches: [],
  games: [],
  downMapping: {},
  params: {}
};

export default PartyView
