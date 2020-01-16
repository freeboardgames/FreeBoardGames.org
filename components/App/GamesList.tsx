import React from 'react';
import { GAMES_LIST } from 'games';
import { GameCard } from './Game/GameCard';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';

export class GamesList extends React.Component<{}, {}> {
  public render() {
    const gamesList = GAMES_LIST.map(game => (
      <Link href={`/play/[gameCode]`} as={`/play/${game.code}`} key={game.code}>
        <a style={{ textDecoration: 'none' }}>
          <GameCard game={game} isLink={true} />
        </a>
      </Link>
    ));
    return (
      <div style={{ marginBottom: '16px' }}>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>
          Games
        </Typography>
        <div style={{ margin: '0 4px' }}>
          <style jsx>{`
            .cards {
              max-width: 1200px;
              margin: 0 auto;
              display: grid;
              grid-gap: 1.25rem;
            }
            @media (min-width: 600px) {
              .cards {
                grid-template-columns: repeat(2, 1fr);
              }
            }
            @media (min-width: 900px) {
              .cards {
                grid-template-columns: repeat(3, 1fr);
              }
            }
          `}</style>
          <div className="cards">{gamesList}</div>
        </div>
      </div>
    );
  }
}
