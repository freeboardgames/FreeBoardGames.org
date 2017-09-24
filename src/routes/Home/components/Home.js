import React from 'react';
import TurnatoBar from '../../../TurnatoBar/TurnatoBar';
import {List} from 'material-ui/List';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';
import GamesSection from './GamesSection.js';
import PartiesSection from './PartiesSection.js';
import MatchesSection from './MatchesSection.js';
import Header from './Header.js';
import Footer from './Footer.js';


class Home extends React.Component {
  componentDidMount() {
    this.props.requestHome(this.props.token);
  }
  render() {
    return (<TurnatoBar>
      <Header></Header>
      <List>
        <MatchesSection
          matches={this.props.matches}
          viewMatch={this.viewMatch}
          disconnected={this.props.disconnected}
        >
        </MatchesSection>
        <GamesSection
          games={this.props.games}
          viewGame={this.viewGame}></GamesSection>
        <PartiesSection
          parties={this.props.parties}
          viewParty={this.viewParty}
          newParty={this.newParty}
          disconnected={this.props.disconnected}></PartiesSection>

      </List>
      <br/><br/>
      <Footer />
      <br/><br/>
      </TurnatoBar>);
  }
  viewMatch (match) {
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
  matches: PropTypes.array.isRequired,
  games: PropTypes.array.isRequired,
  token: PropTypes.string,
  requestHome: PropTypes.func.isRequired
};
export default Home;
