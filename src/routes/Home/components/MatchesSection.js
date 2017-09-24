import React from 'react';
import PropTypes from 'prop-types';
import {ListItem} from 'material-ui/List';
import NavigationChevronRight from 'material-ui/svg-icons/navigation/chevron-right';
import Subheader from 'material-ui/Subheader';

class MatchesSection extends React.Component {
  render () {
    // MATCHES
    let matchesList = [];
    for (let i in this.props.matches) {
      let match = this.props.matches[i];
      matchesList.push((<ListItem
        key={match._id}
        primaryText={match.playersNickname.join(', ')}
        secondaryText={match.game_name + ' - ' + match.status}
        rightIcon={<NavigationChevronRight />}
        style={{WebkitAppearance: 'inherit'}}
        onClick={this.props.viewMatch(match)}
      />));
    }
    if (matchesList.length == 0 || this.props.disconnected) {
      return null;
    }
    return (
      <div>
        <Subheader>Active Matches</Subheader>
        {matchesList}
      </div>
    );
  }
}


MatchesSection.propTypes = {
  matches: PropTypes.array.isRequired,
  disconnected: PropTypes.bool.isRequired,
  viewMatch: PropTypes.func.isRequired
};

export default MatchesSection;
