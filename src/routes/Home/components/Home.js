import React from 'react';
import TurnatoBar from '../../../TurnatoBar/TurnatoBar';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import {List, ListItem} from 'material-ui/List';
import {Card, CardMedia, CardTitle} from 'material-ui/Card';
import Subheader from 'material-ui/Subheader';
import SocialGroup from 'material-ui/svg-icons/social/group';
import PlacesCasino from 'material-ui/svg-icons/places/casino';
import PropTypes from 'prop-types';
import NavigationChevronRight from 'material-ui/svg-icons/navigation/chevron-right';
import { browserHistory } from 'react-router';


class Home extends React.Component {
  componentDidMount() {
    this.props.requestHome(this.props.token);
  }

  render() {
    let joinMatch = (match) => () => {
      browserHistory.push('/g/' + match.game_code + '/' + match._id);
    };
    let viewGame = (game) => () => {
      browserHistory.push('/g/' + game.code);
    };
    let viewParty = (id) => () => {
      browserHistory.push('/p/'+id);
    };
    let newParty = () => {
      browserHistory.push('/newParty');
    };
    // MATCHES
    let matchesList = [];
    this.props.matches.map((match) => {
      matchesList.push((<ListItem
        key={match._id}
        primaryText={match.playersNickname.join(', ')}
        secondaryText={match.game_name + ' - ' + match.status}
        rightIcon={<NavigationChevronRight />}
        style={{WebkitAppearance: 'inherit'}}
        onClick={joinMatch(match)}
      />));
    });

    // GAMES
    let gamesList = [];
    this.props.games.map((game) => {
      gamesList.push((<ListItem
        key={game.code}
        primaryText={game.name}
        leftIcon={<PlacesCasino />}
        rightIcon={<NavigationChevronRight />}
        onClick={viewGame(game)}
        style={{WebkitAppearance: 'inherit'}}
      />));
    });

    // Parties
    let partiesList = [];
    if (this.props.parties.length > 0) {
      this.props.parties.map((party) => {
        partiesList.push((<ListItem
          leftIcon={<SocialGroup />}
          primaryText={party.name}
          rightIcon={<NavigationChevronRight />}
          style={{WebkitAppearance: 'inherit'}}
          onClick={viewParty(party._id)}
          key={party._id}
        />));
      });
    } else {
      partiesList.push(
        (<p key="0" style={{paddingLeft: '16px',
          paddingRight: '16px'}}>You do not belong to any party yet.<br /><br />
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
      { (this.props.loading) ? (
        <div style={{textAlign: 'center'}}>
          <br/>
          <CircularProgress size={80} thickness={5} />
        </div>
      ) :
      (
      <List>

        {(matchesList.length > 0) ? (
          <Subheader>Active Matches</Subheader>) : null}
        {matchesList}
        <Subheader>Parties</Subheader>
        {partiesList}
        <RaisedButton label="+ party" secondary={true}
        onClick={newParty}
        style={{float: 'right', marginTop: '8px', marginRight: '16px'}}/>
        <br />
        <Subheader style={{marginTop: '16px'}}>Games</Subheader>
        {gamesList}
      </List>)}
      <br/><br/>
      <p style={{fontSize: '12px', textAlign: 'center'}}>
      Made with ♥&nbsp;-&nbsp;
      <a href="https://github.com/Felizardo/turnato" target="_blank">GitHub</a>
      &nbsp;-&nbsp;
       <a href="#" onClick={joinMatch({game_code: 'colonizers', _id: 'a'})}>test - REMOVE ME</a>
      </p>
      <br/><br/>
      </TurnatoBar>);
  }
}

Home.propTypes = {
  disconnected: PropTypes.bool.isRequired,
  parties: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  matches: PropTypes.array.isRequired,
  games: PropTypes.array.isRequired,
  token: PropTypes.string,
  requestHome: PropTypes.func.isRequired
};
Home.defaultProps = {
  disconnected: false,
  parties: [],
  loading: false,
  matches: [],
  games: [],
  token: null,
  requestHome: null
};
export default Home;
