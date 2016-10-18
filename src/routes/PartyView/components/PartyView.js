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


export const PartyView = ({}) => {
  let playCheckers = () => {
    browserHistory.push('/games/checker');
  };
  return (<TurnatoBar>
    <br />
    <Card>
    <CardHeader
      title="Mermões"
      subtitle="4 members - 0 games"
    />
    <CardText>
      Members: felizardow, rafaelplonghi, vitorpfr, curvorj
    </CardText>

    <CardActions style={{textAlign: "right"}}>
      <FlatButton label="Share" />
      <RaisedButton label="Copy Link" secondary={true}  />
    </CardActions>
    </Card>
    <List>
      <Subheader>Recent games</Subheader>
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
      <ListItem
        primaryText="Checkers"
        secondaryText="0/2 players"
        leftCheckbox={<Checkbox />}
        rightIcon={<PlacesCasino />}
        style={{WebkitAppearance: 'inherit'}}
        onClick={playCheckers}
      />
      <ListItem
        primaryText="Chess"
        secondaryText="0/2 players"
        rightIcon={<PlacesCasino />}
        leftCheckbox={<Checkbox />}
        style={{WebkitAppearance: 'inherit'}}
        onClick={playCheckers}
      />
    </List>
    </TurnatoBar>)
}

export default PartyView
