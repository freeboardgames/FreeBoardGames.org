import React from 'react';
import PlacesCasino from '@material-ui/icons/Casino';
import NavigationChevronRight from '@material-ui/icons/ChevronRight';
import { GAMES_LIST } from '../games';
import { GameCard } from '../App/Game/GameCard';
import Typography from '@material-ui/core/Typography';

export class GamesList extends React.Component<{}, {}> {
  public render() {
    // GAMES
    const gamesList = GAMES_LIST.map((game) => (
      <a href={'/g/' + game.code} key={game.code} style={{ textDecoration: 'none' }}>
        <GameCard game={game} />
      </a>
    ));
    return (
      <div style={{ marginTop: '16px' }}>
        <Typography variant="title" style={{ marginBottom: '16px' }}>
          Games
        </Typography>
        {gamesList}
      </div>
    );
  }
}
