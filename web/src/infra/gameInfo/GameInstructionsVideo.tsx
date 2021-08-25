import React from 'react';
import Card from '@material-ui/core/Card';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import { useTranslation } from 'infra/i18n';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

interface IGameInstructionsProps {
  videoId: string;
}

export const GameInstructionsVideo = (props: IGameInstructionsProps) => {
  const { t } = useTranslation('GameInfo');
  return (
    <Card data-testid={'gameinstructionsvideo'}>
      <LiteYouTubeEmbed
        id={props.videoId}
        announce={t('watch')}
        title={t('video_instructions')}
        adNetwork={false}
        noCookie={true}
      />
    </Card>
  );
};
