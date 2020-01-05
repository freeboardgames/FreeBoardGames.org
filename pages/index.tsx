import React from 'react';
import FreeBoardGamesBar from '../components/App/FreeBoardGamesBar';
import Header from '../components/Header';
import { GamesList } from '../components/App/GamesList';
import SEO from '../components/SEO';
import Link from 'next/link';

class Home extends React.Component<{}, {}> {
  render() {
    return (
      <FreeBoardGamesBar>
        <SEO
          title={'Play board games in your browser for free'}
          description={
            'FreeBoardGame.org is a free (as in freedom), mobile-first, board game platform.  Compete against your friends online or play locally.'
          }
        />
        <Header />
        <GamesList />
        <p style={{ fontSize: '12px', textAlign: 'center' }}>
          <Link href="/about">
            <a>About</a>
          </Link>
        </p>
      </FreeBoardGamesBar>
    );
  }
}

export default Home;
