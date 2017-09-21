import React from 'react';
import PropTypes from 'prop-types';
import {ListItem} from 'material-ui/List';
import PlacesCasino from 'material-ui/svg-icons/places/casino';
import NavigationChevronRight from 'material-ui/svg-icons/navigation/chevron-right';
import Subheader from 'material-ui/Subheader';

class GamesSection extends React.Component {
  render () {
    // GAMES
    let gamesList = [];
    for (let i in this.props.games) {
      let game =  this.props.games[i];
      gamesList.push((<ListItem
        key={game.code}
        primaryText={game.name}
        leftIcon={<PlacesCasino />}
        rightIcon={<NavigationChevronRight />}
        onClick={this.props.viewGame(game)}
        style={{WebkitAppearance: 'inherit'}}
      />));
    }
    return (
      <div>
        <Subheader>Games</Subheader>
        {gamesList}
      </div>
    );
  }
}

GamesSection.propTypes = {
  games: PropTypes.array.isRequired,
  viewGame: PropTypes.func.isRequired
};

export default GamesSection;
