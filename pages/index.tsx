import React from 'react';
import FreeBoardGamesBar from 'components/App/FreeBoardGamesBar';
import {Header, Footer} from 'components/Header';
import { GamesList } from 'components/App/GamesList';
import SEO from 'components/SEO';

class Home extends React.Component<{}, {}> {
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
        <GamesList />
        <Footer />
      </FreeBoardGamesBar>
    );
  }
}

export default Home;
