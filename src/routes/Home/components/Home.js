import React from 'react'
import TurnatoBar from '../../../TurnatoBar/TurnatoBar'
import RaisedButton from 'material-ui/RaisedButton';
import {List, ListItem} from 'material-ui/List';
import {Card, CardMedia, CardTitle} from 'material-ui/Card';
import { Link } from 'react-router'
import Subheader from 'material-ui/Subheader';
import SocialGroup from 'material-ui/svg-icons/social/group';
import NavigationChevronRight from 'material-ui/svg-icons/navigation/chevron-right';
import { browserHistory } from 'react-router'


export const Home = ({router}) => {
  let viewParty = (id) => () => {
    browserHistory.push('/party/'+id);
  };
  return (<TurnatoBar>
    <Card>
      <CardMedia
        overlay={<CardTitle title="Fun with friends." subtitle="Play your turn whenever you can, wherever you are." />}
      >
      <img src="intro.jpg" />
    </CardMedia>
    </Card>
    <List>
      <Subheader>Parties</Subheader>
      <ListItem
        leftIcon={<SocialGroup />}
        primaryText="Mermões"
        rightIcon={<NavigationChevronRight />}
        style={{WebkitAppearance: 'inherit'}}
        onClick={viewParty(0)}
      />
      <ListItem
        leftIcon={<SocialGroup />}
        primaryText="Felizardos"
        rightIcon={<NavigationChevronRight />}
        style={{WebkitAppearance: 'inherit'}}
        onClick={viewParty(1)}
      />
      <ListItem
        leftIcon={<SocialGroup />}
        primaryText="Calilove"
        rightIcon={<NavigationChevronRight />}
        style={{WebkitAppearance: 'inherit'}}
        onClick={viewParty(2)}
      />
    </List>
    <br/><br/>
    <RaisedButton label="Create party" secondary={true} style={{position: "fixed", bottom: "0px", width: "100%", maxWidth: "500px"}}/>
    </TurnatoBar>)
}

export default Home
