import React from 'react';
import { GAMES_LIST } from 'games';
import { GameCard } from './Game/GameCard';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';

export class GamesList extends React.Component<{}, {}> {
  public render() {
    const gamesList = GAMES_LIST.map((game) => (
      <Link href={`/play/[gameCode]`} as={`/play/${game.code}`} key={game.code}>
        <a style={{ textDecoration: 'none', flex: 1, minWidth: '300px', maxWidth: '380px', margin: '8px' }}>
          <GameCard game={game} isLink={true} />
        </a>
      </Link>
    ));
    return (
      <div style={{ marginBottom: '16px' }}>
        <Typography component="h2" variant="h6" style={{ marginBottom: '16px', marginLeft: '6px' }}>
          Games
        </Typography>
        <div style={{ margin: '0 4px', display: 'flex', flexWrap: 'wrap' }}>{gamesList}</div>
      </div>
    );
  }
}
