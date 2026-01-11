import { GetServerSideProps, NextPage } from 'next';
import dynamic from 'next/dynamic';
import React from 'react';
import { getAllGames, getGameCodeNamespace } from 'infra/game';
import { LoadingMessage } from 'infra/common/components/alert/LoadingMessage';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

// Must be client-side only due to localStorage access in Match component
const GameMatch = dynamic(() => import('infra/game/Match'), {
  ssr: false,
  loading: LoadingMessage,
});

const Match: NextPage = () => {
  // Ensure we're client-side to avoid hydration errors
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <LoadingMessage />;
  }

  return <GameMatch />;
};

export const getServerSideProps: GetServerSideProps = async ({ params, locale }) => {
  const matchId = params?.matchId as string;

  // Get all game namespaces since we can't determine the game server-side
  const allGames = getAllGames();
  const gameNamespaces = allGames.map((game) => getGameCodeNamespace(game.code));

  return {
    props: {
      matchId, // Pass matchId to GameProvider via _app.tsx
      ...(await serverSideTranslations(locale!, [
        'Match',
        'Chat',
        'LoadingMessage',
        'MessagePage',
        'NicknameRequired',
        'NicknamePrompt',
        'Game',
        'ConnectionLost',
        ...gameNamespaces,
      ])),
    },
  };
};

export default Match;
