import React from 'react';
import { useRouter } from 'next/router';
import { GameMode } from '../../../../../components/App/Game/GameModePicker';
import dynamic from 'next/dynamic';

const GameWrapper = dynamic(import('../../../../../components/App/Game/Game'), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});

export default function LocalGame() {
  const router = useRouter();
  const gameCode = router.query.gameCode as string;
  const aiLevel = router.query.aiLevel as string;
  return <GameWrapper mode={GameMode.AI} gameCode={gameCode} aiLevel={aiLevel} />;
}
