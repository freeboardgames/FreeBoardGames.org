import * as React from 'react';
import PlacesCasino from 'material-ui/svg-icons/places/casino';
import NavigationChevronRight from 'material-ui/svg-icons/navigation/chevron-right';
import Subheader from 'material-ui/Subheader';
import { GAMES_LIST } from '../games';
import { GameCard } from '../App/Game/GameCard';

export class GamesList extends React.Component<{}, {}> {
  public render() {
    // GAMES
    const gamesList = GAMES_LIST.map((game) => (
      <a href={'/g/' + game.code} key={game.code}>
        <GameCard game={game} />
      </a>
    ));
    return (
      <div>
        <Subheader>Games</Subheader>
        {gamesList}
      </div>
    );
  }
}
