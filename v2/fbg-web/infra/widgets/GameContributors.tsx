import React from 'react';
import Typography from '@mui/material/Typography';
import { useTranslation } from "next-i18next";
import {
  GameDetails,
} from "infra/games/GameDetailsParser";

interface GameContributorsProps {
  details: GameDetails;
}

export function GameContributors({ details }: GameContributorsProps) {
  const { t } = useTranslation('GameContributors');

  const contributors = details.contributors.map((username) => (
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

