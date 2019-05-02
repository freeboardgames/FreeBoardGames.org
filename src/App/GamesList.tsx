import React from 'react';
import { GAMES_LIST } from '../games';
import { GameCard } from '../App/Game/GameCard';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

export class GamesList extends React.Component<{}, {}> {
  public render() {
    // GAMES
    const gamesList = GAMES_LIST.map((game) => (
      <Link to={'/g/' + game.code} key={game.code} style={{ textDecoration: 'none' }}>
        <GameCard game={game} />
      </Link>
    ));
    return (
      <div style={{ marginTop: '8px' }}>
        <Typography variant="title" style={{ marginBottom: '16px' }}>
          Games
        </Typography>
        {gamesList}
      </div>
    );
  }
}
