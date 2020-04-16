import React from 'react';
import FreeBoardGamesBar from 'components/App/FBGBar';
import Header from 'components/Header';
import { GamesList } from 'components/App/GamesList';
import SEO from 'components/SEO';
import Link from 'next/link';

class Home extends React.Component<{}, {}> {
  render() {
    return (
      <FreeBoardGamesBar FEATURE_FLAG_readyForDesktopView>
        <SEO
          title={'Play Free Board Games Online'}
          description={
            'Play board games in your browser for free.  Compete against your online friends or play locally.  Free and open-source software project.'
          }
        />
        <Header />
        <GamesList />
        <p style={{ fontSize: '14px', textAlign: 'center' }}>
          <Link href="/about">
            <a>About</a>
          </Link>
        </p>
      </FreeBoardGamesBar>
    );
  }
}

export default Home;
