import React from 'react';
import dynamic from 'next/dynamic';
import getMessagePage from 'components/App/MessagePage';

const LoadingPage = getMessagePage('loading', 'Loading...');

export default dynamic(import('./Room'), {
  ssr: false,
  loading: () => <LoadingPage />,
});
