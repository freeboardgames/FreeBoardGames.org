import * as React from 'react';
import PlacesCasino from 'material-ui/svg-icons/places/casino';
import NavigationChevronRight from 'material-ui/svg-icons/navigation/chevron-right';
import Subheader from 'material-ui/Subheader';
import { GAMES_LIST } from '../games';
import { GameCard } from '../App/Game/GameCard';
import { Link } from 'react-router-dom';

class GamesSection extends React.Component<any, any> {
  public render() {
    // GAMES
    const gamesList = GAMES_LIST.map((game) => (
      <Link to={'/g/' + game.code} key={game.code}>
        <GameCard game={game} />
      </Link>
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
