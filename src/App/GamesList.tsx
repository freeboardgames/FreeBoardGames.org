import React from 'react';
import PlacesCasino from '@material-ui/icons/Casino';
import NavigationChevronRight from '@material-ui/icons/ChevronRight';
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
        <h2>Games</h2>
        {gamesList}
      </div>
    );
  }
}
