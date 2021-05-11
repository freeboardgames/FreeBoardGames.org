import { Tooltip } from '@material-ui/core';
import { IGameDef, IGameTranslationStatus } from 'gamesShared/definitions/game';
import { makeTranslationStatusComparator } from 'gamesShared/helpers/translationStatus';
import { WithNamespace, withNamespaceTranslation, WithTranslation, withTranslation } from 'infra/i18n';
import React from 'react';
import { compose } from 'recompose';
import styles from './GameCard.module.css';
import { Warning, Description, Heading, NavigateButton, Title } from './GameCard.ui';

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
    <div
      className={`${styles['Main']} ${isLink && styles['Main--link']}`}
      style={{ backgroundImage: `url(${game.imageURL})` }}
      data-testid={`gamecard-${game.code}`}
    >
      <Heading>
        <Title>{isLink ? t('play', { name: gameName }) : gameName}</Title>

        {!isFullyTranslated(game) && (
          <Tooltip title={t('missing_translation_warning')} placement="top">
            <a href="/docs" aria-label="Translation docs" target="_blank" onClick={(e) => e.stopPropagation()}>
              <Warning />
            </a>
          </Tooltip>
        )}
      </Heading>

      <Description>
        <>{translate('description', game.description)}</>
      </Description>

      {isLink && <NavigateButton />}
    </div>
  );
}

const enhance = compose<IGameCardInnerProps, IGameCardOutterProps>(
  withTranslation('GameCard'),
  withNamespaceTranslation,
);

export const GameCard = enhance(GameCardInternal);
