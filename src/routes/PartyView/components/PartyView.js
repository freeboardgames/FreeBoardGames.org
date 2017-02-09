import React from 'react'
import TurnatoBar from '../../../TurnatoBar/TurnatoBar'
import RaisedButton from 'material-ui/RaisedButton';
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
  render: function () {
    let playCheckers = () => {
      browserHistory.push('/games/checker');
    };
    // PARTY
    let partyName = this.props.party.name;
    let partyMemberCount = this.props.party.members.length;
    let partyMemberList = this.props.party.members.join(', ');

    //MATCHES: TODO

    // GAMES
    let gamesList = [];
    this.props.games.map((game) => {
      let downList = this.props.downMapping[game.code];
      let downCount = downList.length;
      let isChecked = downList.indexOf(this.props.currentUser) > -1;
      gamesList.push((<ListItem
        key={game.code}
        primaryText={game.name}
        secondaryText={downCount+"/"+game.maxPlayers+" players"}
        rightIcon={<PlacesCasino />}
        leftCheckbox={<Checkbox checked={isChecked}/>}
        style={{WebkitAppearance: 'inherit'}}
        onClick={playCheckers}
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
        <ListItem
          primaryText="felizardow, vitorpfr"
          secondaryText="Checkers - Finished"
          rightIcon={<NavigationChevronRight />}
          style={{WebkitAppearance: 'inherit'}}
          onClick={playCheckers}
        />
        <ListItem
          primaryText="rafaelplonghi, curvorj"
          secondaryText="Checkers - Going on"
          rightIcon={<ImageRemoveRedEye />}
          style={{WebkitAppearance: 'inherit'}}
          onClick={playCheckers}
        />

        <Subheader>Im down for</Subheader>
        {gamesList}

      </List>
      </TurnatoBar>)
    }
  })

PartyView.defaultProps = {
  loading: false,
  currentUser: "felizardow",
  party: {code: 'UEHueoajeokaw', name: "Mermões",
  members: ["felizardow", "rafaelplonghi", "vitorpfr", "curvorj"]},
  matches:    [{game_code: 'checkers', game: "Checkers", status: "Going on",
                  players: ["felizardow, vitorpfr"]},
                 {game_code: 'chess', game: "Chess", status: "Finished",
                  players: ["rafaelplonghi, curvorj"]}
                ],
  games: [{code: 'chess', name: 'Checkers', maxPlayers: 2},
                   {code: 'checkers', name: 'Chess', maxPlayers: 2}],
  downMapping: {'chess': ['vitorpfr'], 'checkers': ['felizardow']}
};

export default PartyView
