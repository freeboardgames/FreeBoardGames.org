import { LoadingMessage } from 'infra/common/components/alert/LoadingMessage';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import React from 'react';

const GameMatch = dynamic(() => import('infra/game/Match'), {
  ssr: false,
  loading: LoadingMessage,
});

const Match: NextPage = () => {
  return <GameMatch />;
};

Match.getInitialProps = async ({ query }) => {
  const matchId = query.matchId as string;
  return {
    matchId,
    namespacesRequired: [],
  };
};

export default Match;
