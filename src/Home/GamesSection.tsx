import * as React from 'react';
import { ListItem } from 'material-ui/List';
import PlacesCasino from 'material-ui/svg-icons/places/casino';
import NavigationChevronRight from 'material-ui/svg-icons/navigation/chevron-right';
import Subheader from 'material-ui/Subheader';
import { Link } from 'react-router-dom';
import Games from '../games/games';

class GamesSection extends React.Component<any, any> {
  public render() {
    // GAMES
    const gamesList = Games.list.map((game) => (
      <ListItem
        key={game.code}
        primaryText={game.name}
        containerElement={<Link to={game.link} />}
        leftIcon={<PlacesCasino />}
        rightIcon={<NavigationChevronRight />}
        style={{ WebkitAppearance: 'inherit' }}
      />
    ));
    return (
      <div>
        <Subheader>Games</Subheader>
        {gamesList}
      </div>
    );
  }
}

export default GamesSection;
