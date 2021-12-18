import { IGameDef } from 'gamesShared/definitions/game';
import React from 'react';
import { Typography } from '@material-ui/core';
import { useTranslation } from 'infra/i18n';

interface GameContributorsProps {
  game: IGameDef;
}

export function GameContributors({ game }: GameContributorsProps) {
  const { t } = useTranslation('GameContributors');

  const contributors = game.contributors.map((username) => (
    <a
      href={`https://github.com/${username}`}
      key={username}
      style={{ marginRight: '4px' }}
      target="_blank"
      rel="noreferrer"
    >
      <Typography variant="body2" component="span" style={{ color: 'black' }}>
        {username}
      </Typography>
    </a>
  ));
  return (
    <div style={{ display: 'flex', height: '24px', maxWidth: '500px' }}>
      <div style={{ flexGrow: 1 }}></div>
      <Typography variant="body2" component="span" style={{ marginRight: '4px' }}>
        {t('by')}
      </Typography>
      <div>{contributors}</div>
    </div>
  );
}
