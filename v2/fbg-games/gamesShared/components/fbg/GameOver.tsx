import React from 'react';
import { IGameArgs } from 'fbg-games/gamesShared/definitions/game';
import { FreeBoardGamesBar } from './FreeBoardGamesBar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ReplayIcon from '@mui/icons-material/Replay';
import { useTranslation } from "next-i18next";
import { GameMode } from "fbg-games/gamesShared/definitions/mode";
import { useRouter, NextRouter } from 'next/router';

export interface GameOverProps {
  result: string;
  gameArgs: IGameArgs;
  extraCardContent?: React.ReactNode;
}

export interface ExtraCardContentProps {
  extraCardContent?: React.ReactNode;
}

function ExtraCardContent(props: ExtraCardContentProps) {
  if (!props.extraCardContent) {
    return null;
  }
  const otherPlayerCard = (
    <div style={{ paddingBottom: '12px', maxWidth: '500px', margin: 'auto' }}>{props.extraCardContent}</div>
  );
  return otherPlayerCard;
};

const playAgainHandle = (router: NextRouter, args: IGameArgs) => () => {
  if (args.mode === GameMode.AI || args.mode === GameMode.LocalFriend) {
    router.push(window.location.pathname);
  } else {
    alert('TODO before launch');
  }
};

export function GameOver(props: GameOverProps) {
  const router = useRouter();
  const { t } = useTranslation("GameOver");
  const extraCardContent = (<ExtraCardContent extraCardContent={props.extraCardContent} />);
  const playAgain = (
    <div style={{ textAlign: 'center' }}>
      <Button
        onClick={playAgainHandle(router, props.gameArgs)}
        variant="outlined"
        style={{ marginRight: 'auto', marginLeft: 'auto', marginBottom: '24px' }}
      >
        <ReplayIcon style={{ marginRight: '8px' }} />
        {t('play_again')}
      </Button>
    </div>
  );
  return (
    <FreeBoardGamesBar lang={props.gameArgs.lang}>
      <Typography
        variant="h6"
        gutterBottom={true}
        align="center"
        style={{ marginTop: '16px' }}
        data-testid={'gameOverText'}
      >
        {t('game_over', { result: props.result })}
      </Typography>
      {playAgain}
      {extraCardContent}
    </FreeBoardGamesBar>
  );
}
  