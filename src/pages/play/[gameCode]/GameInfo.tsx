import React from 'react';
import FreeBoardGamesBar from 'components/App/FBGBar';
import { GameCard } from 'components/App/Game/GameCard';
import { GameModePicker } from 'components/App/Game/GameModePicker';
import { GameInstructionsVideo } from 'components/App/Game/GameInstructionsVideo';
import { IGameDef, GAMES_MAP } from 'games';
import { withRouter } from 'next/router';
import { generatePageError } from 'next-with-error';
import SEO from 'components/SEO';
import { DesktopView, MobileView } from 'components/DesktopMobileView';
import { Typography } from '@material-ui/core';
import ReactMarkdown from 'react-markdown';
import { GameInstructionsText } from 'components/App/Game/GameInstructionsText';
import Breadcrumbs from 'components/Breadcrumbs';

interface gameInfoProps {
  gameDef: IGameDef;
  asPath: string;
  userAgent?: string;
}

const DESKTOP_MOBILE_THRESHOLD = 768;

class GameInfo extends React.Component<gameInfoProps, {}> {
  render() {
    const gameDef = this.props.gameDef;
    return (
      <FreeBoardGamesBar FEATURE_FLAG_readyForDesktopView>
        <SEO title={`Play ${gameDef.name}, ${gameDef.description}`} description={gameDef.descriptionTag} />
        <Breadcrumbs
          itemListElements={[
            {
              position: 1,
              name: 'Play',
              item: '/play',
            },
            {
              position: 2,
              name: gameDef.name,
              item: this.props.asPath,
            },
          ]}
        />
        <DesktopView userAgent={this.props.userAgent} thresholdWidth={DESKTOP_MOBILE_THRESHOLD}>
          <div style={{ padding: '18px 8px', display: 'flex' }}>
            <div style={{ flex: '60%', paddingRight: '32px' }}>
              <Typography variant="h4" component="h1">
                Play {gameDef.name}
              </Typography>
              <GameModePicker gameDef={gameDef} />
            </div>
            <div style={{ flex: '55%', padding: '8px' }}>
              <GameCard game={gameDef} />
              <div style={{ marginTop: '16px' }}>
                <Typography variant="body1" component="p">
                  <ReactMarkdown linkTarget="_blank" source={gameDef.instructions.text} />
                </Typography>
              </div>
              <div style={{ marginTop: '32px' }}>
                <GameInstructionsVideo gameDef={gameDef} />
              </div>
            </div>
          </div>
        </DesktopView>
        <MobileView userAgent={this.props.userAgent} thresholdWidth={DESKTOP_MOBILE_THRESHOLD}>
          <GameCard game={gameDef} />
          <div style={{ padding: '8px' }}>
            <GameModePicker gameDef={gameDef} />
            <GameInstructionsVideo gameDef={gameDef} />
            <GameInstructionsText gameDef={gameDef} />
          </div>
        </MobileView>
      </FreeBoardGamesBar>
    );
  }
  static async getInitialProps({ res, query, asPath }) {
    const gameCode = query.gameCode as string;
    const gameDef: IGameDef = GAMES_MAP[gameCode];
    if (!gameDef && res) {
      return generatePageError(404);
    }
    return { gameDef, asPath };
  }
}

export default withRouter(GameInfo as any);
