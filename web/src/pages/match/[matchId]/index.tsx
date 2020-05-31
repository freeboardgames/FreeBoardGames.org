import React from 'react';
import dynamic from 'next/dynamic';
import getMessagePage from 'infra/common/components/alert/MessagePage';

const LoadingPage = getMessagePage('loading', 'Loading...');

export default dynamic(import('../../../infra/game/Match'), {
  ssr: false,
  loading: () => <LoadingPage />,
});
