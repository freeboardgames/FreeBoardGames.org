import React from 'react';
import dynamic from 'next/dynamic';
import getMessagePage from 'infra/common/components/alert/MessagePage';
import { NextPage } from 'next';

const LoadingPage = getMessagePage('loading', 'Loading...');

const DynamicRoom = dynamic(() => import('infra/room/Room'), {
  ssr: false,
  loading: LoadingPage,
});

const Room: NextPage = () => {
  return <DynamicRoom />;
};

Room.getInitialProps = () => {
  return {
    namespacesRequired: [],
  };
};

export default Room;
