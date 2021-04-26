import React from 'react';
import FreeBoardGamesBar from 'infra/common/components/base/FreeBoardGamesBar';
import Header from 'infra/home/Header';
import { GamesList } from 'infra/common/components/game/GamesList';
import SEO from 'infra/common/helpers/SEO';
import { Link } from 'infra/i18n';
import LobbyCarousel from 'infra/lobby/LobbyCarousel';

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
        <LobbyCarousel />
        <GamesList />
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

  static async getInitialProps() {
    return {
      namespacesRequired: ['LobbyCarousel'],
    };
  }
}
