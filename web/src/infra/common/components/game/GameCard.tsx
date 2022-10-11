import { makeStyles, Tooltip } from '@material-ui/core';
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

const useStyles = makeStyles({
  Main: (props: { isLink: boolean }) => ({
    position: 'relative',
    height: '250px',
    width: '100%',
    backgroundPosition: 'left center',
    backgroundSize: 'cover',
    color: 'black',
    ...(props.isLink && {
      boxShadow: '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)',
      borderRadius: '8px',
    }),
  }),
});

export function GameCardInternal({
  i18n,
  t,
  game,
  withGameNamespace,
  isLink,
}: IGameCardInnerProps & IGameCardOutterProps) {
  const styles = useStyles({ isLink });
  const translate = withGameNamespace(game.code);
  const gameName = translate('name', game.name);
  const isFullyTranslated = makeTranslationStatusComparator(i18n.language);

  return (
    <div
      className={styles.Main}
      style={{ backgroundImage: `url(${game.imageURL})` }}
      data-testid={`gamecard-${game.code}`}
    >
      <Heading>
        <Title>{isLink ? t('play', { name: gameName }) : gameName}</Title>

        {!isFullyTranslated(game) && (
          <Tooltip title={t('missing_translation_warning')} placement="top">
            <a
              href="/docs/?path=/story/documentation-how-to-translation-game-translation--page"
              aria-label="translation docs"
              target="_blank"
              onClick={(e) => e.stopPropagation()}
            >
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
