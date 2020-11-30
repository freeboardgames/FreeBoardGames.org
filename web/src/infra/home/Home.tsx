import React from 'react';
import FreeBoardGamesBar from 'infra/common/components/base/FreeBoardGamesBar';
import {Header, Footer} from 'infra/home/Header';
import { GamesList } from 'infra/common/components/game/GamesList';
import SEO from 'infra/common/helpers/SEO';
import Link from 'next/link';
import LobbyCarousel from 'infra/lobby/LobbyCarousel';

export class Home extends React.Component<{}, {}> {
  render() {
    return (
      <FreeBoardGamesBar FEATURE_FLAG_readyForDesktopView>
        <SEO
          title={'Sahajanand Games'}
          description={
            'Play Satsang related games in your browser and mobile for free. Use it in your Bal-Madal, Kishor-Mandal, etc or compete against your online friends or play locally with your family. We hope you get Sahajanand while playing this game. Jai Swaminarayan.'
          }
        />
        <Header />
        <LobbyCarousel />
        <GamesList />
        <Footer />
        {this.maybeRenderGamesInDevelopment()}
        <p style={{ fontSize: '14px', textAlign: 'center' }}>
          <Link href="/about">
            <a>About</a>
          </Link>
        </p>
      </FreeBoardGamesBar>
    );
  }

  maybeRenderGamesInDevelopment() {
    const isProdChannel = process.env.NODE_ENV === 'production';
    if (isProdChannel) {
      return;
    }
    return <GamesList showDevOnly={true} />;
  }
}
