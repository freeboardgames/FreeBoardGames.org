import React from 'react';
import {ListItem} from 'material-ui/List';
import PlacesCasino from 'material-ui/svg-icons/places/casino';
import PropTypes from 'prop-types';
import Checkbox from 'material-ui/Checkbox';
import CircularProgress from 'material-ui/CircularProgress';
import Subheader from 'material-ui/Subheader';

class DownForSection extends React.Component {
  render () {
    // GAMES
    let gamesList = [];
    for (let i in this.props.games) {
      let game = this.props.games[i];
      let downList = null;
      if (this.props.downMapping) {
        downList = this.props.downMapping[game.code];
      }
      let downCount = 0;
      let isChecked = false;
      if (downList) {
        downCount = downList.length;
        isChecked = downList.includes(this.props.currentUserId);
      }

      gamesList.push((<ListItem
        key={game.code}
        primaryText={game.name}
        secondaryText={downCount+'/'+game.maxPlayers+' players'}
        rightIcon={<PlacesCasino />}
        leftCheckbox={(game.loading) ?
          <CircularProgress size={30} thickness={5} />
          : <Checkbox checked={isChecked}/>}
        style={{WebkitAppearance: 'inherit'}}
        onClick={this.props.down(game)}
      />));
    }
    return (
      <div>
        <Subheader>I&rsquo;m down for</Subheader>
        {gamesList}
      </div>
    );
  }
}

DownForSection.propTypes = {
  games: PropTypes.array.isRequired,
  downMapping: PropTypes.object.isRequired,
  currentUserId: PropTypes.string.isRequired,
  down: PropTypes.func.isRequired
};

export default DownForSection;
