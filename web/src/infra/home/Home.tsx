import FreeBoardGamesBar from 'infra/common/components/base/FreeBoardGamesBar';
import { GamesList } from 'infra/common/components/game/GamesList';
import SEO from 'infra/common/helpers/SEO';
import { getAllGames, getGameCodeNamespace } from 'infra/game';
import Header from 'infra/home/Header';
import { Link, withTranslation, WithTranslation } from 'infra/i18n';
import LobbyCarousel from 'infra/lobby/LobbyCarousel';
import { about } from 'infra/navigation';
import React from 'react';

interface HomeInternalInnerProps extends Pick<WithTranslation, 't'> {}

interface HomeInternalOutterProps {}

export class HomeInternal extends React.Component<HomeInternalInnerProps & HomeInternalOutterProps, {}> {
  render() {
    const { t } = this.props;

    return (
      <FreeBoardGamesBar FEATURE_FLAG_readyForDesktopView>
        <SEO title={t('title')} description={t('description')} />
        <Header />
        <LobbyCarousel />
        <GamesList />
        {this.maybeRenderGamesInDevelopment()}
        <p style={{ fontSize: '14px', textAlign: 'center' }}>
          <Link href={() => about()}>
            <a>{t('about')}</a>
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
      namespacesRequired: [
        'Home',
        'Header',
        'LobbyCarousel',
        'GamesList',
        'GameCard',
        'SearchBox',
        ...getAllGames().map((g) => getGameCodeNamespace(g.code)),
      ],
    };
  }
}

export const Home = withTranslation('Home')(HomeInternal);
