import { GameMode } from 'gamesShared/definitions/mode';
import { LoadingMessage } from 'infra/common/components/alert/LoadingMessage';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React from 'react';
import SEO from '../common/helpers/SEO';

const GameWrapper = dynamic(import('./Game'), {
  ssr: false,
  loading: LoadingMessage,
});

export default function LocalGame() {
  const router = useRouter();
  const gameCode = router.query.gameCode as string;
  const aiLevel = router.query.aiLevel as string;
  return (
    <React.Fragment>
      <SEO noindex={true} />
      <GameWrapper mode={GameMode.AI} gameCode={gameCode} aiLevel={aiLevel} />
    </React.Fragment>
  );
}
