import React from 'react';
import FreeBoardGamesBar from 'infra/common/components/base/FreeBoardGamesBar';
import Header from 'infra/home/Header';
import { GamesList } from 'infra/common/components/game/GamesList';
import SEO from 'infra/common/helpers/SEO';
import Link from 'next/link';

export class Home extends React.Component<{}, {}> {
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