import React from 'react';
import FreeBoardGamesBar from 'infra/common/components/base/FreeBoardGamesBar';
import { GameCard } from 'infra/common/components/game/GameCard';
import { GameModePicker } from 'infra/gameInfo/GameModePicker';
import { GameInstructionsVideo } from 'infra/gameInfo/GameInstructionsVideo';
import { GAMES_MAP } from 'games';
import { withRouter } from 'next/router';
import { generatePageError } from 'next-with-error';
import SEO from 'infra/common/helpers/SEO';
import { DesktopView, MobileView } from 'infra/common/device/DesktopMobileView';
import { Typography } from '@material-ui/core';
import ReactMarkdown from 'react-markdown';
import { GameInstructionsText } from 'infra/gameInfo/GameInstructionsText';
import Breadcrumbs from 'infra/common/helpers/Breadcrumbs';
import { GameContributors } from './GameContributors';

interface gameInfoProps {
  gameCode: string;
  asPath: string;
  userAgent?: string;
}

const DESKTOP_MOBILE_THRESHOLD = 768;

class GameInfo extends React.Component<gameInfoProps, {}> {
  render() {
    const gameDef = GAMES_MAP[this.props.gameCode];
    const videoInstructions = gameDef.instructions.videoId ? (
      <GameInstructionsVideo videoId={gameDef.instructions.videoId} />
    ) : null;
    const textInstructions = gameDef.instructions.text ? (
      <GameInstructionsText text={gameDef.instructions.text} />
    ) : null;
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
        <DesktopView thresholdWidth={DESKTOP_MOBILE_THRESHOLD}>
          <div style={{ padding: '18px 8px', display: 'flex' }} data-testid={'TabletViewDiv'}>
            <div style={{ flex: '60%', paddingRight: '32px' }}>
              <Typography variant="h4" component="h1">
                Play {gameDef.name}
              </Typography>
              <GameContributors game={gameDef} />
              <GameModePicker gameDef={gameDef} />
            </div>
            <div style={{ flex: '55%', padding: '8px' }}>
              <GameCard game={gameDef} />
              <div style={{ marginTop: '16px' }}>
                <Typography variant="body1" component="p">
                  <ReactMarkdown linkTarget="_blank" source={gameDef.instructions.text} />
                </Typography>
              </div>
              <div style={{ marginTop: '32px' }}>{videoInstructions}</div>
            </div>
          </div>
        </DesktopView>
        <MobileView thresholdWidth={DESKTOP_MOBILE_THRESHOLD}>
          <GameCard game={gameDef} />
          <div style={{ padding: '8px' }} data-testid={'MobileViewDiv'}>
            <Typography variant="h5" component="h1">
              Play {gameDef.name}
            </Typography>
            <GameContributors game={gameDef} />
            <GameModePicker gameDef={gameDef} />
            {videoInstructions}
            {textInstructions}
          </div>
        </MobileView>
      </FreeBoardGamesBar>
    );
  }

  static async getInitialProps(ctx) {
    const gameCode = ctx.query.gameCode as string;
    if (!GAMES_MAP[gameCode] && ctx.res) {
      return generatePageError(404);
    }
    return { gameCode };
  }
}

export default withRouter(GameInfo as any);
