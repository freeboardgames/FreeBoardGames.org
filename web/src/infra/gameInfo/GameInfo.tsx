import React from 'react';
import FreeBoardGamesBar from 'infra/common/components/base/FreeBoardGamesBar';
import { GameCard } from 'infra/common/components/game/GameCard';
import { GameModePicker } from 'infra/gameInfo/GameModePicker';
import { GameInstructionsVideo } from 'infra/gameInfo/GameInstructionsVideo';
import { generatePageError } from 'next-with-error';
import SEO from 'infra/common/helpers/SEO';
import { DesktopView, MobileView } from 'infra/common/device/DesktopMobileView';
import { Typography } from '@material-ui/core';
import ReactMarkdown from 'react-markdown';
import { GameInstructionsText } from 'infra/gameInfo/GameInstructionsText';
import Breadcrumbs from 'infra/common/helpers/Breadcrumbs';
import { GameContributors } from './GameContributors';
import {
  nextI18Next,
  WithCurrentGameTranslation,
  withCurrentGameTranslation,
  withTranslation,
  WithTranslation,
} from 'infra/i18n';
import { compose } from 'recompose';
import { getGameDefinition } from 'infra/game';
import { NextPageContext } from 'next';
import { play } from 'infra/navigation';
import Alert from '@material-ui/lab/Alert';
import { getGameCodeNamespace } from 'infra/game/utils';
import { makeTranslationStatusComparator } from 'gamesShared/helpers/translationStatus';

const { Trans } = nextI18Next;

interface GameInfoInnerProps extends Pick<WithTranslation, 't' | 'i18n'>, WithCurrentGameTranslation {}

interface GameInfoOutterProps {
  gameCode: string;
  asPath: string;
  userAgent?: string;
}

const DESKTOP_MOBILE_THRESHOLD = 768;

class GameInfo extends React.Component<GameInfoInnerProps & GameInfoOutterProps, {}> {
  render() {
    const { gameCode, t, translate, i18n } = this.props;
    const gameDef = getGameDefinition(gameCode);
    const { name, instructions, description, descriptionTag } = gameDef;

    const videoInstructions = translate('instructions.videoId', instructions.videoId);
    const gameVideoInstructions = videoInstructions ? <GameInstructionsVideo videoId={videoInstructions} /> : null;

    const textInstructions = translate('instructions.text', instructions.text);
    const gameTextInstructions = textInstructions ? <GameInstructionsText text={textInstructions} /> : null;

    const isFullyTranslated = makeTranslationStatusComparator(i18n.language);

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
              item: play()(i18n.language),
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
                {!isFullyTranslated(gameDef) && (
                  <Alert severity="warning">
                    <Trans t={t} i18nKey="missing_translation_warning" components={{ docs: <a href="/docs" /> }} />
                  </Alert>
                )}
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

  static async getInitialProps(ctx: NextPageContext) {
    const gameCode = ctx.query.gameCode as string;
    const game = getGameDefinition(gameCode);

    if (!game && ctx.res) {
      return generatePageError(404);
    }

    return {
      gameCode,
      namespacesRequired: ['common', 'GameInfo', 'GameModePicker', getGameCodeNamespace(gameCode)],
    };
  }
}

const enhance = compose(withTranslation('GameInfo'), withCurrentGameTranslation);

export default enhance(GameInfo);
