import React from 'react';
import FreeBoardGamesBar from 'infra/common/components/base/FreeBoardGamesBar';
import { GameCard } from 'infra/common/components/game/GameCard';
import { GameModePicker } from 'infra/gameInfo/GameModePicker';
import { GameInstructionsVideo } from 'infra/gameInfo/GameInstructionsVideo';
import { GAMES_MAP } from 'games';
import { generatePageError } from 'next-with-error';
import SEO from 'infra/common/helpers/SEO';
import { DesktopView, MobileView } from 'infra/common/device/DesktopMobileView';
import { Typography } from '@material-ui/core';
import ReactMarkdown from 'react-markdown';
import { GameInstructionsText } from 'infra/gameInfo/GameInstructionsText';
import Breadcrumbs from 'infra/common/helpers/Breadcrumbs';
import { GameContributors } from './GameContributors';
import { translateHref, WithNamedT, withNamedT, withTranslation, WithTranslation } from 'infra/i18n';
import { compose } from 'recompose';

interface GameInfoInnerProps extends Pick<WithTranslation, 't' | 'i18n'>, WithNamedT {}

interface GameInfoOutterProps {
  gameCode: string;
  asPath: string;
  userAgent?: string;
}

const DESKTOP_MOBILE_THRESHOLD = 768;

class GameInfo extends React.Component<GameInfoInnerProps & GameInfoOutterProps, {}> {
  render() {
    const { gameCode, t, translate, i18n } = this.props;
    const gameDef = GAMES_MAP[gameCode];
    const { name, instructions, description, descriptionTag } = gameDef;

    const videoInstructions = translate('instructions.videoId', instructions.videoId);
    const gameVideoInstructions = videoInstructions ? <GameInstructionsVideo videoId={videoInstructions} /> : null;

    const textInstructions = translate('instructions.text', instructions.text);
    const gameTextInstructions = textInstructions ? <GameInstructionsText text={textInstructions} /> : null;

    return (
      <FreeBoardGamesBar FEATURE_FLAG_readyForDesktopView>
        <SEO
          title={`${t('play', name, { name: translate('name', name) })}, ${translate('description', description)}`}
          description={translate('descriptionTag', descriptionTag)}
        />
        <Breadcrumbs
          itemListElements={[
            {
              position: 1,
              name: t('breadcrumb'),
              item: translateHref({ href: '/play', language: i18n.language }),
            },
            {
              position: 2,
              name: translate('name', name),
              item: this.props.asPath,
            },
          ]}
        />
        <DesktopView thresholdWidth={DESKTOP_MOBILE_THRESHOLD}>
          <div style={{ padding: '18px 8px', display: 'flex' }} data-testid={'TabletViewDiv'}>
            <div style={{ flex: '60%', paddingRight: '32px' }}>
              <Typography variant="h4" component="h1">
                {t('play', name, { name: translate('name', name) })}
              </Typography>
              <GameContributors game={gameDef} />
              <GameModePicker gameDef={gameDef} />
            </div>
            <div style={{ flex: '55%', padding: '8px' }}>
              <GameCard game={gameDef} />
              <div style={{ marginTop: '16px' }}>
                <Typography variant="body1" component="p">
                  <ReactMarkdown linkTarget="_blank" source={textInstructions} />
                </Typography>
              </div>
              <div style={{ marginTop: '32px' }}>{gameVideoInstructions}</div>
            </div>
          </div>
        </DesktopView>
        <MobileView thresholdWidth={DESKTOP_MOBILE_THRESHOLD}>
          <GameCard game={gameDef} />
          <div style={{ padding: '8px' }} data-testid={'MobileViewDiv'}>
            <Typography variant="h5" component="h1">
              {t('play', name, { name: translate('name', name) })}
            </Typography>
            <GameContributors game={gameDef} />
            <GameModePicker gameDef={gameDef} />
            {gameVideoInstructions}
            {gameTextInstructions}
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
    return {
      gameCode,
      namespacesRequired: ['common', 'GameInfo', 'GameModePicker', gameCode],
    };
  }
}

const enhance = compose(
  withTranslation('GameInfo'),
  withNamedT<GameInfoOutterProps>(({ gameCode }) => gameCode),
);

export default enhance(GameInfo);
