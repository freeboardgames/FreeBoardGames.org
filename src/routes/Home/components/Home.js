import React from 'react';
import TurnatoBar from '../../../TurnatoBar/TurnatoBar';
import RaisedButton from 'material-ui/RaisedButton';
import {List, ListItem} from 'material-ui/List';
import {Card, CardMedia, CardTitle} from 'material-ui/Card';
import Subheader from 'material-ui/Subheader';
import SocialGroup from 'material-ui/svg-icons/social/group';
import SignalWifiOff from 'material-ui/svg-icons/device/signal-wifi-off';
import PropTypes from 'prop-types';
import NavigationChevronRight from 'material-ui/svg-icons/navigation/chevron-right';
import { browserHistory } from 'react-router';
import GamesSection from './GamesSection.js';
import introwebp from '../../../resources/intro.webp';


class Home extends React.Component {
  componentDidMount() {
    this.props.requestHome(this.props.token);
  }
  render() {
    // MATCHES
    let matchesList = [];
    this.props.matches.map((match) => {
      matchesList.push((<ListItem
        key={match._id}
        primaryText={match.playersNickname.join(', ')}
        secondaryText={match.game_name + ' - ' + match.status}
        rightIcon={<NavigationChevronRight />}
        style={{WebkitAppearance: 'inherit'}}
        onClick={this.joinMatch(match)}
      />));
    });
    // Parties
    let partiesList = [];
    if (!this.props.disconnected) {
      if (this.props.parties.length > 0) {
        this.props.parties.map((party) => {
          partiesList.push((<ListItem
            leftIcon={<SocialGroup />}
            primaryText={party.name}
            rightIcon={<NavigationChevronRight />}
            style={{WebkitAppearance: 'inherit'}}
            onClick={this.viewParty(party._id)}
            key={party._id}
          />));
        });
      } else {
        partiesList.push(
          (<p key="0" style={{fontSize: '14px', paddingLeft: '16px',
            paddingRight: '16px'}}>You do not belong to any party yet.<br />
            <br />
          <a
            onClick={this.newParty}
            href="#">Create one</a> and invite your friends!</p>));
      }
    } else {
      partiesList.push(
        (<SignalWifiOff />)
      );
    }
    return (<TurnatoBar>
      <Card>
        <CardMedia
          overlay={<CardTitle title="Play when you can, where you are."
          subtitle="Free, open-source board games on your phone." />}
        >
        <img src={introwebp} alt="People playing board game." />
      </CardMedia>
      </Card>
      <List>
        {(matchesList.length > 0) ? (
          <Subheader>Active Matches</Subheader>) : null}
        {matchesList}
        <GamesSection
          games={this.props.games}
          viewGame={this.viewGame}></GamesSection>
        <Subheader>Parties</Subheader>
        {partiesList}
        <RaisedButton label="+ party" secondary={true}
        onClick={this.newParty}
        style={{float: 'right', marginTop: '8px', marginRight: '16px'}}/>

      </List>
      <br/><br/>
      <p style={{fontSize: '12px', textAlign: 'center'}}>
        Made with ♥&nbsp;-&nbsp;
        <a href="https://github.com/Felizardo/turnato" target="_blank"
          rel="noopener">GitHub</a>
        &nbsp;-&nbsp;
        <a href="#" onClick={this.joinMatch(
                                  {game_code: 'colonizers', _id: 'a'})
                            }>
          TEMP LINK TO COLONIZERS
        </a>
      </p>
      <br/><br/>
      </TurnatoBar>);
  }
  joinMatch (match) {
    return () => {
      browserHistory.push('/g/' + match.game_code + '/' + match._id);
    };
  }
  viewGame (game) {
    return () => {
      browserHistory.push('/g/' + game.code);
    };
  }
  viewParty (id) {
    return () => {
      browserHistory.push('/p/'+id);
    };
  }
  newParty () {
    browserHistory.push('/newParty');
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
