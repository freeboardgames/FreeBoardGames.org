import React from 'react';
import TurnatoBar from '../../../TurnatoBar/TurnatoBar';
import {List} from 'material-ui/List';
import MatchesSection from '../../Home/components/MatchesSection.js';
import { browserHistory } from 'react-router';
import PropTypes from 'prop-types';
import PartyCard from './PartyCard.js';
import LoadingScreen from './LoadingScreen.js';
import DownForSection from './DownForSection.js';
import ReactGA from 'react-ga';


class PartyView extends React.Component {
  componentDidMount() {
    this.props.joinParty(this.props.token, this.props.params.id);
  }
  componentWillUnmount() {
    this.props.leaveParty(this.props.token, this.props.params.id);
  }
  down(game) {
    return () => {
      if (game.loading)
        return;
      ReactGA.event({
        category: 'PartyView',
        action: 'down',
        label: game.code,
      });
      this.props.down(this.props.info.code, game.code);
    };
  }
  viewMatch(match) {
    return () => {
      browserHistory.push('/g/' + match.game_code + '/' + match._id);
    };
  }
  render() {
    if (this.props.info.loading) {
      return (<LoadingScreen />);
    }
    return (<TurnatoBar disconnected={this.props.disconnected}>
      <br />
      <PartyCard party={this.props.info}/>
      <List>
        <MatchesSection
          matches={this.props.matches}
          viewMatch={this.viewMatch}
          disconnected={this.props.disconnected} />
        <DownForSection
          games={this.props.games}
          downMapping={this.props.downMapping}
          currentUserId={this.props.info.users[this.props.info.currentUser]}
          down={this.down.bind(this)}
          />
      </List>
      </TurnatoBar>);
  }
}
PartyView.propTypes = {
  joinParty: PropTypes.func.isRequired,
  leaveParty: PropTypes.func.isRequired,
  disconnected: PropTypes.bool.isRequired,
  down: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
  info: PropTypes.object.isRequired,
  matches: PropTypes.array.isRequired,
  games: PropTypes.array.isRequired,
  downMapping: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired
};

export default PartyView;
