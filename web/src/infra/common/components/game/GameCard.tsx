import { Tooltip, Box } from '@mui/material';
import { IGameDef } from 'gamesShared/definitions/game';
import { makeTranslationStatusComparator } from 'gamesShared/helpers/translationStatus';
import { WithNamespace, withNamespaceTranslation, WithTranslation, withTranslation } from 'infra/i18n';
import React from 'react';
import { compose } from 'recompose';
import { Description, Heading, NavigateButton, Title, Warning } from './GameCard.ui';

interface IGameCardInnerProps extends Pick<WithTranslation, 't' | 'i18n'>, WithNamespace {}

interface IGameCardOutterProps {
  game: IGameDef;
  isLink?: boolean;
}

export function GameCardInternal({
  i18n,
  t,
  game,
  withGameNamespace,
  isLink,
}: IGameCardInnerProps & IGameCardOutterProps) {
  const translate = withGameNamespace(game.code);
  const gameName = translate('name', game.name);
  const isFullyTranslated = makeTranslationStatusComparator(i18n.language);

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'block',
        height: '250px',
        width: '100%',
        backgroundImage: game?.imageURL ? `url(${game.imageURL})` : 'none',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        color: 'black',
        borderRadius: '8px',
        overflow: 'hidden',
        ...(isLink && {
          boxShadow: '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)',
        }),
      }}
      data-testid={`gamecard-${game?.code}`}
    >
      <Heading>
        <Title>{isLink ? `${t('play')} ${gameName}` : gameName}</Title>

        {!isFullyTranslated(game) && (
          <Tooltip title={t('missing_translation_warning')} placement="top">
            <span
              role="button"
              tabIndex={0}
              aria-label="translation docs"
              style={{ cursor: 'pointer' }}
              onClick={(e) => {
                e.stopPropagation();
                window.open('/docs/?path=/story/documentation-how-to-translation-game-translation--page', '_blank');
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.stopPropagation();
                  e.preventDefault();
                  window.open('/docs/?path=/story/documentation-how-to-translation-game-translation--page', '_blank');
                }
              }}
            >
              <Warning />
            </span>
          </Tooltip>
        )}
      </Heading>

      <Description>
        <>{translate('description', game.description)}</>
      </Description>

      {isLink && <NavigateButton />}
    </Box>
  );
}

const enhance = compose<IGameCardInnerProps, IGameCardOutterProps>(
  withTranslation('GameCard'),
  withNamespaceTranslation,
);

export const GameCard = enhance(GameCardInternal);
