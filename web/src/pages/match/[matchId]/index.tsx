import React from 'react';
import dynamic from 'next/dynamic';
import getMessagePage from 'infra/common/components/alert/MessagePage';
import { NextPage } from 'next';

const LoadingPage = getMessagePage('loading', 'Loading...');

const GameMatch = dynamic(() => import('infra/game/Match'), {
  ssr: false,
  loading: LoadingPage,
});

const Match: NextPage = () => {
  return <GameMatch />;
};

Match.getInitialProps = () => {
  return {
    namespacesRequired: [],
  };
};

export default Match;
