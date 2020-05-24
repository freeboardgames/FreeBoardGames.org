import React from 'react';
import dynamic from 'next/dynamic';
import getMessagePage from '../../../components/App/MessagePage';

const LoadingPage = getMessagePage('loading', 'Loading...');

export default dynamic(import('./Match'), {
  ssr: false,
  loading: () => <LoadingPage />,
});
